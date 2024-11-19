import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="h-[85vh] w-full  px-4 py-4 ">
      <div className="h-full w-full rounded-xl gap-2 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <img
          src="https://i.pinimg.com/1200x/32/17/eb/3217eb734eceebf67f445acbe3f909bd.jpg"
          className="absolute h-full w-full -z-10 object-cover object-center "
          alt=""
        />
        <h2 className="text-4xl font-semibold">Welcome To Foodima</h2>
        <p className="max-w-[90%] sm:w-[60%] font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          ab! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Recusandae, ipsam.
        </p>
        <Link to={'https://github.com/indiedev2003'} target="_blank">
          <button className="px-8 py-2 rounded-2xl font-medium bg-gradient-to-tl from-teal-600 to-blue-500 text-white">
            Github
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
