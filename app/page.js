'use client'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Animated Background */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 1.5 }}
        >
          {/* Animated background elements */}
          <motion.div
            className="absolute w-72 h-72 bg-white/10 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ left: '10%', top: '20%' }}
          />
          <motion.div
            className="absolute w-96 h-96 bg-purple-500/10 rounded-full"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -150, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ right: '15%', bottom: '15%' }}
          />
        </motion.div>

        <div className="relative z-10 text-white text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-6xl sm:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200"
            >
              Welcome to Pravah
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl sm:text-2xl mb-8 leading-relaxed"
            >
              Your journey to success begins with a conversation. We're here to listen, guide, and support you.
              <span className="block mt-4 text-purple-200">
                Transform your potential into achievement.
              </span>
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.9)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold shadow-lg transition-all duration-300 hover:shadow-xl"
                href="/connect"
              >
                Start Your Journey
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white rounded-full font-semibold transition-all duration-300"
                href="/about"
              >
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg className="w-8 h-8 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900 dark:to-purple-900"
                >
                  <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">{stat.value}</div>
                  <div className="mt-2 text-gray-600 dark:text-gray-300">{stat.label}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Features Section with Enhanced Animation */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Why Choose Pravah?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-xl max-w-2xl mx-auto">
              We're not just another platform. We're your partners in growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <motion.span 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg"
                  >
                    {feature.icon}
                  </motion.span>
                  <h3 className="text-2xl font-semibold ml-4">{feature.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-lg">{feature.description}</p>
                <ul className="mt-6 space-y-3">
                  {feature.points.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center text-gray-600 dark:text-gray-400"
                    >
                      <svg className="w-5 h-5 mr-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 to-purple-600 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center text-white relative z-10"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Transform Your Journey?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Join Pravah today and experience the difference personalized mentorship can make in your career and personal growth.
          </p>
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.95)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            href="/connect"
          >
            Get Started Now
          </motion.a>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-96 h-96 rounded-full border-8 border-white -top-20 -left-20 animate-pulse"></div>
          <div className="absolute w-64 h-64 rounded-full border-8 border-white bottom-10 right-10 animate-pulse delay-300"></div>
        </div>
      </div>
    </div>
  )
}

// Stats data
const stats = [
  { value: '500+', label: 'Students Mentored' },
  { value: '50+', label: 'Expert Mentors' },
  { value: '95%', label: 'Success Rate' },
  { value: '24/7', label: 'Support Available' },
];

const features = [
  {
    title: "One-on-One Conversations",
    description: "Real conversations with mentors who understand your journey.",
    icon: (
      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    points: [
      "Personalized mentoring sessions",
      "Real-time problem solving",
      "Flexible scheduling",
      "Direct access to industry experts"
    ]
  },
  {
    title: "Mental & Emotional Support",
    description: "Navigate challenges with confidence and resilience.",
    icon: (
      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    points: [
      "Overcome imposter syndrome",
      "Build self-confidence",
      "Stress management techniques",
      "Work-life balance guidance"
    ]
  },
  {
    title: "Personalized Career Guidance",
    description: "Tailored advice for your unique career path.",
    icon: (
      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    points: [
      "Custom career roadmaps",
      "Skill gap analysis",
      "Industry insights",
      "Interview preparation"
    ]
  },
  {
    title: "Community & Safe Space",
    description: "Join a supportive community of like-minded individuals.",
    icon: (
      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    points: [
      "Peer learning opportunities",
      "Knowledge sharing sessions",
      "Networking events",
      "Collaborative projects"
    ]
  }
]
