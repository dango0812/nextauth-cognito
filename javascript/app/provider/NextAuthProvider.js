"use client"

// prop-types
import PropTypes from "prop-types";
// next auth
import { SessionProvider } from "next-auth/react";

export default function NextAuthProvider({ children, ...props }) {
    return (
        <SessionProvider {...props}>
            {children}
        </SessionProvider>
    )
}

NextAuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object
};