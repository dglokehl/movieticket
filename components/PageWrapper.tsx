import Header from "./Header";
import Footer from "./Footer"

type PageWrapperProps = {
    children?: React.ReactNode
    className?: string;
    footer?: boolean;
    header: {
        title?: string | any;
        button?: React.ReactNode;
        custom?: React.ReactNode;
    }
}

export default function PageWrapper({ children, className, footer, header, ...rest}: PageWrapperProps) {
    return (
        <>
            {header.custom ? header.custom : <Header obj={header} />}

            <main className={`px-default pt-header ${footer ? "pb-20" : "pb-default"} ${className ? className : ""}`} {...rest}>
                {children}
            </main>

            {footer && <Footer />}
        </>
    )
}