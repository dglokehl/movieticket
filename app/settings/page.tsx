import { Metadata } from "next"
import Link from "next/link"

import { accountData, privacyData } from "@/data/settingsData"
import { supaUser, supaProfile } from "@/app/api/actions"

import PageWrapper from "@/components/PageWrapper"
import SettingsSection from "@/components/SettingsSection"
import SettingsCard from "@/components/card/SettingsCard"
import Button from "@/components/Button"

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
            {user ? (
                <>
                    <div>
                        <Link href="settings/account">
                            <SettingsCard
                                obj={{
                                    img: profile.image_url ? profile.image_url : "/placeholder_profile.svg",
                                    text: user?.user_metadata.first_name,
                                    subtext: profile.title
                                }}
                            />
                        </Link>
                    </div>

                    <SettingsSection data={accountData} heading="Account" />
                    <SettingsSection data={privacyData} heading="Privacy & Policy" />
                </>
            ) : (
                <div>
                    <Button href="/login">
                        Login
                    </Button>
                </div>
            )}
        </PageWrapper>
    )
}