import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const breezeBlocks = localFont({
    src: [
        {
            path: "../../public/fonts/Breezeblocks.otf",
        },
    ],
    variable: "--font-breezeblocks",
});

const montserrat = localFont({
    src: [
        {
            path: "../../public/fonts/Montserrat-Regular.ttf",
        },
    ],
    variable: "--font-monstserrat",
});

const montserratBold = localFont({
    src: [
        {
            path: "../../public/fonts/Montserrat-Medium.ttf",
        },
    ],
    variable: "--font-monstserratBold",
});

const montserratItalic = localFont({
    src: [
        {
            path: "../../public/fonts/Montserrat-MediumItalic.ttf",
        },
    ],
    variable: "--font-monstserratItalic",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "BR Wedding",
    description: "website for brittany and reid's wedding",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${montserratItalic.variable} ${montserratBold.variable} ${breezeBlocks.variable} ${montserrat.variable} ${inter.className}`}
            >
                {children}
            </body>
        </html>
    );
}
