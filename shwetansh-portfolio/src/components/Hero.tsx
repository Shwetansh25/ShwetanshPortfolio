"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
// import shwetansh from '.././public/shwetansh.jpeg'
export default function Hero() {
  const [imageError, setImageError] = useState(false)

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black"></div>
       
      </div>
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <div className="mb-8 relative w-48 h-48 mx-auto rounded-full overflow-hidden">
            {!imageError ? (
              <Image
                src="/shwetansh1.jpg"
                alt="Shwetansh Srivastava"
                // height={52}
                fill
                priority
                className="object-cover"
                // sizes="52px"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <span className="text-4xl">SS</span>
              </div>
            )}
          </div>
          <h1 className="hero-text  font-bold mb-4 uppercase">
            Shwetansh Srivastava
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 tracking-wide">
            Software Engineer & Full Stack Developer
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a 
          href="#about"
          className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
        >
          <span className="text-sm mb-2">Scroll</span>
          <svg 
            className="w-6 h-6 animate-bounce" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  )
}

