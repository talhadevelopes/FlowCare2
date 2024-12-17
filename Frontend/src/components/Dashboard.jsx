import React from 'react';
import { LayoutDashboard, Home, GraduationCap, ShoppingBag, ActivitySquare, Stethoscope, Bot, ChevronRight, Bell, Calendar, Heart } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="flex h-screen bg-pink-50 text-gray-800 font-sans">
      {/* Sidebar */}
      <aside className="w-[240px] bg-white p-6 flex flex-col">
        <h1 className="text-xl font-semibold text-pink-600 mb-6">FlowCare</h1>
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

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Dashboard</h2>
            <div className="flex items-center gap-4">
              <Bell className="h-5 w-5 text-gray-500" />
              <select className="border rounded-md px-2 py-1 text-sm bg-white">
                <option>This Month</option>
              </select>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard
              title="Cycle Day"
              value="14"
              subtitle="14 days until next period"
              icon={<Calendar className="h-5 w-5 text-pink-500" />}
            />
            <MetricCard
              title="Current Phase"
              value="Luteal"
              subtitle="Next period expected on Dec 30"
              icon={<Calendar className="h-5 w-5 text-pink-500" />}
            />
            <MetricCard
              title="Today's Mood"
              value="Happy"
              subtitle={
                <div className="flex gap-2 mt-1">
                  <Badge>Mild Cramps</Badge>
                  <Badge>Fatigue</Badge>
                </div>
              }
              icon={<Heart className="h-5 w-5 text-pink-500" />}
            />
            <MetricCard
              title="Sleep Quality"
              value="Good"
              subtitle="7.5 hours of sleep"
              icon={<Calendar className="h-5 w-5 text-pink-500" />}
            />
          </div>

          {/* Activity and Upcoming */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <h3 className="font-semibold mb-1">Recent Activity</h3>
              <p className="text-sm text-gray-500 mb-4">Your health tracking history</p>
              <div className="space-y-6">
                <ActivityItem
                  title="Mood Log"
                  description="Feeling energetic"
                  time="2 hours ago"
                />
                <ActivityItem
                  title="Symptom"
                  description="Mild headache noted"
                  time="5 hours ago"
                />
                <ActivityItem
                  title="Sleep"
                  description="8 hours logged"
                  time="8 hours ago"
                />
              </div>
            </Card>

            <Card>
              <h3 className="font-semibold mb-1">Upcoming</h3>
              <p className="text-sm text-gray-500 mb-4">Events and reminders</p>
              <div className="space-y-6">
                <UpcomingItem
                  title="Doctor's Appointment"
                  description="Tomorrow, 10:00 AM"
                />
                <UpcomingItem
                  title="Period Expected"
                  description="Dec 30, 2024"
                />
              </div>
            </Card>
          </div>

          {/* Tracking Streak */}
          <Card>
            <h3 className="font-semibold mb-1">Tracking Streak</h3>
            <p className="text-sm text-gray-500 mb-2">Keep up the good work!</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-pink-600">45 days</span>
              <span className="text-sm text-gray-500">Consistent tracking</span>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

const NavItem = ({ icon, label, active = false }) => {
  return (
    <li>
      <a
        href="#"
        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
          active ? "bg-pink-50 text-pink-600" : "text-gray-600 hover:bg-gray-50"
        }`}
      >
        {icon}
        {label}
      </a>
    </li>
  );
};

const MetricCard = ({ title, value, subtitle, icon }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="text-2xl font-semibold mt-1">{value}</h3>
        </div>
        {icon}
      </div>
      <div className="mt-2 text-sm text-gray-500">
        {subtitle}
      </div>
    </div>
  );
};

const Card = ({ children }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      {children}
    </div>
  );
};

const Badge = ({ children }) => {
  return (
    <span className="px-2 py-1 rounded-full bg-gray-200 text-gray-800 text-xs font-medium">
      {children}
    </span>
  );
};

const ActivityItem = ({ title, description, time }) => {
  return (
    <div className="flex justify-between items-start">
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <span className="text-sm text-gray-500">{time}</span>
    </div>
  );
};

const UpcomingItem = ({ title, description }) => {
  return (
    <div>
      <p className="font-medium">{title}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

