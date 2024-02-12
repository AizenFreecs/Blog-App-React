import React from "react";
import { IoMdClose } from "react-icons/io";

function Pill({ title, onClick }) {
  return (
    <span className=" w-min rounded shadow-sm h-6 flex items-center gap-1 bg-black text-white p-4 cursor-pointer" >
      <h2>{title}</h2>
      <IoMdClose onClick={onClick} />
    </span>
  );
}

export default Pill;
