import { FaRegBookmark } from "react-icons/fa6";

import PageWrapper from "@/components/PageWrapper"

export const metadata = {
    title: "Saved Plan",
}


export default async function SavedPage() {
    return (
        <PageWrapper
            className="flex flex-col gap-7.5"
            footer
            header={{ title: metadata.title, button: <FaRegBookmark /> }}
        >
            <h2>settings</h2>
        </PageWrapper>
    )
}