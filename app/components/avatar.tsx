"use client";
import Image from "next/image";

export default function Avatar() {
  return (
    <div>
      <Image
        src="/images/placeholder.jpg"
        height={30}
        width={30}
        alt="avatar"
        className="rounded-full"
      />
    </div>
  );
}
