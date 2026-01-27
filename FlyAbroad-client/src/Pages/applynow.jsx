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
  Plane, 
  Globe,
  MapPin
} from 'lucide-react';

export default function ApplyNow() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedin: '',
    portfolio: '',
    role: 'Study Abroad Coordinator',
    coverLetter: '',
    resume: null
  });
  const [isDragging, setIsDragging] = useState(false);

  // Updated to the requested Teal color
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
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center transform transition-all duration-500 scale-100">
          <div className="mx-auto w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mb-6">
            <CheckCircle size={40} color={primaryColor} />
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Application Sent!</h2>
          <p className="text-slate-600 mb-8">
            Your journey begins here. Thank you for applying to the <span className="font-semibold text-teal-700">{formData.role}</span> position at UneFly. We'll review your details and contact you shortly.
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
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop" 
            alt="Airplane wing in sky" 
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay using the new Teal theme */}
          <div className="absolute inset-0 bg-linear-to-b from-teal-900/90 to-teal-800/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative">
          <div className="flex items-center gap-2 mb-12">+
            <Plane className="text-white transform -rotate-45" size={32} />
            <span className="text-white text-3xl font-bold tracking-tight">UneFly</span>
          </div>

          <div className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Your career, without borders.
            </h1>
            <p className="text-teal-100 text-lg leading-relaxed font-light">
              We help students and professionals explore the world. Join our team and help us build the pathways that connect people to their dreams abroad.
            </p>
          </div>
        </div>

        <div className="relative text-teal-50 text-sm border-t border-white/20 pt-8 mt-auto hidden lg:block">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10">
                <Globe size={18} className="text-teal-200" />
              </div>
              <div>
                <p className="font-semibold text-white">Global Opportunities</p>
                <p className="opacity-80">Offices in 12 countries.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10">
                <MapPin size={18} className="text-teal-200" />
              </div>
              <div>
                <p className="font-semibold text-white">Remote First</p>
                <p className="opacity-80">Work from anywhere.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="lg:w-2/3 w-full bg-slate-50 overflow-y-auto">
        <div className="max-w-3xl mx-auto p-6 lg:p-12">
          
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Header for Mobile only */}
            <div className="lg:hidden mb-6">
               <h2 className="text-2xl font-bold text-slate-800">Apply Now</h2>
               <p className="text-slate-500">Start your journey with UneFly today.</p>
            </div>

            {/* Personal Information */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
                <div className="p-2 bg-teal-50 rounded-lg">
                  <User size={20} className="text-teal-600" />
                </div>
                Personal Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 block">First Name</label>
                  <input
                    required
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                    style={{ '--tw-ring-color': primaryColor }}
                    placeholder="Jane"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 block">Last Name</label>
                  <input
                    required
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                    style={{ '--tw-ring-color': primaryColor }}
                    placeholder="Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 block">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 text-slate-400" size={18} />
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      style={{ '--tw-ring-color': primaryColor }}
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 block">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3.5 text-slate-400" size={18} />
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      style={{ '--tw-ring-color': primaryColor }}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Links & Portfolio */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
                <div className="p-2 bg-teal-50 rounded-lg">
                  <Globe size={20} className="text-teal-600" />
                </div>
                Web Presence
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 block">LinkedIn Profile</label>
                  <div className="relative">
                    <Linkedin className="absolute left-3 top-3.5 text-slate-400" size={18} />
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      style={{ '--tw-ring-color': primaryColor }}
                      placeholder="linkedin.com/in/username"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 block">Portfolio / Website</label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-3.5 text-slate-400" size={18} />
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      style={{ '--tw-ring-color': primaryColor }}
                      placeholder="unefly.com/username"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Upload */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
                <div className="p-2 bg-teal-50 rounded-lg">
                  <FileText size={20} className="text-teal-600" />
                </div>
                Resume / CV
              </h3>
              
              <div 
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer ${
                  isDragging ? 'bg-teal-50 border-teal-400' : 'bg-slate-50 hover:bg-slate-100 border-slate-200'
                }`}
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
                  <div className="flex items-center justify-center gap-4 text-slate-800">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <FileText size={32} color={primaryColor} />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-slate-900">{formData.resume.name}</p>
                      <p className="text-sm text-slate-500">{(formData.resume.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                    <button 
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setFormData(prev => ({...prev, resume: null}));
                      }}
                      className="ml-2 p-2 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-full transition-colors"
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  <div className="py-4">
                    <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-4 border border-slate-100">
                      <Upload size={28} color={primaryColor} />
                    </div>
                    <p className="text-slate-900 font-medium mb-1 text-lg">Upload your resume</p>
                    <p className="text-slate-500 text-sm">Drag and drop or click to browse</p>
                    <p className="text-slate-400 text-xs mt-2">PDF, DOC, DOCX (Max 5MB)</p>
                  </div>
                )}
              </div>
            </div>

            {/* Cover Letter */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Cover Letter</h3>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-y"
                style={{ '--tw-ring-color': primaryColor }}
                placeholder="Tell us why you want to join UneFly..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4 pb-8">
              <button
                type="submit"
                className="w-full text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg shadow-teal-900/20 transition-all duration-300 hover:shadow-xl hover:shadow-teal-900/30 hover:-translate-y-1 flex items-center justify-center gap-2 group cursor-pointer"
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