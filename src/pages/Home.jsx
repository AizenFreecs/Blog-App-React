import React from "react";
import slothImg from "../assets/home-sloth.png";
import homeTitleImg from "../assets/home-welcome-img.png";
import { NmButton, PostScroll } from "../components/index";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.loginStatus);
  return (
    <main className=" bg-slate-100">
      <div className="w-full px-6 py-4 bg-gradient-to-t from-white to-primary-200  shadow-md">
        <div className=" flex items-center flex-wrap justify-center w-full z-10 bg-transparent px-4  text-center">
          <div className="w-full md:w-2/3 flex flex-col items-center justify-center">
            <h1 className="mt-11 text-2xl md:text-4xl px-4">
              "Welcome to The Zen Blog – Where Laziness Feels Good."
            </h1>
            <h2 className="mt-5 text-sm md:text-xl text-primary-500">
              Unwind, grab your favorite drink, and immerse yourself in our
              articles that ignite imagination and spark curiosity.
              <br /> Whether seeking inspiration or a relaxing read, join us on
              this tranquil journey. Let the sloth guide you through creativity
              and comfort.
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
          <h1 className="mt-6 text-2xl text-primary-700 md:text-4xl px-4">
            About the Blog...
          </h1>
          <p className="mt-5 text-sm md:text-xl text-primary-500">
            Unwind with us in the cozy corners of The Lazy Blog, your ultimate
            retreat from the hustle and bustle of everyday life. Picture a
            serene sanctuary where ideas flow at a leisurely pace, just like our
            beloved logo – the laid-back sloth. Take a moment to kick back, grab
            your favorite drink, and immerse yourself in our collection of
            articles that promise to ignite your imagination and spark your
            curiosity. Whether you're seeking a dose of inspiration or simply
            craving a relaxing read, The Lazy Blog invites you to join us on
            this tranquil journey. Sit back, relax, and let the sloth guide you
            through a world of creativity and comfort.
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
