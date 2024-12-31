// import React, { useState, useRef, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { ChevronLeft, ChevronRight, Linkedin, Github } from 'lucide-react'



// const teamMembers = [
//   {
//     id: 1,
//     name: "Mohammed Sarwar Khan",
//     role: "Team Lead & MERN Developer",
//     image: "../../public/images/Sarwar.png?height=400&width=300",
//     bio: "Building dreams with the MERN stack's might, crafting apps that shine so bright. A 3rd-sem intern on a soaring flight, coding stories deep into the night.",
//     linkedin: "https://www.linkedin.com/in/mohammed-sarwar-khan",
//     github: "https://www.github.com/Mohfazam",
//     isLead: true
//   },
//   {
//     id: 2,
//     name: "Mohammed Talha Ahmed Siddique",
//     role: "Full Stack developer",
//     image: "/placeholder.svg?height=400&width=300",
//     bio: "You dont know me, but your wife does, and the nigga who complained about me - bruh your mom loves pan cakes right?",
//     linkedin: "https://www.linkedin.com/in/mohammed-talha-ahmed-6871a42ab/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//     isLead: false
//   },
//   {
//     id: 3,
//     name: "Mohammed Nouman",
//     role: "Front-End developer",
//     image: "../../public/images/nouman.jpeg?height=400&width=300",
//     bio: "Hi, I'm Mohammed Nouman! I'm currently in my 3rd semester of IT engineering, diving deep into DevOps while sharpening my Full Stack skills. When I’m not coding, I’m either watching Hollywood action films or enjoying some thrilling sports moments. 🚀🎥⚽",
//     linkedin: "https://www.linkedin.com/in/mohammed-nouman-3320a7279/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//     isLead: false
//   },
//   {
//     id: 4,
//     name: "Juwairiyyah ahmed",
//     role: "Famale Eligibility ke liye hai sirf",
//     image: "../../public/images/women.png?height=400&width=300",
//     bio: "a 3rd-semester engineering student with a creative flair for design and a deep passion for technology. Alongside my studies, I’m working as a graphic designer, blending creativity and technical skills to bring ideas to life.",
//     linkedin: "https://www.linkedin.com/in/juwairiyyah-ahmed-0bb4ab260/",
//     isLead: false
//   }
// ]

// export function ModernTeamShowcase() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const containerRef = useRef(null)

//   useEffect(() => {
//     const container = containerRef.current
//     if (container) {
//       const handleScroll = () => {
//         const scrollPosition = container.scrollLeft
//         const itemWidth = container.offsetWidth
//         const newIndex = Math.round(scrollPosition / itemWidth)
//         setCurrentIndex(newIndex)
//       }

//       container.addEventListener('scroll', handleScroll)
//       return () => container.removeEventListener('scroll', handleScroll)
//     }
//   }, [])

//   const scrollTo = (index) => {
//     if (containerRef.current) {
//       const newScrollPosition = index * containerRef.current.offsetWidth
//       containerRef.current.scrollTo({
//         left: newScrollPosition,
//         behavior: 'smooth'
//       })
//     }
//     setCurrentIndex(index)
//   }

//   return (
//     <div className="bg-gradient-to-br from-purple-900 to-indigo-900 min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
//       <motion.h1
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="text-4xl md:text-5xl font-bold text-white mb-8 text-center"
//       >
//         Meet Our Visionary Team
//       </motion.h1>

//       <div className="relative w-full max-w-[90vw] md:max-w-6xl mx-auto">
//         <motion.button
//           whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
//           whileTap={{ scale: 0.9 }}
//           className="absolute -left-16 md:-left-24 top-1/2 transform -translate-y-1/2 bg-white/25 hover:bg-white/30 rounded-full p-3 backdrop-blur-sm shadow-lg border border-white/10 z-10"
//           onClick={() => scrollTo(Math.max(0, currentIndex - 1))}
//           aria-label="Previous team member"
//         >
//           <ChevronLeft className="w-8 h-8 text-white" />
//         </motion.button>

//         <motion.button
//           whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
//           whileTap={{ scale: 0.9 }}
//           className="absolute -right-16 md:-right-24 top-1/2 transform -translate-y-1/2 bg-white/25 hover:bg-white/30 rounded-full p-3 backdrop-blur-sm shadow-lg border border-white/10 z-10"
//           onClick={() => scrollTo(Math.min(teamMembers.length - 1, currentIndex + 1))}
//           aria-label="Next team member"
//         >
//           <ChevronRight className="w-8 h-8 text-white" />
//         </motion.button>

