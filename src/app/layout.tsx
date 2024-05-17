import type { Metadata } from "next";
import { siteConfig, subtitlesAndParagraph } from "@/config";
import { NextUiProvider } from "@/components";
import { Toaster } from "sonner";

import "./globals.css";

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
        <html lang="en" className="dark">
            <body className={subtitlesAndParagraph.className}>
                <NextUiProvider>
                    <Toaster />
                    {children}
                </NextUiProvider>
            </body>
        </html>
    );
}
