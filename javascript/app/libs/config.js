// routes
import { domains, paths } from "app/routes";

export const MENU_ITEM_LIST = [
  {
    title: "Sign in",
    description: "provide a sign in page implemented using NextAuth with AWS Cognito.",
    link: paths.signIn,
    openNewTab: false
  },
  {
    title: "Blog Post",
    description: "We offer a blog with explanations written to make the process easily understandable.",
    link: domains.blog,
    openNewTab: true
  },
  {
    title: "javascript sample code",
    description: "provide a code sample implemented with javascript for NextAuth + AWS Cognito integration.",
    link: domains.githubCode.javascript,
    openNewTab: true
  },
  {
    title: "typescript sample code",
    description: "provide a code sample implemented with typescript for NextAuth + AWS Cognito integration.",
    link: domains.githubCode.typescript,
    openNewTab: true
  },
];