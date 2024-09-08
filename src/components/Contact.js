import React from 'react';

function Contact() {
  return (
    <section id="contact" className="h-screen snap-start bg-gray-900 flex justify-center items-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black opacity-50"></div>

      <div className="relative z-10 max-w-3xl bg-white bg-opacity-10 backdrop-blur-md p-12 rounded-lg shadow-2xl border border-gray-700 text-center">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 mb-8">
          Contact Me
        </h2>

        <form className="space-y-6">
          <input type="text" placeholder="Your Name" className="w-full p-4 bg-gray-800 bg-opacity-60 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="email" placeholder="Your Email" className="w-full p-4 bg-gray-800 bg-opacity-60 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <textarea placeholder="Your Message" className="w-full p-4 bg-gray-800 bg-opacity-60 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" rows="5"></textarea>

          <button type="submit" className="w-full py-4 bg-blue-500 text-white rounded-lg hover:bg-green-500 transition-colors duration-300 transform hover:scale-105">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
