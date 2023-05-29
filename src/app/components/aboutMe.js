import React from 'react';
import { FiPhone, FiMail } from 'react-icons/fi';

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center">
          <img
            src="/path/to/your-image.jpg"
            alt="Your Name"
            className="w-40 h-40 rounded-full mb-4"
          />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Your Name</h2>
          <p className="text-gray-600 mb-8">
            Description of your background experience goes here.
          </p>
          <p className="text-gray-600 mb-8">
            Description of your hobbies and interests goes here.
          </p>
          <div className="flex justify-center">
            <a
              href="tel:+1234567890"
              className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4"
            >
              <FiPhone className="mr-2" />
              +1234567890
            </a>
            <a
              href="mailto:youremail@example.com"
              className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              <FiMail className="mr-2" />
              youremail@example.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
