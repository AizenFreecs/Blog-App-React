import React, { useEffect, useState, useRef } from "react";
import appwriteService from "../appwrite/configDB";
import { Postcard } from "./index";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
function PostScroll() {
  const [posts, setPosts] = useState([]);
  const sliderRef = useRef(null);
  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  });
  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 500;
    }
  };
  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 500;
    }
  };
  return (
    <div className="w-full relative flex items-center drop-shadow-md rounded-md p-4">
      <MdChevronLeft
        className="opacity-50 hover:opacity-100 cursor-pointer"
        size={40}
        onClick={slideLeft}
      />
      <div
        ref={sliderRef}
        className="w-full h-full flex items-center overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
      >
        {posts.slice(0, 10).map((post) => (
          <div
            key={post.$id}
            className="flex p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 items-center justify-center"
          >
            <Postcard {...post} />
          </div>
        ))}
      </div>
      <MdChevronRight
        className="opacity-50 hover:opacity-100 cursor-pointer"
        size={40}
        onClick={slideRight}
      />
    </div>
  );
}

export default PostScroll;
