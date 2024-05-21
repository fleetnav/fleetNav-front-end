import { Avatar, AvatarGroup } from "@nextui-org/react";
import React from "react";

export const SelectAvatar = () => {
    return (
        <AvatarGroup>
            <Avatar className="cursor-pointer" size="lg" src="/images/avatars/avatar-1.jpg" />
            <Avatar size="lg" src="/images/avatars/avatar-2.jpg" />
            <Avatar size="lg" src="/images/avatars/avatar-3.jpg" />
        </AvatarGroup>
    );
};
