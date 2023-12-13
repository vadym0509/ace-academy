interface ButtonProps {
    className?: string;
    type?: "default" | "primary";
    icon?: React.ReactNode;
    label: string;
    onClick?: () => void;
    disabled?: boolean;
}

const Button = ({className, type = "default", icon, disabled = false, label, onClick}: ButtonProps) => {
    const types = {
        default: "bg-white text-midblack hover:border-midgrey hover:bg-tangerine border border-black",
        primary: "bg-primary-500 hover:bg-primary-400 text-white border border-primary-500"
    }
    let buttonClassName = `px-6.5 h-16 flex rounded-semixl disabled:cursor-not-allowed disabled:bg-disabled-bg disabled:text-disabled-text disabled:border-disabled-text ${types[type]} ${className}`
    return (
        <button disabled={disabled} onClick={onClick} className={buttonClassName}>
            <div className="w-full flex my-auto">
                {icon && <div className="mr-2.5">{icon}</div>}
                <span className="flex m-auto text-lg leading-6 font-semibold">{label}</span>
            </div>
        </button>
    )
}

export default Button