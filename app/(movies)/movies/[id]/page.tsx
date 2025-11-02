import { Metadata } from "next";
import { FaRegBookmark, FaStar } from "react-icons/fa6";

import { getMovies } from "@/app/api/actions"
import { formatRating, formatRuntime } from "@/utils/helpers";

import PageWrapper from "@/components/PageWrapper"
import Button from "@/components/Button";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const data = await getMovies(`https://api.themoviedb.org/3/movie/${id}`)

    return {
        title: data.title
    }
}


export default async function MovieDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const movie = await getMovies(`https://api.themoviedb.org/3/movie/${id}`)
    const credits = await getMovies(`https://api.themoviedb.org/3/movie/${id}/credits`)
    console.log(movie, credits)

    const movieDirector = credits.crew.filter((crew: any) => crew.job === "Director")[0].name

    return (
        <PageWrapper
            className=""
            header={{ title: movie.title }}
        >
            <figure className="flex flex-col items-center">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} poster`} className="h-92 w-auto rounded-3xl" />
            </figure>

            <h2 className="mt-3 mb-1.5 heading-1">
                {movie.title}
            </h2>
            <div className="flex items-center gap-2 text-sm font-light text-grey-medium overflow-x-scroll *:whitespace-nowrap">
                <p>
                    {movieDirector}
                </p>
                <p className="text-grey-dark">|</p>
                <p className="flex items-center gap-1">
                    <FaStar className="inline text-yellow" /> {formatRating(movie.vote_average)}
                </p>
                <p className="text-grey-dark">|</p>
                <p>
                    {formatRuntime(movie.runtime)}
                </p>
            </div>

            <ul className="mt-4 flex gap-3 overflow-x-scroll">
                {movie.genres.map((genre: any) => (
                    <li className="px-3.5 py-1 text-sm bg-[#252932] text-grey-medium rounded-lg whitespace-nowrap" key={genre.id}>
                        {genre.name}
                    </li>
                ))}
            </ul>

            <section className="mt-7">
                <h3 className="mb-2 heading-1">
                    Synopsis
                </h3>
                <p className="text-sm font-light text-grey-dark text-justify line-clamp-3">
                    {movie.overview}
                </p>
            </section>

            <Button href={`${id}/booking`} className="mt-7">
                Book Ticket
            </Button>
        </PageWrapper>
    )
}