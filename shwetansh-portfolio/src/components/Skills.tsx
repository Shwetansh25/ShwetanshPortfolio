"use client"

import { motion } from 'framer-motion'

export default function Skills() {
  const skills = [
    "Java", "Python", "SQL", "HTML/CSS", "JavaScript",
    "React.js", "Next.js", "Tailwind CSS", "React Native",
    "Spring", "Hibernate", "Micronaut",
    "Git", "VS Code", "IntelliJ", "Eclipse", "Android Studio", "Firebase"
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Technical Skills
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.span 
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold shadow-md"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}

