import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Languages from './components/Languages';  // Import the new component

function App() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      <Header />
      <About />
      <Languages />  {/* Add the Languages section here */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
