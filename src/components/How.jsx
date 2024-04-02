"use client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineYoutube } from "react-icons/ai";
import DropBoxes from "./helpers/DropBoxes";

export default function How() {
  return (
    <div id="how">
      <DropBoxes />
      <div className="pb-20 min-h-screen px-4 container mx-auto max-w-5xl ">
        <div className="lg:pt-[140px] pt-[100px] text-lg   ">
          <h2
            data-aos="flip-down"
            data-aos-delay="100"
            className="font-upheavtt text-center text-3xl  "
          >
            How it Works
          </h2>
          <h1
            data-aos="flip-down"
            data-aos-delay="100"
            className="font-upheavtt text-2xl mt-4 "
          >
            Add TO Base
          </h1>

          <p data-aos="flip-down" data-aos-delay="100">
            Learn how to add the Base network to your crypto wallet.
          </p>

          <div>
            <h2
              data-aos="flip-down"
              data-aos-delay="100"
              className="  font-upheavtt text-2xl mt-8"
            >
              - Swap your ETH on Base for $CHUCK
            </h2>
            <p data-aos="flip-down" data-aos-delay="100">
              Go on Uniswap and swap your Base Ethereum for $CHUCK.
            </p>

            <div className="mt-10">
              <video src="/videos/How_to_uniswap_edit.mp4" controls></video>
            </div>
          </div>

          <div>
            <h2
              data-aos="flip-down"
              data-aos-delay="100"
              className="  font-upheavtt text-2xl mt-10"
            >
              - Meta Mask
            </h2>
            <p data-aos="flip-down" data-aos-delay="100">
              For MM however we need to add Base as a Custom Network.
              <br />
              <br />
              Connect to your MM wallet and go to your Networks. Click Add
              Network, Base Mainnet should be in the list of popular networks so
              you don&apos;t need to add it manually. Just press Add and Approve
              popup, now just switch to the Base network.
            </p>

            <div>
              <div className="mb- mt-5">
                <h2
                  data-aos="flip-down"
                  data-aos-delay="100"
                  className=" text-xl mb-"
                >
                  {" "}
                  1. Click on MetaMask Browser Extension
                </h2>
                {/* <div
                  data-aos="zoom-out"
                  data-aos-delay="100"
                  className=" w-full max-w-xl mt-2"
                >
                  <Image
                    src="/images/bridge/1.png"
                    alt="1"
                    height={400}
                    width={400}
                    className="h-full w-full object-contain"
                  />
                </div> */}
              </div>
              <div className="mb-">
                <h2
                  data-aos="flip-down"
                  data-aos-delay="100"
                  className=" text-xl mt-4"
                >
                  2. Click on MetaMask Browser Extension
                </h2>
                {/* <div
                  data-aos="zoom-out"
                  data-aos-delay="100"
                  className=" w-full max-w-64 mt-4"
                >
                  <Image
                    src="/images/bridge/2.png"
                    alt="2"
                    height={400}
                    width={400}
                    className="h-full w-full object-contain"
                  />
                </div> */}
              </div>
              <div className="mb-">
                <h2
                  data-aos="flip-down"
                  data-aos-delay="100"
                  className=" text-xl mt-4"
                >
                  3. Locate Base Network and Click Add.
                </h2>
                {/* <div
                  data-aos="zoom-out"
                  data-aos-delay="100"
                  className=" w-full max-w-xl mt-4"
                >
                  <Image
                    src="/images/bridge/3.png"
                    alt="3"
                    height={400}
                    width={400}
                    className="h-full w-full object-contain"
                  />
                </div> */}
              </div>
              <div className="mb-">
                <h2
                  data-aos="flip-down"
                  data-aos-delay="100"
                  className=" text-xl mt-4"
                >
                  4. Click Approve on the pop-up screen.
                </h2>
                {/* <div
                  data-aos="zoom-out"
                  data-aos-delay="100"
                  className=" w-full max-w-64 mt-2"
                >
                  <Image
                    src="/images/bridge/4.png"
                    alt="4"
                    height={400}
                    width={400}
                    className="h-full w-full object-contain"
                  />
                </div> */}
              </div>
              <div className="mt-10 mb-16">
                <video src="/videos/Add_base_to_metamask.mp4" controls></video>
              </div>
            </div>

            <div className="mb-10">
              <h2
                data-aos="flip-down"
                data-aos-delay="100"
                className="  font-upheavtt text-2xl mt-4"
              >
                - Add Base Chain
              </h2>
              <p data-aos="flip-down" data-aos-delay="100">
                Learn how to add the Base network to your crypto wallet.
              </p>
            </div>
            <div data-aos="flip-down" data-aos-delay="100" className="mb-10">
              <h2
                data-aos="flip-down"
                data-aos-delay="100"
                className="  font-upheavtt text-2xl mt-4"
              >
                - Bridge to Base
              </h2>
              <p data-aos="flip-down" data-aos-delay="100">
                Learn how to bridge ETH from mainnet to Base chain.
              </p>
            </div>
            <div>
              <h2
                data-aos="flip-down"
                data-aos-delay="100"
                className="  font-upheavtt text-2xl mt-4"
              >
                -Buy Chuck
              </h2>
              <p data-aos="flip-down" data-aos-delay="100">
                Different ways to safely buy the Chuck token.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full mt-10 italic ">
          <blockquote
            data-aos="flip-down"
            data-aos-delay="100"
            className="text-md  "
          >
            The Bermuda Triangle used to be the Bermuda Square, until Chuck
            Norris Roundhouse one of the corners off
          </blockquote>
        </div>
      </div>
    </div>
  );
}
