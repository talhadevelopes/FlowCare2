import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
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
  ChevronRight,
} from "lucide-react"

const SidebarLink = ({ icon, label, onClick, active = false, collapsed = false }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center w-full px-3 py-2 rounded-lg transition-colors ${
        active
          ? "bg-pink-200 dark:bg-pink-900 text-pink-800 dark:text-pink-200"
          : "text-gray-900 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-gray-700"
      }`}
      title={label}
    >
      <div className="flex items-center justify-center w-5 h-5 shrink-0">{icon}</div>
      {!collapsed && <span className="ml-3 truncate">{label}</span>}
    </button>
  )
}

export const Sidebar = ({ darkMode }) => {
  const navigate = useNavigate()
  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleNavigation = (path) => {
    navigate(path)
  }

  const sidebarItems = [
    { icon: <LayoutDashboard size={20} />, label: "Dashboard", path: "/dashboard" },
    { icon: <Home size={20} />, label: "Home", path: "/" },
    { icon: <GraduationCap size={20} />, label: "Education", path: "/blogs" },
    { icon: <ShoppingBag size={20} />, label: "Shop", path: "/Ecom" },
    { icon: <ActivitySquare size={20} />, label: "Track Your Health", path: "/tracker" },
    { icon: <Stethoscope size={20} />, label: "Expert Consultation", path: "/consultations" },
    { icon: <Bot size={20} />, label: "AI Chatbot", path: "/ChatBot" },
    { icon: <HeartPulse size={20} />, label: "HealthLens", path: "/symptomsanalyzer" },
    { icon: <MessageSquare size={20} />, label: "Forums", path: "/forums" },
  ]

  return (
    <aside
      className={`bg-pink-100 dark:bg-gray-800 min-h-screen sticky top-0 transition-all duration-300 z-30
        ${isCollapsed ? "w-16" : "w-64"}`}
    >
      <div className="h-full px-3 py-4 flex flex-col space-y-2">
        <h1
          className={`text-2xl font-bold text-pink-600 dark:text-pink-400 mb-4 transition-all duration-200 text-center
          ${isCollapsed ? "text-2xl" : ""}`}
        >
          {isCollapsed ? "FC" : "FlowCare"}
        </h1>
        {sidebarItems.map((item, index) => (
          <SidebarLink
            key={index}
            icon={item.icon}
            label={item.label}
            onClick={() => handleNavigation(item.path)}
            collapsed={isCollapsed}
          />
        ))}
      </div>

      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={`fixed top-4 z-50 p-2 bg-pink-600 text-white rounded-r-md transition-all duration-300 ease-in-out 
          focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50
          ${isCollapsed ? "left-16" : "left-64"}`}
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <ChevronRight
          size={24}
          className={`transition-transform duration-300 ${isCollapsed ? "rotate-0" : "rotate-180"}`}
        />
      </button>
    </aside>
  )
}

