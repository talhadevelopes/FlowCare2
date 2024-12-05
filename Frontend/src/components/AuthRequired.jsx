import React from "react";
import { useNavigate } from "react-router-dom";

const AuthRequired = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* SIDEBAR SECTION */}
      <div id="sidebar-container">
        <div className="flex h-screen w-16 flex-col justify-between border-e bg-pink-100">
          <div className="flex h-screen w-16 flex-col justify-between border-e bg-pink-100">
            <div>
              <div className="inline-flex size-16 items-center justify-center">
                <span className="grid size-10 place-content-center rounded-lg bg-pink-50 text-xs text-gray-600">
                  FlowCare
                </span>
              </div>

              <div className="border-t border-gray-100">
                <div className="px-2">
                  <div className="py-4">
                    <a
                      href="#"
                      className="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-pink-700"
                    >
                      <img src="../images/house-icon.svg" alt="" />

                      <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-2xl font-sans font-medium text-white group-hover:visible">
                        Home
                      </span>
                    </a>
                  </div>

                  <ul className="space-y-1 border-t border-gray-100 pt-4">
                    <li>
                      <a
                        href="#"
                        className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      >
                        <img src="../images/forum-icon.svg" alt="" />
                        <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-2xl font-sans font-medium text-white group-hover:visible">
                          Forum
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      >
                        <img src="../images/blogs-icon.svg" alt="" />
                        <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-2xl font-sans font-medium text-white group-hover:visible">
                          Blogs
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      >
                        <img src="../images/shopping-cart.svg" alt="" />
                        <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-2xl font-sans font-medium text-white group-hover:visible">
                          Shop
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      >
                        <img src="../images/health-logo.svg" alt="" />
                        <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 font-sans rounded bg-gray-900 px-4 py-1.5 text-xl font-medium text-white group-hover:visible">
                          Track Your Health Cycle
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      >
                        <img src="../images/user-logo.svg" alt="" />
                        <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-2xl font-sans font-medium text-white group-hover:visible">
                          Expert Consultation
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
              <form action="#">
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>

                  <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                    Logout
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/*  MAIN CONTENT SECTION **/}
      <div className="grid h-screen place-content-center px-4">
        <div className="text-center">
          <h1 className="text-9xl font-black text-gray-200">OOPS !!</h1>

          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sign-in / login Required
          </p>

          <p className="mt-4 text-gray-500"></p>

          <a
            href=""
            onClick={() => navigate("/Login")}
            className="mt-6 inline-block rounded bg-pink-600 mr-3 px-5 py-3 text-sm font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring"
          >
            Login
          </a>

          <a
            href="#"
            onClick={() => navigate("/Login")}
            className="mt-6 inline-block rounded bg-pink-600 px-5 py-3 text-sm font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring"
          >
            Sign-in
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthRequired;
