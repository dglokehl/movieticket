export async function getMovies(link: string) {
    const res = await fetch(link, {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: String(process.env.TMDB_KEY)
        },
        cache: "force-cache",
        next: { revalidate: 3600 }
    })
    const data = await res.json()

    if (!res.ok) {
        throw new Error("Error fetching results")
    }

    return data
}
