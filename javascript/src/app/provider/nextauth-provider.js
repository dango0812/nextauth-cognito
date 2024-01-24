'use client'

import PropTypes from 'prop-types';
import { SessionProvider } from "next-auth/react";

export default function NextAuthProvider({ children, ...props }) {
    return (
        <SessionProvider {...props}>
            {children}
        </SessionProvider>
    )
}

NextAuthProvider.propTypes = {
    children: PropTypes.node,
    props: PropTypes.object
};