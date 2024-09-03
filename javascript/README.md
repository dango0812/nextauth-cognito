
![0904011749281802](https://github.com/user-attachments/assets/cbd1082d-7725-49cf-a4fb-7987ab5a5d16)


This is a NextAuth with AWS Cognito Email & Google Sign in sample code<br/>
blog: (https://dev.to/dango0812/nextauth-with-aws-cognito-email-google-sign-in-5ef6).

## Getting Started

### Please modify the contents of the env file first. (AWS Cognito environment setup)

```
NEXT_PUBLIC_AWS_COGNITO_CLIENT_ID=
NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID=
NEXT_PUBLIC_AWS_COGNITO_DOMAIN_URL=
NEXT_PUBLIC_AWS_COGNITO_IDP_URL=
NEXT_PUBLIC_AWS_COGNITO_REGION=
NEXTAUTH_URL=
NEXTAUTH_SECRET=
```
NEXTAUTH_SECRET use uuid4 or your secret key<br/>
uuid online create: https://www.uuidgenerator.net/version4

### Configure the callback URL and OpenID Connect scope in the AWS Cognito Userpool
```
Email Callback url: http://localhost:3000
OpenID Callback url: http://localhost:3000/api/auth/callback/cognito
localhost or your domain

OpenID Connect scope: openid, email, profile, phone, aws.cognito.signin.user.admin
```

### If you are using the AWS Cognito clientSecret key, you need to update the null value for clientSecret in NextAuth Route to your own.

route: ```api/auth/[...nextauth]``` -> Modified clientSecret in CognitoProvider 

You can find a more detailed explanation on my blog.

Thank you. 🫠
