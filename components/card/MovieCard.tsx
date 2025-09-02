import Link from "next/link"

import { formatStars } from "@/utils/helpers"

import StarRating from "../StarRating";

type MovieCardProps = {
    children?: React.ReactNode
    className?: string;
    movie: any;
    size?: string;
}


export default function MovieCard({ children, className, movie, size, ...rest}: MovieCardProps) {
    return (
        <Link href={`/movies/${movie.id}`}>
            <article className={`${className ? className : ""}`} {...rest}>
                <img
                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "/placeholder.svg"}
                    alt=""
                    className={`${size === "lg" ? "min-w-46 w-full h-62" : "min-w-30 w-full h-46"} object-cover rounded-xl`}
                />

                <h2 className="mt-2.5 text-base font-medium line-clamp-1">
                    {movie.title}
                </h2>

                <h3 className="mt-0.5 text-sm text-grey-light">
                    {size === "lg" ? <StarRating rating={formatStars(movie.vote_average)} /> : movie.genre_ids[0]}
                </h3>
            </article>
        </Link>
    )
}