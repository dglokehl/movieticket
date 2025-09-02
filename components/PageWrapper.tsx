import Header from "./Header";
import Footer from "./Footer"

type PageWrapperProps = {
    children?: React.ReactNode
    className?: string;
    footer?: boolean;
    header: any;
}

export default function PageWrapper({ children, className, footer, header, ...rest}: PageWrapperProps) {
    return (
        <>
            <Header obj={header} />

            <main className={`px-default pt-header ${footer ? "pb-20" : "pb-default"} ${className ? className : ""}`} {...rest}>
                {children}
            </main>

            {footer && <Footer />}
        </>
    )
}