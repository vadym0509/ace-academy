interface InputProps {
    className?: string;
    label?: string;
    icon?: React.ReactNode;
    placeholder?: string;
    isRequired?: boolean;
}

const Input = ({className, label, icon, placeholder, isRequired = false}: InputProps) => {
    const inputClassName = `block ${className}`

    return (
        <div className={inputClassName}>
            {label && <div className="mb-2.5 font-extrabold leading-6">
                {label}
            </div>}
            <div className="p-4.5 w-full bg-tangerine flex gap-4">
                {icon && <div className="my-auto">{icon}</div>}
                <input required={isRequired} type="text" className="w-full font-bold leading-6 bg-tangerine text-midblack focus:outline-none" placeholder={placeholder} />
            </div>
        </div>
    )
}

export default Input