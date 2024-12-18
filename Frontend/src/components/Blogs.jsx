import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  CheckCircle2,
  XCircle,
  Home,
  GraduationCap,
  ShoppingBag,
  ActivitySquare,
  Stethoscope,
  Bot,
  ChevronRight,
  Calendar,
  Heart,
  Moon,
  Sun,
  Droplet,
  Utensils,
  Menu,
  X,
  Check,
  Star,
  Users,
  ArrowRight,
} from "lucide-react";

const questions = [
  {
    question: "What is the largest Animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
    description:
      "The Blue Whale is the largest animal ever known to have existed, reaching up to 100 feet in length and weighing up to 200 tons.",
  },
];

export function Blogs() {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(
    "https://img.freepik.com/premium-photo/beautiful-woman-wearing-white-hijab-elegant-hijab_608068-34215.jpg"
  );

  const [activeItem, setActiveItem] = useState(null);
  const [readSections, setReadSections] = useState([false, false, false]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const toggleAccordion = (id) => {
    setActiveItem((prev) => (prev === id ? null : id));
  };

  const handleRead = (index) => {
    const updatedReadSections = [...readSections];
    updatedReadSections[index] = true;
    setReadSections(updatedReadSections);
  };

  const handleAnswerClick = (correct) => {
    if (!answered) {
      if (correct) {
        setScore(score + 1);
        setIsCorrect(true);
      } else {
        setIsCorrect(false);
      }
      setAnswered(true);
    }
  };

  const handleNextClick = () => {
    if (isCorrect) {
      const nextQuestion = currentQuestionIndex + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestionIndex(nextQuestion);
        setAnswered(false);
        setIsCorrect(false);
      } else {
        setShowScore(true);
      }
    } else {
      setAnswered(false);
      setIsCorrect(false);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setAnswered(false);
    setIsCorrect(false);
  };

  const changeImage = (newImage) => {
    setProfileImage(newImage);
  };

  const accordionData = [
    {
      id: 1,
      question: "What is a period?",
      answer:
        "Your period or menstruation (that's the 'sciencey' name) is part of your menstrual cycle. This cycle is ultimately your body's way of preparing itself for a possible pregnancy.",
    },
    // ... (other accordion items remain unchanged)
  ];

  const NavItem = ({ icon, label, active = false }) => {
    return (
      <li>
        <a
          href="#"
          className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
            active
              ? "bg-pink-50 text-pink-600"
              : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          {icon}
          {label}
        </a>
      </li>
    );
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>FlowCare</title>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-[360px] bg-pink-50 p-6 flex flex-col">
          <h1 className="text-xl font-semibold text-pink-600 mb-6">FlowCare</h1>
          <nav className="flex-1">
            <ul className="space-y-2">
              <NavItem
                icon={<LayoutDashboard size={20} />}
                label="Dashboard"
                active
              />
              <NavItem icon={<Home size={20} />} label="Home" />
              <NavItem icon={<GraduationCap size={20} />} label="Education" />
              <NavItem icon={<ShoppingBag size={20} />} label="Shop" />
              <NavItem
                icon={<ActivitySquare size={20} />}
                label="Track Your Health"
              />
              <NavItem
                icon={<Stethoscope size={20} />}
                label="Expert Consultation"
              />
              <NavItem icon={<Bot size={20} />} label="AI Chatbot" />
            </ul>
          </nav>
          <div className="pt-6 mt-6 border-t border-gray-200">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-medium text-gray-600">
                UN
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">User Name</p>
                <p className="text-xs text-gray-500">Premium Member</p>
              </div>
              <ChevronRight size={16} className="ml-auto text-gray-400" />
            </div>
          </div>
        </aside>
        {/* Main content */}
        <div>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex mt-4 ml-8">
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
                  Blogs
                </a>
              </li>
            </ol>
          </nav>
          {/* Search bar */}
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
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    className="bg-gray-100 outline-none"
                    type="text"
                    placeholder="Article name or keyword..."
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
                      strokeWidth={2}
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
          {/* Content */}
          <div className="w-[70%] ml-[15%] mt-16 px-6 py-7 rounded-lg">
            <h1 className="text-7xl">Period 101</h1>
            <div className="bg-pink-200 w-1/4  rounded px-6 py-2 mt-14 -mb-16">
              <p>
                <i className="fa-solid fa-heart"> </i> Approved by{" "}
                <a href="" className="underline">
                  Industry Experts
                </a>
              </p>
            </div>
          </div>
          <div className="w-[70%] flex flex-col content-center items-center text-center px-7 py-10 ml-[15%] bg-pink-200 rounded-md mt-24">
            <h1 className="text-2xl text-pink-700  font-semibold mb-4">
              You can read the modules to earn rewards and unlock exciting new
              features.
            </h1>
            <div className="flex gap-4 flex-row">
              {readSections.map((isRead, index) => (
                <i
                  key={index}
                  className="fa-solid fa-trophy text-[2rem]"
                  style={{ color: isRead ? "#FFD43B" : "#fff " }}
                ></i>
              ))}
            </div>
          </div>
          <div className=" w-[70%] ml-[15%] mt-16  px-6 py-7 rounded-lg">
            <h1 className="text-3xl font-bold text-pink-500">
              Welcome to Period 101, your one-stop guide for everything
              period-related! Whether you want to know what to expect from your
              first period, or you're well into the swing of things but still
              have some questions, don't worry… we're here to help!
            </h1>
            <p className="text-xl mt-5">
              In this blog we'll cover all kinds of things! From what your
              period actually is (the sciencey bit), to how your period can
              affect your body, mood and feelings, and of course the question on
              everyone's lips…. WHAT IS NORMAL?!
            </p>
          </div>

          <div>
            <div className="accordion accordion-shadow mt-12 ml-[15%] w-5/5 mr-[15%]">
              {accordionData.map(({ id, question, answer }, index) => (
                <div
                  key={id}
                  className={`accordion-item bg-pink-50 transition-transform ease-in duration-300 mb-4 ${
                    activeItem === id ? "accordion-item-active" : ""
                  }`}
                  id={id}
                >
                  <button
                    className="accordion-toggle inline-flex items-center justify-between gap-x-7 px-5 py-4 text-start w-full"
                    aria-controls={`${id}-collapse`}
                    aria-expanded={activeItem === id}
                    onClick={() => toggleAccordion(id)}
                  >
                    <div className="inline-flex items-center gap-x-4">
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "pink" }}
                      ></i>

                      <span
                        className={`icon-[tabler--plus] ${
                          activeItem === id ? "hidden" : "block"
                        } text-base-content size-4.5 shrink-0`}
                      ></span>
                      <span
                        className={`icon-[tabler--minus] ${
                          activeItem === id ? "block" : "hidden"
                        } text-base-content size-4.5 shrink-0`}
                      ></span>
                      <h1 className="text-2xl text-pink-700 font-semibold text-base-content">
                        {question}
                      </h1>
                    </div>
                    <i
                      className={`fa-solid ${
                        activeItem === id ? "fa-minus" : "fa-plus"
                      } text-lg text-base-content`}
                    ></i>
                  </button>
                  <div
                    id={`${id}-collapse`}
                    className={`accordion-content w-full overflow-hidden transition-[height] duration-300 ${
                      activeItem === id ? "" : "hidden"
                    }`}
                    aria-labelledby={id}
                    role="region"
                  >
                    <div className="px-5 pb-4">
                      <p className="text-base-content/80 font-normal">
                        {answer}
                      </p>
                      <div className="mt-4">
                        <label className="flex items-center gap-2 text-base-content">
                          <input
                            type="radio"
                            name={`read-${id}`}
                            className="radio"
                            onClick={() => handleRead(index)}
                            disabled={readSections[index]}
                          />
                          I have read
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center bg-pink-50 ml-[15%] mr-[15%] rounded-lg mb-36 mt-20 p-4">
            <div className="w-full max-w-2xl mt-12 mb-12 bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-center mb-6">Quiz</h2>
                <div>
                  {showScore ? (
                    <div className="text-center">
                      <h2 className="text-xl mb-4">
                        Your Score: {score} out of {questions.length}
                      </h2>
                      <button
                        onClick={restartQuiz}
                        className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Play Again
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-xl mb-4">
                        {currentQuestionIndex + 1}.{" "}
                        {questions[currentQuestionIndex].question}
                      </h2>
                      <div className="space-y-2">
                        {questions[currentQuestionIndex].answers.map(
                          (answer, index) => (
                            <button
                              key={index}
                              className={`w-full text-left p-2 rounded ${
                                answered && answer.correct
                                  ? "bg-green-200 text-white"
                                  : answered && !answer.correct
                                  ? "bg-red-400 text-white"
                                  : "bg-pink-50 hover:bg-gray-300"
                              }`}
                              onClick={() => handleAnswerClick(answer.correct)}
                              disabled={answered}
                            >
                              {answer.text}
                            </button>
                          )
                        )}
                      </div>
                      {answered && (
                        <div
                          className={`mt-4 p-4 rounded ${
                            isCorrect ? "bg-green-100" : "bg-red-100"
                          }`}
                        >
                          <div className="flex items-center">
                            {isCorrect ? (
                              <CheckCircle2 className="mr-2 text-green-200" />
                            ) : (
                              <XCircle className="mr-2 text-red-200" />
                            )}
                            <h3 className="font-bold">
                              {isCorrect ? "Correct!" : "Incorrect. Try again!"}
                            </h3>
                          </div>
                          <p className="mt-2">
                            {isCorrect &&
                              questions[currentQuestionIndex].description}
                          </p>
                        </div>
                      )}
                      {answered && (
                        <div className="mt-4 text-center">
                          <button
                            onClick={handleNextClick}
                            className="bg-pink-400 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                          >
                            {isCorrect
                              ? currentQuestionIndex === questions.length - 1
                                ? "Finish"
                                : "Next"
                              : "Retry"}
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
