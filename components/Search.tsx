"use client"

import Form from "next/form"

import { LuSearch } from "react-icons/lu";

type SearchProps = {
    children?: React.ReactNode
    className?: string;
}


export default function Search({ children, className, ...rest}: SearchProps) {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const searchQ = e.currentTarget.search.value.toLowerCase().trim()
        console.log("handleSubmit", searchQ)

        if (searchQ === "") {
            e.preventDefault()
        }
    }

    return (
        <Form
            action="/movies"
            onSubmit={handleSubmit}
            className={`w-full flex items-center relative ${className ? className : ""}`}
            {...rest}
        >
            <LuSearch className="size-6 absolute left-8 text-grey-dark pointer-events-none" />

            <input
                type="search"
                name="search"
                id="search"
                placeholder="Search your favourite movie"
                className="py-4 pl-18 w-full bg-grey-dark/30 rounded-xl text-sm font-medium text-grey-medium placeholder:text-grey-dark focus:outline-0"
            />
        </Form>
    )
}