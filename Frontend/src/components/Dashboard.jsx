// import React, { useState, useEffect } from 'react';
// import { LayoutDashboard, Home, GraduationCap, ShoppingBag, ActivitySquare, Stethoscope, Bot, ChevronRight, Bell, Calendar, Heart, Moon, Sun, Droplet, Utensils, Smile, Frown, Meh, ThermometerSun, Zap, Coffee, Dumbbell, BookOpen, AlertCircle, CheckCircle, X } from 'lucide-react';
// import axios from 'axios';

// export function Dashboard (){
//   const [darkMode, setDarkMode] = useState(false);
//   const [waterIntake, setWaterIntake] = useState(0);
//   const [showNotification, setShowNotification] = useState(false);
//   const [activeTab, setActiveTab] = useState('overview');
//   const [showMythModal, setShowMythModal] = useState(false);
//   const [currentMyth, setCurrentMyth] = useState(null);
//   const [periodData, setPeriodData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [sidebarVisible, setSidebarVisible] = useState(true);

  
//   const sampleData = {
//     cycleDay: 14,
//     currentPhase: 'Luteal',
//     cycleDuration: 28,
//     lastPeriodStart: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
//     lastPeriodDuration: 5,
//     moodTypes: ['Happy', 'Anxious', 'Irritable'],
//     moodSeverity: 'Moderate',
//     moodDate: new Date().toISOString(),
//     symptoms: ['Cramps', 'Bloating', 'Headache'],
//     symptomSeverities: {
//       Cramps: 'Severe',
//       Bloating: 'Moderate',
//       Headache: 'Mild'
//     },
//     symptomDate: new Date().toISOString(),
//     sleepDuration: 7.5,
//     sleepQuality: 'Good',
//     nextPeriodPrediction: new Date(Date.now() + 13 * 24 * 60 * 60 * 1000).toISOString()
//   };

//   useEffect(() => {
//     const fetchPeriodData = async () => {
//       setLoading(true);
//       try {
//         // Replace 'userId' with the actual user ID, possibly stored in local storage or context
//         const userId = localStorage.getItem('userId');
//         const response = await axios.get(`http://localhost:3000/periodtracking/${userId}`);
//         setPeriodData(response.data);
//       } catch (err) {
//         console.error("Error fetching period data:", err);
//         setError("Failed to fetch period data. Using sample data.");
//         setPeriodData(sampleData);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPeriodData();
//   }, []);

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [darkMode]);

//   useEffect(() => {
//     const notificationInterval = setInterval(() => {
//       setShowNotification(true);
//       setTimeout(() => setShowNotification(false), 5000);
//     }, 30000);
//     return () => clearInterval(notificationInterval);
//   }, []);

//   const handleWaterIntake = () => {
//     setWaterIntake((prev) => Math.min(prev + 1, 8));
//   };

//   const toggleSidebar = () => {
//     setSidebarVisible(!sidebarVisible);
//   };

//   const myths = [
//     {
//       myth: "You can't get pregnant during your period.",
//       fact: "While it's less likely, you can still get pregnant during your period, especially if you have a shorter menstrual cycle.",
//     },
//     {
//       myth: "PMS is all in your head.",
//       fact: "PMS is a real medical condition caused by hormonal changes during the menstrual cycle.",
//     },
//     {
//       myth: "Irregular periods always indicate a serious problem.",
//       fact: "While irregular periods can sometimes signal health issues, they can also be caused by stress, diet, or exercise changes.",
//     },
//     {
//       myth: "You shouldn't exercise during your period.",
//       fact: "Exercise can actually help alleviate period symptoms like cramps and mood swings.",
//     },
//     {
//       myth: "Using tampons can cause you to lose your virginity.",
//       fact: "Using tampons does not affect virginity, which is about sexual intercourse, not physical changes to the body.",
//     },
//   ];

//   const openMythModal = (myth) => {
//     setCurrentMyth(myth);
//     setShowMythModal(true);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     console.warn(error);
//   }

//   const data = periodData || sampleData;

//   const cycleDay = Math.floor((new Date() - new Date(data.lastPeriodStart)) / (1000 * 60 * 60 * 24)) % data.cycleDuration + 1;
//   const daysUntilNextPeriod = data.cycleDuration - cycleDay;
//   const fertileWindow = cycleDay >= 11 && cycleDay <= 17;
//   const pmsLikely = data.currentPhase === 'Luteal' && cycleDay > 21;
//   const wellRested = data.sleepQuality === 'Good' && data.sleepDuration >= 7;

