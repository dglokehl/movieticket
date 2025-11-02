import { Metadata } from "next"
import { redirect } from "next/navigation"

import { supaUser, supaProfile } from "@/app/api/actions"

import PageWrapper from "@/components/PageWrapper"
import FormField from "@/components/FormField"
import AccountForm from "../components/AccountForm"

export const metadata: Metadata = {
    title: "Account",
}


export default async function AccountPage() {
    const user = await supaUser()
    console.log("user", user)

    const profile = user?.id && await supaProfile(user.id)
    console.log("profile", profile)

    if (!user) {
        redirect("/")
    }


    return (
        <PageWrapper
            className="flex flex-col gap-5 divide-y-1 divide-grey-dark *:pb-8"
            footer
            header={{ title: metadata.title }}
        >
            {user && (
                <>
                    <AccountForm type="profile">
                        <FormField label="Your Title:">
                            <input type="text" name="user_title" id="user_title" defaultValue={profile.title} />
                        </FormField>

                        <FormField label="Choose an avatar:">
                            <input type="text" name="user_avatar" id="user_avatar" defaultValue={profile.image_url} />
                        </FormField>
                    </AccountForm>

                    <AccountForm type="account">
                        <FormField label="Email:">
                            <input type="email" name="email" id="email" defaultValue={user.email} />
                        </FormField>

                        <FormField label="Name:">
                            <input type="text" name="name" id="name" defaultValue={user.user_metadata.first_name} />
                        </FormField>
                    </AccountForm>
                </>
            )}
        </PageWrapper>
    )
}