import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import LogoutBtn from "./LogoutBtn";

const NavLinks = ({ vertical }) => {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.loginStatus);
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "About",
      slug: "/about",
      active: true,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },

    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <>
      <ul
        className={`flex ${
          vertical ? "flex-col justify-center items-center align-middle" : ""
        }   py-2 px-4 `}
      >
        {navItems.map((item) =>
          item.active ? (
            <li key={item.name}>
              <button
                onClick={() => navigate(item.slug)}
                className={`inline-block px-6 py-2 duration-200 hover:bg-gradient-to-b from-white to-primary-200 rounded-full hover:drop-shadow-lg transition  ease-in-out focus:outline-none`}
              >
                {item.name}
              </button>
            </li>
          ) : null
        )}
        {authStatus && (
          <li>
            <LogoutBtn />
          </li>
        )}
      </ul>
    </>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <nav className="flex justify-end overflow-hidden">
        <div className="hidden justify-between md:flex ">
          <NavLinks />
        </div>
        <div className="md:hidden mr-4">
          <button onClick={toggleNavbar}>
            {isOpen ? <IoMdClose /> : <FiAlignJustify />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div
          className="flex basis-full items-center justify-center align-middle bg-grey-100"
          ref={navRef}
        >
          <NavLinks vertical />
        </div>
      )}
    </>
  );
}

export default Navbar;
