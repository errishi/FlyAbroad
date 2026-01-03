import React, { useState } from 'react';
import { 
  Globe, 
  BookOpen, 
  Users, 
  TrendingUp, 
  Award, 
  Heart, 
  MapPin, 
  Briefcase, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle, 
  ArrowRight,
} from 'lucide-react';

// --- Brand Configuration ---
const BRAND_COLOR = "text-[#007077]";
const BRAND_BG = "bg-[#007077]";
const BRAND_BORDER = "border-[#007077]";
const BRAND_HOVER_BG = "hover:bg-[#005858]";
const BRAND_LIGHT_BG = "bg-[#007077]/10";

// --- Mock Data ---

const JOB_LISTINGS = [
  {
    id: 1,
    title: "Senior Student Counselor",
    location: "London, UK (Hybrid)",
    type: "Full-time",
    category: "Counseling",
    description: "Guide students through university selection, applications, and visa processes with empathy and expertise.",
  },
  {
    id: 2,
    title: "University Relations Manager",
    location: "New York, USA (Remote)",
    type: "Full-time",
    category: "Operations",
    description: "Build and maintain strong partnerships with top-tier universities across North America and Europe.",
  },
  {
    id: 3,
    title: "Digital Marketing Specialist",
    location: "Toronto, Canada (On-site)",
    type: "Full-time",
    category: "Marketing",
    description: "Create compelling campaigns that reach students dreaming of global education. SEO and PPC focus.",
  },
  {
    id: 4,
    title: "Visa Documentation Executive",
    location: "Mumbai, India (On-site)",
    type: "Full-time",
    category: "Operations",
    description: "Ensure error-free documentation and high visa success rates for our students.",
  },
  {
    id: 5,
    title: "Content Writer (Education)",
    location: "Remote",
    type: "Part-time",
    category: "Marketing",
    description: "Write inspiring blogs and guides about life abroad, university rankings, and student tips.",
  },
  {
    id: 6,
    title: "Junior Counselor",
    location: "Sydney, Australia (Hybrid)",
    type: "Full-time",
    category: "Counseling",
    description: "Assist senior counselors and help students with initial inquiries and profile building.",
  },
];

const FAQS = [
  {
    question: "What is the hiring process like?",
    answer: "Our process typically involves an initial screening call, a functional interview to assess your skills, and a culture-fit round with our leadership team. We aim to complete the process within 2 weeks."
  },
  {
    question: "Do you offer remote work options?",
    answer: "Yes! Many of our roles offer hybrid or fully remote options depending on the job function. We believe in flexibility as long as the work gets done and students are supported."
  },
  {
    question: "What kind of training do you provide?",
    answer: "We offer a comprehensive onboarding program, access to certification courses for counselors (like QEAC/CCEA), and regular workshops on global education trends."
  },
  {
    question: "Is prior experience in education consultancy required?",
    answer: "For senior counseling roles, yes. However, for marketing, operations, and junior roles, we value passion and transferable skills over specific industry experience."
  }
];

const BENEFITS = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Career Growth",
    description: "Structured career paths from junior executive to regional management roles."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Exposure",
    description: "Interact with universities worldwide and opportunities for international travel."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Student-First Culture",
    description: "Work in an environment driven by ethics, transparency, and genuine impact."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Performance Bonuses",
    description: "Competitive salary packages with uncapped incentives for high performers."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Wellness & Balance",
    description: "Hybrid work options, health insurance, and paid time off to recharge."
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Continuous Learning",
    description: "Sponsored certifications and access to premium learning platforms."
  }
];

// --- Components ---

