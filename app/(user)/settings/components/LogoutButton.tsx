"use client"

import { logout } from "@/app/api/auth"

type LogoutButtonProps = {
    children?: React.ReactNode
    className?: string;
}

export default function LogoutButton({ children, className, ...rest}: LogoutButtonProps) {
    return (
        <div className={`${className ? className : ""}`} onClick={logout} {...rest}>
            {children}
        </div>
    )
}