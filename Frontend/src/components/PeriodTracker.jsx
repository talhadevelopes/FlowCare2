import React, { useState, useMemo, useEffect } from "react";
import { format, addDays } from "date-fns";
import { useNavigate } from "react-router-dom";
import { Calendar, Frown, Smile, Angry, Coffee, Zap, Moon, ChevronDown, ChevronUp, Heart } from 'lucide-react';
import axios from 'axios'; 

const server_url = import.meta.env.VITE_SERVER_URL;

const moodOptions = [
  { name: "Happy", icon: Smile },
  { name: "Sad", icon: Frown },
  { name: "Calm", icon: Coffee },
  { name: "Angry", icon: Angry },
  { name: "Tired", icon: Moon },
  { name: "Energized", icon: Zap },
];

const moodSeverityOptions = [
  { name: "Low", value: "low" },
  { name: "Medium", value: "medium" },
  { name: "High", value: "high" },
];

const symptomOptions = [
  "Lower Abdomen Cramps",
  "Back Pain",
  "Bloating",
  "Fatigue",
  "Headaches",
  "Nausea",
  "Sleep Disruption",
  "Digestive Issues",
];

const symptomSeverityOptions = ["None", "Mild", "Moderate", "Severe"];

const sleepQualityOptions = ["Poor", "Fair", "Good", "Excellent"];

