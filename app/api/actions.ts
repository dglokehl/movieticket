import { createClient } from "@/utils/supabase/server"


// SUPABASE
export async function supaSelect(from: string, select?: string) {
    const supabase = await createClient()
    const { data, error } = await supabase
        .from(from)
        .select(select)

    if (!data && error) {
        return error
    }

    return data
}


export async function supaUser() {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()

    return user
}


export async function supaProfile(user_id: string) {
    const supabase = await createClient()

    const { data, error } = await supabase
        .from("profiles")
        .select()
        .eq("user_id", user_id)

    if (!data && error) {
        return error
    }

    return data[0]
}



// TMDB
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
