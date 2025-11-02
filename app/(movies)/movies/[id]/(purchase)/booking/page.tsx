import { Metadata } from "next";

import { createClient } from "@/utils/supabase/server";

import PageWrapper from "@/components/PageWrapper"
import SeatLayout from "../components/SeatLayout";
import BookingLayout from "../components/BookingLayout";

export const metadata: Metadata = {
    title: "Select Seats",
}


export default async function BookingPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const supabase = await createClient()
    const { data, error } = await supabase
        .from("cinemas")
        .select()
        .order("id", { ascending: true })
    console.log(data)


    const reservedSeats = Array.from({ length: 5 }).map((_, rowIndex) => {
        const row = String.fromCharCode(65 + rowIndex)
        const seat = `${row}${Math.floor(Math.random() * 8) + 1}`
        return seat
    })
    // const reservedSeats: string[] = []
    // for (let rowIndex = 0; rowIndex < 5; rowIndex++) {
    //     for (let seatIndex = 1; seatIndex <= 8; seatIndex++) {
    //         if (Math.random() < 0.2) {
    //             reservedSeats.push(`${String.fromCharCode(65 + rowIndex)}${seatIndex}`)
    //         }
    //     }
    // }

    console.log(reservedSeats)

    return (
        <PageWrapper
            className=""
            header={{ title: metadata.title }}
        >
            <BookingLayout data={data} />

            <SeatLayout className="mt-10" reservedSeats={reservedSeats} />
        </PageWrapper>
    )
}