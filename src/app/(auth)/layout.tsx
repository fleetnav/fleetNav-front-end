export const metadata = {
    title: "SEO Title",
    description: "SEO Title",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return <main className="w-dvw min-h-svh overflow-x-hidden bg-blue-500">{children}</main>;
}
