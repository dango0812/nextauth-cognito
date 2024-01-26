'use client'

import { useState } from 'react';
// next auth
import { signIn } from 'next-auth/react'

export default function SignInPage() {
  const [formSchema, setFormSchema] = useState({
    email: '',
    password: ''
  });

  const handleFormSchema = (event) => {
    const { name } = event.target;
    const newFormValue = { ...formSchema, [name]: event.target.value };
    setFormSchema(newFormValue)
  };

  const handleSubmit = async(event, data) => {
    event.preventDefault();

    if (data.email === '' || data.password === '') return;

    const response = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false
    });
    console.log("response", response)

    if (response.ok === false) {
      console.log("error: ", response.error);
      console.log("status: ", response.status);
    }
  };

  return (
    <section className="container mx-auto h-screen flex flex-col justify-center items-center gap-4">
      <div className="flex items-center gap-4">
        <img className="w-8 h-8" src="https://next-auth.js.org/img/logo/logo-sm.png" alt="logo" />
        <h2 className="text-3xl font-semibold text-gray-900">NextAuth with AWS Cognito</h2>
      </div>

      <div className="w-full max-w-md flex flex-col bg-white rounded-lg shadow gap-4 mt-8 mb-4 p-8">
        <h3 className="text-2xl font-semibold text-gray-900">
          Sign in
        </h3>
        
        <div className="flex flex-col gap-8">
          <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e, formSchema)}>
            <div>
              <label htmlFor='email' className="block mb-2 text-sm font-medium text-gray-900">
                Email
              </label>
              <input type="email" name="email" id="email" value={formSchema.email} onChange={handleFormSchema} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="your email address" />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                Password
              </label>
              <input type="password" name="password" id="password" value={formSchema.password} onChange={handleFormSchema} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
            </div>

            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm py-3 text-center mt-2">
              Sign in
            </button>
          </form>
            
          <h6 className="flex items-center w-full">
            <span className="flex-grow bg-gray-200 rounded h-[1px]"></span>
            <p className="mx-3 text-sm font-medium">OR</p>
            <span className="flex-grow bg-gray-200 rounded h-[1px]"></span>
          </h6>

          <button className="w-full flex items-center justify-center text-sm font-medium px-2 py-3 gap-2 border border-slate-200 rounded-lg text-slate-700 hover:border-slate-300 hover:shadow transition duration-150" onClick={() => signIn('cognito')}>
            <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
            Sign in with Google
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
  