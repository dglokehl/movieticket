"use client"

import Form from "next/form"
import { supaUpdateProfile, supaUpdateAccount } from "@/app/api/actions"

import Button from "@/components/Button"

type AccountFormProps = {
    children?: React.ReactNode
    className?: string;
    type: string;
}


export default function AccountForm({ children, className, type, ...rest}: AccountFormProps) {
    return (
        <section className="space-y-6">
            <h2 className="heading-1">
                {type === "profile" ? "Profile" : type === "account" ? "Account" : ""} Settings
            </h2>

            <Form action={type === "profile" ? supaUpdateProfile : type === "account" ? supaUpdateAccount : ""} className={`space-y-5 ${className ? className : ""}`} {...rest}>
                {children}

                <Button className="mt-8 text-sm">
                    Update {type === "profile" ? "Profile" : type === "account" ? "Account" : ""}
                </Button>
            </Form>

            {type === "account" && (
                <Button href="account/delete" className="bg-red-400 text-sm">
                    Deactivate Account
                </Button>
            )}
        </section>
    )
}