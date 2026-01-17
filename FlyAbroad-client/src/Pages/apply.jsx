import React, { useState } from 'react';
import { 
  Upload, 
  User, 
  Mail, 
  Phone, 
  Linkedin, 
  Briefcase, 
  CheckCircle, 
  ArrowRight, 
  FileText,
  Building2,
  Globe
} from 'lucide-react';

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedin: '',
    portfolio: '',
    role: 'Senior Frontend Developer',
    coverLetter: '',
    resume: null
  });
  const [isDragging, setIsDragging] = useState(false);

  const primaryColor = '#0B7077';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.dataTransfer.files[0] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center transform transition-all duration-500 scale-100">
          <div className="mx-auto w-20 h-20 bg-[#e6f1f2] rounded-full flex items-center justify-center mb-6">
            <CheckCircle size={40} color={primaryColor} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Application Sent!</h2>
          <p className="text-gray-600 mb-8">
            Thank you for applying to the <span className="font-semibold">{formData.role}</span> position. We've received your details and will get back to you within 3-5 business days.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="w-full text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:opacity-90"
            style={{ backgroundColor: primaryColor }}
          >
            Back to Careers
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row font-sans">
      
      {/* Left Sidebar / Hero Section */}
      <div 
        className="lg:w-1/3 w-full p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden"
        style={{ backgroundColor: primaryColor }}
      >
        {/* Abstract Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-64 h-64 rounded-full bg-white mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 rounded-full bg-black mix-blend-overlay filter blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-12">
            <Building2 className="text-white" size={32} />
            <span className="text-white text-2xl font-bold tracking-tight">TechNova</span>
          </div>

          <div className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Join our mission to build the future.
            </h1>
            <p className="text-teal-100 text-lg leading-relaxed">
              We're looking for innovative minds to help us create digital experiences that matter. Apply today and become part of a team that values creativity, precision, and growth.
            </p>
          </div>
        </div>

        <div className="relative z-10 text-teal-100 text-sm border-t border-teal-600/30 pt-8 mt-auto hidden lg:block">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <Globe size={18} />
              </div>
              <div>
                <p className="font-semibold text-white">Remote Friendly</p>
                <p>Work from anywhere in the world.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <User size={18} />
              </div>
              <div>
                <p className="font-semibold text-white">Inclusive Culture</p>
                <p>We celebrate diversity and unique perspectives.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="lg:w-2/3 w-full bg-gray-50 overflow-y-auto">
        <div className="max-w-3xl mx-auto p-6 lg:p-12">
          
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Personal Information */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <User size={20} className="text-gray-400" />
                Personal Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 block">First Name</label>
                  <input
                    required
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                    style={{ '--tw-ring-color': primaryColor }}
                    placeholder="Jane"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 block">Last Name</label>
                  <input
                    required
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                    style={{ '--tw-ring-color': primaryColor }}
                    placeholder="Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 block">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      style={{ '--tw-ring-color': primaryColor }}
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 block">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3.5 text-gray-400" size={18} />
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      style={{ '--tw-ring-color': primaryColor }}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Links & Portfolio */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <Globe size={20} className="text-gray-400" />
                Web Presence
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 block">LinkedIn Profile</label>
                  <div className="relative">
                    <Linkedin className="absolute left-3 top-3.5 text-gray-400" size={18} />
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      style={{ '--tw-ring-color': primaryColor }}
                      placeholder="linkedin.com/in/username"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 block">Portfolio / GitHub</label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-3.5 text-gray-400" size={18} />
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      style={{ '--tw-ring-color': primaryColor }}
                      placeholder="github.com/username"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Upload */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <FileText size={20} className="text-gray-400" />
                Resume / CV
              </h3>
              
              <div 
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer ${
                  isDragging ? 'bg-teal-50' : 'bg-gray-50 hover:bg-gray-100'
                }`}
                style={{ borderColor: isDragging ? primaryColor : '#e5e7eb' }}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => document.getElementById('resume-upload').click()}
              >
                <input 
                  type="file" 
                  id="resume-upload" 
                  className="hidden" 
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                />
                
                {formData.resume ? (
                  <div className="flex items-center justify-center gap-3 text-teal-800">
                    <FileText size={32} color={primaryColor} />
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">{formData.resume.name}</p>
                      <p className="text-sm text-gray-500">{(formData.resume.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                    <button 
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setFormData(prev => ({...prev, resume: null}));
                      }}
                      className="ml-4 text-gray-400 hover:text-red-500"
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-4">
                      <Upload size={24} color={primaryColor} />
                    </div>
                    <p className="text-gray-900 font-medium mb-1">Click to upload or drag and drop</p>
                    <p className="text-gray-500 text-sm">PDF, DOC, DOCX (Max 5MB)</p>
                  </>
                )}
              </div>
            </div>

            {/* Cover Letter */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Cover Letter</h3>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-y"
                style={{ '--tw-ring-color': primaryColor }}
                placeholder="Tell us why you're a great fit for this role..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4 pb-8">
              <button
                type="submit"
                className="w-full text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:opacity-95 flex items-center justify-center gap-2 group"
                style={{ backgroundColor: primaryColor }}
              >
                Submit Application
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}