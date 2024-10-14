// nextauth
import NextAuth from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";
import CredentialsProvider from "next-auth/providers/credentials";
// cognito-identity-provider
import * as AWS from "@aws-sdk/client-cognito-identity-provider";

const cognitoIdentityProvider = new AWS.CognitoIdentityProvider({
    region: process.env.NEXT_PUBLIC_AWS_COGNITO_REGION
});

async function auth(req, res) {
    return await NextAuth(req, res, {
        providers: [
            CognitoProvider({
                id: "cognito",
                name: "Cognito",
                type: "oauth",
                idToken: true,
                clientId: process.env.NEXT_PUBLIC_AWS_COGNITO_CLIENT_ID,
                clientSecret: null,
                client: {
                    token_endpoint_auth_method: "none"
                },
                checks: ["state", "nonce"],
                issuer: `${process.env.NEXT_PUBLIC_AWS_COGNITO_IDP_URL}`,
                wellKnown: `${process.env.NEXT_PUBLIC_AWS_COGNITO_IDP_URL}/.well-known/openid-configuration`,
                authorization: {
                    url: `${process.env.NEXT_PUBLIC_AWS_COGNITO_DOMAIN_URL}/oauth2/authorize`,
                    params: {
                        response_type: "code",
                        client_id: process.env.AWS_COGNITO_CLIENT_ID,
                        identity_provider: "Google",
                        scope: "openid email profile phone aws.cognito.signin.user.admin",
                        redirect_uri: `${process.env.NEXTAUTH_URL}/api/auth/callback/cognito`
                    },
                },
                profile(profile, tokens) {
                    return {
                        id: profile["cognito:username"], // provided id from cognito
                        oauthId: profile.sub, // provided id from oauth
                        email: profile.email,
                        name: profile.name,
                        idToken: tokens.id_token,
                        accessToken: tokens.access_token,
                        refreshToken: tokens.refresh_token,
                    }
                }
            }),
            CredentialsProvider({
                id: "credentials",
                name: "credentials",
                credentials: {
                    email: {
                        label: "email",
                        type: "text"
                    },
                    password: {
                        label: "password",
                        type: "password"
                    }
                },
                authorize(credentials) {
                    return new Promise((resolve, reject) => {
                        cognitoIdentityProvider.initiateAuth({
                            ClientId: process.env.NEXT_PUBLIC_AWS_COGNITO_CLIENT_ID,
                            AuthFlow: "USER_PASSWORD_AUTH",
                            AuthParameters: {
                                USERNAME: credentials?.email,
                                PASSWORD: credentials?.password,
                            }
    
                        }, (error, session) => {
                            if (error) {
                                reject(new Error(error));
    
                            } else {
                                cognitoIdentityProvider.getUser({
                                    AccessToken: session.AuthenticationResult.AccessToken
                                }, (error, user) => {
                                    if (error) {
                                        reject(new Error(error));
    
                                    } else {
                                        const userInfo = {
                                            id: user.Username,
                                            idToken: session.AuthenticationResult.IdToken,
                                            accessToken: session.AuthenticationResult.AccessToken,
                                            refreshToken: session.AuthenticationResult.RefreshToken,
                                        };

                                        user.UserAttributes.forEach(attribute => {
                                            const key = attribute.Name;
                                            userInfo[key] = attribute.Value;
                                        })
                                        
                                        resolve(userInfo);
                                    }
                                });
                            }
                        });
                    });
                },
            })
        ],
        callbacks: {
            async jwt({ token, user }) {
                return {
                    ...token,
                    ...user
                }
            },
            async session({ session, token }) {
                return {
                    name: session.user.name,
                    email: session.user.email,
                    ...token
                }
            }
        }
    });
}

export { auth as GET, auth as POST };