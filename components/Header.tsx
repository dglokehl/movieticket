import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";

type HeaderProps = {
    className?: string;
    obj: {
        title: string;
        button?: React.ReactNode;
    }
}


export default function Header({ className, obj, ...rest}: HeaderProps) {
    return (
        <header className={`h-header px-default flex justify-between items-center gap-3 fixed top-0 inset-x-0 bg-bg ${className ? className : ""}`} {...rest}>
            <Link href="/" className="size-6 *:size-6">
                <FaChevronLeft />
            </Link>

            <h1 className="heading-1 text-center line-clamp-1">
                {obj.title}
            </h1>

            <button className="size-6 *:size-5 cursor-pointer">
                {obj.button && obj.button}
            </button>
        </header>
    )
}