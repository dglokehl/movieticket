import Footer from "./Footer"

type PageWrapperProps = {
    children?: React.ReactNode
    className?: string;
    footer?: boolean;
}

export default function PageWrapper({ children, className, footer, ...rest}: PageWrapperProps) {
    return (
        <>
            <main className={`p-7.5 ${className ? className : ""}`} {...rest}>
                {children}
            </main>

            {footer && <Footer />}
        </>
    )
}