import Link from "next/link"

type ButtonProps = {
    children?: React.ReactNode
    className?: string;
    href?: string;
}


export default function Button({ children, className, href, ...rest}: ButtonProps) {
    const buttonStyle = "py-4 w-full block text-lg font-medium text-center bg-blue rounded-xl cursor-pointer"
    if (href) {
        return (
            <Link href={href} className={`${buttonStyle} ${className ? className : ""}`} {...rest}>
                {children}
            </Link>
        )
    } else {
        return (
            <button className={`${buttonStyle} ${className ? className : ""}`} {...rest}>
                {children}
            </button>
        )
    }
}