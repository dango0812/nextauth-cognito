'use client'
import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react';

export default function SignInPage() {
  const { data: session } = useSession();

  return (
    <section className="container mx-auto h-screen flex flex-col justify-center items-center gap-4">
      <div className="flex items-center gap-4">
        <img className="w-8 h-8" src="https://next-auth.js.org/img/logo/logo-sm.png" alt="logo" />
        <h2 className="text-3xl font-semibold text-gray-900">NextAuth with AWS Cognito</h2>
      </div>

      <div className="w-full max-w-md flex flex-col bg-white rounded-lg shadow gap-4 mt-8 mb-4 p-8">
        <h3 className="text-2xl font-semibold text-gray-900">
          Personal info
        </h3>
        
        <div className='flex flex-col gap-2'>
          <h4 className="text-md">
            Email: {session?.user?.email || ''}
          </h4>
          <h4 className="text-md">
            Name: {session?.user?.name || ''}
          </h4>
          <button type="button" className="w-full text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm py-3 text-center mt-2" onClick={signOut}>
            Sign Out
          </button>
        </div>
      </div>

      <a className="flex items-center justify-center gap-2" href="/">
        <svg className="w-5 h-5" transform="rotate(-180)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
        <h5 className="text-md">Go back to the home.</h5>
      </a>
    </section>
  );
}
  