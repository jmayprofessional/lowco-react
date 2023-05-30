import React from 'react';

const HeroSection = ({ backgroundImage }) => {
  const sectionStyles = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <section className="bg-cover bg-center h-screen flex items-center" style={sectionStyles}>
      <div className="container mx-auto text-left pl-4">
        <h1 className="text-4xl font-bold text-white mb-2">LowCo Web Design and Creative</h1>
        <p className="text-lg text-white mb-4">Let us do the not fun stuff so you can focus on the good stuff.</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
          Click Here For Free Magic Tricks
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

