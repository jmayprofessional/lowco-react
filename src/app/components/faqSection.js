import React, { useState } from 'react';

const FAQSection = () => {
  const faqData = [
    {
      id: 1,
      question: 'Question 1',
      answer: 'Answer 1',
    },
    {
      id: 2,
      question: 'Question 2',
      answer: 'Answer 2',
    },
    {
      id: 3,
      question: 'Question 3',
      answer: 'Answer 3',
    },
    // Add more FAQ items here
  ];

  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (itemId) => {
    setActiveItem(activeItem === itemId ? null : itemId);
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900">Frequently Asked Questions</h2>
          <div className="mt-12">
            {faqData.map((faq) => (
              <div key={faq.id} className="border-b border-gray-300 py-6">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleItem(faq.id)}
                >
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <svg
                    className={`${
                      activeItem === faq.id ? 'transform rotate-180' : ''
                    } h-6 w-6 transform transition-transform duration-200 text-gray-500`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {activeItem === faq.id && (
                  <div className="mt-4 text-gray-700">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
