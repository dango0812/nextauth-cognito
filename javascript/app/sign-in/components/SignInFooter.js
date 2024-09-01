export default function SignInFooter() {
    return (
        <a className="flex items-center justify-center gap-1" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 21">
                <path fill="currentColor" d="M12.727 3.687a1 1 0 1 0-1.454-1.374l-8.5 9a1 1 0 0 0 0 1.374l8.5 9.001a1 1 0 1 0 1.454-1.373L4.875 12z"/>
            </svg>
            <p className="text-base font-medium">
                Go back to the home
            </p>
        </a>
    )
}