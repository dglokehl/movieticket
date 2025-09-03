type FormFieldProps = {
    children: React.ReactElement<{ id: string, className: string }>
    className?: string;
    label: string;
}

export default function FormField({ children, className, label, ...rest}: FormFieldProps) {
    return (
        <div className={`space-y-2 *:w-full *:block *:last:py-3 *:last:px-6 *:last:text-xs *:last:font-medium *:last:text-grey-medium *:last:rounded-[10px] *:last:border-1 *:last:border-grey-dark *:last:focus:outline-0 ${className ? className : ""}`} {...rest}>
            <label htmlFor={children?.props?.id} className="text-xs font-medium">
                {label}
            </label>

            {children}
        </div>
    )
}