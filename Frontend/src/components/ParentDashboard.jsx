'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Activity, Bell, Brain, Calendar, ChevronRight, FileText, Heart, Mail, MessageCircle, Moon, Phone, Pill, Play, Plus, Sun, User, Sparkles, TrendingUp } from 'lucide-react'

// Mock data
const mockChildrenData = [
  {
    id: 1,
    name: 'Sarah',
    age: 13,
    lastPeriod: '2024-01-01',
    nextPeriod: '2024-01-28',
    cycleLength: 28,
    currentPhase: 'Follicular',
    symptoms: ['Mild cramps', 'Fatigue'],
    mood: 'Happy',
    sleep: 'Good',
    medications: ['Iron supplement'],
    appointments: [
      { date: '2024-01-15', type: 'Gynecologist Check-up' }
    ],
    healthScore: 85,
    recentUpdates: [
      { date: '2024-01-03', text: 'Logged period start' },
      { date: '2024-01-02', text: 'Completed daily mood tracking' }
    ]
  },
  {
    id: 2,
    name: 'Emily',
    age: 15,
    lastPeriod: '2023-12-25',
    nextPeriod: '2024-01-22',
    cycleLength: 30,
    currentPhase: 'Luteal',
    symptoms: ['Headache'],
    mood: 'Calm',
    sleep: 'Fair',
    medications: ['Multivitamin'],
    appointments: [
      { date: '2024-01-20', type: 'Regular Check-up' }
    ],
    healthScore: 90,
    recentUpdates: [
      { date: '2024-01-03', text: 'Updated symptom tracker' },
      { date: '2024-01-01', text: 'Logged exercise session' }
    ]
  }
]

const resources = [
  {
    title: "Understanding Your Cycle",
    type: "Video",
    duration: "15 mins",
    level: "Beginner",
    icon: Play,
  },
  {
    title: "Nutrition & Menstrual Health",
    type: "Article",
    duration: "10 mins",
    level: "Intermediate",
    icon: FileText,
  },
  {
    title: "Managing PMS Symptoms",
    type: "Interactive",
    duration: "20 mins",
    level: "Advanced",
    icon: Brain,
  },
]

const contacts = [
  {
    name: "Dr. Sarah Johnson",
    role: "Primary Gynecologist",
    phone: "+1 (555) 123-4567",
    email: "dr.johnson@example.com",
    available: "24/7",
  },
  {
    name: "City Women's Hospital",
    role: "Emergency Room",
    phone: "+1 (555) 987-6543",
    email: "emergency@cityhospital.com",
    available: "24/7",
  },
  {
    name: "Teen Health Clinic",
    role: "Urgent Care",
    phone: "+1 (555) 456-7890",
    email: "clinic@example.com",
    available: "8AM - 8PM",
  },
]


