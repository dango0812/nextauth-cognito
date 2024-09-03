"use client";

// nextauth
import { useSession, signOut } from "next-auth/react";
// routes
import { paths } from "app/routes";

export default function DashboardPage() {
    const { data, status } = useSession();

    if (status === "loading")
        return null;

    const handleSignOut = () => {
        signOut({
            redirect: true,
            callbackUrl: paths.main
        });
    }

    return (
        <section className="container mx-auto h-screen flex flex-col justify-center items-center gap-4">
            <div className="w-full max-w-md flex flex-col bg-white rounded-lg shadow gap-6 mt-8 mb-4 p-8">
                <h1 className="text-3xl font-semibold text-gray-900">
                    Welcome, {data.name} !
                </h1>

                <div className="flex flex-col text-md gap-3">
                    <p>
                        Sub: {data.sub}
                    </p>
                    <p>
                        Email: {data.email}
                    </p>
                    <p>
                        Email Verified: {data.email_verified}
                    </p>
                </div>

                <button
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-base py-3 text-center mt-2"
                    type="button"
                    onClick={handleSignOut}
                >
                    Sign Out
                </button>
            </div>
        </section>
    )
}