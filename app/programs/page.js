'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const programs = [
  {
    title: "Career Kickstart",
    description: "Perfect for students looking to start their career journey with confidence.",
    icon: (
      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    features: [
      "Career path planning",
      "Skill gap analysis",
      "Interview preparation",
      "Resume building",
      "1-on-1 mentorship"
    ]
  },
  {
    title: "Technical Excellence",
    description: "Focused on building strong technical skills with industry experts.",
    icon: (
      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    features: [
      "Technical skill development",
      "Project guidance",
      "Code reviews",
      "Industry best practices",
      "Hands-on workshops"
    ]
  },
  {
    title: "Personal Growth",
    description: "Holistic development focusing on both technical and soft skills.",
    icon: (
      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    features: [
      "Communication skills",
      "Leadership development",
      "Problem-solving",
      "Time management",
      "Work-life balance"
    ]
  }
]

export default function Programs() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black">
      {/* Hero Section */}
      <section className="relative px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Our Programs
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tailored mentorship programs designed to help you achieve your goals, whether you're starting your journey or looking to level up.
          </p>
        </motion.div>
      </section>

      {/* Programs Grid */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-6">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{program.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{program.description}</p>
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600 dark:text-gray-400">
                      <svg className="w-5 h-5 mr-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/connect">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-6 text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-colors"
                  >
                    Join Program
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl overflow-hidden shadow-xl">
            <div className="px-6 py-12 sm:px-12 sm:py-16 text-center text-white">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Not Sure Which Program to Choose?</h2>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8">
                Connect with us for a free consultation. We'll help you find the perfect program based on your goals and needs.
              </p>
              <Link href="/connect">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Schedule a Consultation
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}