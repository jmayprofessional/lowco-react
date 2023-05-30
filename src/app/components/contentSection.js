import React from 'react';

const ContentSection = ({ contentTitle, contentSubTitle, contentImage, contentParagraphTitle, contentParagraph, featureOne, featureTwo, featureThree }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-bold text-gray-900">{contentTitle}</h2>
          <p className="mt-4 text-gray-500">{contentSubTitle}</p>
        </div>
        <div className="mt-20">
          <div className="lg:flex lg:justify-center">
            <div className="lg:w-3/5">
              <img className="rounded-lg" src={contentImage} alt="Image" />
            </div>
            <div className="lg:w-2/5 mt-10 lg:mt-0 lg:pl-12">
              <h3 className="text-2xl font-bold text-gray-900">{contentParagraphTitle}</h3>
              <p className="mt-4 text-gray-500">{contentParagraph}</p>
              <ul className="mt-6">
                <li className="flex items-start">
                  <svg className="h-12 w-12 text-green-500 mr-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <p className="text-gray-700">{featureOne}</p>
                </li>
                <li className="flex items-start mt-4">
                  <svg className="h-12 w-12 text-green-500 mr-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <p className="text-gray-700">{featureTwo}</p>
                </li>
                <li className="flex items-start mt-4">
                  <svg className="h-12 w-12 text-green-500 mr-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <p className="text-gray-700">{featureThree}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
