import Link from "next/link"
import { formatDate } from "@/utils/helpers"

type ComingSoonProps = {
    className?: string;
    movie: any;
}

export default function ComingSoon({ className, movie, ...rest}: ComingSoonProps) {
    return (
        <Link href={`/movies/${movie.id}`}>
            <article className={`flex flex-col gap-1 ${className ? className : ""}`} {...rest}>
                <img
                    src={movie.backdrop_path || movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path ? movie.backdrop_path : movie.poster_path}` : "/placeholder.svg"}
                    alt=""
                    className="min-w-72 w-full h-45 object-cover rounded-xl"
                />

                <h2 className="heading-1 line-clamp-1">
                    {movie.title}
                </h2>

                <p className="text-sm text-grey-light">
                    {movie.release_date ? formatDate(movie.release_date).slice(3) : "N/A"}
                </p>
            </article>
        </Link>
    )
}