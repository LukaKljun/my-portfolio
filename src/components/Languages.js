import React from 'react';

function Languages() {
  const languages = [
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "C++", icon: "devicon-cplusplus-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "C#", icon: "devicon-csharp-plain colored" },
    { name: "HTML5", icon: "devicon-html5-plain colored" },
    { name: "CSS3", icon: "devicon-css3-plain colored" },
    { name: "React", icon: "devicon-react-original colored" },
    { name: "Arduino", icon: "devicon-arduino-plain colored" },
  ];

  return (
    <section id="languages" className="h-screen snap-start bg-gray-900 flex justify-center items-center px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-gray-900 opacity-20"></div>

      <div className="relative z-10 text-center max-w-5xl">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-400 to-teal-300 mb-12">
          My Skills & Tools
        </h2>

        {/* Circular Grid Layout */}
        <div className="relative w-full h-96 flex justify-center items-center">
          {languages.map((lang, index) => {
            const angle = (index / languages.length) * 2 * Math.PI; // Calculate position in circle
            const x = Math.cos(angle) * 200; // X offset
            const y = Math.sin(angle) * 200; // Y offset

            return (
              <div
                key={index}
                className="absolute transform transition-transform duration-500 hover:scale-125 hover:drop-shadow-2xl"
                style={{ transform: `translate(${x}px, ${y}px)` }}
              >
                {/* Glassy Card with Icon */}
                <div className="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-full shadow-lg border border-gray-700 hover:border-blue-500 transition-all">
                  <i className={`${lang.icon} text-6xl text-blue-400 transition-transform duration-300`}></i>
                  <p className="text-gray-300 mt-2 font-semibold text-xl">{lang.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Languages;
