interface SignInInputFieldProps {
    label: string;
    type: string;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

export default function SignInInputField({
    label,
    type,
    name,
    value,
    onChange,
    placeholder
}: SignInInputFieldProps) {
    return (
        <div>
            <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor={name}
            >
                {label}
            </label>
            
            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full h-8 px-3 py-5"
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    )
}