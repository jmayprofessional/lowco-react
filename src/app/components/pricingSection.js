import React from 'react';

const PricingSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4">
          {/* Tier 1 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Basic</h2>
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl font-bold">$9</span>
                <span className="text-gray-600 ml-1">/month</span>
              </div>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <ul className="text-gray-600">
                <li className="flex items-center mb-2">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.293 9.707l3.707 3.707L15.707 8.707a1 1 0 00-1.414-1.414L8 11.586 6.707 10.293a1 1 0 00-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Benefit 1
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.293 9.707l3.707 3.707L15.707 8.707a1 1 0 00-1.414-1.414L8 11.586 6.707 10.293a1 1 0 00-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Benefit 2
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.293 9.707l3.707 3.707L15.707 8.707a1 1 0 00-1.414-1.414L8 11.586 6.707 10.293a1 1 0 00-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Benefit 3
                </li>
              </ul>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
                Select
              </button>
            </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;