export function ParentDashboard() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.toggle('dark', darkMode)
  }, [darkMode])

  const renderOverviewCards = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {mockChildrenData.map(child => (
        <motion.div
          key={child.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden bg-gradient-to-br from-white to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl border border-pink-100/20"
        >
          <div className="absolute inset-0 bg-grid-pink/5" />
          <div className="relative p-6 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full blur-lg opacity-20 animate-pulse" />
                <div className="relative h-16 w-16 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center border-2 border-white dark:border-gray-700">
                  <span className="text-xl font-semibold text-white">{child.name[0]}</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  {child.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Age: {child.age}</p>
              </div>
              <div className="ml-auto">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-1 px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-900/30"
                >
                  <Sparkles className="h-4 w-4 text-pink-500" />
                  <span className="text-sm font-medium text-pink-700 dark:text-pink-300">
                    {child.healthScore}% Health
                  </span>
                </motion.div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-pink-100/20 dark:border-pink-900/20">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Current Phase</p>
                <p className="text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  {child.currentPhase}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-pink-100/20 dark:border-pink-900/20">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Next Period</p>
                <p className="text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  {child.nextPeriod}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300">Recent Updates</h4>
                <TrendingUp className="h-4 w-4 text-pink-500" />
              </div>
              <div className="space-y-2">
                {child.recentUpdates.map((update, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-pink-100/20 dark:border-pink-900/20"
                  >
                    <Activity className="h-5 w-5 text-pink-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{update.text}</p>
                      <p className="text-xs text-gray-500">{update.date}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/30 transition-shadow"
              >
                <FileText className="h-4 w-4 mr-2" />
                View Details
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium border border-pink-100 dark:border-pink-900/50 shadow-lg shadow-pink-500/10 hover:shadow-xl hover:shadow-pink-500/20 transition-shadow"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Contact Doctor
              </motion.button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )

  const renderHealthCards = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {mockChildrenData.map(child => (
        <motion.div
          key={child.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden bg-gradient-to-br from-white to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl border border-pink-100/20"
        >
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span>{child.name}'s Health</span>
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Mood</p>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700">
                    {child.mood}
                  </span>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Sleep</p>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700">
                    {child.sleep}
                  </span>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">Current Symptoms</p>
                <div className="flex flex-wrap gap-2">
                  {child.symptoms.map((symptom, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-700"
                    >
                      {symptom}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">Medications</p>
                <div className="space-y-2">
                  {child.medications.map((medication, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Pill className="h-4 w-4 text-pink-500" />
                      <span className="text-sm">{medication}</span>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start space-x-2">
                  <Brain className="h-5 w-5 text-pink-500 mt-1" />
                  <div>
                    <p className="font-medium">Cycle Insights</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {child.name} is in their {child.currentPhase} phase. 
                      Next period expected on {child.nextPeriod}.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )

  const renderEducationResources = () => (
    <div className="grid gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden bg-gradient-to-br from-white to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl border border-pink-100/20"
      >
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Educational Resources</h3>
          <div className="grid gap-4">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
              >
                <div className="p-2 bg-pink-100 dark:bg-pink-900/20 rounded-lg">
                  <resource.icon className="h-5 w-5 text-pink-500" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium mb-1">{resource.title}</h4>
                  <div className="flex items-center space-x-3 text-sm text-gray-500">
                    <span>{resource.type}</span>
                    <span>•</span>
                    <span>{resource.duration}</span>
                    <span className="ml-2 px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700">
                      {resource.level}
                    </span>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )

  const renderEmergencyContacts = () => (
    <div className="grid gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden bg-gradient-to-br from-white to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl border border-pink-100/20"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Emergency Contacts</h3>
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium bg-pink-500 text-white rounded-md hover:bg-pink-600">
              <Plus className="h-4 w-4 mr-2" />
              Add Contact
            </button>
          </div>
          <div className="space-y-4">
            {contacts.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-pink-100 dark:bg-pink-900/20 rounded-full">
                    <User className="h-5 w-5 text-pink-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">{contact.name}</h4>
                    <p className="text-sm text-gray-500">{contact.role}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="px-2.5 py-0.5 text-xs font-medium border border-gray-200 dark:border-gray-700 rounded-full">
                    {contact.available}
                  </span>
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                    <Phone className="h-4 w-4" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                    <Mail className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-pink-100/20 dark:border-pink-900/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full blur-lg opacity-20 animate-pulse" />
                <Heart className="h-8 w-8 text-pink-500 relative" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Parent Dashboard
              </h1>
            </motion.div>
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-500"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-500 relative"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-pink-500 rounded-full ring-2 ring-white dark:ring-gray-900" />
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex space-x-1 p-1 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-lg border border-pink-100/20 dark:border-pink-900/20"
          >
            {['overview', 'health', 'education', 'emergency'].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                    : "text-gray-600 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-pink-900/20"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'overview' && renderOverviewCards()}
              {activeTab === 'health' && renderHealthCards()}
              {activeTab === 'education' && renderEducationResources()}
              {activeTab === 'emergency' && renderEmergencyContacts()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}

