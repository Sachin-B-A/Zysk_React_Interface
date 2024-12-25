import React from 'react';
import FooterCTA from './FooterCTA';
import FooterLinks from './FooterLinks';

export default function Footer() {
  const linkGroups = [
    {
      title: 'Product',
      links: ['Overview', 'Features', 'Solutions', 'Pricing', 'Reviews'],
    },
    {
      title: 'Company',
      links: ['About us', 'Careers', 'Press', 'News', 'Media kit', 'Contact'],
    },
    {
      title: 'Resources',
      links: ['Blog', 'Newsletter', 'Events', 'Help centre', 'Tutorials', 'Support'],
    },
    {
      title: 'Use cases',
      links: ['Enterprise', 'Government', 'SaaS', 'Marketplaces', 'B2B'],
    },
    {
      title: 'Social',
      links: ['Twitter', 'LinkedIn', 'Facebook', 'GitHub', 'AngelList', 'Dribble'],
    },
  ];

  const legalLinks = ['Terms', 'Privacy', 'Cookies', 'Licenses', 'Settings', 'Contact'];

  return (
    <footer className="border-t border-gray-300 bg-gradient-to-b from-gray-100 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <FooterCTA />
        <FooterLinks groups={linkGroups} />

        <div className="pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3 animate-fadeIn">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg shadow-lg hover:scale-125 transition-transform duration-500"></div>
              <span className="text-lg font-bold text-gray-800">Zysk Technologies</span>
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:text-purple-700 hover:underline transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="text-sm text-gray-600 text-center">
              <p className="mb-2">© 2024 - Zysk Technologies. All rights reserved.</p>
              <p className="flex items-center justify-center">
                Made with <span className="mx-1 text-red-500 animate-pulse">❤️</span> by Sachin
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="#top"
              className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 animate-bounce-slow transition-transform duration-500"
            >
              Back to top
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
