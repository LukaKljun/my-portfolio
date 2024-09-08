import React from 'react';

function About() {
  return (
    <section id="about" className="h-screen snap-start bg-gradient-to-r from-gray-900 to-black flex justify-center items-center relative">
      {/* Glassy Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-gray-900 opacity-20"></div>

      <div className="relative z-10 text-center max-w-4xl bg-white bg-opacity-10 backdrop-blur-md p-12 rounded-lg shadow-2xl border border-gray-700">
        {/* Title with gradient */}
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 mb-8">
          About Me
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-300 leading-relaxed">
          I’m Luka Kljun, a programmer with a passion for Arduino, CAN SAT competitions, and AVR assembly projects. 
          I thrive on solving complex problems and creating innovative tech solutions.
        </p>
        <p className="text-lg text-gray-300 mt-4 leading-relaxed">
          My journey has taken me through Python, web development with C#, and mobile app development. 
          I love pushing the limits of my knowledge and skills.
        </p>
      </div>
    </section>
  );
}

export default About;
