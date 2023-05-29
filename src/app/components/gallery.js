import React from 'react';

const Gallery = () => {
  const galleryData = [
    {
      id: 1,
      image: '/path/to/image1.jpg',
      description: 'Description 1',
    },
    {
      id: 2,
      image: '/path/to/image2.jpg',
      description: 'Description 2',
    },
    {
      id: 3,
      image: '/path/to/image3.jpg',
      description: 'Description 3',
    },
    // Add more gallery items here
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {galleryData.map((item) => (
        <div
          key={item.id}
          className="relative overflow-hidden hover:opacity-75 transition-opacity duration-300"
        >
          <img src={item.image} alt={item.description} className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-center">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
