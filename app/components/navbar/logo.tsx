"use client";
import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/images/logo.png"
      width={100}
      height={100}
      alt="logo"
      className="hidden md:block cursor-pointer"
      priority
    />
  );
}
