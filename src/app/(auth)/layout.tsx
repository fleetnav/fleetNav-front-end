import Link from "next/link";

export const metadata = {
    title: "SEO Title",
    description: "SEO Title",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return <main className="w-dvw min-h-svh overflow-x-hidden bg-primary-blue">{children}</main>;
}
