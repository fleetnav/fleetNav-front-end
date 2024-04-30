export const metadata = {
    title: "SEO Title",
    description: "SEO Title",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h1>Hello Root Layout Auth</h1>
            <div>{children}</div>
        </div>
    );
}
