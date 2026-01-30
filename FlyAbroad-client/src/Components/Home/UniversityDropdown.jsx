import React, { useState } from 'react';
import { ChevronDown, Globe, GraduationCap, MapPin } from 'lucide-react';

const UniversityDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const primaryCountries = [
    'Russia',
    'Canada',
    'USA',
    'UK',
    'Ireland',
    'New Zealand',
    'Australia',
  ];

  const upcomingCountries = [
    'Germany',
    'Albania',
    'Dubai',
    'Hungary',
    'Finland',
    'Europe',
    'Lithuania',
    'Kazakhstan',
    'Georgia',
    'Uzbekistan',
    'Kyrgyzstan',
    'China',
    'Italy',
    'Nepal',
  ];

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-50 pt-20 font-sans">
      <div className="relative inline-block text-left w-full max-w-xs px-4">
        {/* Dropdown Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
        >
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-blue-600" />
            <span>Explore Universities</span>
          </div>
          <ChevronDown 
            className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          />
        </button>

        {/* Dropdown Content */}
        {isOpen && (
          <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-[90vw] max-w-2xl bg-white border border-gray-100 rounded-2xl shadow-2xl z-50 overflow-hidden ring-1 ring-black ring-opacity-5 animate-in fade-in zoom-in duration-200 origin-top">
            <div className="grid grid-cols-1 md:grid-cols-2 p-4 md:p-8 gap-8 relative">
              
              {/* Vertical Divider (visible on md screens and up) */}
              <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-[1px] bg-gray-100 -translate-x-1/2" />

              {/* Section 1: Top Destinations */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-6 bg-blue-600 rounded-full" />
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight">Study Abroad</h3>
                </div>
                <div className="grid grid-cols-1 gap-y-3">
                  {primaryCountries.map((country) => (
                    <a
                      key={country}
                      href={`#${country.toLowerCase()}`}
                      className="group flex items-center text-[15px] text-gray-600 hover:text-blue-600 transition-colors py-1"
                    >
                      <span className="w-0 group-hover:w-2 h-[2px] bg-blue-600 mr-0 group-hover:mr-2 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                      {country}
                    </a>
                  ))}
                </div>
              </div>

              {/* Section 2: Upcoming Countries */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-6 bg-emerald-500 rounded-full" />
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight">Upcoming Countries</h3>
                </div>
                <div className="grid grid-cols-1 gap-y-3">
                  {upcomingCountries.map((country) => (
                    <a
                      key={country}
                      href={`#${country.toLowerCase()}`}
                      className="group flex items-center text-[15px] text-gray-600 hover:text-emerald-600 transition-colors py-1"
                    >
                      <span className="w-0 group-hover:w-2 h-[2px] bg-emerald-500 mr-0 group-hover:mr-2 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                      {country}
                    </a>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Footer Action */}
            <div className="bg-gray-50 px-8 py-4 border-t border-gray-100 flex justify-between items-center">
              <p className="text-xs text-gray-400">Discover over 500+ global institutions</p>
              <button className="text-xs font-semibold text-blue-600 hover:underline">
                View All Countries →
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Background overlay when open */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-900/10 backdrop-blur-[2px]" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default UniversityDropdown;