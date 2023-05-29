import React from 'react';

const ContentSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-bold text-gray-900">Content Section</h2>
          <p className="mt-4 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="mt-20">
          <div className="lg:flex lg:justify-center">
            <div className="lg:w-3/5">
              <img className="rounded-lg" src="/path/to/image.jpg" alt="Image" />
            </div>
            <div className="lg:w-2/5 mt-10 lg:mt-0 lg:pl-12">
              <h3 className="text-2xl font-bold text-gray-900">Content Title</h3>
              <p className="mt-4 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor mi et varius molestie.</p>
              <ul className="mt-6">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <p className="text-gray-700">Feature 1</p>
                </li>
                <li className="flex items-start mt-4">
                  <svg className="h-6 w-6 text-green-500 mr-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <p className="text-gray-700">Feature 2</p>
                </li>
                <li className="flex items-start mt-4">
                  <svg className="h-6 w-6 text-green-500 mr-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <p className="text-gray-700">Feature 3</p>
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
