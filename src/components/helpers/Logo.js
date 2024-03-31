import Image from "next/image";
import React from "react";
// import logo from "public/images/rounded_logo_no_bg.png";
import Link from "next/link";

export default function Logo({ height = 500, width = 500 }) {
  return (
    <Link href="/">
      <div className="w-16 lg:w-24">
        <Image
          src="/images/rounded_logo_no_bg.png"
          alt="Chuk"
          height={height}
          width={width}
          priority
          className="h-full w-full"
        />
      </div>
    </Link>
  );
}
