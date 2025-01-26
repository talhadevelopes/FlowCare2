import React from "react";
import { useNavigate } from "react-router-dom";
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
} from "lucide-react";
// import Sidebar from "./Sidebar"; 

const SidebarLink = ({ icon, label, path, active = false }) => {
  return (
    <button
      onClick={() => navigate(path)}
      className={`flex items-center space-x-2 w-full px-2 py-2 rounded-lg transition-colors ${
        active
          ? 'bg-pink-200 dark:bg-pink-900 text-pink-800 dark:text-pink-200'
          : 'text-gray-900 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-gray-700'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  )
}

export const Sidebar = ({ darkMode }) => {
  const navigate = useNavigate();

  return (
    <aside className={`bg-white dark:bg-gray-800 w-64 min-h-screen p-4 ${darkMode ? "dark" : ""}`}>
      <nav className="mt-8 space-y-4">
        <h1 className="text-2xl font-bold text-pink-600 dark:text-pink-400 mb-8">FlowCare</h1>
        <SidebarLink icon={<LayoutDashboard size={20} />} label="Dashboard" path="/dashboard" />
        <SidebarLink icon={<Home size={20} />} label="Home" onClick={() => navigate("/")} />
        <SidebarLink icon={<GraduationCap size={20} />} label="Education" onClick={() => navigate("/blogs")} />
        <SidebarLink icon={<ShoppingBag size={20} />} label="Shop" onClick={() => navigate("/Ecom")} />
        <SidebarLink icon={<ActivitySquare size={20} />} label="Track Your Health" onClick={() => navigate("/tracker")} />
        <SidebarLink icon={<Stethoscope size={20} />} label="Expert Consultation" onClick={() => navigate("/consultations")} />
        <SidebarLink icon={<Bot size={20} />} label="AI Chatbot" onClick={() => navigate("/ChatBot")} />
        <SidebarLink icon={<HeartPulse size={20} />} label="HealthLens" onClick={() => navigate("/symptomsanalyzer")} />
        <SidebarLink icon={<MessageSquare size={20} />} label="Forums" onClick={() => navigate("/forums")} />
      </nav>
    </aside>
  );
};


