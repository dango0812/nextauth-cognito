// nextauth
import NextAuth, { NextAuthOptions, TokenSet } from "next-auth";

// nextauth provider
import CognitoProvider from "next-auth/providers/cognito";
import { CognitoProfile } from "next-auth/providers/cognito";
import CredentialsProvider from "next-auth/providers/credentials";
// aws cognito-identity-provider
import {
    CognitoIdentityProvider,
    InitiateAuthCommandInput,
    InitiateAuthCommandOutput,
    GetUserCommandOutput,
    AuthFlowType
} from "@aws-sdk/client-cognito-identity-provider";
import { UserAttributesType } from "app/types/next-auth";

const cognitoIdentityProvider = new CognitoIdentityProvider({
    region: process.env.NEXT_PUBLIC_AWS_COGNITO_REGION
});

export const authOptions: NextAuthOptions = {
    providers: [
        CognitoProvider({
            id: "cognito",
            name: "Cognito",
            clientId: process.env.NEXT_PUBLIC_AWS_COGNITO_CLIENT_ID as string,
            clientSecret: "",
            client: {
                token_endpoint_auth_method: "none"
            },
            checks: ["state", "nonce"],
            issuer: process.env.NEXT_PUBLIC_AWS_COGNITO_IDP_URL as string,
            authorization: {
                url: `${process.env.NEXT_PUBLIC_AWS_COGNITO_DOMAIN_URL}/oauth2/authorize`,
                params: {
                    response_type: "code",
                    client_id: process.env.AWS_COGNITO_CLIENT_ID as string,
                    identity_provider: "Google",
                    scope: "openid email profile phone aws.cognito.signin.user.admin",
                    redirect_uri: `${process.env.NEXTAUTH_URL}/api/auth/callback/cognito`
                },
            },
            profile(profile: CognitoProfile, tokens: TokenSet) {
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
                email: { label: "email", type: "text" },
                password: { label: "password", type: "password" }
            },
            authorize: (credentials) => {
                return new Promise((resolve, reject) => {
                    if (!credentials) {
                        return reject(null);
                    }

                    const params: InitiateAuthCommandInput = {
                        AuthFlow: AuthFlowType.USER_PASSWORD_AUTH,
                        ClientId: process.env.NEXT_PUBLIC_AWS_COGNITO_CLIENT_ID as string,
                        AuthParameters: {
                            USERNAME: credentials.email,
                            PASSWORD: credentials.password,
                        }
                    };
                    
                    /* eslint-disable  @typescript-eslint/no-explicit-any */
                    cognitoIdentityProvider.initiateAuth(params, (error: any, session?: InitiateAuthCommandOutput) => {
                        if (error) {
                            console.log("error initiateAuth", error);
                            return reject(null);
                        }

                        if (!session) {
                            return reject(null);
                        }

                        cognitoIdentityProvider.getUser({
                            AccessToken: session.AuthenticationResult?.AccessToken
                        }, (error: any, user?: GetUserCommandOutput) => {
                            if (error) {
                                console.log("error getUser", error);
                                return reject(null);
                            }
       
                            const UserAttributes: UserAttributesType = {
                                id: user?.Username as string,
                                idToken: session.AuthenticationResult?.IdToken,
                                accessToken: session.AuthenticationResult?.AccessToken,
                                refreshToken: session.AuthenticationResult?.RefreshToken,
                            };

                            user?.UserAttributes?.forEach(attribute => {
                                if (attribute.Name) {
                                    UserAttributes[attribute.Name] = attribute.Value;
                                }
                            });

                            resolve(UserAttributes);
                        });
                    });
                });
            }
        })
    ],
    callbacks: {
        async jwt({ token }) {
            return token;
        },

        async session({ session, token }) {
            return {
                ...session,
                user: token
            }
        }
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };