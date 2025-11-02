"use server"

import { createClient } from "@/utils/supabase/server"


// SUPABASE
export async function supaSelect(from: string) {
    const supabase = await createClient()

    const { data, error } = await supabase
        .from(from)
        .select()

    if (!data && error) {
        return
    }

    return data
}

export async function supaSelectEq(from: string, select: string, eq1: string, eq2: string) {
    const supabase = await createClient()

    const { data, error } = await supabase
        .from(from)
        .select(select)
        .eq(eq1, eq2)

    if (!data && error) {
        return
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
            seats: obj.seats,
            cinema: obj.cinema,
            movie_id: obj.movie_id,
            movie_title: obj.movie_title,
        })

    if (error) {
        // console.log(error)
        return
    }
}


export async function supaUpdateProfile(formData: FormData) {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()

    const { data, error } = await supabase
        .from("profiles")
        .update({
            title: formData.get("user_title") as string
        })
        .eq("id", user?.id)
        .select()
    // console.log(data, error)
}


export async function supaUpdateAccount(formData: FormData) {
    const supabase = await createClient()

    const { data, error } = await supabase.auth.updateUser({
        email: formData.get("email") as string,
        data: { first_name: formData.get("name") as string }
    })
    // console.log(data, error)
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