import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoCloseCircleOutline } from "react-icons/io5";
import Logo from "./helpers/Logo";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const { asPath } = useRouter();
  const handleNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <header
      className={`h-[9vh] lg:h-[13vh] 2xl:h-[10vh] border-b border-b-[#FFFFFF20] fixed w-full transition-transform ${
        visible
          ? "top-0 transform translate-y-0 scrolling-header lg:overflow-hidden"
          : "-top-full transform -translate-y-full "
      } `}
    >
      <div className="container mx-auto pl-2 pr-4  h-full flex items-center justify-between">
        <div data-aos="flip-down" data-aos-delay="100">
          <Logo />
        </div>
        <div className="flex items-center">
          {/* Desktop Navbar */}
          <nav
            data-aos="flip-down"
            data-aos-delay="100"
            className="hidden lg:block mr-10"
          >
            <ul className="flex space-x-10 text-lg font-medium">
              <li className="link ">
                <Link href="/whitePaper">White Paper</Link>
              </li>
              <li className="link ">
                <Link href="/#roadmap">RoadMap</Link>
              </li>
              <li className="link ">
                <Link href="/#tokenomics">Tokenomics</Link>
              </li>
              <li className="link ">
                <Link href="/#how">How to Buy</Link>
              </li>
              <li className="link ">
                <Link
                  target="_blank"
                  href="https://app.uniswap.org/explore/tokens/base/0x7a8a5012022bccbf3ea4b03cd2bb5583d915fb1a"
                >
                  Buy Token
                </Link>
              </li>
              <li className="link ">
                <Link
                  target="_blank"
                  href="https://www.dextools.io/app/en/base/pair-explorer/0xa878a7944062c3984b214a6f7bc3970f4a6a5257"
                >
                  Chart
                </Link>
              </li>{" "}
              <li className="link ">
                <Link target="_blank" href="https://linktr.ee/chuckonbase">
                  Join Us
                </Link>
              </li>
            </ul>
          </nav>
          {/* <Link
            href="https://app.uniswap.org/#/swap?outputCurrency=0x9fe8c0d27a2e6ece417c6af6bcd674e6a9855d28&chain=goerli"
            target="_blank"
          >
            <button
              data-aos="flip-down"
              data-aos-delay="100"
              className="btn btn-gradient "
            >
              Buy Now
            </button>
          </Link> */}
          <div
            data-aos="flip-down"
            data-aos-delay="100"
            onClick={handleNav}
            className="ml-2 cursor-pointer lg:hidden"
          >
            <FiMenu size={30} />
          </div>

          {/* Mobile Navbar */}
          <nav className="lg:hidden ">
            <div className=" lg:hidden ">
              <div
                onClick={handleNav}
                className={`${
                  openNav
                    ? "h-screen duration-500 fixed "
                    : "duration-500 h-0 absolute"
                } bg-[#150e2895]   z-[100] left-0 top-0 bottom-0 right-0`}
              >
                <div
                  className={`${
                    openNav
                      ? "translate-y-0 duration-500 opacity-100"
                      : "duration-300 -translate-y-full opacity-0"
                  } flex flex-col  bg-[#0070f0]  h-[55vh]   px-10 pt-10`}
                >
                  <div
                    onClick={handleNav}
                    className=" w-[28px] place-self-end mx-4 cursor-pointer"
                  >
                    <IoCloseCircleOutline size={30} />
                    {/* <Image
                      src={close}
                      width={23}
                      height={23}
                      alt=" "
                      // onClick={handleImageClick}
                      className=" object-center w-full  object-contain "
                    /> */}
                  </div>
                  <ul className="flex flex-col space-y-2.5 text-lg font-medium mt-10 bggray-800 justify-center place-self-center  w-full items-start ">
                    <li className="link ">
                      <Link href="/whitePaper">White Paper</Link>
                    </li>
                    <li className="link ">
                      <Link href="/#roadmap">RoadMap</Link>
                    </li>
                    <li className="link ">
                      <Link href="/#tokenomics">Tokenomics</Link>
                    </li>
                    <li className="link ">
                      <Link href="/#how">How to Buy</Link>
                    </li>
                    <li className="link ">
                      <Link
                        target="_blank"
                        href="https://app.uniswap.org/explore/tokens/base/0x7a8a5012022bccbf3ea4b03cd2bb5583d915fb1a"
                      >
                        Buy Token
                      </Link>
                    </li>
                    <li className="link ">
                      <Link
                        target="_blank"
                        href="https://www.dextools.io/app/en/base/pair-explorer/0xa878a7944062c3984b214a6f7bc3970f4a6a5257"
                      >
                        Chart
                      </Link>
                    </li>
                    <li className="link ">
                      <Link
                        target="_blank"
                        href="https://linktr.ee/chuckonbase"
                      >
                        Join Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
