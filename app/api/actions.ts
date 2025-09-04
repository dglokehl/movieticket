"use server"

import { createClient } from "@/utils/supabase/server"


// SUPABASE
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
        .eq("id", user_id)

    if (!data && error) {
        return error
    }

    return data[0]
}

export async function supaTickets() {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()
    // console.log(user)

    const { data, error } = await supabase
        .from("tickets")
        .select()
        .eq("user_id", user && user.id)

    if (!data && error) {
        return
    }

    return data
}


export async function supaCreateTicket(obj: any) {
    // console.log("supaCreateTicket called")
    const supabase = await createClient()
    // console.log("createClient called")

    const { data: { user } } = await supabase.auth.getUser()
    // console.log("user called")

    const { error } = await supabase
        .from("tickets")
        .insert({
            user_id: user && user.id,
            date: obj.date,
            time: `${obj.time}:00`,
            amount: obj.amount,
            cinema: obj.cinema,
            movie_id: obj.movie_id,
            movie_title: obj.movie_title,
        })

    if (error) {
        console.log(error)
        return
    }
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
