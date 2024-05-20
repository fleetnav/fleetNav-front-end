import { Avatar, AvatarGroup } from '@nextui-org/react'
import React from 'react'

export const SelectAvatar = () => {
  return (
    <AvatarGroup>
      
      <Avatar size="lg" src="/images/avatars/avatar1.jpg" />
      <Avatar size="lg" src="/images/avatars/avatar2.jpg" />
      <Avatar size="lg" src="/images/avatars/avatar3.jpg" />
      <Avatar size="lg" src="/images/avatars/avatar1.jpg" />
    </AvatarGroup>
  );
}
