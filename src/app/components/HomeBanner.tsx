import Image from "next/image";
import React from "react";

const HomeBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-cyan-200 to-cyan-700 mb-9">
      <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
        <div className="mb-8 md:mb-0 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            WELCOME TO THE SHOW
          </h1>
          <p className="text-lg md:text-xl text-white mb-2">
            Enjoy discount on selected Item
          </p>
          <p className="text-2xl md:text-5xl text-cyan-900 font-bold">
            GET 20% OFF
          </p>
        </div>
        <div className="w-1/3 relative aspect-video">{/* <Image /> */}</div>
      </div>
    </div>
  );
};

export default HomeBanner;
