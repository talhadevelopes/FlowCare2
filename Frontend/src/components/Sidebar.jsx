import {useState} from "react"
import { Link } from "react-router-dom"
import { 
  LayoutDashboard,
  Home,
  GraduationCap,
  ShoppingBag,
  ActivitySquare,
  Stethoscope,
  Bot,
  HeartPulse,
  MessageSquare,
  
} from "lucide-react"

const SidebarLink = ({ icon, label, to }) => (
  <Link
    to={to}
    className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200"
  >
    {icon}
    <span>{label}</span>
  </Link>
  
)

const toggleSidebar = () => {
  setSidebarVisible(!sidebarVisible);
};
export const Sidebar = ({ darkMode }) => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  return (
    <aside className={`bg-white dark:bg-gray-800 w-64 min-h-screen p-4 ${darkMode ? "dark" : ""}`}>
      <nav className="mt-8 space-y-4">
        <h1 className="text-2xl font-bold text-pink-600 dark:text-pink-400 mb-8">FlowCare</h1>
        <SidebarLink icon={<LayoutDashboard size={20} />} label="Dashboard" to="/dashboard" />
        <SidebarLink icon={<Home size={20} />} label="Home" to="/" />
        <SidebarLink icon={<GraduationCap size={20} />} label="Education" to="/blogs" />
        <SidebarLink icon={<ShoppingBag size={20} />} label="Shop" to="/Ecom" />
        <SidebarLink icon={<ActivitySquare size={20} />} label="Track Your Health" to="/tracker" />
        <SidebarLink icon={<Stethoscope size={20} />} label="Expert Consultation" to="/consultations" />
        <SidebarLink icon={<Bot size={20} />} label="AI Chatbot" to="/ChatBot" />
        <SidebarLink icon={<HeartPulse size={20} />} label="HealthLens" to="/symptomsanalyzer" />
        <SidebarLink icon={<MessageSquare size={20} />} label="Forums" to="/forums" />
      </nav>
      <button
        onClick={toggleSidebar}
        className="fixed left-0 top-4 z-10 p-2 bg-pink-600 text-white rounded-r-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
        style={{
          transform: sidebarVisible ? "translateX(256px)" : "translateX(0)",
        }}
        aria-label={sidebarVisible ? "Hide sidebar" : "Show sidebar"}
      >
        <ChevronRight
          size={24}
          className={`transition-transform duration-300 ${
            sidebarVisible ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
    </aside>
  )
}


 