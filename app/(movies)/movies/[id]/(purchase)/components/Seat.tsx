"use client"

type SeatProps = {
    className?: string;
    reserved?: boolean;
    seatId: string;
    selected: boolean;
    onToggle: (isSelected: boolean) => void;
}

export default function Seat({ className, reserved, seatId, selected, onToggle, ...rest}: SeatProps) {
    const handleClick = () => {
        !reserved && onToggle(!selected)
    }

    return (
        <div
            id={seatId}
            className={`size-7.5 grid place-items-center rounded-[10px] cursor-pointer text-xs text-center whitespace-nowrap
                ${reserved ? "bg-[#EB5757] text-transparent"
                : selected ? "bg-blue text-transparent"
                : "text-grey-medium border-[1px] border-grey-dark hover:bg-blue/25"}
                ${className ? className : ""}
                ${seatId === "A1" || seatId === "A8" || seatId === "E1" || seatId === "E8" ? "opacity-0 pointer-events-none" : ""}`}
            onClick={handleClick}
            {...rest}
        >
            {/* {seatId} */}
        </div>
    )
}