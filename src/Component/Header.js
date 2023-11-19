import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/Group 46@2x.png";

const Header = () => {
  return (
    <div>
      <header className="fixed shadow-md w-full h-20 bg-black ... px-2 md:px-4 z-50">
        <div className="absolute -top-2 -right-1">
          <Link to={""}> 
          <img src={image} alt="" className="h-full" />
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
