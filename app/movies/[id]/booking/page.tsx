import { Metadata } from "next";

import { createClient } from "@/utils/supabase/server";

import PageWrapper from "@/components/PageWrapper"
import Button from "@/components/Button";
import SeatLayout from "./components/SeatLayout";
import BookingSelect from "./components/BookingSelect";
import BookingLayout from "./components/BookingLayout";

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

    return (
        <PageWrapper
            className=""
            header={{ title: metadata.title }}
        >
            <BookingLayout data={data} />

            <SeatLayout className="mt-10" />
        </PageWrapper>
    )
}