//   const getHealthTips = () => {
//     const tips = [
//       "Stay hydrated! Aim for 8 glasses of water a day.",
//       "Practice deep breathing exercises for stress relief.",
//       "Incorporate more leafy greens into your diet for iron.",
//       "Try a warm compress for cramp relief.",
//       "Get moving with light exercise like yoga or walking.",
//     ];
//     return tips.slice(0, 3);
//   };

//   const healthTips = getHealthTips();

//   return (
//     <div className={`flex h-screen ${darkMode ? 'dark' : ''}`}>
//       <style jsx global>{`
//         @keyframes pulse {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.05); }
//         }
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//         }
//         @keyframes slideIn {
//           from { transform: translateY(-100%); }
//           to { transform: translateY(0); }
//         }
//         @keyframes slideOut {
//           from { transform: translateY(0); }
//           to { transform: translateY(-100%); }
//         }
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         :root {
//           --background: 255, 255, 255;
//           --foreground: 0, 0, 0;
//           --primary: 255, 105, 180;
//           --primary-foreground: 0, 0, 0;
//           --card: 255, 255, 255;
//           --card-foreground: 0, 0, 0;
//           --muted: 240, 240, 240;
//           --muted-foreground: 100, 100, 100;
//         }
//         .dark {
//           --background: 23, 23, 23;
//           --foreground: 255, 255, 255;
//           --primary: 255, 105, 180;
//           --primary-foreground: 255, 255, 255;
//           --card: 38, 38, 38;
//           --card-foreground: 255, 255, 255;
//           --muted: 50, 50, 50;
//           --muted-foreground: 150, 150, 150;
//         }
//         body {
//           background-color: rgb(var(--background));
//           color: rgb(var(--foreground));
//         }
//       `}</style>
//       <aside className={`w-[240px] bg-[rgb(var(--card))] p-6 flex flex-col transition-all duration-300 ease-in-out ${sidebarVisible ? 'translate-x-0' : '-translate-x-full'}`}>
//         <h1 className="text-xl font-semibold text-[rgb(var(--primary))] mb-6">FlowCare</h1>
//         <nav className="flex-1">
//           <ul className="space-y-2">
//             <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active />
//             <NavItem icon={<Home size={20} />} label="Home" />
//             <NavItem icon={<GraduationCap size={20} />} label="Education" />
//             <NavItem icon={<ShoppingBag size={20} />} label="Shop" />
//             <NavItem icon={<ActivitySquare size={20} />} label="Track Your Health" />
//             <NavItem icon={<Stethoscope size={20} />} label="Expert Consultation" />
//             <NavItem icon={<Bot size={20} />} label="AI Chatbot" />
//           </ul>
//         </nav>
//         <div className="pt-6 mt-6 border-t border-[rgba(var(--foreground),0.1)]">
//           <div className="flex items-center">
//             <div className="w-8 h-8 rounded-full bg-[rgba(var(--foreground),0.1)] flex items-center justify-center text-sm font-medium">
//               UN
//             </div>
//             <div className="ml-3">
//               <p className="text-sm font-medium">User Name</p>
//               <p className="text-xs text-[rgba(var(--foreground),0.6)]">Premium Member</p>
//             </div>
//             <ChevronRight size={16} className="ml-auto text-[rgba(var(--foreground),0.4)]" />
//           </div>
//         </div>
//       </aside>

//       <button
//         onClick={toggleSidebar}
//         className="fixed left-0 top-4 z-10 p-2 bg-[rgb(var(--primary))] text-white rounded-r-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))] focus:ring-opacity-50"
//         style={{
//           transform: sidebarVisible ? 'translateX(240px)' : 'translateX(0)',
//         }}
//         aria-label={sidebarVisible ? 'Hide sidebar' : 'Show sidebar'}
//       >
//         <ChevronRight size={24} className={`transition-transform duration-300 ${sidebarVisible ? 'rotate-180' : 'rotate-0'}`} />
//       </button>

//       <main className={`flex-1 p-6 overflow-auto bg-[rgb(var(--background))] transition-all duration-300 ease-in-out ${sidebarVisible ? 'ml-[240px]' : 'ml-0'}`}>
//         <div className="max-w-6xl mx-auto space-y-6">
//           <div className="flex justify-between items-center">
//             <h2 className="text-lg font-semibold">Dashboard</h2>
//             <div className="flex items-center gap-4">
//               <Bell className="h-5 w-5 text-[rgba(var(--foreground),0.6)]" />
//               <button
//                 onClick={() => setDarkMode(!darkMode)}
//                 className="p-2 rounded-full bg-[rgba(var(--foreground),0.1)] text-[rgb(var(--foreground))] transition-transform hover:scale-110"
//               >
//                 {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//               </button>
//             </div>
//           </div>

//           <div className="flex space-x-2 mb-4">
//             <TabButton active={activeTab === 'overview'} onClick={() => setActiveTab('overview')}>
//               Overview
//             </TabButton>
//             <TabButton active={activeTab === 'insights'} onClick={() => setActiveTab('insights')}>
//               Insights
//             </TabButton>
//             <TabButton active={activeTab === 'mythbusters'} onClick={() => setActiveTab('mythbusters')}>
//               MythBusters
//             </TabButton>
//           </div>

//           {activeTab === 'overview' && (
//             <>
//               <Card className="overflow-hidden">
//                 <div className="relative h-32 bg-gradient-to-r from-pink-300 to-purple-400 dark:from-pink-600 dark:to-purple-700">
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <h3 className="text-3xl font-bold text-white">Cycle Day {cycleDay}</h3>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <p className="text-lg font-semibold mb-2">Current Phase: {data.currentPhase}</p>
//                   <p className="text-sm text-[rgba(var(--foreground),0.6)]">
//                     {daysUntilNextPeriod} days until next period
//                   </p>
//                   <div className="mt-4 h-2 bg-[rgba(var(--primary),0.2)] rounded-full overflow-hidden">
//                     <div 
//                       className="h-full bg-[rgb(var(--primary))]" 
//                       style={{ width: `${(cycleDay / data.cycleDuration) * 100}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               </Card>

//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 <AnimatedCard title="Mood" value={data.moodTypes[0]} icon={getMoodIcon(data.moodTypes[0])} />
//                 <AnimatedCard title="Sleep Quality" value={data.sleepQuality} icon={<Moon className="h-6 w-6" />} />
//                 <AnimatedCard title="Active Symptoms" value={data.symptoms.length} icon={<ThermometerSun className="h-6 w-6" />} />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <Card>
//                   <h3 className="font-semibold mb-4">Daily Health Tips</h3>
//                   <ul className="space-y-2">
//                     {healthTips.map((tip, index) => (
//                       <li key={index} className="flex items-start animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
//                         <Utensils className="h-5 w-5 text-[rgb(var(--primary))] mr-2 mt-0.5 flex-shrink-0" />
//                         <span>{tip}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </Card>
//                 <Card>
//                   <h3 className="font-semibold mb-4">Water Intake Tracker</h3>
//                   <div className="flex items-center justify-between mb-2">
//                     <span>Goal: 8 glasses</span>
//                     <span>{waterIntake} / 8</span>
//                   </div>
//                   <div className="h-4 bg-[rgba(var(--primary),0.2)] rounded-full overflow-hidden mb-4">
//                     <div 
//                       className="h-full bg-[rgb(var(--primary))]" 
//                       style={{ width: `${(waterIntake / 8) * 100}%` }}
//                     ></div>
//                   </div>
//                   <button
//                     onClick={handleWaterIntake}
//                     className="w-full py-2 px-4 bg-[rgb(var(--primary))] text-white rounded-md hover:bg-[rgba(var(--primary),0.8)] transition-colors"
//                   >
//                     Log Water Intake
//                   </button>
//                 </Card>
//               </div>

//               <Card>
//                 <h3 className="font-semibold mb-4">Wellness Tracker</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <WellnessItem title="Energy" value={data.moodSeverity} icon={<Zap className="h-5 w-5" />} />
//                   <WellnessItem title="Stress" value={data.moodSeverity === 'Moderate' ? 'Low' : 'Moderate'} icon={<Coffee className="h-5 w-5" />} />
//                   <WellnessItem title="Exercise" value="30 min" icon={<Dumbbell className="h-5 w-5" />} />
//                 </div>
//               </Card>

//               <Card>
//                 <h3 className="font-semibold mb-4">Upcoming Events</h3>
//                 <ul className="space-y-2">
//                   <EventItem title="Doctor's Appointment" date="Tomorrow, 10:00 AM" />
//                   <EventItem title="Yoga Class" date="Wednesday, 6:00 PM" />
//                   <EventItem title="Period Start Date" date={`In ${daysUntilNextPeriod} days`} />
//                 </ul>
//               </Card>
//             </>
//           )}

//           {activeTab === 'insights' && (
//             <>
//               <Card>
//                 <h3 className="font-semibold mb-4">Health Insights</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <InsightItem
//                     title="Fertility Window"
//                     value={fertileWindow ? "Active" : "Inactive"}
//                     icon={<Calendar className="h-5 w-5 text-[rgb(var(--primary))]" />}
//                   />
//                   <InsightItem
//                     title="PMS Likelihood"
//                     value={pmsLikely ? "High" : "Low"}
//                     icon={<ActivitySquare className="h-5 w-5 text-[rgb(var(--primary))]" />}
//                   />
//                   <InsightItem
//                     title="Rest Status"
//                     value={wellRested ? "Well Rested" : "Need More Rest"}
//                     icon={<Moon className="h-5 w-5 text-[rgb(var(--primary))]" />}
//                   />
//                 </div>
//               </Card>

//               <Card>
//                 <h3 className="font-semibold mb-4">Cycle Analysis</h3>
//                 <div className="space-y-4">
//                   <p>Your cycle length: {data.cycleDuration} days</p>
//                   <p>Average cycle length: 28 days</p>
//                   <p>Your current phase: {data.currentPhase}</p>
//                   <p>Days until next period: {daysUntilNextPeriod}</p>
//                 </div>
//               </Card>

//               <Card>
//                 <h3 className="font-semibold mb-4">Symptom Trends</h3>
//                 <ul className="space-y-2">
//                   {data.symptoms.map((symptom, index) => (
//                     <li key={index} className="flex items-center justify-between">
//                       <span>{symptom}</span>
//                       <span className="text-[rgba(var(--foreground),0.6)]">{data.symptomSeverities[symptom]}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </Card>
//             </>
//           )}

//           {activeTab === 'mythbusters' && (
//             <Card>
//               <h3 className="font-semibold mb-4">Menstrual Health MythBusters</h3>
//               <div className="space-y-4">
//                 {myths.map((myth, index) => (
//                   <div key={index} className="p-4 bg-[rgba(var(--primary),0.1)] rounded-lg">
//                     <p className="font-medium mb-2">{myth.myth}</p>
//                     <button
//                       onClick={() => openMythModal(myth)}
//                       className="text-[rgb(var(--primary))] hover:underline"
//                     >
//                       Reveal the truth
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </Card>
//           )}
//         </div>
//       </main>

//       {showNotification && (
//         <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-[rgb(var(--primary))] text-white p-4 rounded-b-lg shadow-lg animate-slideIn">
//           Don't forget to log your symptoms today!
//         </div>
//       )}

//       {showMythModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 animate-fadeIn">
//           <div className="bg-[rgb(var(--card))] p-6 rounded-lg max-w-md w-full">
//             <h4 className="font-semibold mb-2">Myth: {currentMyth.myth}</h4>
//             <p className="mb-4">Fact: {currentMyth.fact}</p>
//             <button
//               onClick={() => setShowMythModal(false)}
//               className="w-full py-2 px-4 bg-[rgb(var(--primary))] text-white rounded-md hover:bg-[rgba(var(--primary),0.8)] transition-colors"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const NavItem = ({ icon, label, active = false }) => {
//   return (
//     <li>
//       <a
//         href="#"
//         className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
//           active ? "bg-[rgba(var(--primary),0.1)] text-[rgb(var(--primary))]" : "text-[rgba(var(--foreground),0.7)] hover:bg-[rgba(var(--foreground),0.05)]"
//         }`}
//       >
//         {icon}
//         {label}
//       </a>
//     </li>
//   );
// };

// const Card = ({ children, className = "" }) => {
//   return (
//     <div className={`bg-[rgb(var(--card))] rounded-lg p-6 shadow-sm ${className}`}>
//       {children}
//     </div>
//   );
// };

// const AnimatedCard = ({ title, value, icon }) => {
//   return (
//     <Card className="transition-all duration-300 hover:shadow-md hover:scale-105">
//       <div className="flex justify-between items-start">
//         <div>
//           <p className="text-sm text-[rgba(var(--foreground),0.6)]">{title}</p>
//           <h3 className="text-2xl font-semibold mt-1">{value}</h3>
//         </div>
//         <div className="p-2 bg-[rgba(var(--primary),0.1)] rounded-full">
//           {icon}
//         </div>
//       </div>
//     </Card>
//   );
// };

// const getMoodIcon = (mood) => {
//   switch (mood.toLowerCase()) {
//     case 'happy':
//       return <Smile className="h-6 w-6 text-green-500" />;
//     case 'sad':
//       return <Frown className="h-6 w-6 text-blue-500" />;
//     default:
//       return <Meh className="h-6 w-6 text-yellow-500" />;
//   }
// };

// const InsightItem = ({ title, value, icon }) => {
//   return (
//     <div className="flex items-center space-x-3 p-3 bg-[rgba(var(--primary),0.1)] rounded-lg transition-all duration-300 hover:bg-[rgba(var(--primary),0.2)]">
//       {icon}
//       <div>
//         <p className="text-sm text-[rgba(var(--foreground),0.6)]">{title}</p>
//         <p className="font-medium">{value}</p>
//       </div>
//     </div>
//   );
// };

// const WellnessItem = ({ title, value, icon }) => {
//   return (
//     <div className="flex items-center space-x-3 p-3 bg-[rgba(var(--primary),0.1)] rounded-lg">
//       <div className="p-2 bg-[rgba(var(--primary),0.2)] rounded-full">
//         {icon}
//       </div>
//       <div>
//         <p className="text-sm text-[rgba(var(--foreground),0.6)]">{title}</p>
//         <p className="font-medium">{value}</p>
//       </div>
//     </div>
//   );
// };

// const EventItem = ({ title, date }) => {
//   return (
//     <li className="flex items-center space-x-3">
//       <Calendar className="h-5 w-5 text-[rgb(var(--primary))]" />
//       <div>
//         <p className="font-medium">{title}</p>
//         <p className="text-sm text-[rgba(var(--foreground),0.6)]">{date}</p>
//       </div>
//     </li>
//   );
// };

// const TabButton = ({ children, active, onClick }) => {
//   return (
//     <button
//       onClick={onClick}
//       className={`px-4 py-2 rounded-md transition-colors ${
//         active
//           ? "bg-[rgb(var(--primary))] text-white"
//           : "bg-[rgba(var(--foreground),0.1)] text-[rgba(var(--foreground),0.7)] hover:bg-[rgba(var(--foreground),0.2)]"
//       }`}
//     >
//       {children}
//     </button>
//   );
// };


































































































import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Home, GraduationCap, ShoppingBag, ActivitySquare, Stethoscope, Bot, ChevronRight, Bell, Calendar, Heart, Moon, Sun, Droplet, Utensils, Smile, Frown, Meh, ThermometerSun, Zap, Coffee, Dumbbell, BookOpen, AlertCircle, CheckCircle, X } from 'lucide-react';
import axios from 'axios';

