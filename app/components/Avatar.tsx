"use client";

import Image from "next/image";

interface AvatarProps {
  src?: string | null | undefined;
}

const Avatar = ({ src }: AvatarProps): React.JSX.Element => {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src={src || "/images/placeholder.jpg"}
    />
  );
};

export default Avatar;
