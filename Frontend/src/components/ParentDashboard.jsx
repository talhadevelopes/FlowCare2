'use client'

import React, { useState, useEffect, createContext, useContext } from 'react'
import { motion } from 'framer-motion'
import { Activity, Bell, Brain, Calendar, FileText, Heart, MessageCircle, Moon, Pill, Sun, User } from 'lucide-react'

// Create a context for tabs
const TabsContext = createContext()

// Simple UI components
const Card = ({ children, className = "" }) => (
  <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md ${className}`}>
    {children}
  </div>
)

const Button = ({ children, variant = "default", size = "default", className = "", ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
  const variantStyles = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  }
  const sizeStyles = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
    icon: "h-10 w-10",
  }
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

const Progress = ({ value, className = "" }) => (
  <div className={`h-2 w-full bg-gray-200 rounded-full ${className}`}>
    <div
      className="h-full bg-pink-500 rounded-full"
      style={{ width: `${value}%` }}
    />
  </div>
)

const Avatar = ({ children, className = "" }) => (
  <div className={`relative inline-block rounded-full overflow-hidden bg-gray-100 ${className}`}>
    {children}
  </div>
)

const AvatarImage = ({ src, alt = "" }) => (
  <img src={src} alt={alt} className="w-full h-full object-cover" />
)

const AvatarFallback = ({ children }) => (
  <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-600 font-medium">
    {children}
  </div>
)

const Badge = ({ children, variant = "default", className = "" }) => {
  const variantStyles = {
    default: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    outline: "border border-input",
  }
  
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  )
}

// Tabs components with context
const Tabs = ({ children, defaultValue, className = "" }) => {
  const [value, setValue] = useState(defaultValue)
  
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={`space-y-2 ${className}`}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

const TabsList = ({ children }) => (
  <div className="flex space-x-1 rounded-lg bg-muted p-1">
    {children}
  </div>
)

const TabsTrigger = ({ value, children }) => {
  const { value: activeTab, setValue } = useContext(TabsContext)
  
  return (
    <button
      className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
        activeTab === value
          ? "bg-white text-black shadow"
          : "text-muted-foreground hover:bg-white/50 hover:text-black"
      }`}
      onClick={() => setValue(value)}
    >
      {children}
    </button>
  )
}

const TabsContent = ({ value, children }) => {
  const { value: activeTab } = useContext(TabsContext)
  
  return activeTab === value ? children : null
}

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

export function ParentDashboard() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="border-b bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Heart className="h-8 w-8 text-pink-500" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Parent Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="rounded-full"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-pink-500 rounded-full" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="health">Health Tracking</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="space-y-6">
              {mockChildrenData.map(child => (
                <ChildOverviewCard key={child.id} child={child} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="health">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockChildrenData.map(child => (
                <HealthTrackingCard key={child.id} child={child} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="appointments">
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Upcoming Appointments</h3>
                <p className="text-sm text-gray-500 mb-4">Track all scheduled medical visits</p>
                {mockChildrenData.map(child => (
                  child.appointments.map((appointment, index) => (
                    <div key={index} className="flex items-center justify-between py-4 border-b last:border-0">
                      <div className="flex items-center space-x-4">
                        <Calendar className="h-5 w-5 text-pink-500" />
                        <div>
                          <p className="font-medium">{child.name}</p>
                          <p className="text-sm text-gray-500">{appointment.type}</p>
                        </div>
                      </div>
                      <Badge variant="secondary">{appointment.date}</Badge>
                    </div>
                  ))
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

function ChildOverviewCard({ child }) {
  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center space-x-4 pb-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>{child.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-semibold">{child.name}</h3>
            <p className="text-sm text-gray-500">Age: {child.age}</p>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Health Score</span>
              <span className="text-sm font-medium">{child.healthScore}%</span>
            </div>
            <Progress value={child.healthScore} className="h-2" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">Current Phase</p>
              <p className="font-medium">{child.currentPhase}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">Next Period</p>
              <p className="font-medium">{child.nextPeriod}</p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-500 dark:text-gray-400">Recent Updates</p>
            <div className="space-y-2">
              {child.recentUpdates.map((update, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <Activity className="h-4 w-4 text-pink-500 mt-1" />
                  <div>
                    <p className="text-sm font-medium">{update.text}</p>
                    <p className="text-xs text-gray-500">{update.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <Button variant="outline" size="sm">
              <FileText className="h-4 w-4 mr-2" />
              View Details
            </Button>
            <Button variant="outline" size="sm">
              <MessageCircle className="h-4 w-4 mr-2" />
              Contact Doctor
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

function HealthTrackingCard({ child }) {
  return (
    <Card>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
          <User className="h-5 w-5" />
          <span>{child.name}'s Health</span>
        </h3>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Mood</p>
              <Badge variant="secondary">{child.mood}</Badge>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Sleep</p>
              <Badge variant="secondary">{child.sleep}</Badge>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">Current Symptoms</p>
            <div className="flex flex-wrap gap-2">
              {child.symptoms.map((symptom, index) => (
                <Badge key={index} variant="outline">{symptom}</Badge>
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
    </Card>
  )
}

