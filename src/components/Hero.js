import Image from "next/image";
import React, { useState } from "react";
import DropBoxes from "./helpers/DropBoxes";
import Link from "next/link";
// import Typewriter from "typewriter-effect";

//  <div className="bg-red-00 w-fit lg:w-full relative mx-auto">
//    <Typewriter
//      onInit={(typewriter) => {
//        typewriter
//          .typeString("Igniting a Revolution in HR Innovation")
//          .callFunction(() => {})
//          .pauseFor(2500)
//          .callFunction(() => {
//            // console.log("All strings were deleted");
//          })
//          .start();
//      }}
//    />
//    <span
//      data-aos="fade-right"
//      data-aos-delay="2000"
//      className="absolute lg:-bottom-4 -bottom-2 right-2 lg:right-1 2xl:right-8"
//    >
//      <Curved />
//    </span>
//  </div>;

export default function Hero() {
  return (
    <div className="min-h-screen pt-16 lg:pt-24 pb-20 border-b border-b-[#FFFFFF20] ">
      <DropBoxes />
      <div className="container mx-auto px-4 flex flex-col lg:flex-row lg:h-screen gap-10">
        <div className="flex flex-col mt-0 gap-5 items-center lg:items-start pt-10 lg:justify-start lg:mt-10 lg:w-1/2 lg:h-full bg-rd-400">
          <h1 className="font-upheavtt text-center text-4xl lg:text-5xl xl:text-7xl lg:text-start">
            Chuck: Unleashing Joy and Advocacy in the Web3 World
          </h1>
          <p className="text-xl text-center text-red-700 font-bold lg:text-start lg:text-3xl bgblack">
            Welcome to the exciting world of Chuck{" "}
          </p>
          <Link
            href="https://app.uniswap.org/explore/tokens/base/0x7a8a5012022bccbf3ea4b03cd2bb5583d915fb1a"
            target="_blank"
            className="w-1/2"
          >
            <button
              // data-aos="flip-down"
              // data-aos-delay="100"
              className="btn w-full bg-primary text-xl"
            >
              Buy Now
            </button>
          </Link>
        </div>
        <div className="flex-1 lg:h-full bg-blac lg:w-1/2 lg:mt-20">
          <div className="rounded-xl overflow-hidden md:w-3/4 md:mx-auto">
            <Image
              src="/images/boxers.jpeg"
              alt="image"
              height={500}
              width={500}
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
