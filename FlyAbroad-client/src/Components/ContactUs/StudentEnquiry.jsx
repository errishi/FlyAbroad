import React, { useState } from 'react';
import { ChevronDown, CheckCircle, Loader2 } from 'lucide-react';
import { enquiryApi } from '@/services/enquiryApi';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';

const StudentEnquiry = () => {
  // 1. Setup react-hook-form
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      countryCode: '+1'
    }
  });

  // Watch the custom country field to update the button display
  const selectedCountry = watch('country');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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
    'Business', 'Engineering', 'Computer Science', 'Medicine',
    'Arts', 'Law', 'Economics', 'Architecture',
  ];

  // Form submission handler
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Transform the data to match your Mongoose Schema exactly
    const payload = {
      fullName: data.fullName,
      countryOfResidence: data.country,
      courseOfInterest: data.courseInterest,
      mobileNumber: {
        countryCode: data.countryCode,
        number: Number(data.mobileNumber)
      },
      email: data.email
    };

    try {
      const res = await enquiryApi.submitEnquiry(payload);
      toast.success(res?.message || 'Enquiry submitted successfully!');
      setIsSuccess(true);
    } catch (error) {
      console.error('Detailed Error:', error.response?.data);
      // Display the actual error message from your backend
      const errorMessage = error.response?.data?.message || 'Failed to submit enquiry.';
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen text-start py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl text-center font-bold text-gray-900 mb-8">Student Inquiry Contact Form</h1>

        {isSuccess ? (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <p className="text-lg font-semibold text-gray-800">Thank you for your inquiry!</p>
            <p className="text-gray-600 mt-2">We'll be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name <span className="text-destructive">*</span></label>
              <input
                type="text"
                {...register('fullName', { required: 'Full name is required' })}
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
            </div>

            {/* Country of Residence (Hidden registered input for validation) */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Country of Residence <span className="text-destructive">*</span></label>
              <input type="hidden" {...register('country', { required: 'Country is required' })} />
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none bg-white transition text-left flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    {selectedCountry ? (
                      <>
                        <img
                          src={countries.find(c => c.name === selectedCountry)?.image}
                          alt={selectedCountry}
                          className="w-6 h-4 rounded object-cover"
                        />
                        {selectedCountry}
                      </>
                    ) : 'Select Country'}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition ${showCountryDropdown ? 'rotate-180' : ''}`} />
                </button>

                {showCountryDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                    {countries.map(country => (
                      <button
                        key={country.name}
                        type="button"
                        onClick={() => {
                          setValue('country', country.name, { shouldValidate: true });
                          setShowCountryDropdown(false);
                        }}
                        className="w-full px-4 py-3 flex items-center gap-2 hover:bg-gray-100 transition text-left border-b last:border-b-0"
                      >
                        <img src={country.image} alt={country.name} className="w-8 h-6 rounded object-cover" />
                        <span>{country.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
            </div>

            {/* Course of Interest */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Course of Interest <span className="text-destructive">*</span></label>
              <select
                {...register('courseInterest', { required: 'Course is required' })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none appearance-none bg-white transition"
              >
                <option value="">Search courses...</option>
                {courses.map(course => <option key={course} value={course}>{course}</option>)}
              </select>
              {errors.courseInterest && <p className="text-red-500 text-sm mt-1">{errors.courseInterest.message}</p>}
            </div>

            {/* Mobile Number */}
            <div className="w-full">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number <span className="text-destructive">*</span></label>
              <div className="flex gap-2">
                <select
                  {...register('countryCode')}
                  className="w-20 px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none bg-white text-sm"
                >
                  {countries.map(c => (
                    <option key={`${c.code}-${c.name}`} value={c.code}>
                      {c.flag} {c.code}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  {...register('mobileNumber', { required: 'Mobile number is required' })}
                  placeholder="Mobile number"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                />
              </div>
              {errors.mobileNumber && <p className="text-red-500 text-sm mt-1">{errors.mobileNumber.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address <span className="text-destructive">*</span></label>
              <input
                type="email"
                {...register('email', { required: 'Email is required' })}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none transition"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full text-white font-semibold py-3 rounded-lg flex justify-center items-center gap-2 transition duration-200 ${isSubmitting ? 'bg-teal-400 cursor-not-allowed' : 'bg-teal-600 hover:bg-teal-700'
                }`}
            >
              {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</> : 'Submit Inquiry'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default StudentEnquiry;