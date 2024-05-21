"use client";
import { useAuthStore, useChatStore } from "@/store";
import { Button } from "@nextui-org/react";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const LogoutButton = () => {
    const disconnect = useChatStore((state) => state.disconnect);
    const logout = useAuthStore((state) => state.logOut);
    const router = useRouter();

    const handleLogout = () => {
        disconnect();
        logout();
        toast.message("goodbye!");
        router.push("/login");
    };
    return (
        <div className="fle items-center justify-center ">
            <Button
                onClick={handleLogout}
                className="w-full justify-start text-2xl"
                startContent={<span className="icon-[streamline--logout-1]" role="img" aria-hidden="true" />}
                radius="sm"
                variant="light"
                color="primary"
                size="lg"
            >
                Logout
            </Button>
        </div>
    );
};
