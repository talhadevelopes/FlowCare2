import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Linkedin, Github } from 'lucide-react'

// Import images
import sarwarImage from '../../public/images/sarwar.png'
import noumanImage from '../../public/images/nouman.jpeg'
import womenImage from '../../public/images/women.jpeg'
import talhaImage from '../../public/images/talha.jpeg'

const teamMembers = [
  {
    id: 1,
    name: "Mohammed Sarwar Khan",
    role: "Team Lead & MERN Developer",
    image: sarwarImage,
    bio: "Building dreams with the MERN stack's might, crafting apps that shine so bright. A 3rd-sem intern on a soaring flight, coding stories deep into the night.",
    linkedin: "https://www.linkedin.com/in/mohammed-sarwar-khan",
    github: "https://www.github.com/Mohfazam",
    isLead: true
  },
  {
    id: 2,
    name: "Mohammed Talha Ahmed Siddique",
    role: "Full Stack developer",
    image: talhaImage,
    bio: "You dont know me, but your wife does, and the nigga who complained about me - bruh your mom loves pan cakes right?",
    linkedin: "https://www.linkedin.com/in/mohammed-talha-ahmed-6871a42ab/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    isLead: false
  },
  {
    id: 3,
    name: "Mohammed Nouman",
    role: "Front-End developer",
    image: noumanImage,
    bio: "Hi, I'm Mohammed Nouman! I'm currently in my 3rd semester of IT engineering, diving deep into DevOps while sharpening my Full Stack skills. When I'm not coding, I'm either watching Hollywood action films or enjoying some thrilling sports moments. 🚀🎥⚽",
    linkedin: "https://www.linkedin.com/in/mohammed-nouman-3320a7279/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    isLead: false
  },
  {
    id: 4,
    name: "Juwairiyyah ahmed",
    role: "Famale Eligibility ke liye hai sirf",
    image: womenImage,
    bio: "a 3rd-semester engineering student with a creative flair for design and a deep passion for technology. Alongside my studies, I'm working as a graphic designer, blending creativity and technical skills to bring ideas to life.",
    linkedin: "https://www.linkedin.com/in/juwairiyyah-ahmed-0bb4ab260/",
    isLead: false
  }
]

export function ModernTeamShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      const handleScroll = () => {
        const scrollPosition = container.scrollLeft
        const itemWidth = container.offsetWidth
        const newIndex = Math.round(scrollPosition / itemWidth)
        setCurrentIndex(newIndex)
      }

      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollTo = (index) => {
    if (containerRef.current) {
      const newScrollPosition = index * containerRef.current.offsetWidth
      containerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      })
    }
    setCurrentIndex(index)
  }

  return (
    <div className="bg-[#1c1c1c] min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold text-white mb-8 text-center"
      >
        Meet Our Visionary Team
      </motion.h1>

      <div className="relative w-full max-w-[90vw] md:max-w-2xl mx-auto">
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
          whileTap={{ scale: 0.9 }}
          className="absolute -left-16 md:-left-24 top-1/2 transform -translate-y-1/2 bg-[#242424] hover:bg-[#2a2a2a] rounded-full p-3 shadow-lg border border-gray-700 z-10"
          onClick={() => scrollTo(Math.max(0, currentIndex - 1))}
          aria-label="Previous team member"
        >
          <ChevronLeft className="w-8 h-8 text-white" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
          whileTap={{ scale: 0.9 }}
          className="absolute -right-16 md:-right-24 top-1/2 transform -translate-y-1/2 bg-[#242424] hover:bg-[#2a2a2a] rounded-full p-3 shadow-lg border border-gray-700 z-10"
          onClick={() => scrollTo(Math.min(teamMembers.length - 1, currentIndex + 1))}
          aria-label="Next team member"
        >
          <ChevronRight className="w-8 h-8 text-white" />
        </motion.button>

        <div
          ref={containerRef}
          className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="w-full flex-shrink-0 snap-center px-4"
            >
              <AnimatePresence mode="wait" initial={false}>
                {currentIndex === index && (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.5 }}
                    className="backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto cursor-pointer"
                  >
                    <div className="p-6 md:p-8 flex flex-col gap-4">
                      <div className="w-full flex items-center gap-4">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-24 h-24 rounded-full object-cover border-2 border-[#00875A] shadow-lg"
                        />
                        <div>
                          <h2 className="text-2xl font-bold text-gray-300">{member.name}</h2>
                          <p className="text-sm text-[#00875A]">{member.role}</p>
                        </div>
                      </div>

                      <div className="w-full">
                        <p className="text-sm text-gray-400 mb-2">About</p>
                        <p className="text-white/90 text-sm">{member.bio}</p>
                      </div>
                      

                      <div className="flex items-center justify-between w-full mt-4">
                        <div className="flex space-x-4">
                          <motion.a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#00875A] hover:bg-[#00976A] text-white p-2 rounded-lg transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Linkedin size={20} />
                          </motion.a>
                          {member.isLead && (
                            <motion.a
                              href={member.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-[#00875A] hover:bg-[#00976A] text-white p-2 rounded-lg transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Github size={20} />
                            </motion.a>
                          )}
                        </div>
                        <span className="bg-[#00875A] text-white text-xs font-semibold px-2 py-1 rounded">Team Member</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-3">
          {teamMembers.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#00875A] ${
                index === currentIndex 
                  ? 'bg-[#00875A] shadow-lg' 
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              aria-label={`Go to team member ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

