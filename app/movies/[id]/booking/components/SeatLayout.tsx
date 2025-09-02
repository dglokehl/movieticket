import Seat from "./Seat"

type SeatLayoutProps = {
    className?: string;
}


export default function SeatLayout({ className, ...rest}: SeatLayoutProps) {
    return (
        <div className="space-y-12">
            <div className={`w-full grid grid-cols-2 gap-6 ${className ? className : ""}`} {...rest}>
                {Array.from({ length: 12 }).map((_, i) => (
                    <div className="grid grid-cols-4 gap-2" key={i}>
                        {Array.from({ length: 4 }).map((_, i) => (
                            <button key={i}>
                                {i === 3 ? <Seat reserved /> : <Seat />}
                            </button>
                        ))}
                    </div>
                ))}
            </div>

            <ul className="flex justify-between text-xs text-grey-medium *:flex *:items-center *:gap-2 *:*:first:size-2.5 *:*:first:rounded-full">
                <li>
                    <div className="bg-blue"></div>Selected
                </li>
                <li>
                    <div className="bg-[#EB5757]"></div>Reserved
                </li>
                <li>
                    <div className="border-[1px] border-grey-dark"></div>Available
                </li>
            </ul>
        </div>
    )
}