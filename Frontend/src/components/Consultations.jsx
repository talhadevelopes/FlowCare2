import React from "react";
import { useNavigate } from 'react-router-dom';

export function Consultations() {
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
                          href="consultation.html"
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
                href="#"
                className="flex h-10 items-center text-black bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
              >
                Consultation
              </a>
            </li>
          </ol>
        </nav>
        {/*----------------------INFO SECTION---------------------------*/}
        <div className="bg-white rounded-lg border p-6 w-2/4 ml-[30%]">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-pink-500">
              Book an Appointment
            </h2>
          </div>
          <div className="bg-pink-50 rounded-lg p-4 mt-5">
            <div className="inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1">
              <button className="inline-block rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative">
                Hyderabad
              </button>
              <button className="inline-block rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative">
                Mumbai
              </button>
              <button className="inline-block rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative">
                Delhi
              </button>
              <button className="inline-block rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative">
                Gurgaon
              </button>
              <button className="inline-block rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative">
                Noida
              </button>
              <button className="inline-block rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative">
                Chandigarh
              </button>
              <button className="inline-block rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative">
                Gurgao
              </button>
              <button className="inline-block rounded-md bg-white px-4 py-2 text-sm text-pink-500 shadow-sm focus:relative">
                View all
              </button>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative mt-6">
                  <button
                    id="dropdown-button-1"
                    className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500 flex justify-between items-center"
                  >
                    <span className="text-black">Chose Location</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex-1 relative mt-6">
                  <button
                    id="dropdown-button-2"
                    className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500 flex justify-between items-center"
                  >
                    <span className="text-black">Chose Specialization</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div
                    id="dropdown-menu-2"
                    className="hidden absolute z-10 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1"
                  >
                    <input
                      id="search-input-2"
                      className="block w-full px-4 py-2 text-gray-800 border rounded-md border-gray-300 focus:outline-none"
                      type="text"
                      placeholder="Search items"
                      autoComplete="off"
                    />
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                    >
                      Obstetrics
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                    >
                      Gynecology
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                    >
                      Health
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                    >
                      Urogynecology
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg ml-[30%] w-2/4 mt-12 border p-6">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-pink-500">
              Looking for a trusted and reliable doctor nearby? FlowCare is the
              Right Place is the answer.
            </h2>
            <p>
              Consult the specialists at Motherhood Hospitals for any health
              concerns. Our team of expert doctors are backed by years of
              experience &amp; will ensure that all your health queries are
              answered with finest supervision &amp; treatment
              <span className="text-blue-500 font-sans cursor-pointer">
                <br />
                Book the online consultation and appointment now.
              </span>
            </p>
          </div>
          <div className="bg-pink-50 rounded-lg p-4 mt-5">
            <div className="px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="relative pt-20">
                  <div className="rounded overflow-hidden shadow-md bg-white -mt-16">
                    <div className="absolute -top-16 w-full flex justify-center">
                      <div className="h-32 w-32" />
                    </div>
                    <div className="px-6 mt-16">
                      <img
                        src="https://randomuser.me/api/portraits/women/49.jpg"
                        className="rounded-full object-cover h-12 ml-[40%] -mt-9 w-12 shadow-md"
                        alt="Carole Steward"
                      />
                      <h1 className="font-bold text-3xl text-center mb-1">
                        Someone
                      </h1>
                      <p className="text-gray-800 text-sm text-center">
                        Speecialist{" "}
                        <i className="text-blue-400">@carehospitals.in</i>
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Eius voluptates, repellat porro unde ea animi
                        doloremque enim doloribus? Pariatur, quod fuga molestiae
                        odit nulla doloremque. Error dolorem repudiandae
                        eveniet. Quas?
                        <button className="bg-pink-300 px-4 py-2 mt-6 rounded-lg text-white">
                          Request Call Back
                        </button>
                        <button className="bg-pink-300 px-4 py-2 mt-6 rounded-lg text-white">
                          View Details
                        </button>
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5" />
                    </div>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="relative pt-20">
                  <div className="rounded overflow-hidden shadow-md bg-white -mt-16">
                    <div className="absolute -top-16 w-full flex justify-center">
                      <div className="h-32 w-32" />
                    </div>
                    <div className="px-6 mt-16">
                      <img
                        src="https://randomuser.me/api/portraits/women/49.jpg"
                        className="rounded-full object-cover h-12 ml-[40%] -mt-9 w-12 shadow-md"
                        alt="Carole Steward"
                      />
                      <h1 className="font-bold text-3xl text-center mb-1">
                        Someone
                      </h1>
                      <p className="text-gray-800 text-sm text-center">
                        Speecialist{" "}
                        <i className="text-blue-400">@carehospitals.in</i>
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Eius voluptates, repellat porro unde ea animi
                        doloremque enim doloribus? Pariatur, quod fuga molestiae
                        odit nulla doloremque. Error dolorem repudiandae
                        eveniet. Quas?
                        <button className="bg-pink-300 px-4 py-2 mt-6 rounded-lg text-white">
                          Request Call Back
                        </button>
                        <button className="bg-pink-300 px-4 py-2 mt-6 rounded-lg text-white">
                          View Details
                        </button>
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5" />
                    </div>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="relative pt-20">
                  <div className="rounded overflow-hidden shadow-md bg-white -mt-16">
                    <div className="absolute -top-16 w-full flex justify-center">
                      <div className="h-32 w-32" />
                    </div>
                    <div className="px-6 mt-16">
                      <img
                        src="https://randomuser.me/api/portraits/women/49.jpg"
                        className="rounded-full object-cover h-12 ml-[40%] -mt-9 w-12 shadow-md"
                        alt="Carole Steward"
                      />
                      <h1 className="font-bold text-3xl text-center mb-1">
                        Someone
                      </h1>
                      <p className="text-gray-800 text-sm text-center">
                        Speecialist{" "}
                        <i className="text-blue-400">@carehospitals.in</i>
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Eius voluptates, repellat porro unde ea animi
                        doloremque enim doloribus? Pariatur, quod fuga molestiae
                        odit nulla doloremque. Error dolorem repudiandae
                        eveniet. Quas?
                        <button className="bg-pink-300 px-4 py-2 mt-6 rounded-lg text-white">
                          Request Call Back
                        </button>
                        <button className="bg-pink-300 px-4 py-2 mt-6 rounded-lg text-white">
                          View Details
                        </button>
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5" />
                    </div>
                  </div>
                </div>
                {/* Card 4 */}
                <div className="relative pt-20">
                  <div className="rounded overflow-hidden shadow-md bg-white -mt-16">
                    <div className="absolute -top-16 w-full flex justify-center">
                      <div className="h-32 w-32" />
                    </div>
                    <div className="px-6 mt-16">
                      <img
                        src="https://randomuser.me/api/portraits/women/49.jpg"
                        className="rounded-full object-cover h-12 ml-[40%] -mt-9 w-12 shadow-md"
                        alt="Carole Steward"
                      />
                      <h1 className="font-bold text-3xl text-center mb-1">
                        Someone
                      </h1>
                      <p className="text-gray-800 text-sm text-center">
                        Speecialist{" "}
                        <i className="text-blue-400">@carehospitals.in</i>
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Eius voluptates, repellat porro unde ea animi
                        doloremque enim doloribus? Pariatur, quod fuga molestiae
                        odit nulla doloremque. Error dolorem repudiandae
                        eveniet. Quas?
                        <button className="bg-pink-300 px-4 py-2 mt-6 rounded-lg text-white">
                          Request Call Back
                        </button>
                        <button className="bg-pink-300 px-4 py-2 mt-6 rounded-lg text-white">
                          View Details
                        </button>
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5" />
                    </div>
                  </div>
                </div>
                {/* Card 5 */}
                <div className="relative pt-20">
                  <div className="rounded overflow-hidden shadow-md bg-white -mt-16">
                    <div className="absolute -top-16 w-full flex justify-center">
                      <div className="h-32 w-32" />
                    </div>
                    <div className="px-6 mt-16">
                      <img
                        src="https://randomuser.me/api/portraits/women/49.jpg"
                        className="rounded-full object-cover h-12 ml-[40%] -mt-9 w-12 shadow-md"
                        alt="Carole Steward"
                      />
                      <h1 className="font-bold text-3xl text-center mb-1">
                        Someone
                      </h1>
                      <p className="text-gray-800 text-sm text-center">
                        Speecialist{" "}
                        <i className="text-blue-400">@carehospitals.in</i>
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Eius voluptates, repellat porro unde ea animi
                        doloremque enim doloribus? Pariatur, quod fuga molestiae
                        odit nulla doloremque. Error dolorem repudiandae
                        eveniet. Quas?
                        <button className="bg-pink-300 px-4 py-2 mt-6 rounded-lg text-white">
                          Request Call Back
                        </button>
                        <button className="bg-pink-300 px-4 py-2 mt-6 rounded-lg text-white">
                          View Details
                        </button>
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*----------------------Pages SECTION---------------------------------*/}
        <ol className="flex justify-center gap-1 text-xs font-medium mt-12">
          <li>
            <a
              href="#"
              className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            >
              <span className="sr-only">Prev Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
            >
              1
            </a>
          </li>
          <li className="block size-8 rounded border-pink-600 bg-pink-600 text-center leading-8 text-white">
            2
          </li>
          <li>
            <a
              href="#"
              className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            >
              <span className="sr-only">Next Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ol>
        {/*----------------------DOCTORS---------------------------*/}
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
