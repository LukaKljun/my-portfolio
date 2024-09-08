import React from 'react';

function Header() {
  return (
    <header className="h-screen snap-start bg-gradient-to-b from-gray-900 to-black flex flex-col justify-center items-center relative">
      {/* Background Layer for 3D depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-gray-900 to-purple-900 opacity-30"></div>

      <div className="relative z-10 text-center">
        {/* Profile Image with Glow and Hover Effects */}
        <img
          src="/images/profile.png"
          alt="Profile"
          className="w-48 h-48 rounded-full border-8 border-blue-400 shadow-xl mb-6 transition-transform transform hover:scale-110 hover:rotate-6"
        />

        {/* Neon Glowing Name */}
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-teal-400 animate-pulse">
          Luka Kljun
        </h1>
        <p className="text-2xl mt-2 text-gray-400 font-light tracking-widest">
          Programmer | CAN SAT Competitor | Arduino Enthusiast
        </p>

        {/* Navigation with hover effects */}
        <nav className="mt-10">
          <ul className="flex justify-center space-x-10">
            <li>
              <a
                href="#about"
                className="text-blue-400 hover:text-green-500 text-2xl font-semibold transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-blue-400 hover:text-green-500 text-2xl font-semibold transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-blue-400 hover:text-green-500 text-2xl font-semibold transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
