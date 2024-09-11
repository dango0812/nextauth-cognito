"use client";

// nextauth
import { SessionProvider, SessionProviderProps } from "next-auth/react";

export default function NextAuthProvider({ children, ...props } : SessionProviderProps) {
    return (
        <SessionProvider {...props}>
            {children}
        </SessionProvider>
    )
}