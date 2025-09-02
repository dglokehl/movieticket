type BookingSelectProps = {
    children?: React.ReactNode
    className?: string;
    obj: {
        label: string;
        name: string;
    }
}

export default function BookingSelect({ children, className, obj, ...rest}: BookingSelectProps) {
    return (
        <div className={`w-full *:w-full ${className ? className : ""}`} {...rest}>
            <h3 className="mb-2 text-xs font-medium">
                {obj.label}
            </h3>

            <select name={obj.name} id={obj.name} className="py-4 px-6 text-xs font-medium text-grey-medium border-[1px] border-grey-dark rounded-xl">
                {children}
            </select>
        </div>
    )
}