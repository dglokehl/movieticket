"use client"

import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa6";

type BackButtonProps = {
    children?: React.ReactNode
    className?: string;
}

export default function BackButton({ children, className, ...rest}: BackButtonProps) {
    const router = useRouter()

    return (
        <div className="size-6 *:size-6 cursor-pointer" onClick={() => router.back()}>
            <FaChevronLeft/>
        </div>
    )
}