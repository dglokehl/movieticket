import Link from "next/link"

import { formatStars, formatDate } from "@/utils/helpers"

import StarRating from "./StarRating"

type MovieCardProps = {
    className?: string;
    movie: any;
    type?: string;
}


export default async function MovieCard({ className, movie, type, ...rest}: MovieCardProps) {
    let imgUrl = "/placeholder.svg"
    if (movie.poster_path || movie.backdrop_path) {
        if (type === "ComingSoon") {
            imgUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path ? movie.backdrop_path : movie.poster_path}`
        } else {
            imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path ? movie.poster_path : movie.backdrop_path}`
        }
    }

    return (
        <Link href={`/movies/${movie.id}`}>
            <article className={`${className ? className : ""}`} {...rest}>
                <img
                    src={imgUrl}
                    alt={`${movie.title} poster`}
                    className={`${type === "lg" ? "min-w-46 w-full h-62" : type === "ComingSoon" ? "min-w-72 w-full h-45 object-cover rounded-xl" : "min-w-30 w-full h-46"} object-cover rounded-xl`}
                />

                <h2 className="mt-2.5 text-base font-medium line-clamp-1">
                    {movie.title}
                </h2>

                <h3 className="mt-0.5 text-sm text-grey-light">
                    {type === "ComingSoon" ? movie.release_date ? formatDate(movie.release_date).slice(3) : "N/A" : <StarRating rating={formatStars(movie.vote_average ? movie.vote_average : 0)} />}
                </h3>
            </article>
        </Link>
    )
}