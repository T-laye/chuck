import Image from "next/image";
import React from "react";
// import logo from "public/images/rounded_logo_no_bg.png";
import Link from "next/link";

export default function Logo({ height = 500, width = 500 }) {
  return (
    <Link href="/">
      <div className="w-10 lg:w-16 rounded-md overflow-hidden">
        <Image
          src="/images/blue_bg.jpeg"
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
