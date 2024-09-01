// prop-types
import PropTypes from "prop-types";

// tailwindcss
import "tailwindcss/tailwind.css";
// next auth
import NextAuthProvider from "app/provider/NextAuthProvider";

export const metadata = {
  title: "NextAuth with AWS Cognito",
  description: "NextAuth with AWS Cognito Email & Google Login Example, also provide blog posts for detail explanation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link  rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" sizes="180x180" />
      </head>

      <body className="font-sans">
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired
};