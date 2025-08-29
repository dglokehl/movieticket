type SectionProps = {
    children?: React.ReactNode
    className?: string;
    obj: {
        heading: string;
        button?: string;
        gap?: string;
    }
}


export default function Section({ children, className, obj, ...rest}: SectionProps) {
    return (
        <section className={`${className ? className : ""}`} {...rest}>
            <div className="flex justify-between">
                <h2 className="mb-3 heading-1">
                    {obj.heading}
                </h2>

                {obj?.button && (
                    <p className="text-sm font-light text-grey-dark hover:underline cursor-pointer">
                        {obj.button}
                    </p>
                )}
            </div>

            <div className={`flex ${obj.gap ? obj.gap : "gap-7.5"} overflow-x-scroll`}>
                {children}
            </div>
        </section>
    )
}