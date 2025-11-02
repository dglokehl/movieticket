"use client"

import Form from "next/form"

import FormField from "@/components/FormField"
import Button from "@/components/Button"

type DeactivateFormProps = {
    className?: string;
}


export default function DeactivateForm({ className, ...rest}: DeactivateFormProps) {
    const handleAction = (formData: FormData) => {
        console.log("can't delete user, supabase sucks")
        console.log(formData)
    }

    return (
        <Form action={handleAction} className={`space-y-5 w-full ${className ? className : ""}`} {...rest}>
            <FormField label="Email:">
                <input type="email" name="email" id="email" />
            </FormField>

            <FormField label="Password:">
                <input type="password" name="password" id="password" />
            </FormField>

            <Button className="mt-8 text-sm !bg-red-400">
                Deactivate Account
            </Button>
        </Form>
    )
}