import React, { useState } from "react";
import { Menu, Search } from "lucide-react";
import NavDropdown from "./navigation/NavDropdown";
import MobileMenu from "./navigation/MobileMenu";
import { navigationItems } from "./navigation/navigationItems";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b shadow-sm transition-transform duration-500 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <img
                src="logo_final.jpg"
                alt="Logo"
                className="w-8 h-8 rounded-full hover:scale-110 transition-transform duration-300"
              />
              <span className="text-xl font-bold text-purple-600 tracking-wide hover:text-purple-700 transition-colors duration-300">
                Zysk
              </span>
            </div>
            <nav className="hidden md:flex ml-10 space-x-8">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                Home
              </a>
              {navigationItems.map((section) => (
                <NavDropdown
                  key={section.title}
                  title={section.title}
                  items={section.items}
                />
              ))}
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                Pricing
              </a>
            </nav>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none transition duration-300">
              <Search className="w-5 h-5 text-gray-600 hover:scale-110 transition-transform duration-300" />
            </button>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                Sign in
              </button>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 shadow-md transition-transform duration-300 hover:scale-105">
                Try for free
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-100 focus:outline-none transition duration-300"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5 text-gray-600 hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}
