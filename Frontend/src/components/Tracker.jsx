import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Tracker() {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(
    "https://img.freepik.com/premium-photo/beautiful-woman-wearing-white-hijab-elegant-hijab_608068-34215.jpg"
  );
  const [activeTab, setActiveTab] = useState("cycle-phases");

  const tabs = [
    { id: "cycle-phases", label: "Cycle Phases" },
    { id: "common-symptoms", label: "Common Symptoms" },
    { id: "nutrition-tips", label: "Nutrition Tips" },
    { id: "myths-facts", label: "Myths & Facts" },
    { id: "expert-consultation", label: "Expert Consultation" },
  ];

  const content = {
    "cycle-phases": (
      <div>
        <h3 className="font-medium mb-3">Menstrual Cycle Phases</h3>
        <ul className="space-y-2 text-sm">
          <li>• Menstrual phase (1-5 days)</li>
          <li>• Follicular phase (1-13 days)</li>
          <li>• Ovulation phase (14th day)</li>
          <li>• Luteal phase (15-28 days)</li>
        </ul>
      </div>
    ),
    "common-symptoms": (
      <div>
        <h3 className="font-medium mb-3">Common Symptoms</h3>
        <ul className="space-y-2 text-sm">
          <li>• Bloating</li>
          <li>• Cramps</li>
          <li>• Fatigue</li>
          <li>• Mood swings</li>
        </ul>
      </div>
    ),
    "nutrition-tips": (
      <div>
        <h3 className="font-medium mb-3">Nutrition Tips</h3>
        <ul className="space-y-2 text-sm">
          <li>• Stay hydrated</li>
          <li>• Eat iron-rich foods</li>
          <li>• Include Omega-3 fatty acids</li>
          <li>• Avoid excessive caffeine</li>
        </ul>
      </div>
    ),
    "myths-facts": (
      <div>
        <h3 className="font-medium mb-3">Myths & Facts</h3>
        <ul className="space-y-2 text-sm">
          <li>• Myth: You can't get pregnant during your period</li>
          <li>• Fact: Ovulation can happen soon after your period ends</li>
          <li>• Myth: PMS is just an excuse for mood swings</li>
          <li>
            • Fact: PMS is a real condition with physical and emotional symptoms
          </li>
        </ul>
      </div>
    ),
    "expert-consultation": (
      <div>
        <h3 className="font-medium mb-3">Expert Consultation</h3>
        <ul className="space-y-2 text-sm">
          <li>
            • Dr. Sarvar Khan (A very Big Doctor)
            <br />
            <span className="cursor-pointer underline font-sans">
              Request a Call Back
            </span>
          </li>
        </ul>
      </div>
    ),
  };

  const changeImage = (newImage) => {
    setProfileImage(newImage);
  };

  //Calender Part
  const [currentMonth, setCurrentMonth] = useState(0);
  const [notes, setNotes] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [noteText, setNoteText] = useState("");
  const [time, setTime] = useState("");

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const renderCalendar = () => {
    const days = daysInMonth(currentMonth, 2025);
    const calendarDays = [];
    for (let i = 1; i <= days; i++) {
      calendarDays.push(i);
    }
    return calendarDays;
  };

  const handleOpenModal = (day) => {
    setSelectedDate(day);
    setIsModalOpen(true);
    setNoteText("");
    setTime("");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveNote = () => {
    if (time && noteText) {
      const key = `${currentMonth}-${selectedDate}`;
      const newNotes = { ...notes };
      if (!newNotes[key]) newNotes[key] = [];
      newNotes[key].push({ time, text: noteText });
      setNotes(newNotes);
      handleCloseModal();
    } else {
      alert("Please fill out both time and note.");
    }
  };

  const handleResetCalendar = () => {
    setNotes({});
  };

  const updateNotesDisplay = (day) => {
    const key = `${currentMonth}-${day}`;
    return notes[key] || [];
  };

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
                Health Tracker
              </a>
            </li>
          </ol>
        </nav>
        {/*----------------------MAIN SECTION---------------------------------*/}
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 mt-12 sm:px-6 sm:py-12 lg:px-8 bg-pink-50 rounded-xl">
            <div className="max-w-7xl mx-auto p-6">
              <h1 className="text-2xl font-bold mb-6">Your Health Profile</h1>
              {/* PERIOD TRACKER  */}
              <div className="bg-white rounded-lg border p-6 mb-6">
                <div className="mb-4">
                  <h2 className="text-lg font-semibold">Period Tracker</h2>
                  <p className="text-sm text-gray-500">
                    Keep track of your menstrual cycle
                  </p>
                </div>
                <div className="grid md:grid-cols-2  gap-6 mb-14">
                  {/* Calendar Section */}
                  <div className="bg-gray-50 flex justify-center items-center h-screen flex-col">
                    <div className="calendar w-11/12 max-w-md text-center bg-white rounded-lg shadow-lg p-6">
                      <h2 className="text-xl text-gray-800 mb-6">Calendar</h2>
                      <div className="controls flex justify-between items-center mb-6">
                        <select
                          id="monthSelect"
                          value={currentMonth}
                          onChange={(e) =>
                            setCurrentMonth(parseInt(e.target.value))
                          }
                          className="text-sm p-2 rounded border border-gray-300 bg-gray-50 text-gray-700 focus:outline-none"
                        >
                          <option value="0">January</option>
                          <option value="1">February</option>
                          <option value="2">March</option>
                          <option value="3">April</option>
                          <option value="4">May</option>
                          <option value="5">June</option>
                          <option value="6">July</option>
                          <option value="7">August</option>
                          <option value="8">September</option>
                          <option value="9">October</option>
                          <option value="10">November</option>
                          <option value="11">December</option>
                        </select>
                        <button
                          onClick={handleResetCalendar}
                          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-400"
                        >
                          Reset Calendar
                        </button>
                      </div>
                      <div className="calendar-grid grid grid-cols-7 gap-2">
                        {renderCalendar().map((day) => (
                          <div
                            key={day}
                            className="day p-4 bg-gray-100 text-gray-700 cursor-pointer rounded-lg transition hover:bg-gray-200 min-h-20 relative text-sm"
                            onClick={() => handleOpenModal(day)}
                          >
                            {day}
                            <div className="note text-xs text-gray-500 mt-1">
                              {updateNotesDisplay(day).map((note, index) => (
                                <div key={index} className="note-entry mt-1">
                                  🕒 {note.time} - {note.text}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Modal for adding notes */}
                    {isModalOpen && (
                      <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                        <div className="modal-content bg-white p-6 rounded-lg w-11/12 max-w-sm shadow-lg">
                          <span
                            onClick={handleCloseModal}
                            className="close text-xl cursor-pointer text-gray-500 float-right hover:text-gray-700"
                          >
                            &times;
                          </span>
                          <h3 className="text-lg text-gray-800 mb-2">
                            Add Note
                          </h3>
                          <p className="text-gray-600">
                            Day: {selectedDate},{" "}
                            {
                              [
                                "January",
                                "February",
                                "March",
                                "April",
                                "May",
                                "June",
                                "July",
                                "August",
                                "September",
                                "October",
                                "November",
                                "December",
                              ][currentMonth]
                            }
                          </p>
                          <label
                            htmlFor="time"
                            className="text-sm text-gray-600"
                          >
                            Select Time:
                          </label>
                          <input
                            type="time"
                            id="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="w-full p-2 mt-2 border rounded text-sm border-gray-300"
                          />
                          <label
                            htmlFor="note"
                            className="text-sm text-gray-600 mt-2"
                          >
                            Note:
                          </label>
                          <textarea
                            id="note"
                            value={noteText}
                            onChange={(e) => setNoteText(e.target.value)}
                            rows="2"
                            placeholder="Enter your note..."
                            className="w-full p-2 mt-2 border rounded text-sm border-gray-300"
                          ></textarea>
                          <button
                            onClick={handleSaveNote}
                            className="bg-green-500 text-white py-2 px-4 rounded mt-4 w-full hover:bg-green-400"
                          >
                            Save Note
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* CYCLE LENGTH Section */}
                  <div>
                    <div class="mb-6">
                      <label
                        for="lastPeriod"
                        class="text-sm font-medium block mb-2"
                      >
                        Date of Your Last Period? (DD-MM-YYYY)
                      </label>
                      <input
                        id="lastPeriod"
                        type="date"
                        class="w-full border rounded-lg p-2"
                      />
                    </div>
                    <div className="mb-6">
                      <label className="text-sm font-medium block mb-2">
                        How long did it last? ( Number of Days )
                      </label>
                      <input
                        type="number"
                        defaultValue={28}
                        className="w-full border rounded-lg p-2"
                      />
                    </div>
                    <div className="mb-6">
                      <label className="text-sm font-medium block mb-2">
                        Whats Your usual cycle length?
                      </label>
                      <input
                        type="number"
                        defaultValue={28}
                        className="w-full border rounded-lg p-2"
                      />
                    </div>
                    <div className="bg-pink-50 rounded-lg p-4">
                      <p className="text-sm font-medium mb-2">
                        Next Period (Estimated)
                      </p>
                      <p className="text-lg">December 30, 2024</p>
                    </div>
                    <div className="bg-pink-50 rounded-lg p-4 mt-7 w-full">
                      <p className="text-sm font-medium mb-2">Stats:</p>
                      <p className="text-lg"></p>
                      <ul>
                        <li>
                          <i className="fa-solid fa-square mr-3"> </i>10 Days
                        </li>
                        <li>
                          <i className="fa-solid fa-square mr-3"> </i>10 Days
                        </li>
                        <li>
                          <i className="fa-solid fa-square mr-3"> </i>10 Days
                        </li>
                        <li>
                          <i className="fa-solid fa-square mr-3"> </i>10 Days
                        </li>
                      </ul>
                      <p />
                    </div>
                  </div>
                </div>
                {/* Menstraul Information Section */}

                <div className="bg-white rounded-lg border p-6">
                  <div className="mb-4">
                    <h2 className="text-lg font-semibold">
                      Menstrual Health Information
                    </h2>
                    <p className="text-sm text-gray-500">
                      Learn more about your menstrual cycle
                    </p>
                  </div>

                  <div className="border-b mb-4">
                    <div className="flex space-x-4">
                      {[
                        "cycle-phases",
                        "common-symptoms",
                        "nutrition-tips",
                        "myths-facts",
                        "expert-consultation",
                      ].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`tab-button px-4 py-2 text-sm font-medium ${
                            activeTab === tab
                              ? "border-b-2 border-pink-500 text-pink-500"
                              : "text-gray-500"
                          }`}
                        >
                          {tab
                            .replace(/-/g, " ")
                            .replace(/\b\w/g, (c) => c.toUpperCase())}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="tab-content mb-6">
                    {content[activeTab] || (
                      <div>No content available for this tab.</div>
                    )}
                  </div>

                  <div className="text-center">
                    <button className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors">
                      Download Health Report
                    </button>
                  </div>
                </div>

                <section className=" w-[80%] h-96 ml-[10%] relative mt-24 -mb-36">
                  <div className="flex items-center justify-center">
                    <section className="w-full p-6 rounded-lg max-w-2xl shadow-lg shadow-gray-300 bg-white">
                      <h1>Suggestions</h1>
                      <section className="py-4 grid grid-cols-2 gap-x-6">
                        <div className="flex items-center py-3">
                          <span className="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5 text-blue-500"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M13 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                              <path d="M7 21l3 -4" />
                              <path d="M16 21l-2 -4l-3 -3l1 -6" />
                              <path d="M6 12l2 -3l4 -1l3 3l3 1" />
                            </svg>
                          </span>
                          <div className="space-y-3 flex-1">
                            <div className="flex items-center">
                              <h4 className="font-medium text-sm mr-auto text-gray-700 flex items-center">
                                Walk
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="ml-2 shrink-0 w-5 h-5 text-gray-500"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  />
                                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                  <path d="M12 9h.01" />
                                  <path d="M11 12h1v4h1" />
                                </svg>
                              </h4>
                              <span className="px-2 py-1 rounded-lg bg-red-50 text-red-500 text-xs">
                                6.2 / 10
                              </span>
                            </div>
                            <div className="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
                              <span
                                className="h-full bg-blue-500 w-full block rounded-full"
                                style={{ width: "62%" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center py-3">
                          <span className="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5 text-blue-500"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M13 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                              <path d="M7 21l3 -4" />
                              <path d="M16 21l-2 -4l-3 -3l1 -6" />
                              <path d="M6 12l2 -3l4 -1l3 3l3 1" />
                            </svg>
                          </span>
                          <div className="space-y-3 flex-1">
                            <div className="flex items-center">
                              <h4 className="font-medium text-sm mr-auto text-gray-700 flex items-center">
                                Sleep
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="ml-2 shrink-0 w-5 h-5 text-gray-500"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  />
                                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                  <path d="M12 9h.01" />
                                  <path d="M11 12h1v4h1" />
                                </svg>
                              </h4>
                              <span className="px-2 py-1 rounded-lg bg-red-50 text-red-500 text-xs">
                                6.8 / 10
                              </span>
                            </div>
                            <div className="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
                              <span
                                className="h-full bg-blue-500 w-full block rounded-full"
                                style={{ width: "68%" }}
                              />
                            </div>
                          </div>
                        </div>
                      </section>
                    </section>
                  </div>
                </section>
              </div>
              {/* Education Content Section */}
              <div className="bg-white rounded-lg border p-6">
                <div className="mb-4">
                  <h2 className="text-lg font-semibold text-pink-500">
                    Understanding the Menstrual Cycle: A Comprehensive Guide
                  </h2>
                  <p>
                    The menstrual cycle is a natural process that occurs in the
                    female body. It prepares the body for pregnancy every month
                    and involves various hormonal changes. The menstrual cycle
                    typically lasts about 28 days, but it can vary from woman to
                    woman.
                  </p>
                </div>
                <div className="bg-pink-50 rounded-lg p-4 mt-5">
                  <p className="text-sm font-medium mb-2">
                    Menstrual Phase (Days 1-5)
                  </p>
                  <p className="text-lg">Menstrual Phase (Days 1-5)</p>
                </div>
                <div className="bg-pink-50 rounded-lg p-4 mt-5">
                  <p className="text-sm font-medium mb-2">
                    Follicular Phase (Days 1-13)
                  </p>
                  <p className="text-lg">
                    This phase begins on the first day of your period and ends
                    with ovulation. The body starts to prepare for ovulation,
                    and several follicles in the ovaries begin to mature.
                  </p>
                </div>
                <div className="bg-pink-50 rounded-lg p-4 mt-5">
                  <p className="text-sm font-medium mb-2">
                    Ovulation Phase (Day 14)
                  </p>
                  <p className="text-lg">
                    Around the middle of the menstrual cycle, the matured egg is
                    released from the ovary. This is the most fertile period and
                    the best time for conception.
                  </p>
                </div>
                <div className="bg-pink-50 rounded-lg p-4 mt-5">
                  <p className="text-sm font-medium mb-2">
                    Luteal Phase (Days 15-28)
                  </p>
                  <p className="text-lg">
                    After ovulation, the body prepares for a potential
                    pregnancy. If the egg is not fertilized, the lining of the
                    uterus will be shed, leading to the menstrual phase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
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
