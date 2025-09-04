"use client"

import Form from 'next/form';
import { login, signup } from "@/app/api/auth";

import Button from "@/components/Button";

type AuthFormProps = {
    children?: React.ReactNode
    className?: string;
    onSubmit: string;
}


export default function AuthForm({ children, className, onSubmit, ...rest}: AuthFormProps) {
    return (
        <Form action={onSubmit === "login" ? login : signup} className={`space-y-5 ${className ? className : ""}`} {...rest}>
            {children}

            <Button className="text-xs">
                {onSubmit === "login" ? "Login" : "Sign Up"}
            </Button>
        </Form>
    )
}