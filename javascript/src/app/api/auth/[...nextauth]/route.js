import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import CognitoProvider from "next-auth/providers/cognito"
import { CognitoUser, CognitoUserPool, CognitoUserSession, AuthenticationDetails } from 'amazon-cognito-identity-js'

const UserPool = new CognitoUserPool({
    UserPoolId: process.env.AWS_COGNITO_UESRPOOL_ID,
    ClientId: process.env.AWS_COGNITO_CLIENT_ID
});

const handler = NextAuth({
    providers: [
        CognitoProvider({
            id: 'cognito',
            name: 'Cognito',
            type: 'oauth',
            idToken: true,
            clientId: process.env.AWS_COGNITO_CLIENT_ID,
            clientSecret: null,
            client: {
                token_endpoint_auth_method: "none"
            },
            checks: ['state', 'nonce'],
            issuer: process.env.AWS_COGNITO_ISSUER,
            wellKnown: `${process.env.AWS_COGNITO_ISSUER}/.well-known/openid-configuration`,
            authorization: {
                url: `${process.env.AWS_COGNITO_DOMAIN}/oauth2/authorize`,
                params: {
                    response_type: "code",
                    client_id: process.env.AWS_COGNITO_CLIENT_ID,
                    identity_provider: 'Google',
                    scope: 'openid email profile aws.cognito.signin.user.admin',
                    redirect_uri: 'http://localhost:3000/api/auth/callback/cognito'
                },
            },
            profile(profile, tokens) {
                return {
                    id: profile['cognito:username'], // provided id from cognito
                    oauthId: profile.sub, // provided id from oauth
                    email: profile.email,
                    name: profile.name,
                    accessToken: tokens.access_token,
                }
            }
        }),
        CredentialsProvider({
            id: 'credentials',
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'password' }
            },
            authorize(credentials) {
               
                const cognitoUser = new CognitoUser({
                    Username: credentials?.email,
                    Pool: UserPool,
                });
    
                const authenticationDetails = new AuthenticationDetails({
                    Username: credentials?.email,
                    Password: credentials?.password
                });
                
                return new Promise((resolve, reject) => {
                    cognitoUser.authenticateUser(authenticationDetails, {
                        onSuccess: (session) => {
                            if (session instanceof CognitoUserSession) {
                                const userInfo = {
                                    id: session.getIdToken().payload.sub,
                                    email: session.getIdToken().payload.email,
                                    name: session.getIdToken().payload.name,
                                    idToken: session.getIdToken().getJwtToken(),
                                    accessToken: session.getAccessToken().getJwtToken(),
                                    refreshToken: session.getRefreshToken().getToken(),
                                };
    
                                resolve(userInfo);
                            }
                        },
                        onFailure: (error) => {
                            if (error) {
                                reject(error);
                            }
                        }
                    })
                })
            },
        }),
    ]
});

export { handler as GET, handler as POST }