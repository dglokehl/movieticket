import { FaStar, FaLocationDot } from "react-icons/fa6";

import { formatRating } from "@/utils/helpers";

type CinemaCardProps = {
    className?: string;
    cinema: any;
}

export default function CinemaCard({ className, cinema, ...rest}: CinemaCardProps) {
    return (
        <article className={`flex items-center justify-between ${className ? className : ""}`} {...rest}>
            <div className="flex items-center gap-3">
                <img src="/placeholder.svg" alt={`${cinema.name} logo`} className="size-18 object-cover rounded-xl" />

                <div>
                    <div className="mb-0.5 flex items-center gap-1">
                        <FaLocationDot className="size-3.5 text-grey-dark" />

                        <p className="text-xs text-blue">
                            {String(cinema.distance / 1000).replace(".", ",")} Kilometers
                        </p>
                    </div>

                    <h2 className="text-base font-medium line-clamp-1">
                        {cinema.name}
                    </h2>

                    <p className="text-xs font-light text-grey-medium">
                        Closes at {cinema.opening_hours[1].slice(0, -3)}
                    </p>
                </div>
            </div>

            <p className="flex items-center gap-1 text-sm font-light text-grey-medium">
                <FaStar className="size-4 text-yellow" /> {formatRating(cinema.rating)}
            </p>
        </article>
    )
}