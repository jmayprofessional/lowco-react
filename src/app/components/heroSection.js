import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-cover bg-center h-screen flex items-center">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-8">Welcome to My Website</h1>
        <p className="text-lg text-white mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra justo non augue gravida vestibulum.</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
          View More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;