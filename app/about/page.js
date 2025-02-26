'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function About() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black">
      {/* Hero Section */}
      <motion.section 
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="relative px-4 py-16 sm:px-6 lg:px-8 overflow-hidden"
      >
        <motion.div 
          variants={fadeIn}
          className="max-w-7xl mx-auto text-center"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
          >
            More Than Just Mentorship
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            At Parvah, we understand that success isn't just about skills—it's about overcoming fears, 
            building confidence, and having someone who truly listens. We focus on tier-3 college students 
            who deserve the same opportunities for growth and success.
          </motion.p>
        </motion.div>

        {/* Values Section */}
        <motion.div 
          variants={fadeIn}
          className="mt-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Unique Approach Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">How We're Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {uniqueFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/50 dark:to-purple-900/50 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">{feature.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-center text-gray-600 dark:text-gray-400">
                      <svg className="w-5 h-5 mr-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl overflow-hidden shadow-xl">
            <div className="px-6 py-12 sm:px-12 sm:py-16 text-center text-white">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                Join our supportive community where your challenges are heard, your fears are addressed, 
                and your potential is unleashed through personalized guidance.
              </p>
              <Link href="/connect">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Connect With a Mentor
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

const values = [
  {
    title: "One-on-One Focus",
    description: "Real conversations with mentors who understand your unique challenges and guide you personally.",
    icon: (
      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: "Emotional Support",
    description: "A safe space to discuss your fears, doubts, and anxieties about your career journey.",
    icon: (
      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: "Personalized Path",
    description: "Customized guidance based on your background, challenges, and career aspirations.",
    icon: (
      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: "Community Support",
    description: "Join a network of peers who understand your journey and support your growth.",
    icon: (
      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
];

const uniqueFeatures = [
  {
    title: "Mental & Emotional Support",
    description: "We understand that career development isn't just about skills—it's about overcoming internal barriers.",
    points: [
      "Overcome imposter syndrome and self-doubt",
      "Build confidence through guided support",
      "Learn to manage career-related anxiety",
      "Develop resilience and growth mindset"
    ]
  },
  {
    title: "Personalized Career Guidance",
    description: "Your journey is unique, and your guidance should be too.",
    points: [
      "One-on-one mentorship sessions",
      "Customized career roadmaps",
      "Regular progress check-ins",
      "Real-world advice from industry experts"
    ]
  },
  {
    title: "Focus on Tier-3 College Students",
    description: "We believe talent exists everywhere, and everyone deserves quality mentorship.",
    points: [
      "Bridge the guidance gap",
      "Level the playing field",
      "Industry-relevant skill development",
      "Network building opportunities"
    ]
  },
  {
    title: "Supportive Community",
    description: "Join a community that understands and supports your journey.",
    points: [
      "Peer learning groups",
      "Shared experiences and solutions",
      "Networking opportunities",
      "Long-term support system"
    ]
  }
];