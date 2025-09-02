
import { getMovies } from "@/app/api/actions"
import { FaMagnifyingGlass } from "react-icons/fa6";

import PageWrapper from "@/components/PageWrapper"
import Section from "@/components/Section"
import MovieCard from "@/components/card/MovieCard"

export const metadata = {
    title: "Explore Movies",
}


export default async function MoviesPage() {
    const topMovies = await getMovies("https://api.themoviedb.org/3/discover/movie?without_genres=99,10755&primary_release_year=2025&sort_by=vote_average.desc&vote_count.gte=200&with_release_type=2|3")
    console.log(topMovies)

    const recommendedMovies = await getMovies("https://api.themoviedb.org/3/discover/movie?without_genres=99,10755&primary_release_year=2025&sort_by=vote_count.desc")
    console.log(recommendedMovies)


    return (
        <PageWrapper
            className="flex flex-col gap-7.5"
            footer
            header={{ title: metadata.title, button: <FaMagnifyingGlass /> }}
        >
            <Section obj={{ heading: "Coming Soon", button: "See more" }}>
                {topMovies.results.map((movie: any, i: number) => <MovieCard movie={movie} key={movie.id} size="lg" />)}
            </Section>

            <Section obj={{ heading: "Recommended", button: "See more" }}>
                {recommendedMovies.results.map((movie: any, i: number) => <MovieCard movie={movie} key={movie.id} />)}
            </Section>
        </PageWrapper>
    )
}