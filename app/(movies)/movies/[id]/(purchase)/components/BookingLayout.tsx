"use client"

import { useState } from "react"
import { useSearchParams, usePathname, useRouter } from "next/navigation";

import BookingSelect from "./BookingSelect"

type BookingLayoutProps = {
    children?: React.ReactNode
    className?: string;
    data: any;
}

// SEARCH PARAMS I STEDET FOR DET HER LORT


export default function BookingLayout({ children, className, data, ...rest}: BookingLayoutProps) {
    const [index, setIndex] = useState(0);

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    if (searchParams.size === 0) {
        const params = new URLSearchParams(searchParams)
        
        params.set("cinema", `${data[index].name}`)
        params.set("date", `${data[index].dates[0]}`)
        params.set("time", `${data[index].times[0].slice(0, -3)}`)
        console.log(params)
        replace(`${pathname}?${params}`, { scroll: false })
    }

    return (
        <div className={`grid grid-cols-2 gap-x-8 gap-y-4 ${className ? className : ""}`} {...rest}>
            <BookingSelect obj={{ label: "Cinema", name: "cinema" }} className="col-span-2">
                {data.map((cinema: any, i: number) => (
                    <option value={cinema.name} key={i} onClick={() => setIndex(i)}>
                        {cinema.name}
                    </option>
                ))}
            </BookingSelect>

            <BookingSelect obj={{ label: "Date", name: "date" }}>
                {data[index].dates.map((date: string, i: number) => (
                    <option value={date} key={i}>
                        {date}
                    </option>
                ))}
            </BookingSelect>

            <BookingSelect obj={{ label: "Time", name: "time" }}>
                {data[index].times.map((time: string, i: number) => (
                    <option value={time.slice(0, -3)} key={i}>
                        {time.slice(0, -3)}
                    </option>
                ))}
            </BookingSelect>
        </div>
    )
}