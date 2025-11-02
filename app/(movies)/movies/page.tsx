import { Metadata } from "next";

import PageWrapper from "@/components/PageWrapper"
import Section from "../components/Section";
import SearchButton from "@/components/buttons/SearchButton";

export const metadata: Metadata = {
    title: "Explore Movies",
}


export default async function MoviesPage() {
    return (
        <PageWrapper
            className="flex flex-col gap-7.5"
            footer
            header={{ title: metadata.title, button: <SearchButton /> }}
        >
            <Section
                obj={{
                    movie: {
                        link: "https://api.themoviedb.org/3/discover/movie?without_genres=99,10755&primary_release_year=2025&sort_by=vote_average.desc&vote_count.gte=200&with_release_type=2|3",
                        type: "lg",
                    },
                    heading: "Top Movies",
                    gap: "gap-4.5",
                    button: "See more",
                }}
            />

            <Section
                obj={{
                    movie: {
                        link: "https://api.themoviedb.org/3/discover/movie?without_genres=99,10755&primary_release_year=2025&sort_by=vote_count.desc"
                    },
                    heading: "Recommended",
                    gap: "gap-4.5",
                    button: "See more",
                }}
            />
        </PageWrapper>
    )
}