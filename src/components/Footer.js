import React from 'react';

function Footer() {
  return (
    <footer className="h-screen snap-start bg-black flex justify-center items-center">
      <div className="text-center">
        <p className="text-gray-400 text-xl mb-2">&copy; 2024 Luka Kljun. All rights reserved.</p>
        <p className="text-sm text-gray-500">Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
}

export default Footer;
