
import { getMovies } from "@/app/api/actions"

import PageWrapper from "@/components/PageWrapper"
import Search from "@/components/Search"
import ComingSoon from "@/components/card/ComingSoon"
import Section from "@/components/Section"


export default async function HomePage() {
    const upcomingMovies = await getMovies("https://api.themoviedb.org/3/movie/upcoming")
    console.log(upcomingMovies)

    return (
        <PageWrapper
            className="flex flex-col gap-7.5"
            footer
            header={{ title: "Home" }}
        >
            <Search />

            <Section obj={{ heading: "Coming Soon", gap: "gap-4.5" }}>
                {upcomingMovies.results.map((movie: any, i: number) => <ComingSoon movie={movie} key={i} />)}
            </Section>

            <Section obj={{ heading: "Cinemas Near You" }}>
            </Section>
        </PageWrapper>
    )
}