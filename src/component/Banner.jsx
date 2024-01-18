import React from "react";
import banner from "../asset/bannerImg.jpg";

const Banner = () => {
  return (
    <div className="  width bg-white  shadow-lg overflow-hidden">
      <div className="lg:flex flex-wrap">
        <div className="xl:w-1/2 sm:p-10 xs:w-full   sm:w-full  md:shrink-0 md:p-10 xl:p-10 p-5  font-mono bg-neutral-300 text-black-50 ">
          <h5 className="text-lg font-mono">RECENT LAUNCH</h5>
          <h1 className="text-5xl  pt-5 font-bold text-black-500 font-mono">
            STARLINK MISSION
          </h1>
          <p className="font-mono">
            Falcon 9 is a reusable, two-stage rocket designed and manufactured
            by SpaceX for the reliable and safe transport of people and payloads
            into Earth orbit and beyond. Falcon 9 is the world’s first orbital
            class reusable rocket. Reusability allows SpaceX to refly the most
            expensive parts of the rocket, which in turn drives down the cost of
            space access.
          </p>
          <button className=" cursor-default mt-10 p-1 outline outline-offset-2 outline-1 outline-black-500 font-mono">
            REWATCH
          </button>
        </div>
        <div className="xl:w-1/2   sm:w-full md:shrink-0">
          <img class="h-full w-full object-cover md:w-full " src={banner} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
