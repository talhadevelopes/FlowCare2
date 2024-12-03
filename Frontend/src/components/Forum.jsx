import React from "react";
import { useNavigate } from 'react-router-dom';

export function Forum() {
    const navigate = useNavigate();
  return (
    <div>
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>FlowCare</title>
        <link rel="stylesheet" href="../styles/style.css" />
        <link rel="stylesheet" href="../styles/tailwind.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
          integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        {/*----------------------SIDEBAR SECTION---------------------------------*/}
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
                        href="#" onClick={() => navigate("/")}
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
                          href="#" onClick={() => navigate("/forum")}
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
                          href="#" onClick={() => navigate("/blogs")}
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
                          href="../ecom/ecom.html"
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
                          href="../consultation/consultation.html"
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
                      strokeWidth={2}
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
        {/*----------------------BREADCRUMB SECTION---------------------------------*/}
        <nav aria-label="Breadcrumb" className="flex mt-4 ml-24">
          <ol className="flex overflow-hidden rounded-lg border border-gray-200 bg-slate-100 text-gray-600">
            <li className="flex items-center">
              <a
                href="#"
                className="flex h-10 items-center gap-1.5 px-4 transition hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span className="text-black ms-1.5 text-xs font-sans font-medium">
                  Home
                </span>
              </a>
            </li>
            <li className="relative flex items-center">
              <span className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"></span>
              <a
                href="../consultation/consultation.html"
                className="flex h-10 items-center text-black bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
              >
                Forum
              </a>
            </li>
          </ol>
        </nav>
        <h1 className="ml-[30%]">ON ITS WAY</h1>
        {/*----------------------FOOTER---------------------------------*/}
        <footer className="mt-20 xl:mt-32 mx-auto w-full relative text-center bg-pink-400 text-white">
          <div className="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
            <h2 className="font-bold text-3xl xl:text-4xl leading-snug">
              Ready to get your productivity back?
              <br />
              Start your free trial today.
            </h2>
            <a
              className="mt-8 xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-pink-800 rounded-full shadow-xl border border-transparent hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-999 focus:ring-pink-500"
              href="#"
            >
              Get started
            </a>
            <div className="mt-14 xl:mt-20">
              <nav className="flex flex-wrap justify-center text-lg font-medium">
                <div className="px-5 py-2">
                  <a href="#">Contact</a>
                </div>
                <div className="px-5 py-2">
                  <a href="#">Pricing</a>
                </div>
                <div className="px-5 py-2">
                  <a href="#">Privacy</a>
                </div>
                <div className="px-5 py-2">
                  <a href="#">Terms</a>
                </div>
                <div className="px-5 py-2">
                  <a href="#">Twitter</a>
                </div>
              </nav>
              <p className="mt-7 text-base">© 2023 XYZ, LLC</p>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
}
