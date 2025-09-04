"use client"

import { useState } from "react"

type SeatProps = {
    reserved?: boolean;
    id: string;
    onToggle: (selected: boolean) => void;
}

export default function Seat({ reserved, id, onToggle, ...rest}: SeatProps) {
    const [selected, setSelected] = useState(false);

    const handleClick = (e: any) => {
        if (!reserved) {
            setSelected(!selected)
            onToggle(!selected)
            // console.log(e.currentTarget)
        }
    }

    return (
        <div
            id={id}
            className={`size-7.5 rounded-[10px] cursor-pointer text-xs text-center text-grey-medium
                ${reserved ? "bg-[#EB5757]"
                : selected ? "bg-blue"
                : "border-[1px] border-grey-dark hover:bg-blue/25"}`}
            onClick={handleClick}
            {...rest}
        >
            {id}
        </div>
    )
}