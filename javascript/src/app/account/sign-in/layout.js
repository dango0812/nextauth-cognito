'use client';

import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Layout({ children }) {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session)
            router.replace('/account/personal-info');
    }, [session]);

    return (
        <>
            {session ? null : (<>{children}</>)}
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node
};
