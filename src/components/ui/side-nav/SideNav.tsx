import Link from "next/link";

import { siteConfig } from "@/config";
import { Button, Image } from "@nextui-org/react";
import { LogoutButton } from "./LogoutButton";
import { ProfileInfo } from "./ProfileInfo";

export const SideNav = () => {
    return (
        <aside className="w-1/5 max-w-[280px] flex flex-col px-10 py-12 items-center justify-around gap-8 h-screen min-h-svh border-r border-red-500/35">
            {/* logo */}
            <div className="flex gap-4 w-full  justify-self-start items-center">
                <Image src={"/images/brand/logo-test.png"} width={50} height={50} alt="fleetNav logo" />
                <h1 className="text-3xl font-semibold">FleetNav</h1>
            </div>

            {/* profile info */}
            <ProfileInfo />

            {/*  nav links */}
            <div className="flex w-full flex-col flex-1 gap-4 ">
                {siteConfig.navMenuItems.map((item) => (
                    <Link key={item.href} className="flex " href={item.href}>
                        <Button
                            className="w-full justify-start p-0   text-xl"
                            startContent={<span className={item.icon} role="img" aria-hidden="true" />}
                            radius="sm"
                            variant="light"
                            color="primary"
                            size="lg"
                        >
                            {item.label}
                        </Button>
                    </Link>
                ))}
            </div>

            {/* logout */}
            <LogoutButton />
        </aside>
    );
};