export function PeriodTracker() {
  const navigate = useNavigate();
  const [cycleDuration, setCycleDuration] = useState("");
  const [lastPeriodStart, setLastPeriodStart] = useState("");
  const [lastPeriodDuration, setLastPeriodDuration] = useState("");
  const [moodTypes, setMoodTypes] = useState([]);
  const [moodSeverity, setMoodSeverity] = useState("");
  const [moodDate, setMoodDate] = useState(format(new Date(), "yyyy-MM-dd"));
  const [symptoms, setSymptoms] = useState([]);
  const [symptomSeverities, setSymptomSeverities] = useState({});
  const [symptomDate, setSymptomDate] = useState(format(new Date(), "yyyy-MM-dd"));
  const [sleepDuration, setSleepDuration] = useState("");
  const [sleepQuality, setSleepQuality] = useState("");
  const [nextPeriodPrediction, setNextPeriodPrediction] = useState("");
  const [expandedSections, setExpandedSections] = useState({
    cycleInfo: true,
    moodTracking: true,
    symptomTracking: true,
    sleepTracking: true,
    healthTips: true,
  });
  const [showHealthTips, setShowHealthTips] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "cycleDuration":
        setCycleDuration(value);
        break;
      case "lastPeriodStart":
        setLastPeriodStart(value);
        break;
      case "lastPeriodDuration":
        setLastPeriodDuration(value);
        break;
      case "moodDate":
        setMoodDate(value);
        break;
      case "symptomDate":
        setSymptomDate(value);
        break;
      case "sleepDuration":
        setSleepDuration(value);
        break;
      case "sleepQuality":
        setSleepQuality(value);
        break;
      default:
        break;
    }
  };

  const handleMoodTypeChange = (moodName) => {
    setMoodTypes((prev) =>
      prev.includes(moodName)
        ? prev.filter((mood) => mood !== moodName)
        : [...prev, moodName]
    );
  };

  const handleSymptomChange = (symptom) => {
    setSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    );
  };

  const handleSymptomSeverityChange = (symptom, severity) => {
    setSymptomSeverities((prev) => ({
      ...prev,
      [symptom]: severity,
    }));
  };

  const predictNextPeriod = () => {
    if (lastPeriodStart && cycleDuration) {
      const nextPeriodDate = addDays(
        new Date(lastPeriodStart),
        parseInt(cycleDuration)
      );
      setNextPeriodPrediction(format(nextPeriodDate, "yyyy-MM-dd"));
    }
  };

  const handleSubmit = async () => { 
    
    const userId = localStorage.getItem('userId');
    
    if (!userId) {
        alert('Please log in first');
        return;
    }

    const submissionData = {
      userId, 
      cycleDuration,
      lastPeriodStart,
      lastPeriodDuration,
      moodTypes,
      moodSeverity,
      moodDate,
      symptoms,
      symptomSeverities,
      symptomDate,
      sleepDuration,
      sleepQuality,
      nextPeriodPrediction,
    };

    try {
      
      try {
        const response = await axios.post(`${server_url}trackerdata`, submissionData);
        console.log('Data submitted successfully:', response.data);
        setShowHealthTips(true);
        alert('Data submitted successfully!');
        return;
      } catch (primaryError) {
        console.warn('Primary server failed, attempting local fallback:', primaryError);
      }

      
      const localResponse = await axios.post('http://localhost:3000/trackerdata', submissionData);
      console.log('Data submitted successfully via local server:', localResponse.data);
      setShowHealthTips(true);
      alert('Data submitted successfully!');
    } catch (error) {
      console.error('Error submitting data:', error);
      
      
      if (error.response) {
        
        alert(`Error: ${error.response.data.message || 'Server error'}`);
      } else if (error.request) {
        
        alert('No response from server. Please check your network connection.');
      } else {
        
        alert('Error submitting data. Please try again.');
      }
    }
};

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const renderSection = (title, content, section) => (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => toggleSection(section)}
      >
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {expandedSections[section] ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </div>
      {expandedSections[section] && <div className="mt-4">{content}</div>}
    </div>
  );

  const generateHealthTips = useMemo(() => {
    const tips = [];

    // Cycle duration tips
    if (cycleDuration) {
      const cycleDurationInt = parseInt(cycleDuration);
      if (cycleDurationInt < 21) {
        tips.push(
          "Your cycle is shorter than average. Consider consulting with a healthcare professional to ensure everything is normal."
        );
      } else if (cycleDurationInt > 35) {
        tips.push(
          "Your cycle is longer than average. This can be normal, but you may want to discuss it with your doctor."
        );
      } else {
        tips.push(
          "Your cycle length is within the normal range. Keep tracking to notice any changes."
        );
      }
    }

    
    if (lastPeriodDuration) {
      const periodDuration = parseInt(lastPeriodDuration);
      if (periodDuration > 7) {
        tips.push(
          "Your period duration is longer than average. If this is consistent, consider discussing it with your healthcare provider."
        );
      } else if (periodDuration < 3) {
        tips.push(
          "Your period duration is shorter than average. This can be normal, but keep an eye on it and consult your doctor if you're concerned."
        );
      }
    }

    
    if (moodTypes.includes("Sad") || moodTypes.includes("Angry")) {
      tips.push(
        "Mood swings can be common during your cycle. Try relaxation techniques or gentle exercise to help manage your emotions."
      );
    }
    if (moodTypes.includes("Tired")) {
      tips.push(
        "Fatigue is common during menstruation. Ensure you're getting enough rest and consider iron-rich foods to combat tiredness."
      );
    }

    
    if (symptoms.includes("Lower Abdomen Cramps")) {
      tips.push(
        "For menstrual cramps, try using a heating pad or taking a warm bath to alleviate discomfort."
      );
    }
    if (symptoms.includes("Bloating")) {
      tips.push(
        "To reduce bloating, try to avoid salty foods and increase your water intake."
      );
    }
    if (symptoms.includes("Headaches")) {
      tips.push(
        "Headaches can be common during your cycle. Stay hydrated and consider over-the-counter pain relievers if needed."
      );
    }
    if (symptoms.includes("Sleep Disruption")) {
      tips.push(
        "To improve sleep during your cycle, try to maintain a consistent sleep schedule and create a relaxing bedtime routine."
      );
    }

    // Sleep-based tips
    if (sleepDuration) {
      const sleepDurationInt = parseFloat(sleepDuration);
      if (sleepDurationInt < 7) {
        tips.push(
          "You might not be getting enough sleep. Aim for 7-9 hours of sleep per night for optimal health and well-being."
        );
      } else if (sleepDurationInt > 9) {
        tips.push(
          "You're getting more sleep than average. While this can be normal, excessive sleep might indicate other health issues. Consider discussing with your doctor if this persists."
        );
      } else {
        tips.push(
          "Your sleep duration is within the recommended range. Keep maintaining this healthy sleep pattern!"
        );
      }
    }

    if (sleepQuality === "Poor" || sleepQuality === "Fair") {
      tips.push(
        "To improve sleep quality, try establishing a consistent bedtime routine, avoiding screens before bed, and creating a comfortable sleep environment."
      );
    }

    
    tips.push(
      "Stay hydrated by drinking plenty of water throughout your cycle."
    );
    tips.push(
      "Regular exercise can help alleviate many menstrual symptoms and improve overall well-being."
    );
    tips.push(
      "A balanced diet rich in fruits, vegetables, and whole grains can help support your body during your cycle."
    );

    return tips;
  }, [cycleDuration, lastPeriodDuration, moodTypes, sleepDuration, sleepQuality, symptoms]);

  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      
      <div id="sidebar-container">
        <div className="flex h-screen w-16 flex-col justify-between border-e bg-pink-100">
          <div className="flex h-screen w-16 flex-col justify-between border-e bg-pink-100">
            <div>
              <div className="border-t border-gray-100">
                <div className="px-2">
                  <div className="py-4">
                    <a
                      href="#"
                      onClick={() => navigate("/")}
                      className="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-pink-700"
                    >
                      <img src="images/house-icon.svg" alt="" />

                      <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-2xl font-sans font-medium text-white group-hover:visible">
                        Home
                      </span>
                    </a>
                  </div>

                  <ul className="space-y-1 border-t border-gray-100 pt-4">
                    <li>
                      <a
                        href="#"
                        onClick={() => navigate("/blogs")}
                        className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      >
                        <img src="images/blogs-icon.svg" alt="" />

                        <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-2xl font-sans font-medium text-white group-hover:visible">
                          Education
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        onClick={() => navigate("/Ecom")}
                        className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      >
                        <img src="images/shopping-cart.svg" alt="" />

                        <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-2xl font-sans font-medium text-white group-hover:visible">
                          Shop
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        onClick={() => navigate("/tracker")}
                        className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      >
                        <img src="images/health-logo.svg" alt="" />

                        <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 font-sans rounded bg-gray-900 px-4 py-1.5 text-xl font-medium text-white group-hover:visible">
                          Track Your Health Cycle
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        onClick={() => navigate("/consultations")}
                        className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      >
                        <img src="images/user-logo.svg" alt="" />

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
                  onClick={() => navigate("/Signup")}
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
                    SignUp
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-10 max-w-4xl mx-auto">
        <div className="p-4 max-w-sm">
          <div className="flex rounded-lg h-full bg-pink-100 text-black p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className=" text-lg font-medium">View as a Child</h2>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a
                href="#"
                className="mt-3 text-black hover:text-blue-600 inline-flex items-center"
              >
                View
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="p-4 max-w-sm">
          <div className="flex rounded-lg h-full bg-pink-100  p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="text-black text-lg font-medium">View as Parent</h2>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="leading-relaxed text-base text-black">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a
                href="#"
                className="mt-3 text-black hover:text-blue-600 inline-flex items-center"
              >
                View
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <span className="relative flex justify-center mt-11 mb-11">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

        <span className="relative z-10 bg-white px-6 text-4xl ">
          <h1>Period Tracker</h1>
        </span>
      </span>

      
      <div className="relative cursor-pointer">
        
        {showTooltip && (
          <div className="fixed mt-[20%] right-24 bg-pink-700 text-white p-2 rounded-md shadow-md">
            Chat with AI
          </div>
        )}

        
        <div className="ai-chatbot fixed bottom-8 right-8 w-16 h-16 rounded-full shadow-lg overflow-hidden">
          <img
            src="https://m.media-amazon.com/images/I/51nSQGduJWL._AC_SL1500_.jpg"
            alt="AI Chatbot"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-full max-w-4xl mx-auto bg-pink-50 rounded-lg shadow-lg p-8 space-y-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2"></h2>
          <p className="text-gray-600">
            Track your cycle, moods, symptoms, and sleep
          </p>
        </div>

        {renderSection(
          "Cycle Information",
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Start date of your last period
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="lastPeriodStart"
                    value={lastPeriodStart}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
                  />
                  <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Last Period Duration (days)
                </label>
                <input
                  type="number"
                  name="lastPeriodDuration"
                  value={lastPeriodDuration}
                  onChange={handleInputChange}
                  min="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Average Cycle Duration (days)
              </label>
              <input
                type="number"
                name="cycleDuration"
                value={cycleDuration}
                onChange={handleInputChange}
                min="21"
                max="35"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
              />
            </div>
            <button
              onClick={predictNextPeriod}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-md transition duration-300 shadow-md"
            >
              Predict Next Period
            </button>
            {nextPeriodPrediction && (
              <p className="text-center font-medium text-gray-700 bg-pink-100 p-3 rounded-md">
                Predicted next period:{" "}
                {format(new Date(nextPeriodPrediction), "MMMM d, yyyy")}
              </p>
            )}
          </div>,
          "cycleInfo"
        )}

        {renderSection(
          "Mood Tracking",
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Select Mood(s)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {moodOptions.map((mood) => (
                  <button
                    key={mood.name}
                    onClick={() => handleMoodTypeChange(mood.name)}
                    className={`flex items-center justify-center px-4 py-2 border rounded-md transition duration-300 ${
                      moodTypes.includes(mood.name)
                        ? "bg-pink-200 text-gray-800 border-pink-300"
                        : "bg-white text-gray-600 border-gray-300 hover:bg-pink-50"
                    }`}
                  >
                    <mood.icon className="mr-2 h-4 w-4" />
                    {mood.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Mood Severity
              </label>
              <div className="flex flex-wrap gap-4">
                {moodSeverityOptions.map((option) => (
                  <label
                    key={option.value}
                    className="inline-flex items-center"
                  >
                    <input
                      type="radio"
                      value={option.value}
                      checked={moodSeverity === option.value}
                      onChange={() => setMoodSeverity(option.value)}
                      className="form-radio text-pink-500"
                    />
                    <span className="ml-2 text-gray-700">{option.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Date of Mood Log
              </label>
              <div className="relative">
                <input
                  type="date"
                  name="moodDate"
                  value={moodDate}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
                />
                <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>,
          "moodTracking"
        )}

        {renderSection(
          "Symptom Tracking",
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Select Symptoms
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {symptomOptions.map((symptom) => (
                  <label key={symptom} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={symptoms.includes(symptom)}
                      onChange={() => handleSymptomChange(symptom)}
                      className="form-checkbox text-pink-500"
                    />
                    <span className="ml-2 text-gray-700">{symptom}</span>
                  </label>
                ))}
              </div>
            </div>

            {symptoms.map((symptom) => (
              <div key={symptom} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  {symptom} Severity
                </label>
                <select
                  value={symptomSeverities[symptom] || ""}
                  onChange={(e) =>
                    handleSymptomSeverityChange(symptom, e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
                >
                  <option value="">Select Severity</option>
                  {symptomSeverityOptions.map((severity) => (
                    <option key={severity} value={severity}>
                      {severity}
                    </option>
                  ))}
                </select>
              </div>
            ))}

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Date of Symptoms
              </label>
              <div className="relative">
                <input
                  type="date"
                  name="symptomDate"
                  value={symptomDate}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
                />
                <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>,
          "symptomTracking"
        )}

        {renderSection(
          "Sleep Tracking",
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Sleep Duration (hours)
              </label>
              <input
                type="number"
                name="sleepDuration"
                value={sleepDuration}
                onChange={handleInputChange}
                min="0"
                max="24"
                step="0.5"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Sleep Quality
              </label>
              <select
                name="sleepQuality"
                value={sleepQuality}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
              >
                <option value="">Select Sleep Quality</option>
                {sleepQualityOptions.map((quality) => (
                  <option key={quality} value={quality}>
                    {quality}
                  </option>
                ))}
              </select>
            </div>
          </div>,
          "sleepTracking"
        )}

        {showHealthTips &&
          renderSection(
            "Health Tips",
            <div className="space-y-4">
              {generateHealthTips.map((tip, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 bg-white p-4 rounded-md shadow-sm"
                >
                  <Heart className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>,
            "healthTips"
          )}

        <button
          onClick={handleSubmit}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-4 rounded-md text-lg transition duration-300 shadow-md"
        >
          Submit Tracking Data
        </button>
      </div>
    </>
  );
}