const Hero = () => {
  const scrollToJobs = () => {
    document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* Abstract Background Shapes */}
      <div className={`absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full opacity-10 ${BRAND_BG} blur-3xl`}></div>
      <div className={`absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full opacity-10 ${BRAND_BG} blur-3xl`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
            Build Your Career <br />
            <span className={BRAND_COLOR}>Helping Students Fly</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
            Join a student-first consultancy dedicated to ethical guidance, transparency, and shaping global futures. Your work here changes lives.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={scrollToJobs}
              className={`${BRAND_BG} ${BRAND_HOVER_BG} text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-[#007077]/20 transition-all transform hover:-translate-y-1`}
            >
              View Open Positions
            </button>
            <a 
              href="#culture"
              className={`bg-white text-gray-700 border border-gray-200 hover:border-[#007077] hover:text-[#007077] px-8 py-4 rounded-xl font-bold text-lg transition-all`}
            >
              Why Work With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Mission = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className={`${BRAND_COLOR} font-bold tracking-wider uppercase text-sm`}>Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              More Than Just Admissions. <br />We Build Futures.
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              At FlyAbroad, we believe that education has no borders. We aren't just processing visa applications; we are mentoring the next generation of global leaders. We pride ourselves on <strong>transparency</strong>, <strong>ethical counseling</strong>, and a relentless focus on <strong>student success</strong>.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className={`w-6 h-6 ${BRAND_COLOR} mr-3 mt-1 shrink-0`} />
                <div>
                  <h4 className="font-bold text-gray-900">Integrity First</h4>
                  <p className="text-gray-500 text-sm">We provide honest, unbiased advice tailored to each student's profile.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className={`w-6 h-6 ${BRAND_COLOR} mr-3 mt-1 shrink-0`} />
                <div>
                  <h4 className="font-bold text-gray-900">Student Obsession</h4>
                  <p className="text-gray-500 text-sm">Every decision we make starts and ends with the student's best interest.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className={`w-6 h-6 ${BRAND_COLOR} mr-3 mt-1 shrink-0`} />
                <div>
                  <h4 className="font-bold text-gray-900">Global Perspective</h4>
                  <p className="text-gray-500 text-sm">We embrace diversity and connect talent with opportunities worldwide.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative">
             <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                {/* Placeholder for an office image */}
                <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                    <div className="text-center">
                        <Users className="w-16 h-16 mx-auto mb-2 opacity-50"/>
                        <span className="text-sm font-medium">Team Collaboration Photo</span>
                    </div>
                </div>
             </div>
             {/* Decorative box */}
             <div className={`absolute -bottom-6 -left-6 w-48 h-48 ${BRAND_BG} rounded-2xl -z-10 opacity-20`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  return (
    <section id="culture" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Build Your Career With Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We know that happy employees make for happy students. We invest in your growth so you can invest in theirs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 group">
              <div className={`w-12 h-12 rounded-lg ${BRAND_LIGHT_BG} flex items-center justify-center ${BRAND_COLOR} mb-6 group-hover:scale-110 transition-transform`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const JobList = () => {
  const [filter, setFilter] = useState('All');
  
  const filteredJobs = filter === 'All' 
    ? JOB_LISTINGS 
    : JOB_LISTINGS.filter(job => job.category === filter);

  const categories = ['All', 'Counseling', 'Operations', 'Marketing'];

  const scrollToApply = (jobTitle) => {    const form = document.getElementById('apply-form');
    if (form) {
        // You would technically set the dropdown value here
        form.scrollIntoView({ behavior: 'smooth' });
        console.log(jobTitle); // Use jobTitle to avoid unused variable warning
    }
  };

  return (
    <section id="jobs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Open Positions</h2>
            <p className="text-gray-600">Find the role that fits your passion and expertise.</p>
          </div>
          
          {/* Filters */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat 
                    ? `${BRAND_BG} text-white` 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <div key={job.id} className="border border-gray-200 rounded-xl p-6 hover:border-[#007077] transition-colors bg-white flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                        <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" /> {job.location}</span>
                        <span className="flex items-center"><Briefcase className="w-3 h-3 mr-1" /> {job.type}</span>
                      </div>
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded bg-slate-100 ${BRAND_COLOR}`}>
                      {job.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {job.description}
                  </p>
                </div>
                <button 
                  onClick={() => scrollToApply(job.title)}
                  className="w-full group flex items-center justify-center space-x-2 bg-[#0B7077] text-white border border-[#0B7077] hover:bg-gradient-to-r hover:from-purple-900 hover:to-violet-600 hover:border-transparent px-4 py-3 rounded-lg font-medium transition-all"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-gray-500">
              No positions found in this category.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const Culture = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Accent */}
        <div className={`absolute top-0 right-0 w-96 h-96 ${BRAND_BG} opacity-20 blur-[100px] rounded-full pointer-events-none`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Life at FlyAbroad</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We work hard, celebrate wins, and support each other. Here's what the team has to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl relative">
                <div className={`absolute -top-4 left-8 text-6xl ${BRAND_COLOR} font-serif opacity-50`}>"</div>
                <p className="text-gray-300 italic mb-6 pt-4">
                    "I started as a junior counselor, and within 3 years, I'm leading the Canada team. The mentorship here is real, and the management actually listens to your ideas."
                </p>
                <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-slate-600 mr-3 flex items-center justify-center text-xs font-bold">JD</div>
                    <div>
                        <div className="font-bold">Jane Doe</div>
                        <div className={`text-xs ${BRAND_COLOR}`}>Senior Manager</div>
                    </div>
                </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl relative">
                <div className={`absolute -top-4 left-8 text-6xl ${BRAND_COLOR} font-serif opacity-50`}>"</div>
                <p className="text-gray-300 italic mb-6 pt-4">
                    "The best part is the 'Student Success Stories' we share every Friday. Knowing you helped a kid from a small town reach Oxford or Toronto is an amazing feeling."
                </p>
                <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-slate-600 mr-3 flex items-center justify-center text-xs font-bold">AS</div>
                    <div>
                        <div className="font-bold">Arjun Singh</div>
                        <div className={`text-xs ${BRAND_COLOR}`}>Visa Specialist</div>
                    </div>
                </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl relative">
                <div className={`absolute -top-4 left-8 text-6xl ${BRAND_COLOR} font-serif opacity-50`}>"</div>
                <p className="text-gray-300 italic mb-6 pt-4">
                    "Flexible hybrid work really helps me balance my master's studies with my job. It's a company that truly values education, even for its own employees."
                </p>
                <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-slate-600 mr-3 flex items-center justify-center text-xs font-bold">MK</div>
                    <div>
                        <div className="font-bold">Maria K.</div>
                        <div className={`text-xs ${BRAND_COLOR}`}>Content Strategist</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', role: '', message: '' });
    }, 1500);
  };

  return (
    <section id="apply-form" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Sidebar */}
          <div className={`md:w-1/3 ${BRAND_BG} p-8 text-white flex flex-col justify-between`}>
            <div>
              <h3 className="text-2xl font-bold mb-4">Join the Family</h3>
              <p className="text-white/80 mb-6 text-sm">
                Ready to make a difference? Fill out the form and our HR team will get back to you within 48 hours.
              </p>
            </div>
            <div className="space-y-4 text-sm text-white/80">
                <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" /> HQ: New Delhi, India
                </div>
                <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" /> Mon-Fri, 9am - 6pm
                </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:w-2/3 p-8 md:p-12">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Application Received!</h4>
                <p className="text-gray-600 mt-2">Thanks for applying. We'll be in touch soon.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className={`mt-6 text-sm font-medium ${BRAND_COLOR} hover:underline`}
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007077] focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007077] focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007077] focus:border-transparent outline-none transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Position *</label>
                    <select 
                      name="role"
                      required
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007077] focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">Select a role...</option>
                      {JOB_LISTINGS.map(job => (
                        <option key={job.id} value={job.title}>{job.title}</option>
                      ))}
                      <option value="General Application">General Application</option>
                    </select>
                  </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Resume/CV</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <div className="space-y-1 text-center">
                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="text-sm text-gray-600">
                          <span className={`font-medium ${BRAND_COLOR}`}>Upload a file</span> or drag and drop
                        </div>
                        <p className="text-xs text-gray-500">PDF, DOC up to 10MB</p>
                      </div>
                    </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Why do you want to join us?</label>
                  <textarea 
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007077] focus:border-transparent outline-none transition-all"
                    placeholder="Tell us a bit about yourself..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`w-full ${BRAND_BG} ${BRAND_HOVER_BG} text-white font-bold py-3 px-4 rounded-lg transition-colors flex justify-center items-center`}
                >
                  {status === 'submitting' ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : 'Submit Application'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-colors text-left"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 opacity-100 p-4 pt-0' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Hero />
      <Mission />
      <Benefits />
      <JobList />
      <Culture />
      <ApplicationForm />
      <FAQ />
    </div>
  );
};

export default App;