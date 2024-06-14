import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "@/shared/styles/globals.scss";
import Header from "../components/layouts/Header";
import Aside from "../components/layouts/Aside";
import cn from "classnames";


const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={cn(inter.className)}>
        <Aside/>
        <main className='main'>
            <Header/>
            <div className='content'>
                {children}
            </div>
        </main>
        </body>
        </html>
    );
}
