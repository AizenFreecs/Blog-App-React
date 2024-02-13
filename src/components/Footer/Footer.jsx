import React from "react";

function Footer() {
  return (
    <footer className="relative w-full bottom-0 bg-gradient-to-b from-white to-primary-200 shadow-lg  pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-blueGray-700">
              Wanna know more about me ?
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Find me on any of these platforms...
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <a
                href="https://www.linkedin.com/in/aizenfreecs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-linkedin"></i>
                </button>
              </a>
              <a
                href="https://www.facebook.com/Aizen.D.Freecs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
              </a>
              <a
                href="https://www.instagram.com/aizen_d_freecs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-instagram"></i>
                </button>
              </a>
              <a
                href="https://github.com/AizenFreecs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-github"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      About Me
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://github.com/AizenFreecs"
                    >
                      Github
                    </a>
                  </li>
                  
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Contact Me
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="my-6 border-blueGray-300">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">2024</span>
                <a
                  href=""
                  className="text-blueGray-500 hover:text-gray-800"
                  target="_blank"
                >
                  {" "}
                  ZenBlog{" "}
                </a>{" "}
                by
                <a
                  href="https://github.com/AizenFreecs"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  {" "}
                  Sahil Thakur (Aizen)
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
