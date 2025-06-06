import type {Metadata} from "next";
import {Lato} from "next/font/google"; 
import "./globals.css";

// Load only Lato font
const lato = Lato({
    weight: ["400", "700"], 
    subsets: ["latin"],
    variable: "--font-lato",
});

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
        <body className={`${lato.variable} font-sans antialiased`}>
        {children}
        </body>
        </html>
    );
}
