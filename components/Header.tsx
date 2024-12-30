"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = ['About', 'Experience', 'Projects', 'Skills', 'Contact']

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="bg-white shadow-md sticky top-0 z-50"
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">SS</Link>
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-800 hover:text-blue-600 transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white"
        >
          {menuItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-2 px-6 text-gray-800 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.header>
  )
}

