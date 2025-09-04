import { Metadata } from "next";

import { supaTickets } from "../api/actions";

import PageWrapper from "@/components/PageWrapper"
import TicketCard from "./components/TicketCard";

export const metadata: Metadata = {
    title: "Tickets",
}


export default async function SavedPage() {
    const tickets = await supaTickets()
    // console.log("tickets", tickets)

    return (
        <PageWrapper
            className="space-y-9"
            footer
            header={{ title: metadata.title }}
        >
            {tickets && tickets.map((ticket, i) => <TicketCard index={i + 1} ticket={ticket} key={i} />)}
        </PageWrapper>
    )
}