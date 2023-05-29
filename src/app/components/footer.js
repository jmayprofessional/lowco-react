import React from 'react';

const Footer = () => {
  // Replace the linkData with the actual link data from your navbar component
  const linkData = [
    { id: 1, title: 'Home', url: '/' },
    { id: 2, title: 'Services', url: '/services' },
    { id: 3, title: 'Portfolio', url: '/portfolio' },
    { id: 4, title: 'About Us', url: '/about' },
    { id: 5, title: 'Contact Us', url: '/contact' },
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Render the links */}
          {linkData.map((link) => (
            <div key={link.id} className="mb-4">
              <h3 className="text-lg font-bold mb-2">{link.title}</h3>
              <a href={link.url} className="text-gray-300 hover:text-white transition duration-300 ease-in-out">
                {link.url}
              </a>
            </div>
          ))}
        </div>
        {/* Embed the Google Map */}
        <div className="mt-8">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2dlongitude!3dlatitude!4m22!1m16!4m15!1m6!1m2!1sYOUR_GOOGLE_MAP_EMBED_API_KEY!2sYOUR_LOCATION!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
