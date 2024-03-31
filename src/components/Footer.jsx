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
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12">
        <div className="w-full flex justify-between  md:justify-center  ">
          <div className="flex items-center justify-between">
            <Logo />
            <h2 className="text-3xl  text-white  font-upheavtt">Chuck</h2>
          </div>
        </div>
      </div>
      <div className="text-white w-full mt-4 md:text-lg">
        <p className="flex justify-center ">
          <span className="mr-2">&copy; {currentYear}</span> All rights
          reserved.
        </p>
        <p className="text-center">Not affiliated with Chuck Norris.</p>
        <p className="text-center">Powered by Base</p>
      </div>
    </footer>
  );
}

export default Footer;
