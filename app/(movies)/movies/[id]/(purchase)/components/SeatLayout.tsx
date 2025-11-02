"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation";

import Button from "@/components/Button";
import Seat from "./Seat"

type SeatLayoutProps = {
    className?: string;
    reservedSeats: string[];
}


export default function SeatLayout({ className, reservedSeats, ...rest}: SeatLayoutProps) {
    const searchParams = useSearchParams();

    const [selectedSeats, setSelectedSeats] = useState<string[]>([])
    console.log(selectedSeats)

    const toggleSeat = (seatId: string, isSelected: boolean) => {
        setSelectedSeats(seatArr => {
            if (isSelected) {
                if (!seatArr.includes(seatId)) {
                    return [...seatArr, seatId]
                }
                return seatArr
            } else {
                return seatArr.filter(id => id !== seatId)
            }
        })
    }

    return (
        <div className={`${className ? className : ""}`} {...rest}>
            <div className="space-y-12">
                <div className="w-full space-y-3">
                    {Array.from({ length: 5 }).map((_, rowIndex) => {
                        const row = String.fromCharCode(65 + rowIndex)
                        return (
                            <div className="flex justify-between gap-2" id={row} key={rowIndex}>
                                {Array.from({ length: 8 }).map((_, seatIndex) => {
                                    const seatId = `${row}${seatIndex + 1}`
                                    return (
                                        <Seat
                                            key={seatIndex}
                                            seatId={seatId}
                                            selected={selectedSeats.includes(seatId)}
                                            onToggle={(isSelected: boolean) => toggleSeat(seatId, isSelected)}
                                            className={seatIndex === 4 ? "!ml-5" : ""}
                                            reserved={reservedSeats.includes(seatId)}
                                        />
                                    )
                                })}
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
                href={`checkout?${searchParams}&seats=${selectedSeats.join(",")}`}
                className={`mt-7 ${selectedSeats.length > 0 ? "flex justify-evenly items-center" : "opacity-50 pointer-events-none"}`}
            >
                <p className="px-6">Checkout</p>
                {selectedSeats.length > 0 && (
                    <>
                        <p>|</p>
                        <p>${selectedSeats.length * 5 - 0.01}</p>
                    </>
                )}
            </Button>
        </div>
    )
}