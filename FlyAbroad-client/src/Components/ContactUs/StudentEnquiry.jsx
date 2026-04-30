import React, { useState } from 'react'
import { ChevronDown, CheckCircle } from 'lucide-react';

const StudentEnquiry = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    country: '',
    courseInterest: '',
    mobileNumber: '',
    countryCode: '+1',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  const countries = [
    { code: '+1', name: 'United States', flag: '🇺🇸', image: 'https://flagcdn.com/w320/us.jpg' },
    { code: '+44', name: 'United Kingdom', flag: '🇬🇧', image: 'https://flagcdn.com/w320/gb.jpg' },
    { code: '+91', name: 'India', flag: '🇮🇳', image: 'https://flagcdn.com/w320/in.jpg' },
    { code: '+61', name: 'Australia', flag: '🇦🇺', image: 'https://flagcdn.com/w320/au.jpg' },
    { code: '+1', name: 'Canada', flag: '🇨🇦', image: 'https://flagcdn.com/w320/ca.jpg' },
    { code: '+7', name: 'Russia', flag: '🇷🇺', image: 'https://flagcdn.com/w320/ru.jpg' },
    { code: '+64', name: 'New Zealand', flag: '🇳🇿', image: 'https://flagcdn.com/w320/nz.jpg' },
    { code: '+49', name: 'Germany', flag: '🇩🇪', image: 'https://flagcdn.com/w320/de.jpg' },
    { code: '+353', name: 'Ireland', flag: '🇮🇪', image: 'https://flagcdn.com/w320/ie.jpg' },
    { code: '+971', name: 'Dubai', flag: '🇦🇪', image: 'https://flagcdn.com/w320/ae.jpg' },
  ];

  const courses = [
    'Business',
    'Engineering',
    'Computer Science',
    'Medicine',
    'Arts',
    'Law',
    'Economics',
    'Architecture',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCountryCodeChange = (e) => {
    setFormData(prev => ({
      ...prev,
      countryCode: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send form data to backend
    console.log('Form Data:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        fullName: '',
        country: '',
        courseInterest: '',
        mobileNumber: '',
        countryCode: '+1',
        email: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen text-start py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl text-center font-bold text-gray-900 mb-8">Student Inquiry Contact Form</h1>

        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <p className="text-lg font-semibold text-gray-800">Thank you for your inquiry!</p>
            <p className="text-gray-600 mt-2">We'll be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
              />
            </div>

            {/* Country of Residence */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Country of Residence</label>
              <div className="relative">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowCountryDropdown(!showCountryDropdown);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none appearance-none bg-white transition text-left flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    {formData.country ? (
                      <>
                        <img
                          src={countries.find(c => c.name === formData.country)?.image}
                          alt={formData.country}
                          className="w-6 h-4 rounded object-cover"
                        />
                        {formData.country}
                      </>
                    ) : (
                      'Select Country'
                    )}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition ${showCountryDropdown ? 'rotate-180' : ''}`} />
                </button>
                
                {showCountryDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    {countries.map(country => (
                      <button
                        key={country.name}
                        type="button"
                        onClick={() => {
                          setFormData(prev => ({ ...prev, country: country.name }));
                          setShowCountryDropdown(false);
                        }}
                        className="w-full px-4 py-3 flex items-center gap-2 hover:bg-gray-100 transition text-left border-b last:border-b-0"
                      >
                        <img
                          src={country.image}
                          alt={country.name}
                          className="w-8 h-6 rounded object-cover"
                        />
                        <span>{country.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Course of Interest */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Course of Interest</label>
              <div className="relative">
                <select
                  name="courseInterest"
                  value={formData.courseInterest}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none appearance-none bg-white transition"
                >
                  <option value="">Search courses (e.g., Business, Engineering)</option>
                  {courses.map(course => (
                    <option key={course} value={course}>{course}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Mobile Number */}
            <div className='w-100%'>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number</label>
              <div className="flex gap-2">
                <div className="relative w-20">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleCountryCodeChange}
                    className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none appearance-none bg-white text-sm transition"
                  >
                    {countries.map(country => (
                      <option key={country.code + country.name} value={country.code}>
                        {country.flag} {country.code}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-1 top-2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  required
                  placeholder="Mobile number"
                  className="flex-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
              />
            </div>

            {/* Success Message */}
            <div className="bg-teal-50 border border-teal-200 rounded-lg p-3 flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <p className="text-sm text-teal-700">Thanks for reaching out! We'll be in touch shortly.</p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white cursor-pointer font-semibold py-3 rounded-lg transition duration-200 transform hover:scale-105"
            >
              Submit Inquiry
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default StudentEnquiry;