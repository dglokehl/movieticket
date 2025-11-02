import { Metadata } from "next";
import Form from "next/form";

import { getMovies } from "@/app/api/actions";

import PageWrapper from "@/components/PageWrapper"
import MovieCard from "../../components/MovieCard";
import FormField from "@/components/FormField";

export const metadata: Metadata = {
    title: "Search",
}


export default async function SearchPage(props: { searchParams?: Promise<{ search: string; }> }) {
    const searchParams = await props.searchParams;
    const search = searchParams?.search

    const movies = await getMovies(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US`)
    console.log(movies)

    return (
        <PageWrapper
            className="space-y-8"
            footer
            header={{ title: metadata.title }}
        >
            <Form action="">
                <FormField label="Showing results for:">
                    <input type="text" name="search" id="search" defaultValue={searchParams?.search} className="text-grey-medium" />
                </FormField>
            </Form>

            <div className="flex flex-col gap-6">
                {movies.results.length > 0
                    ? movies.results.map((movie: any, i: number) => <MovieCard movie={movie} key={i} />)
                    : (
                        <p className="text-xl text-grey-medium text-center">
                            No results found
                        </p>
                    )
                }
            </div>
        </PageWrapper>
    )
}