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
          data-aos="fade-down"
          data-aos-delay="0"
          className="text-center text-base lg:text-2xl max-w-6xl"
        >
          $Chuck was born out of a deep admiration for the iconic Chuck Norris
          memes, but it stands for so much more than just internet meme. This
          token is at the core of a vibrant and fun-loving meme community with a
          noble mission: to shine a light on animal welfare. So, whether you are
          here to share a laugh, spread love for our furry friends, or simply
          explore the world of Web3, $Chuck welcomes you with open paws. Join us
          in building not just a community, but a movement dedicated to making a
          difference, one meme at a time.
        </p>{" "}
      </div>
    </div>
  );
}
