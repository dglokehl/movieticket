import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    preload: false
})

export const metadata = {
    title: {
        template: '%s | MovieTicket',
        default: 'MovieTicket',
    },
}


export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`min-h-dvh ${inter.className}`}>
                {children}
            </body>
        </html>
    );
}
