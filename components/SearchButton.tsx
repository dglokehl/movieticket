"use client"
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Search from "./Search"

type SearchButtonProps = {
    className?: string;
}


export default function SearchButton({ className, ...rest}: SearchButtonProps) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <FaMagnifyingGlass onClick={() => setOpen(!open)} />

            {open && (
                <div className="px-default pb-default fixed inset-x-0 top-header z-999999999999 bg-bg">
                    <Search />
                </div>
            )}
        </>
    )
}