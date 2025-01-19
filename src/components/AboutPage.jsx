import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-100 py-16 px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Section */}
        <div className="relative text-center">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute top-0 -right-10 w-24 h-24 bg-blue-400 rounded-full opacity-30 blur-lg"></div>
          <h2 className="text-6xl font-extrabold text-gray-900 tracking-widest">
            About <span className="text-yellow-500">Prana Flow&reg;</span>
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Blending timeless wisdom with modern technology to create a transformative platform for personal growth.
          </p>
        </div>

        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-8 bg-white shadow-2xl rounded-2xl relative group transform hover:-translate-y-3 transition duration-300">
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-tr from-yellow-400 to-red-400 rounded-full opacity-20 blur-md group-hover:blur-lg"></div>
            <h3 className="text-4xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              Empower individuals with culturally inspired tools and AI solutions to transform their habits and lead a 
              fulfilling life.
            </p>
          </div>
          <div className="p-8 bg-white shadow-2xl rounded-2xl relative group transform hover:-translate-y-3 transition duration-300">
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-tr from-green-400 to-blue-400 rounded-full opacity-20 blur-md group-hover:blur-lg"></div>
            <h3 className="text-4xl font-semibold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              Build a global community centered on mindfulness, growth, and applying Indian wisdom in modern life.
            </p>
          </div>
        </div>

        {/* Why Us Section */}
        <div className="text-center space-y-12">
          <h3 className="text-5xl font-semibold text-gray-900">
            Why Choose <span className="text-yellow-500">Bhrahma Niti&reg;</span>?
          </h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Discover how our unique approach combines ancient Indian teachings with advanced technology to empower users.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Personalized Habits",
                text: "AI-powered recommendations tailored to your goals.",
                bg: "from-yellow-400 to-orange-500",
              },
              {
                title: "Wisdom Snippets",
                text: "Daily quotes from the Bhagavad Gita and Yoga Sutras.",
                bg: "from-green-400 to-teal-500",
              },
              {
                title: "Gamified Growth",
                text: "Engaging tools like streaks and levels for motivation.",
                bg: "from-blue-400 to-purple-500",
              },
              {
                title: "Community Support",
                text: "Connect with like-minded individuals for shared growth.",
                bg: "from-pink-400 to-red-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`p-6 bg-gradient-to-br ${item.bg} text-white rounded-2xl shadow-lg hover:scale-105 transform transition duration-300`}
              >
                <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
