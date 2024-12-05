import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Forum = () => {
  const navigate = useNavigate();

  const [profileImage, setProfileImage] = useState(
    "https://img.freepik.com/premium-photo/beautiful-woman-wearing-white-hijab-elegant-hijab_608068-34215.jpg"
  );

  const changeImage = (newImage) => {
    setProfileImage(newImage);
  };

  const initialForums = [
    {
      id: 1,
      title: "Sarvar is here",
      description: "Discuss all things related to.......",
      members: 1200,
      posts: 5678,
    },
    {
      id: 2,
      title: "Nouman is here",
      description: ".............",
      members: 890,
      posts: 3456,
    },
    {
      id: 3,
      title: "Is it really me or....",
      description: ".............",
      members: 890,
      posts: 3456,
    },
  ];

  const [forums, setForums] = useState(initialForums);
  const [showDialog, setShowDialog] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const renderForums = () => {
    return (
      <div className="grid grid-cols-3 rounded-lg gap-4 bg-gray-50 mr-[10%]">
        {forums.map((forum) => (
          <div key={forum.id} className="p-4 rounded-lg">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="text-pink-600 font-semibold text-lg mb-2">
                {forum.title}
              </div>
              <p className="text-sm absolute -mt-3 italic">@user1</p>
              <div className="text-sm mt-5 text-gray-600 mb-4">
                {forum.description}
              </div>
              <div className="flex justify-between text-sm text-muted-foreground mb-4">
                <div className="flex items-center">
                  <i className="fa-solid fa-user lucide lucide-users mr-1 h-4 w-4"></i>{" "}
                  {forum.members} members
                </div>
                <div className="flex items-center">
                  <i className="lucide lucide-message-circle mr-1 h-4 w-4"></i>{" "}
                  {forum.posts} posts
                </div>
              </div>
              <button class="w-full bg-pink-100 px-4 py-2 rounded-md">
                Join Forum
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const handleAddForum = () => {
    setShowDialog(true);
  };

  const handleCreateForum = () => {
    const newForum = {
      id: forums.length + 1,
      title: newTitle,
      description: newDescription,
      members: 0,
      posts: 0,
    };
    setForums([...forums, newForum]);
    setNewTitle("");
    setNewDescription("");
    setShowDialog(false);
  };

  return (
    <>
      <div id="sidebar-container">
        <div class="flex h-screen w-16 flex-col justify-between border-e bg-pink-100">
          <div class="flex h-screen w-16 flex-col justify-between border-e bg-pink-100">
            <div>
              <div className="py-4 px-2">
                <div className="group relative inline-block">
                  {/* Profile Picture */}
                  <div
                    id="profilePicture"
                    className="w-12 h-12 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${profileImage})` }}
                  ></div>

                  {/* Tooltip Container */}
                  <div className="invisible opacity-0 ml-20 group-hover:visible group-hover:opacity-100 absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 transform rounded bg-gray-900 p-2 text-white transition-all duration-300">
                    <div className="flex flex-col gap-2 whitespace-nowrap">
                      <button
                        className="block px-4 py-1 text-sm bg-pink-500 rounded hover:bg-pink-600"
                        onClick={() =>
                          changeImage(
                            "https://img.freepik.com/premium-photo/beautiful-woman-wearing-white-hijab-elegant-hijab_608068-34215.jpg"
                          )
                        }
                      >
                        User 1
                      </button>
                      <button
                        className="block px-4 py-1 text-sm bg-pink-500 rounded hover:bg-pink-600"
                        onClick={() =>
                          changeImage(
                            "https://media.istockphoto.com/photos/beautiful-young-muslim-woman-wearing-a-hijab-on-her-head-picture-id618035002?k=6&m=618035002&s=612x612&w=0&h=_1m2fRBf_DbVeFOZN-VwC2cW9QnV7tYerZwZo44lLjo="
                          )
                        }
                      >
                        User 2
                      </button>
                      <button
                        className="block px-4 py-1 text-sm bg-pink-500 rounded hover:bg-pink-600"
                        onClick={() =>
                          changeImage(
                            "https://i.pinimg.com/originals/ab/6d/70/ab6d70b2b5ac104f4459487d3a94bec7.jpg"
                          )
                        }
                      >
                        User 3
                      </button>
                    </div>

                    {/* Arrow */}
                    <div className="absolute left-1/2 top-0 -mt-2 h-0 w-0 -translate-x-1/2 transform border-8 border-transparent border-b-gray-900"></div>
                  </div>
                </div>
              </div>

              <div class="border-t border-gray-100">
                <div class="px-2">
                  <div class="py-4">
                    <a
                      href="#"
                      onClick={() => navigate("/")}
                      class="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-pink-700"
                    >
                      <img src="images/house-icon.svg" alt="" />

                      <span class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-2xl font-sans font-medium text-white group-hover:visible">
                        Home
                      </span>
                    </a>
                  </div>

                  <ul class="space-y-1 border-t border-gray-100 pt-4">
                    <li>
                      <a
                        href="#"
                        onClick={() => navigate("/forum")}
                        class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      >
                        <img src="images/forum-icon.svg" alt="" />

                        <span class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-2xl font-sans font-medium text-white group-hover:visible">
                          Forum
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        onClick={() => navigate("/blogs")}
                        class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      >
                        <img src="images/blogs-icon.svg" alt="" />

                        <span class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-2xl font-sans font-medium text-white group-hover:visible">
                          Blogs
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        onClick={() => navigate("/Ecom")}
                        class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      >
                        <img src="images/shopping-cart.svg" alt="" />

                        <span class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-2xl font-sans font-medium text-white group-hover:visible">
                          Shop
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        onClick={() => navigate("/tracker")}
                        class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      >
                        <img src="images/health-logo.svg" alt="" />

                        <span class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 font-sans rounded bg-gray-900 px-4 py-1.5 text-xl font-medium text-white group-hover:visible">
                          Track Your Health Cycle
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        onClick={() => navigate("/consultations")}
                        class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      >
                        <img src="images/user-logo.svg" alt="" />

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
                  strokeWidth="2"
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

      <h1 className="text-3xl ml-[10%] mt-9 font-bold text-pink-600">
        Menstrual Health Forums
      </h1>

      <div className="bg-transparent flex justify-center items-center px-20 mt-12">
        <div className="space-y-10">
          <div className="flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
            <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 opacity-30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                className="bg-gray-100 outline-none"
                type="text"
                placeholder="search forums..."
              />
            </div>
            <div className="flex py-3 px-4 rounded-lg font-semibold cursor-pointer">
              <span className="font-sans text-black bg-white">
                All categories
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div className="bg-pink-600 py-3 px-5 font-sans text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
              <span className="font-sans text-white">Search</span>
            </div>
          </div>
        </div>
      </div>

      <h2 className="ml-[10%] font-bold absolute mt-10">Tags:</h2>
      <span className="inline-flex ml-[14%] items-center mt-10 mb-14 justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="-ms-1 me-1.5 size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="whitespace-nowrap text-sm">Health</p>
      </span>

      <span className="inline-flex items-center justify-center rounded-full border border-emerald-500 px-2.5 py-0.5 text-emerald-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="-ms-1 me-1.5 size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="whitespace-nowrap text-sm">Women Empowerment</p>
      </span>

      <span className="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="-ms-1 me-1.5 size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 9.75h4.875a2.625 2.625 0 010 5.25H12M8.25 9.75L10.5 7.5M8.25 9.75L6 7.5"
          />
        </svg>
        <p className="whitespace-nowrap text-sm">People & culture</p>
      </span>

      <button
        className="mt-10 mb-14 ml-[35%] px-32 py-2 text-white bg-pink-500 rounded-lg"
        onClick={handleAddForum}
      >
        Add Forum
      </button>

      {showDialog && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Create New Forum</h3>
            <input
              type="text"
              className="border p-2 mb-4 w-full"
              placeholder="Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <textarea
              className="border p-2 mb-4 w-full"
              placeholder="Description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
            <div className="flex justify-between">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                onClick={() => setShowDialog(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={handleCreateForum}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="ml-[10%] mt-12">{renderForums()}</div>

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
    </>
  );
};

export default Forum;
