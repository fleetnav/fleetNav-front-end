import { siteConfig, titleFont } from "@/config";
import { Button, Image as UiImage } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export const SideNav = () => {
    return (
        <aside className="w-1/5 max-w-[280px] flex flex-col px-10 py-12 items-center justify-around gap-8 h-full min-h-svh border-r border-red-500/35">
            {/* logo */}
            <div className="flex gap-4 w-full  justify-self-start items-center">
                <Image src={"/images/brand/logo-test.png"} width={50} height={50} alt="fleetNav logo" />
                <h1 className="text-3xl font-semibold">FleetNav</h1>
            </div>

            {/* profile info */}
            <div className="w-full flex flex-col items-start justify-center gap-8">
                <UiImage
                    width={100}
                    height={100}
                    // radius="full"
                    classNames={{ img: "rounded-full size-[100px] object-cover", wrapper: "rounded-full" }}
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />

                <div>
                    <h3 className={`font-semibold text-3xl ${titleFont.className}`}>Juan Regino</h3>
                    <span className="text-slate-300 font-semibold">riwi@email.com</span>
                </div>
            </div>

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
            <div className=" items-center justify-center ">
                <Link href={"/login"} className="">
                    <Button
                        className="w-full justify-start text-2xl"
                        startContent={<span className="icon-[streamline--logout-1]" role="img" aria-hidden="true" />}
                        radius="sm"
                        variant="light"
                        color="primary"
                        size="lg"
                    >
                        Logout
                    </Button>
                </Link>
            </div>
        </aside>
    );
};
