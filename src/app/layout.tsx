import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig, subtitlesAndParagraph } from "@/config";
import { NextUiProvider } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className="dark">
            <body className={subtitlesAndParagraph.className}>
                <NextUiProvider>{children}</NextUiProvider>
            </body>
        </html>
    );
}
