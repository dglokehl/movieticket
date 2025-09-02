import Link from "next/link"

import PageWrapper from "@/components/PageWrapper"
import SettingsSection from "@/components/SettingsSection"
import SettingsCard from "@/components/card/SettingsCard"

import { accountData, privacyData } from "@/data/settingsData"

export const metadata = {
    title: "Settings",
}


export default async function SettingsPage() {
    return (
        <PageWrapper
            className="flex flex-col gap-5 divide-y-1 divide-grey-dark *:pb-8"
            footer
            header={{ title: metadata.title }}
        >
            <div>
                <SettingsCard obj={{ icon: "", text: "username", subtext: "idk?" }} />
            </div>
            <SettingsSection data={accountData} heading="Account" />
            <SettingsSection data={privacyData} heading="Privacy & Policy" />
        </PageWrapper>
    )
}