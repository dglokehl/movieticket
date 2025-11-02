export function formatRating(rating: number) {
    return (Math.round(rating * 100) / 100).toFixed(1)
}


export function formatStars(rating: number) {
    return Math.round(rating) / 2
}


export function formatDate(date: Date) {
    const created = new Date(date);
    const dateFormatted = new Intl.DateTimeFormat("en-DK", { day: "2-digit", month: "long", year: "numeric" }).format(created);
    return dateFormatted
}


export function formatRuntime(runtime: number) {
    const h = String(Math.floor(runtime / 60))
    const m = String(runtime % 60)

    return `${h}h ${m}m`
}