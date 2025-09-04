"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation";

import Button from "@/components/Button";
import Seat from "./Seat"

type SeatLayoutProps = {
    className?: string;
}


export default function SeatLayout({ className, ...rest}: SeatLayoutProps) {
    const searchParams = useSearchParams();

    const [selectedCount, setSelectedCount] = useState(0)
    let price = selectedCount * 5 - 0.01

    const toggleSeat = (selected: boolean) => {
        setSelectedCount(prev => prev + (selected ? 1 : -1))
    }

    return (
        <>
            <div className="space-y-12">
                <div className={`w-full space-y-3 ${className ? className : ""}`} {...rest}>
                    {Array.from({ length: 5 }).map((_, i) => {
                        const row = String.fromCharCode(65 + i)
                        return (
                            <div className="grid grid-cols-8 gap-3" id={row} key={i}>
                                {Array.from({ length: 8 }).map((_, i) => (
                                    <Seat
                                        key={i}
                                        id={`${row}${i + 1}`}
                                        onToggle={toggleSeat}
                                    />
                                ))}
                            </div>
                        )
                    })}
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


            <Button
                href={`checkout?${searchParams}&amount=${selectedCount}`}
                className={`mt-7 ${selectedCount > 0 ? "flex justify-evenly items-center" : "opacity-50 pointer-events-none"}`}
            >
                <p className="px-6">Checkout</p>
                {selectedCount > 0 && (
                    <>
                        <p>|</p>
                        <p>${price}</p>
                    </>
                )}
            </Button>
        </>
    )
}