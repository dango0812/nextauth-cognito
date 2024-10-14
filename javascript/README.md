<br />

## NextAuth & AWS Cognito env setup
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

### Please register your callback URL in AWS Cognito & Google Cloud Platform
```
Email callback url: {your domain}/sign-in
OpenID callback url: {your domain}/api/auth/callback/cognito
```
<br/>

### Configure the OpenID Connect scope in the AWS Cognito Userpool
```
OpenID Connect scope: openid, email, profile, phone, aws.cognito.signin.user.admin
Please modify the authorization -> scope in the api/auth/[...nextauth] file after setting it up for your environment
```
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
$ cd javascript
$ pnpm install
$ pnpm dev
```
<br/>

<a href="https://github.com/dango0812/nextauth-cognito/tree/main/typescript" target="_blank">
  Need typescript code ?
</a>
