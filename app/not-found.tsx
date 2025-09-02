import Link from "next/link"

import PageWrapper from "@/components/PageWrapper"

export default async function NotFoundPage() {
    return (
        <PageWrapper
            className="space-y-4 text-center"
            footer
            header={{ title: "Not found" }}
        >
            <h2 className="text-3xl font-medium">
                Page Not Found
            </h2>
            <Link href="/" className="underline">
                Back to home?
            </Link>
        </PageWrapper>
    )
}