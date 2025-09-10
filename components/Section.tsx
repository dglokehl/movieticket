import { createClient } from "@/utils/supabase/server"
import { getMovies } from "@/app/api/actions"

import ComingSoon from "./card/ComingSoon"
import MovieCard from "./card/MovieCard"
import CinemaCard from "./card/CinemaCard"

type SectionProps = {
    obj: {
        heading: string;
        button?: string;
        gap?: string;
        orientation?: string;
        movie?: {
            link: string;
            type: string;
            size?: string;
        }
    }
}


export default async function Section({ obj, ...rest}: SectionProps) {
    let arr
    if (!obj.movie) {
        const supabase = await createClient()
        const { data, error } = await supabase
            .from("cinemas")
            .select()
        console.log("cinemas", data)

        arr = data
    } else {
        const movies = await getMovies(obj.movie.link)
        console.log(movies)
        arr = movies.results
    }

    return (
        <section {...rest}>
            <div className="mb-3 flex justify-between items-end">
                <h2 className="heading-1">
                    {obj.heading}
                </h2>

                {obj?.button && (
                    <p className="text-sm font-light text-grey-dark hover:underline cursor-pointer">
                        {obj.button}
                    </p>
                )}
            </div>

            <div className={`flex ${obj.gap ? obj.gap : "gap-7.5"} ${!obj.movie ? "flex-col overflow-y-scroll" : "overflow-x-scroll"}`}>
                {arr.map((movie: any, i: number) => 
                    !obj.movie ? <CinemaCard cinema={movie} key={i} />
                        : obj.movie.type === "ComingSoon" ? <ComingSoon movie={movie} key={i} />
                        : obj.movie.type === "Movie" ? <MovieCard movie={movie} key={i} size={obj.movie.size} />
                    : ""
                )}
            </div>
        </section>
    )
}