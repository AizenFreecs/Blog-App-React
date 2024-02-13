import React from "react";
import { Link } from "react-router-dom";
import blogIcon from "../assets/blog_Icon.png";
import titleIcon from '../assets/title.png'

function Logo() {
  return (
    <div className="w-72 h-16 ml-4">
      <Link to={"/"}>
        <div className="flex ">
          <img src={blogIcon} className="mt-1 h-14 drop-shadow-lg" alt="App Icon" />
          <img src={titleIcon} className="h-16 mt-1" alt="Title Icon"/>
          </div>
      </Link>
    </div>
  );
}

export default Logo;
