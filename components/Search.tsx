"use client"

import Form from "next/form"

import { LuSearch, LuArrowRightToLine } from "react-icons/lu";

type SearchProps = {
    className?: string;
}


export default function Search({ className, ...rest}: SearchProps) {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const searchQ = e.currentTarget.search.value.toLowerCase().trim()
        console.log("handleSubmit", searchQ)

        if (searchQ === "") {
            e.preventDefault()
        }
    }

    return (
        <Form
            action="/movies/search"
            onSubmit={handleSubmit}
            className={`w-full flex items-center relative ${className ? className : ""}`}
            {...rest}
        >
            <LuSearch className="size-6 absolute left-6 z-9 text-grey-dark pointer-events-none" />

            <input
                type="search"
                name="search"
                id="search"
                placeholder="Search your favourite movie"
                className="py-4 pl-18 pr-14 w-full bg-grey-dark/30 rounded-xl text-sm font-medium text-grey-medium placeholder:text-grey-dark focus:outline-0 peer"
            />

            <button className="*:size-6 absolute right-3 not-peer-[:placeholder-shown]:right-4 z-9 text-grey-dark cursor-pointer opacity-0 not-peer-[:placeholder-shown]:opacity-100 duration-150">
                <LuArrowRightToLine />
            </button>
        </Form>
    )
}