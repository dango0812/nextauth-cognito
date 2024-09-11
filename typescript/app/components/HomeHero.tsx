export default function HomeHero(): JSX.Element {
    return (
        <div className="flex items-center gap-4">
            <img
                className="w-8 h-8"
                src="/assets/img-nextauth-logo.png"
                alt="logo"
                loading="lazy"
            />
            
            <h1 className="text-3xl font-semibold text-gray-900">
                NextAuth with AWS Cognito
            </h1>
        </div>
    )
}