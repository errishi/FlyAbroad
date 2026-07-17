import React, { useState, useMemo } from 'react';

// --- SVGs for Universities & Banks ---
const CMULogo = () => (
  <svg className="w-8 h-8 rounded-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="24" fill="#990000"/>
    <text x="50" y="62" fill="white" fontSize="38" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">C</text>
  </svg>
);

const MichiganLogo = () => (
  <svg className="w-8 h-8 rounded-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="24" fill="#00274C"/>
    <text x="50" y="65" fill="#FFCB05" fontSize="42" fontWeight="black" textAnchor="middle" fontFamily="serif">M</text>
  </svg>
);

const NYUUnilogo = () => (
  <svg className="w-8 h-8 rounded-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="24" fill="#57068C"/>
    <text x="50" y="62" fill="white" fontSize="32" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">NYU</text>
  </svg>
);

const NorthwesternLogo = () => (
  <svg className="w-8 h-8 rounded-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="24" fill="#4E2A84"/>
    <text x="50" y="62" fill="white" fontSize="38" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">N</text>
  </svg>
);

const HDFCCredilaLogo = () => (
  <svg className="w-6 h-6 rounded" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="20" fill="#004B87"/>
    <rect x="25" y="25" width="50" height="50" fill="white"/>
    <path d="M40 35H60V45H40V35Z" fill="#E31B23"/>
    <path d="M40 55H60V65H40V55Z" fill="#004B87"/>
  </svg>
);

const SBILogo = () => (
  <svg className="w-6 h-6 rounded" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="20" fill="#00a1e4"/>
    <circle cx="50" cy="50" r="28" stroke="white" strokeWidth="12" fill="none"/>
    <rect x="44" y="60" width="12" height="25" fill="white"/>
  </svg>
);

const ICICILogo = () => (
  <svg className="w-6 h-6 rounded" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="20" fill="#7d1a22"/>
    <path d="M30 35V65H42V58H38V42H42V35H30ZM48 35H68V42H56V46H64V53H56V58H68V65H48V35Z" fill="#ff9933"/>
  </svg>
);

