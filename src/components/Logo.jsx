import React from "react";
import { Link } from "react-router-dom";
import blogIcon from "../assets/blog_Icon.png";

function Logo() {
  return (
    <div className="w-24 h-16 ml-4">
      <Link to={"/"}>
        <img src={blogIcon} className="mt-1 h-14 mr-3 drop-shadow-lg" alt="App Icon" />
      </Link>
    </div>
  );
}

export default Logo;
