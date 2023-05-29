import React from 'react';

const LogoCloud = () => {
  // Replace the logoData with the actual logo data
  const logoData = [
    { id: 1, image: '/path/to/logo1.png', alt: 'Logo 1' },
    { id: 2, image: '/path/to/logo2.png', alt: 'Logo 2' },
    { id: 3, image: '/path/to/logo3.png', alt: 'Logo 3' },
    // Add more logos here
  ];

  return (
    <div className="flex flex-wrap justify-center items-center">
      {logoData.map((logo) => (
        <img
          key={logo.id}
          src={logo.image}
          alt={logo.alt}
          className="w-24 h-24 object-contain mx-4 my-2"
        />
      ))}
    </div>
  );
};

export default LogoCloud;
