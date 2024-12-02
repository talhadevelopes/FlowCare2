import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
  <div>
        {/* <!------------------------SIDEBAR SECTION-----------------------------------> */}
    <div id="sidebar-container">
      <div
        class="flex h-screen w-16 flex-col justify-between border-e bg-pink-100"
      >
        <div
          class="flex h-screen w-16 flex-col justify-between border-e bg-pink-100"
        >
          <div>
            <div class="inline-flex size-16 items-center justify-center">
              <span
                class="grid size-10 place-content-center rounded-lg bg-pink-50 text-xs text-gray-600"
              >
                FlowCare
              </span>
            </div>

            <div class="border-t border-gray-100">
              <div class="px-2">
                <div class="py-4">
                  <a
                    href="#"
                    class="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-pink-700"
                  >
                    <img src="images/house-icon.svg" alt="" />

                    <span
                      class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-2xl font-sans font-medium text-white group-hover:visible"
                    >
                      Home
                    </span>
                  </a>
                </div>

                <ul class="space-y-1 border-t border-gray-100 pt-4">
                  <li>
                    <a
                      href="forum/forum.html"
                      class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    >
                      <img src="images/forum-icon.svg" alt="" />

                      <span
                        class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-2xl font-sans font-medium text-white group-hover:visible"
                      >
                        Forum
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="./blogs/blogs.html"
                      class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    >
                      <img src="images/blogs-icon.svg" alt="" />

                      <span
                        class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-2xl font-sans font-medium text-white group-hover:visible"
                      >
                        Blogs
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="./ecom/ecom.html"
                      class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    >
                      <img src="images/shopping-cart.svg" alt="" />

                      <span
                        class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-2xl font-sans font-medium text-white group-hover:visible"
                      >
                        Shop
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    >
                      <img src="images/health-logo.svg" alt="" />

                      <span
                        class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 font-sans rounded bg-gray-900 px-4 py-1.5 text-xl font-medium text-white group-hover:visible"
                      >
                        Track Your Health Cycle
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="consultation/consultation.html"
                      class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    >
                      <img src="images/user-logo.svg" alt="" />

                      <span
                        class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-2xl font-sans font-medium text-white group-hover:visible"
                      >
                        Expert Consultation
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            class="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2"
          >
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

                <span
                  class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                >
                  Logout
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* <!------------------------HEADER SECTION-----------------------------------> */}
    <header>
      <img src="./images/flowcare.png" alt="instagram" />
      <nav>
        <ul class="nav_links">
          <li><a href="">Home</a></li>
          <li><a href="">Resources</a></li>
          <li><a href="">Community</a></li>
        </ul>
      </nav>
      <a class="ata" href="#"><button class="header-button">Contact</button></a>
    </header>

    <main>
      <div class="content">
        <h1>Welcome to <br /><span>FlowCare</span>!</h1>
        <p>
          Your trusted companion on the path to better health! Explore, learn,
          and connect with a community that cares about your well-being.
        </p>
        <button class="header-button">Join Us!</button>
        <img src="../public/Images/women.png" alt="women" class="feature-image" />
      </div>
    </main>

    <div
      class="mx-auto max-w-screen-xl mt-36 px-4 py-8 sm:px-6 sm:py-12 lg:px-8"
    >
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-bold text-pink-600 sm:text-4xl">
          Trusted by Many
        </h2>

        <p class="mt-4 text-gray-500 sm:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          dolores laborum labore provident impedit esse recusandae facere libero
          harum sequi.
        </p>
      </div>

      <dl
        class="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        <div class="flex flex-col rounded-lg bg-pink-100 px-4 py-8 text-center">
          <dt class="order-last text-lg font-medium text-gray-500">
            Total Visitors
          </dt>

          <dd class="text-4xl font-extrabold text-pink-600 md:text-5xl">
            10k+
          </dd>
        </div>

        <div class="flex flex-col rounded-lg bg-pink-100 px-4 py-8 text-center">
          <dt class="order-last text-lg font-medium text-gray-500">
            Total Users
          </dt>

          <dd class="text-4xl font-extrabold text-pink-600 md:text-5xl">9k+</dd>
        </div>

        <div class="flex flex-col rounded-lg bg-pink-100 px-4 py-8 text-center">
          <dt class="order-last text-lg font-medium text-gray-500">Reviews</dt>

          <dd class="text-4xl font-extrabold text-pink-600 md:text-5xl">5٭</dd>
        </div>

        <div class="flex flex-col rounded-lg bg-pink-100 px-4 py-8 text-center">
          <dt class="order-last text-lg font-medium text-gray-500">
            Top Consultants
          </dt>

          <dd class="text-4xl font-extrabold text-pink-600 md:text-5xl">
            100+
          </dd>
        </div>
      </dl>
    </div>
    {/* <!---------------------------SERVICES-START-------------------------------> */}

    <span class="flex items-center mt-36">
      <span class="h-px flex-1 bg-black"></span>
      <span class="shrink-0 text-4xl px-6">One Stop For You</span>
      <span class="h-px flex-1 bg-black"></span>
    </span>

    <div
      class="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5"
    >
      <h2 class="mb-1 text-3xl font-extrabold leading-tight text-gray-900">
        Services
      </h2>
      <p class="mb-12 text-lg text-gray-500">
        Here is a few of the awesome Services we provide.
      </p>
      <div class="w-full">
        <div class="flex flex-col w-full mb-10 sm:flex-row">
          <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div class="relative h-full ml-0 mr-0 sm:mr-10">
              <span
                class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"
              ></span>
              <div
                class="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg"
              >
                <div class="flex items-center -mt-1">
                  <img src="images/news.svg" class="h-6 ml-16" alt="" />
                  <h3 class="my-2 ml- absolute text-lg font-bold text-gray-800">
                    Explore Blogs
                  </h3>
                </div>
                <p
                  class="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase"
                >
                  ------------
                </p>
                <p class="mb-2 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus architecto praesentium, cupiditate voluptates
                  recusandae consequatur aliquid molestias nam, ad, voluptate
                  cum inventore quibusdam assumenda odit deleniti aliquam in
                  ullam incidunt.
                </p>
                <button
                  type="button"
                  class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Explore blogs here
                </button>
              </div>
            </div>
          </div>
          <div class="w-full sm:w-1/2">
            <div class="relative h-full ml-0 md:mr-10">
              <span
                class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"
              ></span>
              <div
                class="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg"
              >
                <div class="flex items-center -mt-1">
                  <img src="images/health-notes.svg" class="h-6 ml-24" alt="" />
                  <h3 class="my-2 ml- absolute text-lg font-bold text-gray-800">
                    Track Your Health
                  </h3>
                </div>
                <p
                  class="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase"
                >
                  ------------
                </p>
                <p class="mb-2 text-gray-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eligendi veritatis, ipsum quae quia minima animi dolorum ad
                  perferendis dignissimos fugit expedita neque laudantium minus?
                  Dolorum totam minus dolore quis eos?
                </p>
                <button
                  type="button"
                  class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Track your Health Here
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col w-full mb-5 sm:flex-row">
          <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div class="relative h-full ml-0 mr-0 sm:mr-10">
              <span
                class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"
              ></span>
              <div
                class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg"
              >
                <div class="flex items-center -mt-1">
                  <img src="images/globe.svg" class="h-6 ml-32" alt="" />
                  <h3 class="my-2 ml- absolute text-lg font-bold text-gray-800">
                    Connect with People
                  </h3>
                </div>
                <p
                  class="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase"
                >
                  ------------
                </p>
                <p class="mb-2 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  possimus quia ipsam mollitia aperiam vitae distinctio sint,
                  laborum, ad facere sequi officiis dignissimos suscipit minima,
                  maxime hic dolores non placeat.
                </p>
                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Connect
                </button>
              </div>
            </div>
          </div>
          <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div class="relative h-full ml-0 mr-0 sm:mr-10">
              <span
                class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"
              ></span>
              <div
                class="relative h-full p-5 bg-white border-2 border-purple-200 rounded-lg"
              >
                <div class="flex items-center -mt-1">
                  <img
                    src="images/shopping-cart.svg"
                    class="h-6 ml-24"
                    alt=""
                  />
                  <h3 class="my-2 ml- absolute text-lg font-bold text-gray-800">
                    Explore Products
                  </h3>
                </div>
                <p
                  class="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase"
                >
                  ------------
                </p>
                <p class="mb-2 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                  ea ab voluptates fuga soluta veniam nostrum magnam beatae rem
                  quod veritatis nisi, inventore expedita nihil dolorum laborum
                  ullam eveniet aperiam.
                </p>
                <button
                  type="button"
                  class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Explore Products
                </button>
              </div>
            </div>
          </div>
          <div class="w-full sm:w-1/2">
            <div class="relative h-full ml-0 md:mr-10">
              <span
                class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-pink-300 rounded-lg"
              ></span>
              <div
                class="relative h-full p-5 bg-white border-2 border-pink-200 rounded-lg"
              >
                <div class="flex items-center -mt-1">
                  <img src="images/user-logo.svg" class="h-6 ml-24" alt="" />
                  <h3 class="my-2 ml- absolute text-lg font-bold text-gray-800">
                    Consult an Expert
                  </h3>
                </div>
                <p
                  class="mt-3 mb-1 text-xs font-medium text-green-500 uppercase"
                >
                  ------------
                </p>
                <p class="mb-2 text-gray-600">
                  Bot development frameworks were created as advanced software
                  tools that eliminate a large amount of manual work and
                  accelerate the development process.
                </p>
                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Help others
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!------------------------FAQ SECTION START-----------------------------------> */}

    <div class="ml-[20%] mt-5 w-1/2">
      <details
        class="group border-s-4 border-pink-200 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
        open
      >
        <summary
          class="flex cursor-pointer items-center justify-between gap-1.5"
        >
          <h2 class="text-lg font-medium text-gray-900">Why This Platform?</h2>

          <span
            class="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <p class="mt-4 leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
          veritatis molestias culpa in, recusandae laboriosam neque aliquid
          libero nesciunt voluptate dicta quo officiis explicabo consequuntur
          distinctio corporis earum similique!
        </p>
      </details>

      <details
        class="group border-s-4 mt-5 border-pink-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
      >
        <summary
          class="flex cursor-pointer items-center justify-between gap-1.5"
        >
          <h2 class="text-lg font-medium text-gray-900">is it Safe for me?</h2>

          <span
            class="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <p class="mt-4 leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
          veritatis molestias culpa in, recusandae laboriosam neque aliquid
          libero nesciunt voluptate dicta quo officiis explicabo consequuntur
          distinctio corporis earum similique!
        </p>
      </details>
    </div>

    {/* <!------------------------EDUCATION SECTION-START-----------------------------------> */}
    <span class="flex items-center mt-11">
      <span class="pr-6 text-4xl ml-28">Explore Blogs</span>
      <span class="h-px flex-1 bg-black"></span>
    </span>

    <article
      class="flex bg-white transition hover:shadow-xl mt-8 w-1/3 ml-[30%]"
    >
      <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
        <time
          datetime="2022-10-10"
          class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
        >
          <span>2022</span>
          <span class="w-px flex-1 bg-gray-900/10"></span>
          <span>Oct 10</span>
        </time>
      </div>

      <div class="hidden sm:block sm:basis-56">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          class="aspect-square h-full w-full object-cover"
        />
      </div>

      <div class="flex flex-1 flex-col justify-between">
        <div
          class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6"
        >
          <a href="#">
            <h3 class="font-bold uppercase text-gray-900">
              Finding the right guitar for your style - 5 tips
            </h3>
          </a>

          <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
            dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque
            minus soluta, voluptates neque explicabo tempora nisi culpa eius
            atque dignissimos. Molestias explicabo corporis voluptatem?
          </p>
        </div>

        <div class="sm:flex sm:items-end sm:justify-end">
          <a
            href="#"
            class="block bg-pink-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
          >
            Read Blog
          </a>
        </div>
      </div>
    </article>

    <article
      class="flex bg-white transition hover:shadow-xl mt-8 w-1/3 ml-[30%]"
    >
      <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
        <time
          datetime="2022-10-10"
          class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
        >
          <span>2022</span>
          <span class="w-px flex-1 bg-gray-900/10"></span>
          <span>Oct 10</span>
        </time>
      </div>

      <div class="hidden sm:block sm:basis-56">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          class="aspect-square h-full w-full object-cover"
        />
      </div>

      <div class="flex flex-1 flex-col justify-between">
        <div
          class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6"
        >
          <a href="#">
            <h3 class="font-bold uppercase text-gray-900">
              Finding the right guitar for your style - 5 tips
            </h3>
          </a>

          <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
            dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque
            minus soluta, voluptates neque explicabo tempora nisi culpa eius
            atque dignissimos. Molestias explicabo corporis voluptatem?
          </p>
        </div>

        <div class="sm:flex sm:items-end sm:justify-end">
          <a
            href="#"
            class="block bg-pink-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
          >
            Read Blog
          </a>
        </div>
      </div>
    </article>

    {/* <!------------------------TESTIMONIAL SECTION START-----------------------------------> */}

    <span class="flex items-center mt-12">
      <span class="h-px flex-1 bg-black"></span>
      <span class="pl-6 text-4xl">You are not alone, Connect with Us</span>
    </span>

    <section id="testimonies" class="py-20">
      <div class="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        <div
          class="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100"
        >
          <div class="mb-12 space-y-5 md:mb-16 md:text-center">
            <p class="text-xl text-[] md:text-center md:text-2xl">
              Here's what others have to say about us.
            </p>
          </div>
        </div>

        <div
          class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          <ul class="space-y-8">
            <li class="text-sm leading-6">
              <div class="relative group">
                <div
                  class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"
                ></div>
                <a href="https://twitter.com/kanyewest" class="cursor-pointer">
                  <div
                    class="relative p-6 space-y-6 leading-none rounded-lg bg-white text-black"
                  >
                    <div class="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                        class="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Kanye West"
                      />
                      <div>
                        <h3 class="text-lg font-semibold text-black">
                          Kanye West
                        </h3>
                        <p class="text-gray-500 text-md">
                          Rapper &amp; Entrepreneur
                        </p>
                      </div>
                    </div>
                    <p class="leading-normal text-black text-md">Find God.</p>
                  </div>
                </a>
              </div>
            </li>
            <li class="text-sm leading-6">
              <div class="relative group">
                <div
                  class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"
                ></div>
                <a href="https://twitter.com/kanyewest" class="cursor-pointer">
                  <div
                    class="relative p-6 space-y-6 leading-none rounded-lg bg-white text-black"
                  >
                    <div class="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                        class="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Kanye West"
                      />
                      <div>
                        <h3 class="text-lg font-semibold text-black">
                          Kanye West
                        </h3>
                        <p class="text-gray-500 text-md">
                          Rapper &amp; Entrepreneur
                        </p>
                      </div>
                    </div>
                    <p class="leading-normal text-black text-md">Find God.</p>
                  </div>
                </a>
              </div>
            </li>
          </ul>

          <ul class="hidden space-y-8 sm:block">
            <li class="text-sm leading-6">
              <div class="relative group">
                <div
                  class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"
                ></div>
                <a href="https://twitter.com/kanyewest" class="cursor-pointer">
                  <div
                    class="relative p-6 space-y-6 leading-none rounded-lg bg-white text-black"
                  >
                    <div class="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                        class="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Kanye West"
                      />
                      <div>
                        <h3 class="text-lg font-semibold text-black">
                          Kanye West
                        </h3>
                        <p class="text-gray-500 text-md">
                          Rapper &amp; Entrepreneur
                        </p>
                      </div>
                    </div>
                    <p class="leading-normal text-black text-md">Find God.</p>
                  </div>
                </a>
              </div>
            </li>
            <li class="text-sm leading-6">
              <div class="relative group">
                <div
                  class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"
                ></div>
                <a href="https://twitter.com/kanyewest" class="cursor-pointer">
                  <div
                    class="relative p-6 space-y-6 leading-none rounded-lg bg-white text-black"
                  >
                    <div class="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                        class="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Kanye West"
                      />
                      <div>
                        <h3 class="text-lg font-semibold text-black">
                          Kanye West
                        </h3>
                        <p class="text-gray-500 text-md">
                          Rapper &amp; Entrepreneur
                        </p>
                      </div>
                    </div>
                    <p class="leading-normal text-black text-md">Find God.</p>
                  </div>
                </a>
              </div>
            </li>
          </ul>

          <ul class="hidden space-y-8 lg:block">
            <li class="text-sm leading-6">
              <div class="relative group">
                <div
                  class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"
                ></div>
                <a href="https://twitter.com/kanyewest" class="cursor-pointer">
                  <div
                    class="relative p-6 space-y-6 leading-none rounded-lg bg-white text-black"
                  >
                    <div class="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                        class="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Kanye West"
                      />
                      <div>
                        <h3 class="text-lg font-semibold text-black">
                          Kanye West
                        </h3>
                        <p class="text-gray-500 text-md">
                          Rapper &amp; Entrepreneur
                        </p>
                      </div>
                    </div>
                    <p class="leading-normal text-black text-md">Find God.</p>
                  </div>
                </a>
              </div>
            </li>
            <li class="text-sm leading-6">
              <div class="relative group">
                <div
                  class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"
                ></div>
                <a href="https://twitter.com/kanyewest" class="cursor-pointer">
                  <div
                    class="relative p-6 space-y-6 leading-none rounded-lg bg-white text-black"
                  >
                    <div class="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                        class="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Kanye West"
                      />
                      <div>
                        <h3 class="text-lg font-semibold text-black">
                          Kanye West
                        </h3>
                        <p class="text-gray-500 text-md">
                          Rapper &amp; Entrepreneur
                        </p>
                      </div>
                    </div>
                    <p class="leading-normal text-black text-md">Find God.</p>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    {/* <!------------------------ECOMMERCE SECTION START-----------------------------------> */}

    <span class="flex items-center mt-12">
      <span class="h-px flex-1 bg-black"></span>
      <span class="shrink-0 text-4xl px-6">Explore Products</span>
      <span class="h-px flex-1 bg-black"></span>
    </span>

    <section
      class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
    >
      <div
        class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
      >
        <a href="#">
          <img
            src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Product"
            class="h-80 w-72 object-cover rounded-t-xl"
          />
          <div class="px-4 py-3 w-72">
            <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
            <p class="text-lg font-bold text-black truncate block capitalize">
              Product Name
            </p>
            <div class="flex items-center">
              <p class="text-lg font-semibold text-black cursor-auto my-3">
                $149
              </p>
              <del>
                <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
              </del>
              <div class="ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-bag-plus"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                  />
                  <path
                    d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div
        class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
      >
        <a href="#">
          <img
            src="https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Product"
            class="h-80 w-72 object-cover rounded-t-xl"
          />
          <div class="px-4 py-3 w-72">
            <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
            <p class="text-lg font-bold text-black truncate block capitalize">
              Product Name
            </p>
            <div class="flex items-center">
              <p class="text-lg font-semibold text-black cursor-auto my-3">
                $149
              </p>
              <del>
                <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
              </del>
              <div class="ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-bag-plus"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                  />
                  <path
                    d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div
        class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
      >
        <a href="#">
          <img
            src="https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Product"
            class="h-80 w-72 object-cover rounded-t-xl"
          />
          <div class="px-4 py-3 w-72">
            <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
            <p class="text-lg font-bold text-black truncate block capitalize">
              Product Name
            </p>
            <div class="flex items-center">
              <p class="text-lg font-semibold text-black cursor-auto my-3">
                $149
              </p>
              <del>
                <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
              </del>
              <div class="ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-bag-plus"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                  />
                  <path
                    d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>

    {/* <!------------------------FOOTER-----------------------------------> */}
    <footer
      class="mt-20 xl:mt-32 mx-auto w-full relative text-center bg-pink-400 text-white"
    >
      <div class="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
        <h2 class="font-bold text-3xl xl:text-4xl leading-snug">
          Ready to get your productivity back?<br />Start your free trial today.
        </h2>
        <a
          class="mt-8 xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-pink-800 rounded-full shadow-xl border border-transparent hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-999 focus:ring-pink-500"
          href="#"
          >Get started</a
        >
        <div class="mt-14 xl:mt-20">
          <nav class="flex flex-wrap justify-center text-lg font-medium">
            <div class="px-5 py-2"><a href="#">Contact</a></div>
            <div class="px-5 py-2"><a href="#">Pricing</a></div>
            <div class="px-5 py-2"><a href="#">Privacy</a></div>
            <div class="px-5 py-2"><a href="#">Terms</a></div>
            <div class="px-5 py-2"><a href="#">Twitter</a></div>
          </nav>
          <p class="mt-7 text-base">© 2023 XYZ, LLC</p>
        </div>
      </div>
    </footer>
    
  </div>
  )
}

export default App
