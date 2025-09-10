import { supaUser } from "./api/actions"

import PageWrapper from "@/components/PageWrapper"
import Search from "@/components/Search"
import Section from "@/components/Section"


export default async function HomePage() {
    const user = await supaUser()
    console.log("user", user)

    return (
        <PageWrapper
            className="flex flex-col gap-7.5"
            footer
            header={{ custom: (
                <header className="h-header px-default flex justify-between items-center fixed top-0 inset-x-0 z-99999 bg-bg">
                    {user ? (
                        <>
                            <div className="space-y-0.5">
                                <p className="text-sm text-grey-light">
                                    Welcome Back,
                                </p>
                                <p className="text-lg font-medium">
                                    {user.user_metadata.first_name}
                                </p>
                            </div>
                            <figure>
                                <img src="/placeholder_profile.svg" alt="" className="size-12 object-cover rounded-[12px]" />
                            </figure>
                        </>
                    ) : (
                        <h1 className="flex-1 heading-1 text-center">
                            MovieTicket
                        </h1>
                    )}
                </header>
            ) }}
        >
            <Search />

            <Section
                obj={{
                    movie: {
                        link: "https://api.themoviedb.org/3/movie/upcoming",
                        type: "ComingSoon"
                    },
                    heading: "Coming Soon",
                    gap: "gap-4.5",
                }}
            />

            <Section
                obj={{
                    heading: "Cinemas Nearby",
                    gap: "gap-4.5",
                    button: "See all"
                }}
            />
        </PageWrapper>
    )
}