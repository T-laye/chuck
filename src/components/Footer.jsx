import Image from "next/image";
import React from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { FaMedium } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
// import footerData from "../utils/footer";
import Link from "next/link";
import Logo from "./helpers/Logo";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0070F0] border-t border-[#0070F0] pb-5 pt-6 font-pixelifySans">
      <div className="flex flex-col md:flex-row justify-between  md:gap-12">
        <div className="w-full flex justify-between  md:justify-center  ">
          <div className="flex items-start justify-between mb-1 w-full px-2">
            <div className="flex gap-2 items-center">
              <Link href="https://www.base.org/" target="_blank">
                <div className="w-7 lg:w-12 rounded-md overflow-hidden">
                  <Image
                    src="/socials/BASE-UNISWAP-TELEGRAM_LOGOS_Plan de travail 1 copie 7.png"
                    alt="Chuk"
                    height={500}
                    width={500}
                    priority
                    className="h-full w-full"
                  />
                </div>
              </Link>
              <Link
                href="https://app.uniswap.org/explore/tokens/base/0x7a8a5012022bccbf3ea4b03cd2bb5583d915fb1a"
                target="_blank"
              >
                <div className="w-8 lg:w-12 rounded-md overflow-hidden">
                  <Image
                    src="/socials/BASE-UNISWAP-TELEGRAM_LOGOS_Plan de travail 1 copie 6.png"
                    alt="Chuk"
                    height={500}
                    width={500}
                    priority
                    className="h-full w-full"
                  />
                </div>
              </Link>
            </div>
            <Link href="/">
              <div className=" rounded-md overflow-hidden">
                <Image
                  src="/images/rounded_logo_no_bg.png"
                  alt="Chuk"
                  height={500}
                  width={500}
                  priority
                  className="h-full w-12 lg:w-20"
                />
                <h2 className="text-3xl text-center text-white  font-upheavtt ">
                  Chuck
                </h2>
              </div>
            </Link>
            <div className="flex gap-2 items-center">
              <Link href="https://t.me/Chuck_on_Base" target="_blank">
                <div className="w-7 lg:w-12 rounded-md overflow-hidden">
                  <Image
                    src="/socials/BASE-UNISWAP-TELEGRAM_LOGOS_Plan de travail 1 copie 8.png"
                    alt="Chuk"
                    height={500}
                    width={500}
                    priority
                    className="h-full w-full"
                  />
                </div>
              </Link>
              <Link href="https://twitter.com/CHUCK_on_Base" target="_blank"> 
                <div className="w-7 lg:w-12 rounded-md overflow-hidden">
                  <Image
                    src="/socials/BASE-UNISWAP-TELEGRAM_LOGOS_Plan de travail 1 copie 11.png"
                    alt="Chuk"
                    height={500}
                    width={500}
                    priority
                    className="h-full w-full"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white w-full  md:text-lg">
        {/* <p className="flex justify-center ">
          <span className="mr-2">&copy; {currentYear}</span> All rights
          reserved.
        </p> */}
        <p className="text-center">Powered by Base</p>
        <p className="text-center mt-2">
          All Rights Reserved &copy; {currentYear} Chuck On Base
        </p>
      </div>
    </footer>
  );
}

export default Footer;
