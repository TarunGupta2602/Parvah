'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Connect() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    year: '',
    interests: [],
    concernType: [],
    message: '',
    preferredTime: '',
    communicationType: 'video'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'connect',
          formData
        }),
      });

      if (response.ok) {
        // Show success message
        alert('Thank you! We will contact you soon.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          college: '',
          year: '',
          interests: [],
          concernType: [],
          message: '',
          preferredTime: '',
          communicationType: 'video'
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Sorry, something went wrong. Please try again later.');
    }
  };

  const handleToggle = (array, item) => {
    setFormData(prev => ({
      ...prev,
      [array]: prev[array].includes(item)
        ? prev[array].filter(i => i !== item)
        : [...prev[array], item]
    }));
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Let's Talk About Your Future
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Whether you're looking to develop new skills, find career direction, or just need someone to talk to about your goals - we're here to listen and help.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your contact number"
                />
              </div>
            </div>

            {/* What brings you here? */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">What brings you here?</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Select all that apply</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {concernTypes.map((concern) => (
                  <motion.button
                    key={concern}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleToggle('concernType', concern)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors text-left ${
                      formData.concernType.includes(concern)
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {concern}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Areas of Interest */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Areas you'd like to explore</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Select the areas you're interested in learning about</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {interests.map((interest) => (
                  <motion.button
                    key={interest}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleToggle('interests', interest)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      formData.interests.includes(interest)
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {interest}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Tell us more</h2>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                placeholder="Share anything else you'd like us to know. What are your goals? What kind of support are you looking for?"
              />
            </div>

            {/* Meeting Preferences */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Meeting Preferences</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Preferred Time for Discussion
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select a preferred time</option>
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                  <option value="evening">Evening (4 PM - 8 PM)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Preferred Communication Type
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {['video', 'audio', 'chat'].map((type) => (
                    <motion.button
                      key={type}
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setFormData({...formData, communicationType: type})}
                      className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                        formData.communicationType === type
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {type}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-6 text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              Schedule a Discussion
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

const concernTypes = [
  "Looking to develop new skills",
  "Need career guidance",
  "Want to prepare for job interviews",
  "Feeling stuck or uncertain about future",
  "Want to switch careers",
  "Need help with personal development",
  "Looking for mentorship",
  "Want to discuss education options"
];

const interests = [
  "Web Development",
  "App Development",
  "Machine Learning",
  "Data Science",
  "Cybersecurity",
  "UI/UX Design",
  "Cloud Computing",
  "Digital Marketing",
  "Business Analytics",
  "Product Management",
  "Soft Skills",
  "Leadership"
]; 