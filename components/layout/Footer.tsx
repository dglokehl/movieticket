"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";

import { FaHouse, FaCompass, FaTicket, FaUser } from "react-icons/fa6";

const footerData = [
    {
        href: "/",
        icon: <FaHouse />,
    },
    {
        href: "/movies",
        icon: <FaCompass />,
    },
    {
        href: "/tickets",
        icon: <FaTicket />,
    },
    {
        href: "/settings",
        icon: <FaUser />,
    },
]


export default function Footer() {
    const pathname = usePathname()

    return (
        <footer className="h-20 flex fixed inset-x-0 bottom-0 bg-bg *:size-full *:*:size-full">
            <nav>
                <menu className="flex justify-around items-center text-grey-dark">
                    {footerData.map((link, i) => (
                        <li key={i}>
                            <Link href={link.href} className={`*:size-6 ${pathname === link.href ? "text-blue-500" : ""}`}>
                                {link.icon}
                            </Link>
                        </li>
                    ))}
                </menu>
            </nav>
        </footer>
    )
}