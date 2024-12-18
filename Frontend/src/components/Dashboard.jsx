import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Home, GraduationCap, ShoppingBag, ActivitySquare, Stethoscope, Bot, ChevronRight, Bell, Calendar, Heart, Moon, Sun, Droplet, Utensils } from 'lucide-react';

export function Dashboard () {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  
  const userInputs = {
    cycleDay: 14,
    currentPhase: 'Luteal',
    mood: 'Happy',
    symptoms: ['Mild Cramps', 'Fatigue'],
    sleepQuality: 'Good',
    sleepDuration: 7.5,
  };

  
  const fertileWindow = userInputs.cycleDay >= 11 && userInputs.cycleDay <= 17;
  const pmsLikely = userInputs.currentPhase === 'Luteal' && userInputs.cycleDay > 21;
  const wellRested = userInputs.sleepQuality === 'Good' && userInputs.sleepDuration >= 7;

  
  const getHealthTips = () => {
    const tips = [];

    if (fertileWindow) {
      tips.push("You're in your fertile window. If you're trying to conceive, this is a good time.");
    }

    if (pmsLikely) {
      tips.push("PMS symptoms may occur. Try to reduce stress and maintain a balanced diet.");
    }

    if (userInputs.symptoms.includes('Mild Cramps')) {
      tips.push("For mild cramps, try gentle exercise or a warm compress on your lower abdomen.");
    }

    if (userInputs.symptoms.includes('Fatigue')) {
      tips.push("Combat fatigue with regular short breaks and stay hydrated throughout the day.");
    }

    if (!wellRested) {
      tips.push("Aim for 7-9 hours of sleep. Create a relaxing bedtime routine to improve sleep quality.");
    }

    return tips;
  };

  const healthTips = getHealthTips();

  return (
    <div className={`flex h-screen ${darkMode ? 'dark' : ''}`}>
      <style jsx>{`
        :root {
          --background: 255, 255, 255;
          --foreground: 0, 0, 0;
          --primary: 255, 192, 203;
          --primary-foreground: 0, 0, 0;
          --card: 255, 255, 255;
          --card-foreground: 0, 0, 0;
        }
        .dark {
          --background: 23, 23, 23;
          --foreground: 255, 255, 255;
          --primary: 255, 105, 180;
          --primary-foreground: 255, 255, 255;
          --card: 38, 38, 38;
          --card-foreground: 255, 255, 255;
        }
        body {
          background-color: rgb(var(--background));
          color: rgb(var(--foreground));
        }
      `}</style>
      
      <aside className="w-[240px] bg-[rgb(var(--card))] p-6 flex flex-col">
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

      
      <main className="flex-1 p-6 overflow-auto bg-[rgb(var(--background))]">
        <div className="max-w-6xl mx-auto space-y-6">
          
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Dashboard</h2>
            <div className="flex items-center gap-4">
              <Bell className="h-5 w-5 text-[rgba(var(--foreground),0.6)]" />
              <select className="border rounded-md px-2 py-1 text-sm bg-[rgb(var(--card))] text-[rgb(var(--card-foreground))]">
                <option>This Month</option>
              </select>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-[rgba(var(--foreground),0.1)] text-[rgb(var(--foreground))]"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard
              title="Cycle Day"
              value={userInputs.cycleDay}
              subtitle="14 days until next period"
              icon={<Calendar className="h-5 w-5 text-[rgb(var(--primary))]" />}
            />
            <MetricCard
              title="Current Phase"
              value={userInputs.currentPhase}
              subtitle="Next period expected on Dec 30"
              icon={<Droplet className="h-5 w-5 text-[rgb(var(--primary))]" />}
            />
            <MetricCard
              title="Today's Mood"
              value={userInputs.mood}
              subtitle={
                <div className="flex gap-2 mt-1">
                  {userInputs.symptoms.map((symptom, index) => (
                    <Badge key={index}>{symptom}</Badge>
                  ))}
                </div>
              }
              icon={<Heart className="h-5 w-5 text-[rgb(var(--primary))]" />}
            />
            <MetricCard
              title="Sleep Quality"
              value={userInputs.sleepQuality}
              subtitle={`${userInputs.sleepDuration} hours of sleep`}
              icon={<Moon className="h-5 w-5 text-[rgb(var(--primary))]" />}
            />
          </div>

          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <h3 className="font-semibold mb-1">Recent Activity</h3>
              <p className="text-sm text-[rgba(var(--foreground),0.6)] mb-4">Your health tracking history</p>
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
              <p className="text-sm text-[rgba(var(--foreground),0.6)] mb-4">Events and reminders</p>
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

          
          <Card>
            <h3 className="font-semibold mb-1">Tracking Streak</h3>
            <p className="text-sm text-[rgba(var(--foreground),0.6)] mb-2">Keep up the good work!</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-[rgb(var(--primary))]">45 days</span>
              <span className="text-sm text-[rgba(var(--foreground),0.6)]">Consistent tracking</span>
            </div>
          </Card>

          
          <Card>
            <h3 className="font-semibold mb-4">Your Health Insights</h3>
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
            <h3 className="font-semibold mb-4">Personalized Health Tips</h3>
            <ul className="space-y-2">
              {healthTips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <Utensils className="h-5 w-5 text-[rgb(var(--primary))] mr-2 mt-0.5 flex-shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
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
          active ? "bg-[rgba(var(--primary),0.1)] text-[rgb(var(--primary))]" : "text-[rgba(var(--foreground),0.7)] hover:bg-[rgba(var(--foreground),0.05)]"
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
    <div className="bg-[rgb(var(--card))] rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-[rgba(var(--foreground),0.6)]">{title}</p>
          <h3 className="text-2xl font-semibold mt-1">{value}</h3>
        </div>
        {icon}
      </div>
      <div className="mt-2 text-sm text-[rgba(var(--foreground),0.6)]">
        {subtitle}
      </div>
    </div>
  );
};

const Card = ({ children }) => {
  return (
    <div className="bg-[rgb(var(--card))] rounded-lg p-6 shadow-sm">
      {children}
    </div>
  );
};

const Badge = ({ children }) => {
  return (
    <span className="px-2 py-1 rounded-full bg-[rgba(var(--foreground),0.1)] text-[rgb(var(--foreground))] text-xs font-medium">
      {children}
    </span>
  );
};

const ActivityItem = ({ title, description, time }) => {
  return (
    <div className="flex justify-between items-start">
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-[rgba(var(--foreground),0.6)]">{description}</p>
      </div>
      <span className="text-sm text-[rgba(var(--foreground),0.6)]">{time}</span>
    </div>
  );
};

const UpcomingItem = ({ title, description }) => {
  return (
    <div>
      <p className="font-medium">{title}</p>
      <p className="text-sm text-[rgba(var(--foreground),0.6)]">{description}</p>
    </div>
  );
};

const InsightItem = ({ title, value, icon }) => {
  return (
    <div className="flex items-center space-x-3">
      {icon}
      <div>
        <p className="text-sm text-[rgba(var(--foreground),0.6)]">{title}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
};


