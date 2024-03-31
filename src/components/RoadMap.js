import React from "react";
import RoadMapCards from "./helpers/RoadMapCards";
import DropBoxes from "./helpers/DropBoxes";

export default function RoadMap() {
  return (
    <div id="roadmap" className="pb-20 pt-20">
      <DropBoxes />
      <div className="container mx-auto px-10">
        <h2
          data-aos="flip-up"
          data-aos-delay="0"
          className="font-upheavtt text-center text-3xl mb-14"
        >
          Chuck Roadmap
        </h2>
        <div className="flex flex-col gap-5  ">
          <RoadMapCards />
          {/* two */}
          <div
            data-aos="zoom-in"
            data-aos-delay="0"
            className="mb-6 flex max-w-lg w-full md:w-2/3 mx-auto "
          >
            <div className="flex flex-col space-y-1 shadow-md pl-4 pt-2 pb-6 relative text-base bg-white rounded-xl text-black px-4 min-w-sm w-full">
              <div className=" h-7 w-7 rounded-full flex flex-col justify-center items-center absolute -bottom-2 -left-[15px] -z-9 bg-primary">
                <div className="h-6 w-6 text-white  rounded-full text-base font-bold flex items-center justify-center">
                  2
                </div>
              </div>
              <div
                data-aos="fade-in"
                data-aos-delay="400"
                className="flex  flex-col space-y-1 ml-2 "
              >
                <h3 className=" text-sm font-bold ">
                  <div className="flex text-primary justify-between">
                    <div>Community Advancement</div> <div> Q3 2024</div>
                  </div>
                </h3>
                <ul className="text-base list-disc">
                  <li>Donation to Dog Charity</li>
                  <li>Chuck NFT and Design Planning</li>
                  <li>Chuck Merchandise</li>
                  <li>Community Competitions</li>
                  <li>Utility Planning</li>
                </ul>
              </div>
            </div>
          </div>
          {/* three */}
          <div
            data-aos="zoom-in"
            data-aos-delay="0"
            className="mb-6 flex max-w-lg w-full md:w-2/3 mx-auto"
          >
            <div className="flex flex-col space-y-1 shadow-md pl-4 pt-2 pb-6 relative text-base bg-white rounded-xl text-black px-4 w-full max-w-lg">
              <div className=" h-7 w-7 rounded-full flex flex-col justify-center items-center absolute -bottom-2 -left-[15px] -z-9 bg-primary">
                <div className="h-6 w-6 text-white  rounded-full text-base font-bold flex items-center justify-center">
                  3
                </div>
              </div>
              <div
                data-aos="fade-in"
                data-aos-delay="400"
                className="flex  flex-col space-y-1 ml-2 "
              >
                <h3 className=" text-sm font-bold ">
                  <div className="flex text-primary justify-between">
                    <div>Community Advancement</div> <div> Q3 2024</div>
                  </div>
                </h3>
                <ul className="text-base list-disc">
                  <li>Donation to Dog Charity</li>
                  <li>Chuck NFT and Design Planning</li>
                  <li>Chuck Merchandise</li>
                  <li>Community Competitions</li>
                  <li>Utility Planning</li>
                </ul>
              </div>
            </div>
          </div>
          {/* four */}
          <div
            data-aos="zoom-in"
            data-aos-delay="0"
            className="mb-6 flex max-w-lg w-full md:w-2/3 mx-auto"
          >
            <div className="flex flex-col space-y-1 shadow-md pl-4 pt-2 pb-6 relative text-base bg-white rounded-xl text-black px-4 w-full max-w-lg">
              <div className=" h-7 w-7 rounded-full flex flex-col justify-center items-center absolute -bottom-2 -left-[15px] -z-9 bg-primary">
                <div className="h-6 w-6 text-white  rounded-full text-base font-bold flex items-center justify-center">
                  4
                </div>
              </div>
              <div
                data-aos="fade-in"
                data-aos-delay="400"
                className="flex  flex-col space-y-1 ml-2 "
              >
                <h3 className=" text-sm font-bold ">
                  <div className="flex text-primary justify-between">
                    <div>Community Advancement</div> <div> Q4 2024</div>
                  </div>
                </h3>
                <ul className="text-base list-disc">
                  <li>Website Upgrade</li>
                  <li>NFT Mint and Launch</li>
                  <li>Community Game Creation</li>
                  <li>Cross Community Partnership</li>
                </ul>
              </div>
            </div>
          </div>
          {/* five */}
          <div
            data-aos="zoom-in"
            data-aos-delay="0"
            className="mb-6 flex max-w-lg w-full md:w-2/3 mx-auto h-40"
          >
            <div className="flex flex-col space-y-1 shadow-md pl-4 pt-2 pb-6 relative text-base bg-white rounded-xl text-black px-4 w-full max-w-lg">
              <div className=" h-7 w-7 rounded-full flex flex-col justify-center items-center absolute -bottom-2 -left-[15px] -z-9 bg-primary">
                <div className="h-6 w-6 text-white  rounded-full text-base font-bold flex items-center justify-center">
                  5
                </div>
              </div>
              <div
                data-aos="fade-in"
                data-aos-delay="400"
                className="flex  flex-col space-y-1 ml-2 "
              >
                <h3 className=" text-sm font-bold ">
                  <div className="flex text-primary justify-between">
                    <div>Continued Development</div> <div> Q1 2024</div>
                  </div>
                </h3>
                <ul className="text-base list-disc">
                  <li>NFT Development</li>
                  <li>Community Game Development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