export function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [waterIntake, setWaterIntake] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [showMythModal, setShowMythModal] = useState(false);
  const [currentMyth, setCurrentMyth] = useState(null);
  const [periodData, setPeriodData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  useEffect(() => {
    const fetchPeriodData = async () => {
      setLoading(true);
      try {
        const userId = localStorage.getItem('userId');
        if (!userId) {
          throw new Error('User ID not found in local storage');
        }
        const response = await axios.get(`http://localhost:3000/periodtracking/${userId}`);
        setPeriodData(response.data);
      } catch (err) {
        console.error("Error fetching period data:", err);
        setError("Failed to fetch period data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPeriodData();
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const notificationInterval = setInterval(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000);
    }, 30000);
    return () => clearInterval(notificationInterval);
  }, []);

  const handleWaterIntake = () => {
    setWaterIntake((prev) => Math.min(prev + 1, 8));
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const myths = [
    {
      myth: "You can't get pregnant during your period.",
      fact: "While it's less likely, you can still get pregnant during your period, especially if you have a shorter menstrual cycle.",
    },
    {
      myth: "PMS is all in your head.",
      fact: "PMS is a real medical condition caused by hormonal changes during the menstrual cycle.",
    },
    {
      myth: "Irregular periods always indicate a serious problem.",
      fact: "While irregular periods can sometimes signal health issues, they can also be caused by stress, diet, or exercise changes.",
    },
    {
      myth: "You shouldn't exercise during your period.",
      fact: "Exercise can actually help alleviate period symptoms like cramps and mood swings.",
    },
    {
      myth: "Using tampons can cause you to lose your virginity.",
      fact: "Using tampons does not affect virginity, which is about sexual intercourse, not physical changes to the body.",
    },
  ];

  const openMythModal = (myth) => {
    setCurrentMyth(myth);
    setShowMythModal(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!periodData) {
    return <div>No period data available. Please update your information.</div>;
  }

  const cycleDay = Math.floor((new Date() - new Date(periodData.lastPeriodStart)) / (1000 * 60 * 60 * 24)) % periodData.cycleDuration + 1;
  const daysUntilNextPeriod = periodData.cycleDuration - cycleDay;
  const fertileWindow = cycleDay >= 11 && cycleDay <= 17;
  const pmsLikely = periodData.currentPhase === 'Luteal' && cycleDay > 21;
  const wellRested = periodData.sleepQuality === 'Good' && periodData.sleepDuration >= 7;

  const getHealthTips = () => {
    const tips = [
      "Stay hydrated! Aim for 8 glasses of water a day.",
      "Practice deep breathing exercises for stress relief.",
      "Incorporate more leafy greens into your diet for iron.",
      "Try a warm compress for cramp relief.",
      "Get moving with light exercise like yoga or walking.",
    ];
    return tips.slice(0, 3);
  };

  const healthTips = getHealthTips();

  return (
    <div className={`flex h-screen ${darkMode ? 'dark' : ''}`}>
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes slideIn {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }
        @keyframes slideOut {
          from { transform: translateY(0); }
          to { transform: translateY(-100%); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        :root {
          --background: 255, 255, 255;
          --foreground: 0, 0, 0;
          --primary: 255, 105, 180;
          --primary-foreground: 0, 0, 0;
          --card: 255, 255, 255;
          --card-foreground: 0, 0, 0;
          --muted: 240, 240, 240;
          --muted-foreground: 100, 100, 100;
        }
        .dark {
          --background: 23, 23, 23;
          --foreground: 255, 255, 255;
          --primary: 255, 105, 180;
          --primary-foreground: 255, 255, 255;
          --card: 38, 38, 38;
          --card-foreground: 255, 255, 255;
          --muted: 50, 50, 50;
          --muted-foreground: 150, 150, 150;
        }
        body {
          background-color: rgb(var(--background));
          color: rgb(var(--foreground));
        }
      `}</style>
      <aside className={`w-[240px] bg-[rgb(var(--card))] p-6 flex flex-col transition-all duration-300 ease-in-out ${sidebarVisible ? 'translate-x-0' : '-translate-x-full'}`}>
        <h1 className="text-xl font-semibold text-[rgb(var(--primary))] mb-6">FlowCare</h1>
        <nav className="flex-1">
          <ul className="space-y-2">
            <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active />
            <NavItem icon={<Home size={20} />} label="Home" />
            <NavItem icon={<GraduationCap size={20} />} label="Education" />
            <NavItem icon={<ShoppingBag size={20} />} label="Shop" />
            <NavItem icon={<ActivitySquare size={20} />} label="Track Your Health" />
            <NavItem icon={<Stethoscope size={20} />} label="Expert Consultation" />
            <NavItem icon={<Bot size={20} />} label="AI Chatbot" />
          </ul>
        </nav>
        <div className="pt-6 mt-6 border-t border-[rgba(var(--foreground),0.1)]">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-[rgba(var(--foreground),0.1)] flex items-center justify-center text-sm font-medium">
              UN
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">User Name</p>
              <p className="text-xs text-[rgba(var(--foreground),0.6)]">Premium Member</p>
            </div>
            <ChevronRight size={16} className="ml-auto text-[rgba(var(--foreground),0.4)]" />
          </div>
        </div>
      </aside>

      <button
        onClick={toggleSidebar}
        className="fixed left-0 top-4 z-10 p-2 bg-[rgb(var(--primary))] text-white rounded-r-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))] focus:ring-opacity-50"
        style={{
          transform: sidebarVisible ? 'translateX(256px)' : 'translateX(0)',
        }}
        aria-label={sidebarVisible ? 'Hide sidebar' : 'Show sidebar'}
      >
        <ChevronRight size={24} className={`transition-transform duration-300 ${sidebarVisible ? 'rotate-180' : 'rotate-0'}`} />
      </button>

      <main className={`flex-1 p-6 overflow-auto bg-[rgb(var(--background))] transition-all duration-300 ease-in-out ${sidebarVisible ? 'ml-[240px]' : 'ml-0'}`}>
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Dashboard</h2>
            <div className="flex items-center gap-4">
              <Bell className="h-5 w-5 text-[rgba(var(--foreground),0.6)]" />
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-[rgba(var(--foreground),0.1)] text-[rgb(var(--foreground))] transition-transform hover:scale-110"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          <div className="flex space-x-2 mb-4">
            <TabButton active={activeTab === 'overview'} onClick={() => setActiveTab('overview')}>
              Overview
            </TabButton>
            <TabButton active={activeTab === 'insights'} onClick={() => setActiveTab('insights')}>
              Insights
            </TabButton>
            <TabButton active={activeTab === 'mythbusters'} onClick={() => setActiveTab('mythbusters')}>
              MythBusters
            </TabButton>
          </div>

          {activeTab === 'overview' && (
            <>
              <Card className="overflow-hidden">
                <div className="relative h-32 bg-gradient-to-r from-pink-300 to-purple-400 dark:from-pink-600 dark:to-purple-700">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-3xl font-bold text-white">Cycle Day {cycleDay}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-lg font-semibold mb-2">Current Phase: {periodData.currentPhase}</p>
                  <p className="text-sm text-[rgba(var(--foreground),0.6)]">
                    {daysUntilNextPeriod} days until next period
                  </p>
                  <div className="mt-4 h-2 bg-[rgba(var(--primary),0.2)] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[rgb(var(--primary))]" 
                      style={{ width: `${(cycleDay / periodData.cycleDuration) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <AnimatedCard title="Mood" value={periodData.moodTypes[0]} icon={getMoodIcon(periodData.moodTypes[0])} />
                <AnimatedCard title="Sleep Quality" value={periodData.sleepQuality} icon={<Moon className="h-6 w-6" />} />
                <AnimatedCard title="Active Symptoms" value={periodData.symptoms.length} icon={<ThermometerSun className="h-6 w-6" />} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <h3 className="font-semibold mb-4">Daily Health Tips</h3>
                  <ul className="space-y-2">
                    {healthTips.map((tip, index) => (
                      <li key={index} className="flex items-start animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                        <Utensils className="h-5 w-5 text-[rgb(var(--primary))] mr-2 mt-0.5 flex-shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
                <Card>
                  <h3 className="font-semibold mb-4">Water Intake Tracker</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span>Goal: 8 glasses</span>
                    <span>{waterIntake} / 8</span>
                  </div>
                  <div className="h-4 bg-[rgba(var(--primary),0.2)] rounded-full overflow-hidden mb-4">
                    <div 
                      className="h-full bg-[rgb(var(--primary))]" 
                      style={{ width: `${(waterIntake / 8) * 100}%` }}
                    ></div>
                  </div>
                  <button
                    onClick={handleWaterIntake}
                    className="w-full py-2 px-4 bg-[rgb(var(--primary))] text-white rounded-md hover:bg-[rgba(var(--primary),0.8)] transition-colors"
                  >
                    Log Water Intake
                  </button>
                </Card>
              </div>

              <Card>
                <h3 className="font-semibold mb-4">Wellness Tracker</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <WellnessItem title="Energy" value={periodData.moodSeverity} icon={<Zap className="h-5 w-5" />} />
                  <WellnessItem title="Stress" value={periodData.moodSeverity === 'Moderate' ? 'Low' : 'Moderate'} icon={<Coffee className="h-5 w-5" />} />
                  <WellnessItem title="Exercise" value="30 min" icon={<Dumbbell className="h-5 w-5" />} />
                </div>
              </Card>

              <Card>
                <h3 className="font-semibold mb-4">Upcoming Events</h3>
                <ul className="space-y-2">
                  <EventItem title="Doctor's Appointment" date="Tomorrow, 10:00 AM" />
                  <EventItem title="Yoga Class" date="Wednesday, 6:00 PM" />
                  <EventItem title="Period Start Date" date={`In ${daysUntilNextPeriod} days`} />
                </ul>
              </Card>
            </>
          )}

          {activeTab === 'insights' && (
            <>
              <Card>
                <h3 className="font-semibold mb-4">Health Insights</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <InsightItem
                    title="Fertility Window"
                    value={fertileWindow ? "Active" : "Inactive"}
                    icon={<Calendar className="h-5 w-5 text-[rgb(var(--primary))]" />}
                  />
                  <InsightItem
                    title="PMS Likelihood"
                    value={pmsLikely ? "High" : "Low"}
                    icon={<ActivitySquare className="h-5 w-5 text-[rgb(var(--primary))]" />}
                  />
                  <InsightItem
                    title="Rest Status"
                    value={wellRested ? "Well Rested" : "Need More Rest"}
                    icon={<Moon className="h-5 w-5 text-[rgb(var(--primary))]" />}
                  />
                </div>
              </Card>

              <Card>
                <h3 className="font-semibold mb-4">Cycle Analysis</h3>
                <div className="space-y-4">
                  <p>Your cycle length: {periodData.cycleDuration} days</p>
                  <p>Average cycle length: 28 days</p>
                  <p>Your current phase: {periodData.currentPhase}</p>
                  <p>Days until next period: {daysUntilNextPeriod}</p>
                </div>
              </Card>

              <Card>
                <h3 className="font-semibold mb-4">Symptom Trends</h3>
                <ul className="space-y-2">
                  {periodData.symptoms.map((symptom, index) => (
                    <li key={index} className="flex items-center justify-between">
                      <span>{symptom}</span>
                      <span className="text-[rgba(var(--foreground),0.6)]">{periodData.symptomSeverities[symptom]}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </>
          )}

          {activeTab === 'mythbusters' && (
            <Card>
              <h3 className="font-semibold mb-4">Menstrual Health MythBusters</h3>
              <div className="space-y-4">
                {myths.map((myth, index) => (
                  <div key={index} className="p-4 bg-[rgba(var(--primary),0.1)] rounded-lg">
                    <p className="font-medium mb-2">{myth.myth}</p>
                    <button
                      onClick={() => openMythModal(myth)}
                      className="text-[rgb(var(--primary))] hover:underline"
                    >
                      Reveal the truth
                    </button>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>
      </main>

      {showNotification && (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-[rgb(var(--primary))] text-white p-4 rounded-b-lg shadow-lg animate-slideIn">
          Don't forget to log your symptoms today!
        </div>
      )}

      {showMythModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[rgb(var(--card))] p-6 rounded-lg max-w-md w-full">
            <h4 className="font-semibold mb-2">Myth: {currentMyth.myth}</h4>
            <p className="mb-4">Fact: {currentMyth.fact}</p>
            <button
              onClick={() => setShowMythModal(false)}
              className="w-full py-2 px-4 bg-[rgb(var(--primary))] text-white rounded-md hover:bg-[rgba(var(--primary),0.8)] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const NavItem = ({ icon, label, active = false }) => {
  return (
    <li>
      <a
        href="#"
        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
          active ? "bg-[rgba(var(--primary),0.1)] text-[rgb(var(--primary))]" : "text-[rgba(var(--foreground),0.7)] hover:bg-[rgba(var(--foreground),0.05)]"
        }`}
      >
        {icon}
        {label}
      </a>
    </li>
  );
};

const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-[rgb(var(--card))] rounded-lg p-6 shadow-sm ${className}`}>
      {children}
    </div>
  );
};

const AnimatedCard = ({ title, value, icon }) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-md hover:scale-105">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-[rgba(var(--foreground),0.6)]">{title}</p>
          <h3 className="text-2xl font-semibold mt-1">{value}</h3>
        </div>
        <div className="p-2 bg-[rgba(var(--primary),0.1)] rounded-full">
          {icon}
        </div>
      </div>
    </Card>
  );
};

const getMoodIcon = (mood) => {
  switch (mood.toLowerCase()) {
    case 'happy':
      return <Smile className="h-6 w-6 text-green-500" />;
    case 'sad':
      return <Frown className="h-6 w-6 text-blue-500" />;
    default:
      return <Meh className="h-6 w-6 text-yellow-500" />;
  }
};

const InsightItem = ({ title, value, icon }) => {
  return (
    <div className="flex items-center space-x-3 p-3 bg-[rgba(var(--primary),0.1)] rounded-lg transition-all duration-300 hover:bg-[rgba(var(--primary),0.2)]">
      {icon}
      <div>
        <p className="text-sm text-[rgba(var(--foreground),0.6)]">{title}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
};

const WellnessItem = ({ title, value, icon }) => {
  return (
    <div className="flex items-center space-x-3 p-3 bg-[rgba(var(--primary),0.1)] rounded-lg">
      <div className="p-2 bg-[rgba(var(--primary),0.2)] rounded-full">
        {icon}
      </div>
      <div>
        <p className="text-sm text-[rgba(var(--foreground),0.6)]">{title}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
};

const EventItem = ({ title, date }) => {
  return (
    <li className="flex items-center space-x-3">
      <Calendar className="h-5 w-5 text-[rgb(var(--primary))]" />
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-[rgba(var(--foreground),0.6)]">{date}</p>
      </div>
    </li>
  );
};

const TabButton = ({ children, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md transition-colors ${
        active
          ? "bg-[rgb(var(--primary))] text-white"
          : "bg-[rgba(var(--foreground),0.1)] text-[rgba(var(--foreground),0.7)] hover:bg-[rgba(var(--foreground),0.2)]"
      }`}
    >
      {children}
    </button>
  );
};

