import { Metadata } from "next"
import { notFound, redirect } from "next/navigation"
import Link from "next/link"

import { supaUser } from "@/app/api/actions"

import PageWrapper from "@/components/PageWrapper"
import AuthForm from "./components/AuthForm"


function formatSlug(slug: string) {
    let title = slug
    if (slug === "login") {
        title = "Login"
    }
    if (slug === "signup") {
        title = "Sign Up"
    }
    return title
}


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    return {
        title: formatSlug(slug)
    }
}


export default async function AuthPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    console.log("slug:", slug)

    if (slug !== "login" && slug !== "signup") {
        notFound()
    }
    if (await supaUser()) {
        redirect("/")
    }

    return (
        <PageWrapper
            className="space-y-12"
            footer
            header={{ title: formatSlug(slug) }}
        >
            <AuthForm slug={slug} />

            <p className="text-sm font-medium text-center">
                {slug === "login" ? (
                    <>
                        Don't have an account yet? <Link href="/signup" className="underline">Sign up</Link>
                    </>
                ) : (
                    <>
                        Already have an account? <Link href="/login" className="underline">Login</Link>
                    </>
                )}
            </p>
        </PageWrapper>
    )
}