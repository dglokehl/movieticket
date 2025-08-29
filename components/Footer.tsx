"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";

import { LuHouse, LuCompass, LuBookmark, LuUser } from "react-icons/lu";

type FooterProps = {
    className?: string;
}

const footerData = [
    {
        href: "/",
        icon: <LuHouse />,
    },
    {
        href: "/movies",
        icon: <LuCompass />,
    },
    {
        href: "/saved",
        icon: <LuBookmark />,
    },
    {
        href: "/settings",
        icon: <LuUser />,
    },
]

export default function Footer({ className, ...rest}: FooterProps) {
    const pathname = usePathname()

    return (
        <footer className={`h-20 flex fixed inset-x-0 bottom-0 *:size-full *:*:size-full ${className ? className : ""}`} {...rest}>
            <nav>
                <menu className="flex justify-around items-center *:*:*:size-6 text-grey-dark">
                    {footerData.map((link, i) => (
                        <li key={i}>
                            <Link href={link.href} className={pathname === link.href ? "text-blue-500" : ""}>
                                {link.icon}
                            </Link>
                        </li>
                    ))}
                </menu>
            </nav>
        </footer>
    )
}