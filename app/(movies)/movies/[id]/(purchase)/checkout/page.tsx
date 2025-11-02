import { Metadata } from "next";

import { getMovies } from "@/app/api/actions";

import PageWrapper from "@/components/PageWrapper"
import CheckoutForm from "../components/CheckoutForm";

export const metadata: Metadata = {
    title: "Checkout",
}


export default async function CheckoutPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const movie = await getMovies(`https://api.themoviedb.org/3/movie/${id}`)

    return (
        <PageWrapper
            className=""
            header={{ title: metadata.title }}
        >
            <CheckoutForm movie={id} movie_title={movie.title} />
        </PageWrapper>
    )
}