//         <div
//           ref={containerRef}
//           className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
//           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//         >
//           {teamMembers.map((member, index) => (
//             <div
//               key={member.id}
//               className="w-full flex-shrink-0 snap-center px-4"
//             >
//               <AnimatePresence mode="wait" initial={false}>
//                 {currentIndex === index && (
//                   <motion.div
//                     key={member.id}
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.9 }}
//                     transition={{ duration: 0.5 }}
//                     className="bg-white/20 backdrop-blur-lg rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 shadow-xl"
//                   >
//                     <motion.div
//                       className="relative w-48 h-48 md:w-64 md:h-64"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <motion.img
//                         src={member.image}
//                         alt={member.name}
//                         className="w-full h-full rounded-full object-cover border-4 border-purple-400 shadow-lg"
//                       />
//                       <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-500/20 to-transparent" />
//                     </motion.div>
//                     <div className="flex flex-col items-center md:items-start max-w-xl">
//                       <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
//                         {member.name}
//                       </h2>
//                       <p className="text-lg md:text-xl text-purple-200 mb-4 drop-shadow">
//                         {member.role}
//                       </p>
//                       <p className="text-white/90 text-center md:text-left mb-6 leading-relaxed">
//                         {member.bio}
//                       </p>
//                       <div className="flex space-x-4">
//                         <motion.a
//                           href={member.linkedin}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-white hover:text-purple-300 transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.9 }}
//                         >
//                           <Linkedin size={24} />
//                         </motion.a>
//                         {member.isLead && (
//                           <motion.a
//                             href={member.github}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-white hover:text-purple-300 transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
//                             whileHover={{ scale: 1.1 }}
//                             whileTap={{ scale: 0.9 }}
//                           >
//                             <Github size={24} />
//                           </motion.a>
//                         )}
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center mt-8 space-x-3">
//           {teamMembers.map((_, index) => (
//             <motion.button
//               key={index}
//               onClick={() => scrollTo(index)}
//               className={`w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-purple-400 ${
//                 index === currentIndex 
//                   ? 'bg-white shadow-lg' 
//                   : 'bg-white/30 hover:bg-white/50'
//               }`}
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.8 }}
//               aria-label={`Go to team member ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }























import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Linkedin, Github } from 'lucide-react'
import sarwarImage from '/images/Sarwar.png'
import noumanImage from '/images/nouman.jpeg'
import womenImage from '/images/women.png'
import talhaImage from '/images/talha.jpeg'

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
    <div className="bg-gradient-to-br from-purple-900 to-indigo-900 min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold text-white mb-8 text-center"
      >
        Meet Our Visionary Team
      </motion.h1>

      <div className="relative w-full max-w-[90vw] md:max-w-6xl mx-auto">
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
          whileTap={{ scale: 0.9 }}
          className="absolute -left-16 md:-left-24 top-1/2 transform -translate-y-1/2 bg-white/25 hover:bg-white/30 rounded-full p-3 backdrop-blur-sm shadow-lg border border-white/10 z-10"
          onClick={() => scrollTo(Math.max(0, currentIndex - 1))}
          aria-label="Previous team member"
        >
          <ChevronLeft className="w-8 h-8 text-white" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
          whileTap={{ scale: 0.9 }}
          className="absolute -right-16 md:-right-24 top-1/2 transform -translate-y-1/2 bg-white/25 hover:bg-white/30 rounded-full p-3 backdrop-blur-sm shadow-lg border border-white/10 z-10"
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
                    transition={{ duration: 0.5 }}
                    className="bg-white/20 backdrop-blur-lg rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 shadow-xl"
                  >
                    <motion.div
                      className="relative w-48 h-48 md:w-64 md:h-64"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover border-4 border-purple-400 shadow-lg"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-500/20 to-transparent" />
                    </motion.div>
                    <div className="flex flex-col items-center md:items-start max-w-xl">
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
                        {member.name}
                      </h2>
                      <p className="text-lg md:text-xl text-purple-200 mb-4 drop-shadow">
                        {member.role}
                      </p>
                      <p className="text-white/90 text-center md:text-left mb-6 leading-relaxed">
                        {member.bio}
                      </p>
                      <div className="flex space-x-4">
                        <motion.a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-purple-300 transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Linkedin size={24} />
                        </motion.a>
                        {member.isLead && (
                          <motion.a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-purple-300 transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Github size={24} />
                          </motion.a>
                        )}
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
              className={`w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                index === currentIndex 
                  ? 'bg-white shadow-lg' 
                  : 'bg-white/30 hover:bg-white/50'
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

