"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"

import { supaCreateTicket } from "@/app/api/actions"

import Form from "next/form"
import FormField from "@/components/FormField"
import Button from "@/components/Button"

type CheckoutFormProps = {
    className?: string;
    movie: string;
    movie_title: string;
}

export default function CheckoutForm({ className, movie, movie_title, ...rest}: CheckoutFormProps) {
    const searchParams = useSearchParams();

    const seats = searchParams.get("seats")?.split(",")
    const params = {
        movie_id: movie,
        movie_title: movie_title,
        cinema: searchParams.get("cinema"),
        date: searchParams.get("date"),
        time: searchParams.get("time"),
        seats: seats,
    }
    console.log(params)

    const [success, setSuccess] = useState(false);

    const handleSubmit = (formData: FormData) => {
        console.log(formData)
        setSuccess(true)
        supaCreateTicket(params)
    }

    return (
        <Form
            action={handleSubmit} 
            className={`grid grid-cols-2 gap-y-3 gap-x-8 *:col-span-2 ${className ? className : ""}`}
            {...rest}
        >
            <h2 className="heading-1">
                Payment Details
            </h2>

            <FormField label="Cardholder Name">
                <input type="text" name="card_name" id="card_name" />
            </FormField>

            <FormField label="Card Number">
                <input type="text" name="card_num" id="card_num" />
            </FormField>

            <FormField label="Date" className="!col-span-1">
                <input type="text" name="card_date" id="card_date" />
            </FormField>

            <FormField label="CVV" className="!col-span-1">
                <input type="text" name="card_cvv" id="card_cvv" />
            </FormField>

            <Button className="mt-7 flex justify-evenly items-center">
                <p className="px-6">Pay Now</p>
                <p>|</p>
                <p>${Number(seats?.length) * 5 - 0.01}</p>
            </Button>

            {success && (
                <div className="flex items-end fixed inset-0 bg-black/25">
                    <div className="p-7 pt-18 w-full bg-blue text-center rounded-t-[60px] rounded-b-[20px]">
                        <h2 className="text-3xl font-semibold">
                            Your payment was successful
                        </h2>
                        <Button href={`/tickets`} className="mt-8 !bg-black">
                            See E-Ticket
                        </Button>
                    </div>
                </div>
            )}
        </Form>
    )
}