export default function App() {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedUni, setSelectedUni] = useState('cmu');
  const [scholarshipUser, setScholarshipUser] = useState('aishwarya');
  const [selectedBankIdx, setSelectedBankIdx] = useState(0);

  // Dynamic calculator state variables
  const [loanPrincipal, setLoanPrincipal] = useState(5000000); 
  const [loanTenureYears, setLoanTenureYears] = useState(10); 

  // Bank Data
  const loanOffers = [
    {
      bank: 'HDFC Credila',
      rate: 9.25,
      maxAmount: '₹ 1.5 Crores',
      type: 'Unsecured / Pre-Approved',
      logo: <HDFCCredilaLogo />,
      benefit: 'No collateral up to ₹75 Lakhs. Fast-track 1-day digital processing.',
      fee: '1.0% of loan amount'
    },
    {
      bank: 'SBI Global Ed-Vantage',
      rate: 8.85,
      maxAmount: '₹ 1.5 Crores',
      type: 'Collateral-Backed Only',
      logo: <SBILogo />,
      benefit: 'Lowest market rate. Stable state-backed interest schedules with tax benefits under Sec 80E.',
      fee: '₹ 10,000 flat processing charge'
    },
    {
      bank: 'ICICI Bank',
      rate: 9.60,
      maxAmount: '₹ 1.0 Crore',
      type: 'Hybrid collateral options',
      logo: <ICICILogo />,
      benefit: 'Pre-visa authorization letter with multi-currency overseas transfer capabilities.',
      fee: '0.75% of loan amount'
    }
  ];

  const calculatedEMI = useMemo(() => {
    const annualRate = loanOffers[selectedBankIdx].rate;
    const r = (annualRate / 12) / 100; 
    const n = loanTenureYears * 12; 
    const p = loanPrincipal;

    if (r === 0) return Math.round(p / n);
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  }, [selectedBankIdx, loanPrincipal, loanTenureYears, loanOffers]);

  const formatCurrency = (val) => {
    if (val >= 10000000) return `₹ ${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `₹ ${(val / 100000).toFixed(1)} Lakhs`;
    return `₹ ${val.toLocaleString('en-IN')}`;
  };

  const universities = {
    cmu: { name: 'Carnegie Mellon University', rank: '#22 Global', rate: '13.5%', status: 'Highly Compatible' },
    michigan: { name: 'University of Michigan', rank: '#28 Global', rate: '20.1%', status: 'Safe Match' },
    nyu: { name: 'New York University', rank: '#35 Global', rate: '12.8%', status: 'Reach School' },
    northwestern: { name: 'Northwestern University', rank: '#30 Global', rate: '15.3%', status: 'Target Match' }
  };

  const scholarships = {
    aishwarya: {
      name: 'Aishwarya Bhandari',
      amount: '$15,000',
      tag: 'Scholarship Secured',
      program: 'MS Project Mgmt',
      gpa: '6.8 CGPA',
      uni: 'Illinois Tech',
      color: 'bg-[#40E0D0]/10 text-[#008080] border-[#40E0D0]/20'
    },
    rohit: {
      name: 'Rohit Sharma',
      amount: '$22,500',
      tag: 'Full Tuition Waiver',
      program: 'MS in Computer Science',
      gpa: '9.2 CGPA',
      uni: 'Northeastern University',
      color: 'bg-teal-50 text-teal-900 border-teal-200'
    },
    priya: {
      name: 'Priya Iyer',
      amount: '$18,000',
      tag: 'Dean Fellowship Award',
      program: 'MBA',
      gpa: '7.5 CGPA',
      uni: 'Boston University',
      color: 'bg-emerald-50 text-emerald-800 border-emerald-200'
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#F8FAFC] text-slate-800 font-sans overflow-x-hidden">
      
      {/* Top Brand Accent strip */}

      {/* Main Core Banner (Hero block) - Changed to full width layout */}
      <section className="pt-20 pb-12 px-4 md:px-12 lg:px-24 text-center w-full">
        <p className="text-[#008080] uppercase tracking-widest text-xs lg:text-sm font-extrabold mb-3 flex items-center justify-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#40E0D0]"></span>
          Premium Study Abroad Consulting
        </p>
        <h1 className="text-4xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight max-w-5xl mx-auto">
          One Team, From Start to Success
        </h1>
        <p className="text-slate-500 mt-5 max-w-3xl mx-auto text-sm lg:text-base leading-relaxed">
          Navigate elite global admission systems with customized university matching, flawless documentation perfection, merit scholarship hunting, and streamlined financial strategy.
        </p>
      </section>

      {/* --- SECTION 1: Personalized Counselling & Interactive Steps --- */}
      <section id="services" className="py-12 lg:py-16 px-4 md:px-12 lg:px-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Left Column Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-[#008080] px-3 py-1 rounded-full text-xs font-bold border border-teal-100">
              <span className="w-2 h-2 rounded-full bg-[#40E0D0] animate-ping"></span>
              Step 01
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Personalized Counselling
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Receive premium, one-on-one guidance to build a compelling profile that showcases your academics, achievements, and aspirations—helping you stand out in highly competitive applications globally.
            </p>
            
            {/* Interactive Selector of Counselling Steps */}
            <div className="space-y-3 pt-4">
              <div 
                onClick={() => setActiveStep(1)} 
                className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${activeStep === 1 ? 'border-[#008080] bg-white shadow-xl shadow-slate-100/50 translate-x-2' : 'border-slate-100 bg-white hover:bg-teal-50/20'}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[#008080] text-lg">✦</span>
                  <span className="font-bold text-slate-800 text-sm">Profile Building Evaluation</span>
                </div>
                <span className="text-xs text-[#008080] font-semibold">Active view</span>
              </div>

              <div 
                onClick={() => setActiveStep(2)} 
                className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${activeStep === 2 ? 'border-[#008080] bg-white shadow-xl shadow-slate-100/50 translate-x-2' : 'border-slate-100 bg-white hover:bg-teal-50/20'}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[#008080] text-lg">✦</span>
                  <span className="font-bold text-slate-800 text-sm">Shortlisting Universities</span>
                </div>
                <span className="text-xs text-slate-400 font-semibold">View details</span>
              </div>

              <div 
                onClick={() => setActiveStep(3)} 
                className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${activeStep === 3 ? 'border-[#008080] bg-white shadow-xl shadow-slate-100/50 translate-x-2' : 'border-slate-100 bg-white hover:bg-teal-50/20'}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[#008080] text-lg">✦</span>
                  <span className="font-bold text-slate-800 text-sm">Application Strategy & LORs</span>
                </div>
                <span className="text-xs text-slate-400 font-semibold">View details</span>
              </div>
            </div>
          </div>

          {/* Right Column Visual */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/60 p-6 lg:p-10 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 w-80 h-80 bg-teal-50/30 rounded-full blur-3xl -z-10"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Dynamic Information Display Box */}
              <div className="md:col-span-6 space-y-4">
                <div className="bg-slate-950 text-white rounded-2xl p-5 shadow-lg relative">
                  <div className="absolute -top-3 left-6 bg-[#008080] text-white font-mono font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded">
                    Guided Service
                  </div>
                  <h4 className="font-bold text-lg leading-tight mb-2">Get expert guidance on</h4>
                  
                  <ul className="space-y-3 text-xs text-slate-300 mt-4">
                    <li className="flex items-center gap-2">
                      <span className="text-[#40E0D0] font-bold">✦</span>
                      <span className={activeStep === 1 ? 'text-white font-semibold underline decoration-[#40E0D0] decoration-2' : ''}>Profile Building Analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#40E0D0] font-bold">✦</span>
                      <span className={activeStep === 2 ? 'text-white font-semibold underline decoration-[#40E0D0] decoration-2' : ''}>Shortlisting Premium Universities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#40E0D0] font-bold">✦</span>
                      <span className={activeStep === 3 ? 'text-white font-semibold underline decoration-[#40E0D0] decoration-2' : ''}>Application & LOR Strategy</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-xs text-slate-600 leading-relaxedmin-h-[72px]">
                  {activeStep === 1 && "We analyze your projects, publications, CGPA, and extracurricular activities to craft an impactful resume narrative."}
                  {activeStep === 2 && "We use direct data and real-time alumni insights to select highly customized Ambitious, Target, and Safe institutions."}
                  {activeStep === 3 && "Complete walkthroughs on essay revisions, prompt answers, financial proof documentation, and official portal submission."}
                </div>
              </div>

              {/* Counselling Illustration UI */}
              <div className="md:col-span-6 flex flex-col items-center">
                <div className="relative w-full max-w-[280px]">
                  <div className="bg-[#FCFBF9] border border-slate-200/80 rounded-2xl p-4 shadow-sm relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-teal-50 text-[#008080] flex items-center justify-center font-black text-lg">
                        👩‍💼
                      </div>
                      <div>
                        <h4 className="font-extrabold text-slate-800 text-sm">Manoj Kumar</h4>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Senior Strategy Lead</p>
                      </div>
                    </div>
                    <div className="mt-3 bg-white p-2.5 rounded-xl border border-slate-100 text-[11px] text-slate-500 italic">
                      "We will map out your roadmap over the next 12 months to match elite institutions."
                    </div>
                  </div>

                  <div className="mt-4 bg-teal-50/50 rounded-2xl h-44 flex items-center justify-center border border-dashed border-teal-200">
                    <div className="text-center p-4">
                      <span className="text-3xl">💻</span>
                      <p className="text-xs font-bold text-slate-700 mt-2">1:1 Virtual Interactive Panel</p>
                      <span className="text-[10px] text-[#008080] font-semibold bg-white px-2 py-0.5 rounded-full border border-teal-100 mt-1 inline-block">Active Now</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 2: Profile Building & Shortlisting Universities --- */}
      <section className="py-12 lg:py-16 bg-[#F1F5F9] border-y border-slate-100 px-4 md:px-12 lg:px-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Visual Column */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-6 lg:p-8 space-y-6 relative">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center text-xl font-bold">
                      AS
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-teal-500 rounded-full border-2 border-white"></span>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">Manoj Kumar</h4>
                    <p className="text-xs text-[#008080] font-semibold">Senior Counsellor</p>
                  </div>
                </div>
                <span className="text-[10px] bg-slate-50 text-slate-500 border border-slate-100 font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Consultation Desk
                </span>
              </div>

              {/* Shortlist Card UI */}
              <div className="bg-[#FCFBF9] border border-slate-100 rounded-2xl p-5 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Selected Student Dashboard</span>
                  <span className="bg-teal-50 text-[#008080] text-[10px] font-bold px-2 py-0.5 rounded border border-teal-100/50">
                    Profile Evaluation Match
                  </span>
                </div>
                <h3 className="font-black text-slate-950 text-lg">10+ shortlisted universities for you:</h3>

                {/* University selection buttons */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <button 
                    onClick={() => setSelectedUni('cmu')} 
                    className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${selectedUni === 'cmu' ? 'border-red-500 bg-red-50/50 scale-105' : 'border-slate-100 bg-white hover:border-slate-300'}`}
                  >
                    <CMULogo />
                    <span className="text-xs font-bold text-slate-800">Carnegie Mellon</span>
                  </button>
                  
                  <button 
                    onClick={() => setSelectedUni('michigan')} 
                    className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${selectedUni === 'michigan' ? 'border-amber-500 bg-amber-50/30 scale-105' : 'border-slate-100 bg-white hover:border-slate-300'}`}
                  >
                    <MichiganLogo />
                    <span className="text-xs font-bold text-slate-800">U. Michigan</span>
                  </button>

                  <button 
                    onClick={() => setSelectedUni('nyu')} 
                    className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${selectedUni === 'nyu' ? 'border-purple-500 bg-purple-50/30 scale-105' : 'border-slate-100 bg-white hover:border-slate-300'}`}
                  >
                    <NYUUnilogo />
                    <span className="text-xs font-bold text-slate-800">NYU</span>
                  </button>

                  <button 
                    onClick={() => setSelectedUni('northwestern')} 
                    className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${selectedUni === 'northwestern' ? 'border-indigo-500 bg-indigo-50/30 scale-105' : 'border-slate-100 bg-white hover:border-slate-300'}`}
                  >
                    <NorthwesternLogo />
                    <span className="text-xs font-bold text-slate-800">Northwestern</span>
                  </button>
                </div>

                {/* Dynamic University Data */}
                <div className="bg-white border border-slate-100/80 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                  <div>
                    <p className="text-slate-400 font-semibold uppercase text-[9px] tracking-wider">Institution Selection</p>
                    <p className="font-extrabold text-slate-900 text-sm mt-0.5">{universities[selectedUni].name}</p>
                  </div>
                  <div className="flex gap-4">
                    <div>
                      <p className="text-slate-400 font-semibold text-[9px] tracking-wider">Admit Rate</p>
                      <p className="font-extrabold text-[#008080] text-sm mt-0.5">{universities[selectedUni].rate}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-semibold text-[9px] tracking-wider">Global Rank</p>
                      <p className="font-extrabold text-slate-900 text-sm mt-0.5">{universities[selectedUni].rank}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-semibold text-[9px] tracking-wider">Strategic Level</p>
                      <span className="text-[10px] font-bold text-[#008080] bg-teal-50 px-2 py-0.5 rounded mt-1 inline-block">
                        {universities[selectedUni].status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simulated chat message bubbles */}
              <div className="space-y-3">
                <div className="flex items-start gap-2.5 max-w-md">
                  <div className="w-6 h-6 rounded-full bg-[#008080] text-white flex items-center justify-center text-[10px] font-bold">AS</div>
                  <div className="bg-slate-50 border border-slate-100 text-xs text-slate-600 p-3 rounded-2xl rounded-tl-none">
                    "I've selected Carnegie Mellon and NYU as stretch targets based on your strong technical resume. We'll draft customized SOP narratives for each."
                  </div>
                </div>
                <div className="flex items-start gap-2.5 max-w-md ml-auto flex-row-reverse">
                  <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">YOU</div>
                  <div className="bg-slate-900 text-white text-xs p-3 rounded-2xl rounded-tr-none">
                    "Awesome! That aligned perfectly with my career goal to research in Human-Centered Systems."
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-[#008080] px-3 py-1 rounded-full text-xs font-bold border border-teal-100">
              <span className="w-2 h-2 rounded-full bg-[#40E0D0] animate-pulse"></span>
              Step 02
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Profile Building & Shortlisting Universities
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Strengthen your profile with expert insights and get a carefully curated list of programs and universities aligned with your strengths, interests, and long-term career goals.
            </p>
            
            <div className="border-t border-slate-200/60 pt-6 grid grid-cols-2 gap-6">
              <div>
                <p className="text-3xl font-black text-slate-950">100%</p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Data-Backed Accuracy</p>
              </div>
              <div>
                <p className="text-3xl font-black text-[#008080]">10+</p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Shortlisted Targets Per Student</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 3: Scholarship Assistance (Formerly Step 04) --- */}
      <section id="success" className="py-12 lg:py-16 bg-[#FAF9F6] border-y border-slate-100 px-4 md:px-12 lg:px-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Visual Display on left */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-6 lg:p-8 space-y-6 relative overflow-hidden">
              <div className="absolute right-0 top-0 w-44 h-44 bg-teal-50/20 rounded-full blur-3xl -z-10"></div>
              
              {/* Selector tabs */}
              <div className="flex gap-2 border-b border-slate-100 pb-4 overflow-x-auto">
                {Object.keys(scholarships).map((key) => (
                  <button
                    key={key}
                    onClick={() => setScholarshipUser(key)}
                    className={`text-xs font-bold px-4 py-2 rounded-full transition-all shrink-0 ${scholarshipUser === key ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
                  >
                    {scholarships[key].name}
                  </button>
                ))}
              </div>

              {/* Current Active Success Showcase Card */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2">
                
                <div className="md:col-span-5 space-y-4">
                  <div className={`p-4 rounded-2xl border text-center space-y-1 ${scholarships[scholarshipUser].color}`}>
                    <p className="text-2xl font-black">{scholarships[scholarshipUser].amount}</p>
                    <p className="text-[10px] font-extrabold uppercase tracking-widest">
                      {scholarships[scholarshipUser].tag}
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs">
                    <p className="text-slate-400 font-semibold uppercase text-[9px]">Student Target</p>
                    <p className="font-extrabold text-slate-800 mt-1">{scholarships[scholarshipUser].uni}</p>
                    <p className="text-slate-500 mt-0.5">{scholarships[scholarshipUser].program}</p>
                  </div>
                </div>

                <div className="md:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-teal-50 text-[#008080] flex items-center justify-center text-2xl border border-teal-100">
                      🎓
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-950 text-base">{scholarships[scholarshipUser].name}</h4>
                      <p className="text-xs text-[#008080] font-semibold">{scholarships[scholarshipUser].gpa}</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    "I received thorough counseling detailing exactly how to utilize my projects. GlobalPath helped me construct an incredible fellowship application that unlocked funding right from the first semester."
                  </p>

                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                    <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">
                      Tuition Scholarship Confirmed
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Heading Content on right */}
          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-[#008080] px-3 py-1 rounded-full text-xs font-bold border border-teal-100">
              <span className="w-2 h-2 rounded-full bg-[#40E0D0] animate-pulse"></span>
              Step 03
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Scholarship Assistance
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              From eligibility checks to final submission, our experts guide you through the scholarship process to help you secure the best possible funding opportunities.
            </p>

            <div className="pt-4 border-t border-slate-200/60">
              <blockquote className="italic text-xs text-slate-500 border-l-2 border-[#008080] pl-4">
                "Over $2.4M in institutional fellowships, assistantships, and sports scholarship funds secured collectively across our 2025 cohort."
              </blockquote>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 4: Finance & Visa (Formerly Step 05) --- */}
      <section id="finance" className="py-16 px-4 md:px-12 lg:px-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Content Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-[#008080] px-3 py-1 rounded-full text-xs font-bold border border-teal-100">
              <span className="w-2 h-2 rounded-full bg-[#40E0D0] animate-pulse"></span>
              Step 04
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Finance & Visa Strategy
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We coordinate directly with India's premier study loan partners. Access fully customized credit approvals and exclusive tax rebates under Section 80E to comfortably support your overseas education.
            </p>
            
            {/* Visual Value Props */}
            <div className="space-y-4 pt-4 border-t border-slate-200/60">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-teal-50 text-[#008080] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border border-teal-100">✓</div>
                <div>
                  <h4 className="text-slate-900 text-sm font-bold">Instant Digitized Pre-Approvals</h4>
                  <p className="text-xs text-slate-500">Secure formal sanction letters prior to scheduling your US embassy visa slots.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-teal-50 text-[#008080] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border border-teal-100">✓</div>
                <div>
                  <h4 className="text-slate-900 text-sm font-bold">Unsecured Funding Thresholds</h4>
                  <p className="text-xs text-slate-500">Get up to ₹75 Lakhs without offering security, based exclusively on co-borrower criteria.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Loan Card and Visa Status Screen */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-100/80 shadow-2xl rounded-3xl p-6 lg:p-8 space-y-6">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse"></span>
                  <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider">Live Bank Offers & Integrations</h4>
                </div>
                <span className="text-[9px] bg-[#008080]/10 text-[#008080] font-black uppercase tracking-widest px-2 py-1 rounded border border-teal-100">
                  2026 Academic Season
                </span>
              </div>

              {/* High-Fidelity Professional Bank Selector Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {loanOffers.map((offer, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedBankIdx(idx)}
                    className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between h-32 ${selectedBankIdx === idx ? 'border-[#008080] bg-teal-50/10 shadow-lg ring-1 ring-[#008080]' : 'border-slate-100 bg-slate-50/50 hover:bg-slate-50'}`}
                  >
                    <div className="flex items-center justify-between w-full">
                      {offer.logo}
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${selectedBankIdx === idx ? 'bg-[#008080]/10 text-[#008080]' : 'bg-slate-200 text-slate-600'}`}>
                        {offer.rate.toFixed(2)}% ROI
                      </span>
                    </div>
                    
                    <div>
                      <p className="font-extrabold text-slate-950 text-sm truncate">{offer.bank}</p>
                      <p className="text-[10px] text-slate-400 font-semibold mt-0.5 truncate">{offer.type}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Dynamic Live Calculator Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-5 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-[#40E0D0]/10 rounded-full blur-2xl"></div>
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/10 pb-4 gap-2">
                  <div>
                    <span className="text-[9px] bg-white/20 text-white font-bold uppercase tracking-widest px-2 py-0.5 rounded">
                      Selected Partner Package
                    </span>
                    <h3 className="text-xl font-black mt-2 text-white">{loanOffers[selectedBankIdx].bank}</h3>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-[9px] text-slate-400 font-bold uppercase">Funding Ceiling</p>
                    <p className="text-lg font-bold text-[#40E0D0]">{loanOffers[selectedBankIdx].maxAmount}</p>
                  </div>
                </div>

                {/* Slider Inputs for Interactive Calculation */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-2">
                      <span className="text-slate-300">Desired Principal Amount</span>
                      <span className="text-[#40E0D0] font-black">{formatCurrency(loanPrincipal)}</span>
                    </div>
                    <input 
                      type="range" 
                      min="1000000" 
                      max="15000000" 
                      step="250000"
                      value={loanPrincipal}
                      onChange={(e) => setLoanPrincipal(Number(e.target.value))}
                      className="w-full accent-[#008080] bg-slate-800 rounded-lg appearance-none h-1.5"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-2">
                      <span className="text-slate-300">Repayment Period</span>
                      <span className="text-[#40E0D0] font-black">{loanTenureYears} Years</span>
                    </div>
                    <input 
                      type="range" 
                      min="5" 
                      max="15" 
                      step="1"
                      value={loanTenureYears}
                      onChange={(e) => setLoanTenureYears(Number(e.target.value))}
                      className="w-full accent-[#008080] bg-slate-800 rounded-lg appearance-none h-1.5"
                    />
                  </div>
                </div>

                {/* Calculation Outputs */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
                  <div>
                    <p className="text-slate-400 text-[10px]">Processing Fee Estimate</p>
                    <p className="font-bold text-white mt-0.5">{loanOffers[selectedBankIdx].fee}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-[10px]">Calculated Monthly EMI</p>
                    <p className="text-lg font-extrabold text-[#40E0D0] mt-0.5">₹ {calculatedEMI.toLocaleString('en-IN')}/mo</p>
                  </div>
                </div>

                {/* Value text dynamic check */}
                <p className="text-[10px] text-slate-400 italic leading-relaxed pt-1">
                  *Benefit: {loanOffers[selectedBankIdx].benefit}
                </p>
              </div>

              {/* Timeline Steps for Visa Approval */}
              <div className="space-y-4 pt-2">
                <h5 className="text-xs font-extrabold text-slate-800 uppercase tracking-widest">Your Visa Flow Pathway</h5>
                <div className="flex items-center justify-between text-xs gap-4 overflow-x-auto pb-2">
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="w-6 h-6 rounded-full bg-teal-50 text-[#008080] flex items-center justify-center font-bold border border-teal-100">1</span>
                    <span className="font-semibold text-slate-700">Financial Proofs</span>
                  </div>
                  <span className="text-slate-300">⟶</span>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="w-6 h-6 rounded-full bg-teal-50 text-[#008080] flex items-center justify-center font-bold border border-teal-100">2</span>
                    <span className="font-semibold text-slate-700">DS-160 Filing</span>
                  </div>
                  <span className="text-slate-300">⟶</span>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="w-6 h-6 rounded-full bg-teal-100 text-[#008080] flex items-center justify-center font-bold animate-pulse border border-teal-200">3</span>
                    <span className="font-bold text-[#008080]">Mock Assessment</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}