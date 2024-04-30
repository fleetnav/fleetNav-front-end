export const metadata = {
    title: "SEO Title",
    description: "SEO Title",
};
export default function UsersLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h1>Hello Root and MetaData</h1>
            <div>{children}</div>
        </div>
    );
}
