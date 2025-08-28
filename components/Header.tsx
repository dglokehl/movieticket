type HeaderProps = {
    className?: string;
}

export default function Header({ className, ...rest}: HeaderProps) {
    return (
        <header className={`${className ? className : ""}`} {...rest}>
            <h1>Page Title</h1>
        </header>
    )
}