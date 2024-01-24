const MENU_LIST = [
  {
    title: 'Sign in',
    description: 'provide a sign in page implemented using NextAuth with AWS Cognito.',
    link: '/account/sign-in'
  },
  {
    title: 'Blog Posts',
    description: 'We offer a blog with explanations written to make the process easily understandable.',
    link: ''
  },
  {
    title: 'javascript sample code',
    description: 'provide a code sample implemented with javascript for NextAuth + AWS Cognito integration.',
    link: 'https://github.com/dango0812/nextauth-cognito/tree/main/javascript'
  },
  {
    title: 'typescript sample code',
    description: 'Please wait a few days. Code is currently being written.',
    link: 'https://github.com/dango0812/nextauth-cognito/tree/main/typescript'
  },
];

export default function HomePage() {
  return (
    <main>
      <div className="container mx-auto h-screen flex flex-col justify-center items-center">
        <div className="flex items-center gap-4">
          <img className="w-8 h-8" src="https://next-auth.js.org/img/logo/logo-sm.png" alt="logo" />
          <h2 className="text-3xl font-semibold text-gray-900">NextAuth with AWS Cognito</h2>
        </div>

        <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-4 my-8 px-2">
          {MENU_LIST.map((item) => (
            <a key={item.title} href={item.link} target={item.title === 'Sign in' ? '_self' : "_blank"} className="p-4 border rounded border-gray-300 hover:border-purple-500">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-start gap-4">
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                </div>
                <h5 className="text-md">{item.description}</h5>
              </div>
            </a>
          ))}
        </div>
        <h5 className="text-md">Created by&nbsp;
          <a className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 font-bold" href="https://github.com/dango0812/nextauth-cognito" target="_blank" rel="noopener noreferrer">
            dango0812 (Donggyu Kim)
          </a>
        </h5>
      </div>
    </main>
  );
}
