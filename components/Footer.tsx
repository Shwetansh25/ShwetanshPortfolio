"use client"

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 text-white py-6"
    >
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Shwetansh Srivastava. All rights reserved.</p>
      </div>
    </motion.footer>
  )
}

