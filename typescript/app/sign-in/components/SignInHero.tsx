// next
import Image from "next/image"

export default function SignInHero() {
    return (
        <div className="w-full max-w-md flex flex-row justify-start items-center gap-4">
            
            <Image
                width={28}
                height={28}
                src="/assets/img-nextauth-logo.png"
                alt="logo"
                loading="lazy"
            />
            
            <h1 className="text-3xl font-bold text-gray-900 pb-1">
                Sign In
            </h1>
        </div>
    )
}