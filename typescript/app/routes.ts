interface Domains {
    blog: string;
    githubCode: {
        javascript: string;
        typescript: string;
    }
}

export const domains: Domains = {
    blog: "https://dev.to/dango0812/nextauth-with-aws-cognito-email-google-sign-in-5ef6",
    githubCode: {
        javascript: "https://github.com/dango0812/nextauth-cognito/tree/main/javascript",
        typescript: "https://github.com/dango0812/nextauth-cognito/tree/main/typescript"
    }
}

interface Paths {
    main: string;
    signIn: string;
    dashboard: string;
}

export const paths: Paths = {
    main: "/",
    signIn: "/sign-in",
    dashboard: "/dashboard"
};