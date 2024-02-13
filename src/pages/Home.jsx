import React from "react";
import slothImg from "../assets/home-sloth.png";
import { NmButton, PostScroll } from "../components/index";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.loginStatus);
  return (
    <main className=" bg-slate-100">
      <div className="w-full px-6 py-4 bg-gradient-to-t from-white to-primary-200  shadow-md">
        <div className=" flex items-center flex-wrap justify-center w-full z-10 bg-transparent px-4 ">
          <div className="w-full md:w-2/3 flex flex-col items-center justify-center">
            <h1 className="mt-11 text-primary-600 text-2xl md:text-4xl px-4 font-serif text-center">
            Welcome to Zenblog - Your Oasis of Tranquility
            </h1>
            <h2 className="mt-5 text-sm md:text-xl text-primary-500 text-center">
            Welcome to Zenblog, your digital oasis of tranquility in the bustling online world.
              <br />Take a moment to breathe deeply and let the stresses of the day melt away as you explore our platform. Share your thoughts, stories, and musings with the world, or simply find solace in the writings of others. Whatever path you choose, know that you're among friends here.
            </h2>
            {!authStatus ? (
              <div className="px-2 rounded my-4 flex gap-6 mb-6  max-w-fit min-h-fit">
                <NmButton onClick={() => navigate("/login")}>Login</NmButton>
                <NmButton onClick={() => navigate("/signup")}>SignUp</NmButton>
              </div>
            ) : null}
          </div>
          <div className="w-full md:w-1/3 h-72 flex justify-center items-center ">
            <img
              src={slothImg}
              alt="Where did the lazy sloth go I wonder ???"
              className="max-w-1/2 max-h-full mt-4 object-contain drop-shadow-xl"
            />
          </div>
        </div>

        {authStatus ? (
          <div className="my-4 bg-transparent px-2 py-4 text-center">
            <PostScroll />
            <NmButton className="w-44" onClick={() => navigate("/all-posts")}>
              See More
            </NmButton>
          </div>
        ) : null}

        <div className="bg-transparent p-4 text-center">
          <h1 className="mt-6 text-2xl text-primary-600 md:text-4xl px-4">
            About the Blog...
          </h1>
          <p className="mt-5 text-sm md:text-xl text-primary-500">
          At Zenblog, we believe in the power of simplicity and minimalism to create a peaceful environment conducive to introspection and personal growth. 
          I invite you to explore our blog, engage with our community, and join us on this journey toward inner peace and harmony. Together, let's cultivate a deeper sense of mindfulness and tranquility in our lives.
          </p>
          <NmButton className="mt-4" onClick={() => navigate("/about")}>
            Know More
          </NmButton>
        </div>
      </div>
    </main>
  );
}

export default Home;
