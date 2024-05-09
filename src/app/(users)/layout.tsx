import { SideNav } from "@/components";

export default function UsersLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex size-full min-h-svh bg-primary-blue">
            <SideNav />
            <div>{children}</div>
        </div>
    );
}
