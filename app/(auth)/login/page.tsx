import { Metadata } from "next"
import Link from "next/link"

import PageWrapper from "@/components/PageWrapper"
import AuthForm from "../components/AuthForm"
import FormField from "@/components/FormField"

export const metadata: Metadata = {
    title: "Login",
}


export default async function LoginPage() {
    return (
        <PageWrapper
            className="space-y-12"
            footer
            header={{ title: metadata.title }}
        >
            <AuthForm onSubmit="login">
                <FormField label="Email:">
                    <input type="email" name="email" id="email" required />
                </FormField>

                <FormField label="Password:">
                    <input type="password" name="password" id="password" required />
                </FormField>
            </AuthForm>

            <p className="text-sm font-medium text-center">
                Don't have an account yet? <Link href="/signup" className="underline">Sign up</Link>
            </p>
        </PageWrapper>
    )
}