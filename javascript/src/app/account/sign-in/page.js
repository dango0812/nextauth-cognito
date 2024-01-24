export default function SignInPage() {
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
          <form className="flex flex-col gap-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Email
              </label>
              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your email address" required="" />
            </div>

            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                Password
              </label>
              <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
            </div>
            
            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm py-3 text-center mt-2">
              Sign in
            </button>
          </form>
          
          <h6 class="flex items-center w-full">
            <span class="flex-grow bg-gray-200 rounded h-[1px]"></span>
            <p className="mx-3 text-sm font-medium">OR</p>
            <span class="flex-grow bg-gray-200 rounded h-[1px]"></span>
          </h6>

          <button class="w-full flex items-center justify-center text-sm font-medium px-2 py-3 gap-2 border border-slate-200 rounded-lg text-slate-700 hover:border-slate-300 hover:shadow transition duration-150">
              <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
              Sign in with Google
          </button>
        </div>
      </div>

      <a className="flex items-center justify-center gap-2" href="/">
        <svg class="w-5 h-5" transform="rotate(-180)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
        <h5 className="text-md">Go back to the home.</h5>
      </a>
    </section>
  );
}
  