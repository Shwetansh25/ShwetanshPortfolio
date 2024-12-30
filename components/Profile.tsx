import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Profile() {
  return (
    <section className="h-screen flex items-center justify-center relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-64 h-64 rounded-full overflow-hidden shadow-xl"
          >
            <Image
              src="/placeholder.svg"
              alt="Shwetansh Srivastava"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl font-bold mb-4 text-white">Shwetansh Srivastava</h1>
            <p className="text-xl text-gray-200 mb-6">Passionate Software Engineer & Full Stack Developer</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition duration-300"
              >
                Contact Me
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300"
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

