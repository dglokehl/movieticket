import Link from "next/link"

type ComingSoonProps = {
    className?: string;
    movie: any;
}

export default function ComingSoon({ className, movie, ...rest}: ComingSoonProps) {
    return (
        <Link href={`/movies/${movie.id}`}>
            <article className={`flex flex-col gap-1 ${className ? className : ""}`} {...rest}>
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt=""
                    className="min-w-72 w-full h-45 object-cover rounded-xl"
                />

                <h2 className="heading-1 line-clamp-1">
                    {movie.title}
                </h2>

                <p className="text-sm text-grey-light">
                    {movie.release_date}
                </p>
            </article>
        </Link>
    )
}