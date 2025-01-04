'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarIcon, MapPin, Search, Star, Clock, DollarSign, ChevronDown } from 'lucide-react'

const specializations = [
  "Gynecology",
  "Obstetrics",
  "Reproductive Endocrinology",
  "Urogynecology",
  "Gynecologic Oncology"
]

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Gynecology",
    rating: 4.8,
    reviewCount: 124,
    availableDate: "2024-03-15",
    price: 150,
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 2,
    name: "Dr. Emily Chen",
    specialization: "Obstetrics",
    rating: 4.9,
    reviewCount: 98,
    availableDate: "2024-03-16",
    price: 180,
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 3,
    name: "Dr. Michael Brown",
    specialization: "Reproductive Endocrinology",
    rating: 4.7,
    reviewCount: 86,
    availableDate: "2024-03-17",
    price: 200,
    image: "/placeholder.svg?height=100&width=100"
  }
]

export function Consultations() {
  const [selectedSpecialization, setSelectedSpecialization] = useState('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <div className="container mx-auto py-8 px-4">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center text-pink-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Expert Consultations
      </motion.h1>

      <motion.div 
        className="bg-white shadow-md rounded-lg p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Find a Specialist</h2>
        <p className="text-gray-600 mb-6">Search for women's health experts in your area</p>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                id="location"
                type="text"
                placeholder="Enter your location"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>
          <div className="flex-1 relative">
            <label htmlFor="specialization" className="block text-sm font-medium text-gray-700 mb-1">Specialization</label>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full text-left pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
              >
                {selectedSpecialization || "Select specialization"}
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </button>
              {isDropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg"
                >
                  {specializations.map((spec) => (
                    <li
                      key={spec}
                      onClick={() => {
                        setSelectedSpecialization(spec)
                        setIsDropdownOpen(false)
                      }}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {spec}
                    </li>
                  ))}
                </motion.ul>
              )}
            </div>
          </div>
        </div>
        <button className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition-colors duration-300">
          Search Doctors
        </button>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor) => (
          <motion.div
            key={doctor.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <img src={doctor.image} alt={doctor.name} className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <h3 className="text-lg font-semibold">{doctor.name}</h3>
                  <p className="text-gray-600">{doctor.specialization}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                <Star className="h-4 w-4 fill-current text-yellow-400" />
                <span>{doctor.rating}</span>
                <span>({doctor.reviewCount} reviews)</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                <Clock className="h-4 w-4" />
                <span>Next available: {new Date(doctor.availableDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                <DollarSign className="h-4 w-4" />
                <span>${doctor.price} per consultation</span>
              </div>
              <button className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition-colors duration-300">
                Book Appointment
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

