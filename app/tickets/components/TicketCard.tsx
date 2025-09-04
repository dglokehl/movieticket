import { FaStar } from "react-icons/fa6";
import { formatRuntime, formatRating } from "@/utils/helpers"
import { getMovies } from "@/app/api/actions"

import Button from "@/components/Button"

type TicketCardProps = {
    className?: string;
    ticket: any;
    index: number;
}


export default async function TicketCard({ className, ticket, index, ...rest}: TicketCardProps) {
    const movie = await getMovies(`https://api.themoviedb.org/3/movie/${ticket.movie_id}`)
    // console.log(movie)

    const created = new Date(ticket.created_at);
    const dateFormatted = new Intl.DateTimeFormat("en-DK", { day: "2-digit", month: "long", year: "numeric" }).format(created);


    return (
        <article className={`space-y-3 ${className ? className : ""}`} {...rest}>
            <h2 className="heading-1">
                <span className="mr-2">{index}.</span> {dateFormatted}
            </h2>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className="size-18 object-cover rounded-xl" />

                    <div>
                        <p className="text-xs text-blue">
                            {movie.genres[0].name}
                        </p>
                        <h2 className="text-base font-medium line-clamp-1">
                            {movie.title}
                        </h2>
                        <p className="text-xs font-light text-grey-medium">
                            {formatRuntime(movie.runtime)}
                        </p>
                    </div>
                </div>

                <p className="flex items-center gap-1 text-sm font-light text-grey-medium">
                    <FaStar className="size-4 text-yellow" /> {formatRating(movie.vote_average)}
                </p>
            </div>

            <div className="text-xs">
                <p>
                    Cinema: <span className="text-grey-medium">{ticket.cinema}</span>
                </p>
                <p>
                    Date: <span className="text-grey-medium">{ticket.date}</span>
                </p>
                <p>
                    Time: <span className="text-grey-medium">{ticket.time}</span>
                </p>
                <p>
                    Amount: <span className="text-grey-medium">{ticket.amount}</span>
                </p>
            </div>

            <Button href={`/tickets/${ticket.id}`}>
                See ticket{ticket.amount > 1 && "s"}
            </Button>
        </article>
    )
}