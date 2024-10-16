

<p align="center">
  <br/>
  <a href="https://authjs.dev" target="_blank">
  <img width="96px" src="https://authjs.dev/img/logo-sm.png" />
  </a>
  <h1 align="center">
    NextAuth with AWS Cognito
  </h1>
</p>
<p align="center">
  This is a NextAuth with AWS Cognito Email & Google Sign in sample code<br/>
  <a href="https://dev.to/dango0812/nextauth-with-aws-cognito-email-google-sign-in-5ef6" target="_blank">
    See description and cognito environment configuration for the documentation
  </a>
</p>
<br/>

![0904011749281802](https://github.com/user-attachments/assets/cbd1082d-7725-49cf-a4fb-7987ab5a5d16)

## (1) NextAuth & AWS Cognito env setup
```
NEXTAUTH_URL=
NEXTAUTH_SECRET=
# NEXTAUTH_SECRET use uuid4 or your secret key
# uuid online create: https://www.uuidgenerator.net/version4
# nextauth docs: (https://next-auth.js.org/configuration/options#secret)

NEXT_PUBLIC_AWS_COGNITO_CLIENT_ID=
NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID=
NEXT_PUBLIC_AWS_COGNITO_DOMAIN_URL=
NEXT_PUBLIC_AWS_COGNITO_IDP_URL=
NEXT_PUBLIC_AWS_COGNITO_REGION=
```
<br/>

### (2) Please register your callback URL in AWS Cognito & Google Cloud Platform
```
Email callback url: {your domain}/sign-in
OpenID callback url: {your domain}/api/auth/callback/cognito
```
<br/>

### (3) Configure the OpenID Connect scope in the AWS Cognito Userpool
AWS Cognito Userpool OpenID Connect Scope Types: ```openid```, ```email```, ```profile```, ```phone```, ```aws.cognito.signin.user.admin``` <br/>
Please modify the authorization -> scope in the api/auth/[...nextauth] file after setting it up for your environment <br/>
💡 If you are using an AWS Cognito client secret key, use the secret key value provided by Cognito instead of null
<br/>

### Version used in the development-environment
![Generic badge](https://img.shields.io/badge/next.js-14.2.7-brightgreen.svg) ![Generic badge](https://img.shields.io/badge/next--auth-4.25.5-red.svg) ![Generic badge](https://img.shields.io/badge/aws--sdk--cognito--provider-3.521.0-orange.svg)<br/>
![Generic badge](https://img.shields.io/badge/tailwindcss-3.4.1-lightgrey.svg) ![Generic badge](https://img.shields.io/badge/eslint-^8-lightgrey.svg) ![Generic badge](https://img.shields.io/badge/typescript-^5-lightgrey.svg)
<br/>

### Get started
```
$ git clone https://github.com/dango0812/nextauth-cognito.git
$ cd nextauth-cognito
$ cd javascript or typescript
$ pnpm install
$ pnpm dev
```
<br/>

<a href="https://dev.to/dango0812/nextauth-with-aws-cognito-email-google-sign-in-5ef6" target="_blank">
  You can find a more detailed explanation on my blog
</a>

Thank you. 🫠
