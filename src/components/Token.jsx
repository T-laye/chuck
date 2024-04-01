import React, { useState } from "react";
import DropBoxes from "./helpers/DropBoxes";
import { FaCopy } from "react-icons/fa";

export default function Token() {
  const address = "0x7A8A5012022BCCBf3EA4b03cD2bb5583d915fb1A";
  const [valueToCopy, setValueToCopy] = useState(address);

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(valueToCopy);
      alert("Contract Address copied to clipboard!");
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };
  return (
    <section id="tokenomics" className="pb-10 pt-10">
      <div className="container mx-auto px-4">
        <DropBoxes />
        <h2
          data-aos="fade-down"
          data-aos-delay="100"
          className="font-upheavtt text-center text-3xl "
        >
          Token Address
        </h2>
        <p
          data-aos="fade-right"
          data-aos-delay="100"
          onClick={handleCopyToClipboard}
          className="whitespace-wrap break-words  text-center text-red-700 mb-10 font-medium text-lg"
        >
          0x7A8A5012022BCCBf3EA4b03cD2bb5583d915fb1A{" "}
          {/* <span>
            <FaCopy size={16} />
          </span> */}
        </p>
        <h2
          data-aos="fade-down"
          data-aos-delay="100"
          className="font-upheavtt text-center text-3xl "
        >
          Token Supply
        </h2>
        <p
          data-aos="fade-down"
          data-aos-delay="100"
          className="text-2xl text-center text-red-700 font-bold"
        >
          1,000,000,000
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-y-10 gap-x-20">
          <div className="flex flex-col items-center gap-3 ">
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className="chart chart-1"
            ></div>
            <p data-aos="fade-left" data-aos-delay="100" className="text-2xl">
              60% LP
            </p>
          </div>
          {/* <div className="flex flex-col items-center gap-3">
            <div className="chart chart-2"></div>
            <p className="text-2xl">18% Development</p>
          </div> */}
          <div className="flex flex-col items-center gap-3">
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className="chart chart-3"
            ></div>
            <p data-aos="fade-right" data-aos-delay="100" className="text-2xl">
              10% Team
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className="chart chart-3"
            ></div>
            <p data-aos="fade-left" data-aos-delay="100" className="text-2xl">
              10% Community
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className="chart chart-4"
            ></div>
            <p data-aos="fade-right" data-aos-delay="100" className="text-2xl">
              15% Marketing
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className="chart chart-5"
            ></div>
            <p data-aos="fade-right" data-aos-delay="100" className="text-2xl">
              5% Dev
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
