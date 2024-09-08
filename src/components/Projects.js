import React from 'react';

function Projects() {
  const projectData = [
    { title: "CAN SAT Ground Station", description: "Developed a LoRa-based home station using Arduino." },
    { title: "AVR Assembly Blinking LED", description: "Created an LED blinking program in AVR assembly." },
    { title: "Snake Game on Arduino", description: "Developed a Snake game using Arduino and ESP32." },
    { title: "C# ASP.NET Web Application", description: "Built a web app using C# and ASP.NET." },
    { title: "Pi Nano Satellite Project", description: "Worked on a CanSat project using Pi Nano." },
    { title: "React Native App at Wise Tech", description: "Led the development of React Native apps." },
  ];

  return (
    <section id="projects" className="h-screen snap-start bg-gradient-to-b from-gray-900 to-black flex flex-col justify-center items-center">
      <div className="text-center max-w-6xl">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 mb-12">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="relative bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-gray-700 transform transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold text-amber-400 mb-4">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
