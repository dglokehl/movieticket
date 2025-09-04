import { Metadata } from "next";

import { createClient } from "@/utils/supabase/server";

import PageWrapper from "@/components/PageWrapper"
import Button from "@/components/Button";
import Ticket from "./components/Ticket";

export const metadata: Metadata = {
    title: "E-Ticket",
}


export default async function SavedPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const supabase = await createClient()
    const { data, error } = await supabase
        .from("tickets")
        .select()
        .eq("id", id)
    const ticket = data && data[0]
    console.log("ticket", ticket)

    return (
        <PageWrapper
            className="space-y-11"
            footer
            header={{ title: metadata.title }}
        >
            <section>
                <h2 className="mb-2.5 heading-1">
                    Instruction
                </h2>
                <p className="text-sm font-light text-grey-medium text-justify">
                    Come to the cinema, show and scan the barcode to the space provided. Continue to comply with health protocols.
                </p>
            </section>

            <Ticket ticket={ticket} />

            <Button>
                Download E-Ticket
            </Button>
        </PageWrapper>
    )
}