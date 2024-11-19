import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="h-10 sticky top-0 py-6 z-20 bg-white px-2 flex items-center justify-between">
      <Link to={'/'}><h2 className="text-3xl ">Foodima</h2></Link>
      <Link to={'https://github.com/indiedev2003'} target="_blank">
        <p className="hover:scale-125">Github</p>
      </Link>
    </div>
  );
}

export default Navbar;
