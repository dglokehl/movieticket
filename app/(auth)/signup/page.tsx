import { Metadata } from "next"
import Link from "next/link"

import PageWrapper from "@/components/PageWrapper"
import AuthForm from "../components/AuthForm"
import FormField from "@/components/FormField"

export const metadata: Metadata = {
    title: "Sign Up",
}


export default async function SignupPage() {
    return (
        <PageWrapper
            className="space-y-12"
            footer
            header={{ title: metadata.title }}
        >
            <AuthForm onSubmit="signup">
                <FormField label="Email:">
                    <input type="email" name="email" id="email" required />
                </FormField>

                <FormField label="Name:">
                    <input type="text" name="name" id="name" required />
                </FormField>

                <FormField label="Password:">
                    <input type="password" name="password" id="password" required />
                </FormField>
            </AuthForm>

            <p className="text-sm font-medium text-center">
                Already have an account? <Link href="/login" className="underline">Login</Link>
            </p>
        </PageWrapper>
    )
}