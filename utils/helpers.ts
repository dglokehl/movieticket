

export function formatRating(rating: number) {
    return (Math.round(rating * 100) / 100).toFixed(1)
}

export function formatStars(rating: number) {
    return Math.round(rating) / 2
}


export function formatRuntime(runtime: number) {
    const h = String(Math.floor(runtime / 60))
    const m = String(runtime % 60)

    return `${h}h ${m}m`
}