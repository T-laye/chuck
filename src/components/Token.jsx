import React from "react";
import DropBoxes from "./helpers/DropBoxes";

export default function Token() {
  return (
    <section id="tokenomics" className="pb-10 pt-20">
      <div className="container mx-auto px-4">
        <DropBoxes />
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
              70% LP
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
              15% Development
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className="chart chart-3"
            ></div>
            <p data-aos="fade-left" data-aos-delay="100" className="text-2xl">
              7.5% AirDrop
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className="chart chart-3"
            ></div>
            <p data-aos="fade-right" data-aos-delay="100" className="text-2xl">
              7.5% Marketing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
