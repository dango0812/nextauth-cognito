This is a NextAuth with AWS Cognito Email & Google Sign in sample code<br/>
blog: (https://dev.to/dango0812/nextauth-with-aws-cognito-email-google-sign-in-5ef6).

## Getting Started

1. Please modify the contents of the env file first. (AWS Cognito environment setup)
```
AWS_COGNITO_CLIENT_ID=
AWS_COGNITO_UESRPOOL_ID=
AWS_COGNITO_ISSUER=
AWS_COGNITO_DOMAIN=
NEXTAUTH_URL=
NEXTAUTH_SECRET=
```
NEXTAUTH_SECRET use uuid4 or your secret key<br/>
uuid online create: https://www.uuidgenerator.net/version4

2. Configure the callback URL and OpenID Connect scope in the AWS Cognito Userpool
```
Callback url: http://localhost:3000/api/auth/callback/cognito
localhost or your domain

OpenID Connect: openid, email, profile, aws.cognito.signin.user.admin
```

3. If you are using the AWS Cognito clientSecret key, you need to update the null value for clientSecret in NextAuth Route to your own.

---

I wrote this code for NextAuth with AWS Cognito for email & Google because there wasn't much information available. 

You can find a more detailed explanation on my blog. 

Since this is a sample code, it's written very simply, and the code is not yet organized. 

I plan to refactor it after completing the TypeScript part. 

Thank you. 🫠