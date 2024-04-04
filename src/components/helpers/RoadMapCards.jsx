import React from "react";

export default function RoadMapCards({ topic, content, date, number }) {
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay="0"
      className="mb-6 flex max-w-lg w-full md:w-2/3 mx-auto "
    >
      <div className="flex flex-col space-y-1 shadow-md pl-4 pt-2 pb-4   relative text-base bg-white rounded-xl text-black px-4 w-full max-w-lg">
        <div className=" h-7 w-7 rounded-full flex flex-col justify-center items-center absolute -bottom-2 -left-[15px] -z-9 bg-primary">
          <div className="h-6 w-6 bg-white font-window  rounded-full text-base font-bold flex items-center justify-center">
            1
          </div>
        </div>
        <div
          data-aos="fade-in"
          data-aos-delay="400"
          className="flex  flex-col space-y-1 ml-2 "
        >
          <h3 className=" text-sm font-bold ">
            <div className="flex text-primary justify-between text-2xl font-window">
              <div>Project Awareness Building</div>{" "}
              <div className="whitespace-nowrap"> Q2 2024</div>
            </div>
          </h3>
          <ul className="text-base list-disc">
            <li>Token Creation</li>
            <li>BASE DEX Listing: Uniswap</li>
            <li>Website Development</li>
            <li>Social Media Development: Telegram, X</li>
            <li>Chuck Bot Telegram Integration</li>
            <li>Cross Channel Marketing with Influencers</li>
            <li>Major Dextools: CG and CMC Listings</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Token Creation
// BASE DEX Listing:Uniswap
// Website Development
// Social Media Development - Telegram. X
// Chuck Bot Telegram Integration
// Cross Channel Marketing with Influencers
// Major Dextools: CG and CMC Listings
