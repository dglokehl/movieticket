"use server"

import { cookies } from "next/headers";


export async function getCookie(key: string) {
    const cookiesData = await cookies()
    return cookiesData.get(key)
}


export async function setCookie(key: string, value: any) {
    const cookiesData = await cookies()
    cookiesData.set(key, value)
}


export async function hasCookie(key: string): Promise<boolean> {
    const cookiesData = await cookies()
    return cookiesData.has(key)
}


export async function deleteCookie(key: string) {
    const cookiesData = await cookies()
    cookiesData.delete(key)
}