import { SideNav } from "@/components";

export const metadata = {
    title: "SEO Title",
    description: "SEO Title",
};
export default function UsersLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex size-full min-h-svh bg-primary-blue">
            <SideNav />
            <div>{children}</div>
        </div>
    );
}
