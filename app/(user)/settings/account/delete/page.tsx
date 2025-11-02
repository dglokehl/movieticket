import { Metadata } from "next"
import { redirect } from "next/navigation"

import { supaUser, supaProfile } from "@/app/api/actions"

import PageWrapper from "@/components/PageWrapper"
import DeactivateForm from "./components/DeactivateForm"

export const metadata: Metadata = {
    title: "Deactivate",
}


export default async function DeactivatePage() {
    const user = await supaUser()
    console.log("user", user)

    const profile = user?.id && await supaProfile(user.id)
    console.log("profile", profile)

    if (!user) {
        redirect("/")
    }


    return (
        <PageWrapper
            className="h-dvh flex items-center"
            footer
            header={{ title: metadata.title }}
        >
            {user && (
                <DeactivateForm />
            )}
        </PageWrapper>
    )
}