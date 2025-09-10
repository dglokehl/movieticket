import { Metadata } from "next"
import Link from "next/link"

import { supaUser, supaProfile } from "@/app/api/actions"

import PageWrapper from "@/components/PageWrapper"
import SavedCard from "./components/SavedCard"

export const metadata: Metadata = {
    title: "Settings",
}


export default async function SettingsPage() {
    const user = await supaUser()
    console.log("user", user)

    const profile = user?.id && await supaProfile(user.id)
    console.log("profile", profile)


    return (
        <PageWrapper
            className="flex flex-col gap-5 divide-y-1 divide-grey-dark *:pb-8"
            footer
            header={{ title: metadata.title as string }}
        >
            {profile.saved_movies
                ? profile.saved_movies.map((movie: any, i: number) => <SavedCard movie={movie} key={i} />)
                : (
                    <p className="text-xl text-grey-medium text-center">
                        You haven't saved any movies yet
                    </p>
                )
            }
        </PageWrapper>
    )
}