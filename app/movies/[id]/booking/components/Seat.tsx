"use client"

import { useState } from "react"

type SeatProps = {
    reserved?: boolean;
}

export default function Seat({ reserved, ...rest}: SeatProps) {
    const [selected, setSelected] = useState(false);

    const handleClick = (e: any) => {
        if (reserved) {
            return
        }
        if (!selected) {
            setSelected(!selected)
        }
        console.log(e.currentTarget)
    }

    return (
        <div
            className={`size-7.5 rounded-[10px] cursor-pointer
                ${reserved ? "bg-[#EB5757]"
                : selected ? "bg-blue"
                : "border-[1px] border-grey-dark hover:bg-blue/25"}`}
            onClick={handleClick}
            {...rest}
        ></div>
    )
}