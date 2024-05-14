import { SideNav } from "@/components";

export default function UsersLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex size-full min-h-svh bg-primary-blue">
            <SideNav />

            <section className="py-16 px-8 w-full">
                <div className="w-full h-full rounded-lg">{children}</div>
            </section>
        </div>
    );
}
