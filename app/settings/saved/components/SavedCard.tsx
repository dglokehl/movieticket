import Link from "next/link"

type SavedCardProps = {
    className?: string;
    movie: any;
}

export default function SavedCard({ className, movie, ...rest}: SavedCardProps) {
    return (
        <Link href={`/movies/${movie.id}`}>
            <article className={`relative ${className ? className : ""}`} {...rest}>
                <img
                    src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : "/placeholder.svg"}
                    alt=""
                    className="min-w-30 w-full h-46 object-cover rounded-xl"
                />

                <h2 className="mt-2.5 text-base font-medium line-clamp-1">
                    {movie.title}
                </h2>
            </article>
        </Link>
    )
}