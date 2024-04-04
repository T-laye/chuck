import React from "react";
import DropBoxes from "./helpers/DropBoxes";

export default function Overview() {
  return (
    <div id="overview" className=" pt-16 pb-10 lg:py-28">
      <DropBoxes />
      <div className="container mx-auto px-4  flex flex-col items-center">
        <h2
          data-aos="flip-down"
          data-aos-delay="0"
          className="text-3xl font-upheavtt mb-4 lg:mb-10 text-center lg:text-3xl"
        >
          Why Chuck ?
        </h2>{" "}
        <p
          // data-aos="fade-down"
          // data-aos-delay="0"
          className="text-center text-base lg:text-2xl lg:max-w-4xl xl:max-w-6xl font-nimbus"
        >
          Born from a deep admiration for iconic internet humor, this token
          transcends its meme origins. It lies at the heart of a vibrant,
          fun-loving community with a noble mission: to bring attention to
          animal welfare. Whether you are here to share a laugh, spread love for
          our furry friends, or explore the world of Web3, you&apos;re welcomed
          with open paws. Join us in fostering not just a community, but a
          movement committed to making a difference, one meme at a time.
        </p>{" "}
      </div>
    </div>
  );
}
