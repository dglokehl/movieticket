"use client"

import Form from "next/form";
import { login, signup } from "@/app/api/auth";

import FormField from "@/components/FormField";
import Button from "@/components/Button";

type AuthFormProps = {
    className?: string;
    slug: string;
}


export default function AuthForm({ className, slug, ...rest}: AuthFormProps) {
    return (
        <Form
            action={slug === "login" ? login : signup}
            className={`space-y-5 ${className ? className : ""}`}
            {...rest}
        >
            <FormField label="Email:">
                <input type="email" name="email" id="email" required />
            </FormField>

            {slug === "signup" && (
                <FormField label="Name:">
                    <input type="text" name="name" id="name" required />
                </FormField>
            )}

            <FormField label="Password:">
                <input type="password" name="password" id="password" required />
            </FormField>

            <Button className="text-xs">
                {slug === "login" ? "Login" : "Sign Up"}
            </Button>
        </Form>
    )
}