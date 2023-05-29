import React from 'react';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec feugiat nisl.",
      author: "John Doe",
      position: "CEO, Company A"
    },
    {
      id: 2,
      quote: "Vivamus vel mauris id purus rhoncus lobortis. Proin tristique odio sed est volutpat, sit amet sagittis felis consequat.",
      author: "Jane Smith",
      position: "CTO, Company B"
    },
    // Add more testimonials here
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
        <div className="relative">
          <div className="carousel">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial">
                <p className="text-lg text-gray-700 mb-4">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src="/path/to/profile-image.jpg" alt={testimonial.author} />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900 font-bold">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-navigation">
            <button className="carousel-prev">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="carousel-next">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;