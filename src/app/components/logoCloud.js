import React from 'react';

const LogoCloud = ({ logoData }) => {
  return (
    <div className="bg-white flex flex-wrap justify-center items-center">
      {logoData.map((logoData) => (
        <img
          key={logoData.id}
          src={logoData.image}
          alt={logoData.alt}
          className="w-24 h-24 object-contain mx-4 my-2"
        />
      ))}
    </div>
  );
};

export default LogoCloud;
