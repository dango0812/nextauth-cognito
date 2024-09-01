// prop-types
import PropTypes from "prop-types";

export default function SignInInputField({
    label,
    type,
    name,
    value,
    onChange,
    placeholder
}) {
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

SignInInputField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string
};