import React from 'react';

const NavigationBar = () => {
  return (
    <nav className="bg-navBackground-color">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">
      {/* Logo */}
        <img className="h-12 w-15" src="/FFGLogo.png" alt="Logo" />
      
      
      {/* Links */}
      <div className="flex items-center justify-center">
        {/* Home Link */}
        <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          Home
        </a>
        {/* Services Link */}
        <a href="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          Services
        </a>
        {/* Portfolio Link */}
        <a href="/portfolio" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          Gallery
        </a>
        {/* About Us Link */}
        <a href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          About Us
        </a>
        {/* Contact Us Link */}
        <a href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          Contact Us
        </a>
      </div>
    </div>
  </div>
</nav>
  );
};

export default NavigationBar;
