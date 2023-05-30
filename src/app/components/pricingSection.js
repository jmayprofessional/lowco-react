import React from 'react';

const PricingSection = () => {
  return (
    <section className="bg-navBackground-color py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4">
          {/* Card 1 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Angler</h2>
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl font-bold">$1000</span>
                <span className="text-gray-600 ml-1"> One Time Fee</span>
              </div>
              <p className="text-gray-600 mb-4">Basic website that includes a navigation bar, a hero section, pricing, gallery, about, and contact page. We build it, you take it from there! Looks great on cell phones or computers.</p>
              <button className="bg-orange-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
                Yeah I'll Take That
              </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Guide</h2>
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl font-bold">$100</span>
                <span className="text-gray-600 ml-1">/month</span>
              </div>
              <p className="text-gray-600 mb-4">Basic website with built in weekly edits and image updates, includes everything in the Angler pack plus hands-off edits. Just email us the photos and edits and we handle the rest!</p>
              <button className="bg-orange-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
                I Don't Have Time To Do Website Stuff
              </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Pro</h2>
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl font-bold">$150</span>
                <span className="text-gray-600 ml-1">/month</span>
              </div>
              <p className="text-gray-600 mb-4">You just focus on guiding, this package is on call support 24-7. We make edits on demand including unlimited updates and edits to the site at your request. Priority Service included.</p>
              <button className="bg-orange-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
                I Want to Focus On Guiding
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;