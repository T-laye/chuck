import Image from "next/image";
import React, { useState } from "react";
import DropBoxes from "./helpers/DropBoxes";
import Link from "next/link";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <div className="min-h-screen pt-16 lg:pt-24 pb-20 border-b border-b-[#FFFFFF20] ">
      <DropBoxes />
      <div className="container mx-auto lg:px-8 px-4 flex flex-col lg:flex-row lg:h-screen gap-10">
        <div className="flex flex-col mt-0 gap-5 items-center lg:items-start pt-10 lg:justify-start lg:mt-10 lg:w-1/2 lg:h-full bg-rd-400">
          <h1
            // data-aos="fade-down"
            // data-aos-delay="300"
            className="font-window text-center text-3xl lg:text-5xl xl:text-6xl lg:text-start"
          >
            Chuck, the round house kicking crypto canine, unleashed strength for
            a pawsitive cause !
          </h1>
          {/* <div
            data-aos="fade-down"
            className="text-xl text-center text-red-700 font-bold lg:text-start lg:text-3xl bgblack"
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(" Welcome to the exciting world of Chuck")
                  .callFunction(() => {})
                  .pauseFor(2500)
                  .callFunction(() => {
                    // console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
          </div> */}
          <Link
            href="https://app.uniswap.org/explore/tokens/base/0x7a8a5012022bccbf3ea4b03cd2bb5583d915fb1a"
            target="_blank"
            className="w-1/2 hidden lg:block"
          >
            <button
              // data-aos="flip-down"
              // data-aos-delay="100"
              className="btn w-full  mt-5 font-upheavtt bg-red-700 text-xl lg:text-2xl border border-secondary"
            >
              Buy Now
            </button>
          </Link>
        </div>
        <div className="flex-1 lg:h-full bg-blac lg:w-1/2 lg:mt-28">
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="rounded-xl overflow-hidden md:w-3/4 md:mx-auto"
          >
            <Image
              src="/images/chuck_logo2-removebg-preview.png"
              alt="image"
              height={500}
              width={500}
              className="h-full w-full object-contain"
            />
          </div>
          <Link
            href="https://app.uniswap.org/explore/tokens/base/0x7a8a5012022bccbf3ea4b03cd2bb5583d915fb1a"
            target="_blank"
            className="w-1/2 lg:hidden"
          >
            <button
              // data-aos="flip-down"
              // data-aos-delay="100"
              className="btn w-3/4 mx-auto mt-10 font-upheavtt bg-red-700 text-xl lg:text-2xl border border-secondary"
            >
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
