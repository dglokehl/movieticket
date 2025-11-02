import { FaStar, FaRegStar, FaRegStarHalfStroke } from "react-icons/fa6";

type StarRatingProps = {
    className?: string;
    rating: number;
}


export default function StarRating({ className, rating, ...rest}: StarRatingProps) {
    return (
        <div className={`flex items-center gap-0.5 text-yellow *:size-4 ${className ? className : ""}`} {...rest}>
            {Array.from({ length: 5 }).map((_, i) => {
                const starNumber = i + 1;

                if (rating >= starNumber) {
                    return <FaStar key={i} />;
                } else if (rating >= starNumber - 0.5) {
                    return <FaRegStarHalfStroke key={i} />;
                } else {
                    return <FaRegStar key={i} />;
                }
            })}
        </div>
    )
}