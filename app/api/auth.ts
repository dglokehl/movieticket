"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { createClient } from "@/utils/supabase/server"


export async function login(formData: FormData) {
    const supabase = await createClient()

    const { error } = await supabase.auth.signInWithPassword({
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    })
    console.log(error)

    if (error) {
        console.log(error)
        return
    }

    revalidatePath("/", "layout")
    redirect("/")
}


export async function signup(formData: FormData) {
    const supabase = await createClient()

    if (!formData.get("name")) {
        console.log("fuckyou")
        return
    }

    const { error } = await supabase.auth.signUp({
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        options: {
            data: {
                first_name: formData.get("name") as string
            }
        }
    })

    if (error) {
        console.log(error)
        return
    }

    revalidatePath("/", "layout")
    redirect("/")
}


export async function logout() {
    const supabase = await createClient()

    const { error } = await supabase.auth.signOut()

    if (error) {
        console.log(error)
        return
    }
}