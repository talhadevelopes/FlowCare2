import React from "react";

function Blogs() {
  return (
    <div>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>FlowCare</title>
          <link rel="stylesheet" href="../styles/style.css" />
          <link rel="stylesheet" href="../styles/tailwind.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
            integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
        </head>

        <body>
          {/* <!------------------------SIDEBAR SECTION-----------------------------------> */}
          <div id="sidebar-container">
            <div class="flex h-screen w-16 flex-col justify-between border-e bg-pink-100">
              <div class="flex h-screen w-16 flex-col justify-between border-e bg-pink-100">
                <div>
                  <div class="inline-flex size-16 items-center justify-center">
                    <span class="grid size-10 place-content-center rounded-lg bg-pink-50 text-xs text-gray-600">
                      FlowCare
                    </span>
                  </div>

                  <div class="border-t border-gray-100">
                    <div class="px-2">
                      <div class="py-4">
                        <a
                          href="../index.html"
                          class="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-pink-700"
                        >
                          <img src="../images/house-icon.svg" alt="" />

                          <span class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-2xl font-sans font-medium text-white group-hover:visible">
                            Home
                          </span>
                        </a>
                      </div>

                      <ul class="space-y-1 border-t border-gray-100 pt-4">
                        <li>
                          <a
                            href="#"
                            class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                          >
                            <img src="../images/forum-icon.svg" alt="" />

                            <span class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-2xl font-sans font-medium text-white group-hover:visible">
                              Forum
                            </span>
                          </a>
                        </li>

                        <li>
                          <a
                            href="blogs.html"
                            class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                          >
                            <img src="../images/blogs-icon.svg" alt="" />

                            <span class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-2xl font-sans font-medium text-white group-hover:visible">
                              Blogs
                            </span>
                          </a>
                        </li>

                        <li>
                          <a
                            href="../ecom/ecom.html"
                            class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                          >
                            <img src="../images/shopping-cart.svg" alt="" />

                            <span class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-2xl font-sans font-medium text-white group-hover:visible">
                              Shop
                            </span>
                          </a>
                        </li>

                        <li>
                          <a
                            href="#"
                            class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                          >
                            <img src="../images/health-logo.svg" alt="" />

                            <span class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 font-sans rounded bg-gray-900 px-4 py-1.5 text-xl font-medium text-white group-hover:visible">
                              Track Your Health Cycle
                            </span>
                          </a>
                        </li>

                        <li>
                          <a
                            href="#"
                            class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                          >
                            <img src="../images/user-logo.svg" alt="" />

                            <span class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-2xl font-sans font-medium text-white group-hover:visible">
                              Expert Consultation
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
                  <form action="#">
                    <button
                      type="submit"
                      class="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>

                      <span class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                        Logout
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* <!------------------------BREADCRUMB SECTION-----------------------------------> */}
          <nav aria-label="Breadcrumb" class="flex mt-4 ml-24">
            <ol class="flex overflow-hidden rounded-lg border border-gray-200 bg-slate-100 text-gray-600">
              <li class="flex items-center">
                <a
                  href="#"
                  class="flex h-10 items-center gap-1.5 px-4 transition hover:text-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>

                  <span class="text-black ms-1.5 text-xs font-sans font-medium">
                    Home
                  </span>
                </a>
              </li>

              <li class="relative flex items-center">
                <span class="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"></span>

                <a
                  href="#"
                  class="flex h-10 items-center text-black bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
                >
                  Blogs
                </a>
              </li>
            </ol>
          </nav>

          {/* <!------------------------SEACRH BAR SECTION-----------------------------------> */}

          <div class="bg-transparent flex justify-center items-center px-20 mt-12">
            <div class="space-y-10">
              <div class="flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
                <div class="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 opacity-30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    class="bg-gray-100 outline-none"
                    type="text"
                    placeholder="Article name or keyword..."
                  />
                </div>
                <div class="flex py-3 px-4 rounded-lg font-semibold cursor-pointer">
                  <span class="font-sans text-black bg-white">
                    All categories
                  </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div class="bg-pink-600 py-3 px-5 font-sans text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
                  <span class="font-sans text-white">Search</span>
                </div>
              </div>
            </div>
          </div>

          {/* <!------------------------TAGS SECTION-----------------------------------> */}

          <div class="bg-pink-100 h-10 w-1/6 flex items-center justify-center text-pink-800 rounded-lg font-semibold text-xl border-red-300 ml-[70%] absolute mt-12">
            <button>
              <a href="cart.html" class="">
                Create New Blog <i class="fa-solid fa-plus"></i>
              </a>
            </button>
          </div>

          <h1 class="ml-[30%] absolute mt-14">Tags:</h1>
          <span class="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700 ml-[35%] mt-14">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="-ms-1 me-1.5 size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <p class="whitespace-nowrap text-sm font-sans">Health</p>
          </span>

          <span class="inline-flex items-center justify-center rounded-full border border-emerald-500 px-2.5 py-0.5 text-emerald-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="-ms-1 me-1.5 size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <p class="whitespace-nowrap text-sm font-sans">School life</p>
          </span>

          <span class="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="-ms-1 me-1.5 size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 9.75h4.875a2.625 2.625 0 010 5.25H12M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z"
              />
            </svg>

            <p class="whitespace-nowrap text-sm font-sans">Wellbeing</p>
          </span>

          <span class="inline-flex items-center justify-center rounded-full border border-amber-500 px-2.5 py-0.5 text-amber-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="-ms-1 me-1.5 size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 9.75h4.875a2.625 2.625 0 010 5.25H12M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z"
              />
            </svg>

            <p class="whitespace-nowrap text-sm font-sans">All</p>
          </span>

          {/* <!------------------------BLOGS SECTION-----------------------------------> */}
          <div class="grid grid-cols-2 gap-8 px-16 mt-14 ml-[10%]">
            <a
              href="#"
              class="relative block bg-gray-50 w-3/4 overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
            >
              <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

              <div class="sm:flex sm:justify-between sm:gap-4">
                <div>
                  <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                    Importance of self-care
                  </h3>
                  <p class="mt-1 text-xs font-medium text-gray-600">
                    By Nouman
                  </p>
                </div>
                <div class="hidden sm:block sm:shrink-0">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    class="size-16 rounded-lg object-cover shadow-sm"
                  />
                </div>
              </div>

              <div class="mt-4">
                <p class="text-pretty text-sm text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                  velit illum provident a, ipsa maiores deleniti consectetur
                  nobis et eaque.
                </p>
              </div>

              <dl class="mt-6 flex gap-4 sm:gap-6">
                <div class="flex flex-col-reverse">
                  <dt class="text-sm font-medium text-gray-600">Published</dt>
                  <dd class="text-xs text-gray-500">31st Dec, 2024</dd>
                </div>
                <div class="flex flex-col-reverse">
                  <dt class="text-sm font-medium text-gray-600">
                    Reading time
                  </dt>
                  <dd class="text-xs text-gray-500">3 minute</dd>
                </div>
              </dl>
            </a>

            <a
              href="#"
              class="relative block bg-gray-50 w-3/4 overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
            >
              <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

              <div class="sm:flex sm:justify-between sm:gap-4">
                <div>
                  <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                    Importance of self-care
                  </h3>
                  <p class="mt-1 text-xs font-medium text-gray-600">
                    By Nouman
                  </p>
                </div>
                <div class="hidden sm:block sm:shrink-0">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    class="size-16 rounded-lg object-cover shadow-sm"
                  />
                </div>
              </div>

              <div class="mt-4">
                <p class="text-pretty text-sm text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                  velit illum provident a, ipsa maiores deleniti consectetur
                  nobis et eaque.
                </p>
              </div>

              <dl class="mt-6 flex gap-4 sm:gap-6">
                <div class="flex flex-col-reverse">
                  <dt class="text-sm font-medium text-gray-600">Published</dt>
                  <dd class="text-xs text-gray-500">31st Dec, 2024</dd>
                </div>
                <div class="flex flex-col-reverse">
                  <dt class="text-sm font-medium text-gray-600">
                    Reading time
                  </dt>
                  <dd class="text-xs text-gray-500">3 minute</dd>
                </div>
              </dl>
            </a>

            <a
              href="#"
              class="relative block w-3/4 bg-gray-50 overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
            >
              <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

              <div class="sm:flex sm:justify-between sm:gap-4">
                <div>
                  <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                    Importance of self-care
                  </h3>
                  <p class="mt-1 text-xs font-medium text-gray-600">
                    By Nouman
                  </p>
                </div>
                <div class="hidden sm:block sm:shrink-0">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    class="size-16 rounded-lg object-cover shadow-sm"
                  />
                </div>
              </div>

              <div class="mt-4">
                <p class="text-pretty text-sm text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                  velit illum provident a, ipsa maiores deleniti consectetur
                  nobis et eaque.
                </p>
              </div>

              <dl class="mt-6 flex gap-4 sm:gap-6">
                <div class="flex flex-col-reverse">
                  <dt class="text-sm font-medium text-gray-600">Published</dt>
                  <dd class="text-xs text-gray-500">31st Dec, 2024</dd>
                </div>
                <div class="flex flex-col-reverse">
                  <dt class="text-sm font-medium text-gray-600">
                    Reading time
                  </dt>
                  <dd class="text-xs text-gray-500">3 minute</dd>
                </div>
              </dl>
            </a>

            <a
              href="#"
              class="relative block w-3/4 bg-gray-50 overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
            >
              <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

              <div class="sm:flex sm:justify-between sm:gap-4">
                <div>
                  <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                    Importance of self-care
                  </h3>
                  <p class="mt-1 text-xs font-medium text-gray-600">
                    By Nouman
                  </p>
                </div>
                <div class="hidden sm:block sm:shrink-0">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    class="size-16 rounded-lg object-cover shadow-sm"
                  />
                </div>
              </div>

              <div class="mt-4">
                <p class="text-pretty text-sm text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                  velit illum provident a, ipsa maiores deleniti consectetur
                  nobis et eaque.
                </p>
              </div>

              <dl class="mt-6 flex gap-4 sm:gap-6">
                <div class="flex flex-col-reverse">
                  <dt class="text-sm font-medium text-gray-600">Published</dt>
                  <dd class="text-xs text-gray-500">31st Dec, 2024</dd>
                </div>
                <div class="flex flex-col-reverse">
                  <dt class="text-sm font-medium text-gray-600">
                    Reading time
                  </dt>
                  <dd class="text-xs text-gray-500">3 minute</dd>
                </div>
              </dl>
            </a>
          </div>

          {/* <!------------------------Pages SECTION-----------------------------------> */}

          <ol class="flex justify-center gap-1 text-xs font-medium mt-12">
            <li>
              <a
                href="#"
                class="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
              >
                <span class="sr-only">Prev Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                class="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                1
              </a>
            </li>

            <li class="block size-8 rounded border-pink-600 bg-pink-600 text-center leading-8 text-white">
              2
            </li>

            <li>
              <a
                href="#"
                class="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                3
              </a>
            </li>

            <li>
              <a
                href="#"
                class="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                4
              </a>
            </li>

            <li>
              <a
                href="#"
                class="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
              >
                <span class="sr-only">Next Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ol>

          {/* <!------------------------FOOTER-----------------------------------> */}
          <footer class="mt-20 xl:mt-32 mx-auto w-full relative text-center bg-pink-400 text-white">
            <div class="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
              <h2 class="font-bold text-3xl xl:text-4xl leading-snug">
                Ready to get your productivity back?
                <br />
                Start your free trial today.
              </h2>
              <a
                class="mt-8 xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-pink-800 rounded-full shadow-xl border border-transparent hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-999 focus:ring-pink-500"
                href="#"
              >
                Get started
              </a>
              <div class="mt-14 xl:mt-20">
                <nav class="flex flex-wrap justify-center text-lg font-medium">
                  <div class="px-5 py-2">
                    <a href="#">Contact</a>
                  </div>
                  <div class="px-5 py-2">
                    <a href="#">Pricing</a>
                  </div>
                  <div class="px-5 py-2">
                    <a href="#">Privacy</a>
                  </div>
                  <div class="px-5 py-2">
                    <a href="#">Terms</a>
                  </div>
                  <div class="px-5 py-2">
                    <a href="#">Twitter</a>
                  </div>
                </nav>
                <p class="mt-7 text-base">© 2023 XYZ, LLC</p>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </div>
  );
}

export default Blogs;
