import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="h-[50vh] mt-10 w-full bg-slate-200 grid grid-rows-2 sm:grid-cols-2 items-center sm:justify-center px-4 py-2">
      <div className="text-center sm:text-start">
        <h2 className="text-4xl">Foodima </h2>
              <p>by Gagan Suman</p>
              <p className="text-sm sm:w-[50%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cumque consectetur amet voluptatibus voluptatem in velit ab similique hic accusantium!</p>
      </div>
      <div className="text-center sm:text-start">
        <ol className="text-xl font-medium">
          <li className="outline-none">
            <Link to={"https://github.com/indiedev2003"} target="_blank">
              Github
            </Link>
          </li>
          <li>
            <Link to={"https://t.me/SocialistDemo"} target="_blank">
              Telegram
            </Link>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Footer;
