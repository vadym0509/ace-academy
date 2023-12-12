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
        default: "bg-white text-midblack border border-black",
        primary: "bg-primary text-white border border-primary"
    }
    let buttonClassName = `px-6.5 h-16 flex rounded-semixl ${types[type]} ${className}`
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