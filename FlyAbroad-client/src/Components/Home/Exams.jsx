import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Info, BookOpen, Clock, Globe, ArrowRight } from 'lucide-react';

const EXAMS_DATA = [
  {
    id: 1,
    name: 'IELTS',
    label: 'IELTS',
    color: '#DC2626',
    description: "International English Language Testing System. The world's most popular English language proficiency test for higher education and global migration.",
    duration: '2 hours 45 mins',
    accepted: '11,000+ Organizations',
    type: 'Academic & General',
    Logo: () => (
      <svg viewBox="0 0 100 100" className="w-full h-full p-2">
        <rect width="100" height="100" fill="white" rx="50" />
        <text x="50" y="55" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="26" fill="#DC2626">IELTS</text>
        <text x="50" y="72" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="7" fill="#6B7280" letterSpacing="0.5">English for Life</text>
      </svg>
    )
  },
  {
    id: 2,
    name: 'TOEFL',
    label: 'TOEFL iBT',
    color: '#0D9488',
    description: 'Test of English as a Foreign Language. Primarily used for admissions to universities in the USA and Canada.',
    duration: 'approx. 2 hours',
    accepted: '12,000+ Universities',
    type: 'Academic Only',
    Logo: () => (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="50" fill="#0D9488" />
        <text x="50" y="35" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white" letterSpacing="1">ETS</text>
        <path d="M 35 40 L 65 40" stroke="white" strokeWidth="1" />
        <text x="50" y="65" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="20" fill="white" letterSpacing="1">TOEFL</text>
      </svg>
    )
  },
  {
    id: 3,
    name: 'DET',
    label: 'Duolingo',
    color: '#84CC16',
    description: 'Duolingo English Test. A modern, affordable, and convenient language proficiency tool that can be taken online anytime.',
    duration: '1 hour',
    accepted: '4,000+ Programs',
    type: 'Modern Digital',
    Logo: () => (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="50" fill="#84CC16" />
        <g transform="translate(0, 5)">
          <circle cx="35" cy="40" r="10" fill="white" opacity="0.9"/>
          <circle cx="65" cy="40" r="10" fill="white" opacity="0.9"/>
          <circle cx="35" cy="40" r="4" fill="#84CC16" />
          <circle cx="65" cy="40" r="4" fill="#84CC16" />
          <path d="M 45 52 Q 50 57 55 52" stroke="#F59E0B" strokeWidth="2" fill="none" />
        </g>
        <text x="50" y="78" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="14" fill="white">duolingo</text>
      </svg>
    )
  },
  {
    id: 4,
    name: 'PTE',
    label: 'PTE Academic',
    color: '#1E3A8A',
    description: 'Pearson Test of English. An AI-based computer test widely used for Australian and UK visa applications.',
    duration: '2 hours',
    accepted: '3,000+ Institutions',
    type: 'Computer-based',
    Logo: () => (
      <svg viewBox="0 0 100 100" className="w-full h-full p-2">
        <circle cx="50" cy="50" r="48" fill="white" />
        <text x="50" y="50" textAnchor="middle" fontFamily="Serif" fontWeight="bold" fontStyle="italic" fontSize="22" fill="#1E3A8A">Pearson</text>
        <text x="50" y="65" textAnchor="middle" fontFamily="Sans-serif" fontSize="9" fill="#1E3A8A">Test of English</text>
      </svg>
    )
  },
  {
    id: 5,
    name: 'GRE',
    label: 'GRE General',
    color: '#581C87',
    description: 'Graduate Record Examination. The standard admission test for most graduate schools in the United States.',
    duration: '1 hour 58 mins',
    accepted: 'Global Graduate Schools',
    type: 'Analytical/Verbal',
    Logo: () => (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="50" fill="#581C87" />
        <text x="50" y="35" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white" letterSpacing="1">ETS</text>
        <path d="M 35 40 L 65 40" stroke="white" strokeWidth="0.5" />
        <text x="50" y="65" textAnchor="middle" fontFamily="Serif" fontWeight="bold" fontStyle="italic" fontSize="22" fill="white">GRE</text>
      </svg>
    )
  },
  {
    id: 6,
    name: 'GMAT',
    label: 'GMAT Focus',
    color: '#111827',
    description: 'Graduate Management Admission Test. Designed specifically for business schools and MBA programs.',
    duration: '2 hours 15 mins',
    accepted: '7,000+ MBA Programs',
    type: 'Business/Logic',
    Logo: () => (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="50" fill="#111827" />
        <text x="50" y="55" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="18" fill="white">GMAT</text>
        <rect x="35" y="65" width="30" height="2" fill="#EAB308" />
      </svg>
    )
  },
  {
    id: 7,
    name: 'SAT',
    label: 'Digital SAT',
    color: '#3B82F6',
    description: 'Scholastic Aptitude Test. Required for undergraduate admissions in US universities.',
    duration: '2 hours 14 mins',
    accepted: 'All US Colleges',
    type: 'Undergraduate',
    Logo: () => (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="50" fill="#3B82F6" />
        <text x="50" y="60" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="26" fill="white">SAT</text>
      </svg>
    )
  },
];

const ExamCard = ({ exam, isSelected, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`flex flex-col items-center min-w-[120px] py-6 cursor-pointer group transition-all duration-300 transform ${isSelected ? 'scale-110' : 'hover:-translate-y-1'}`}
    >
      <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-3 transition-all duration-300 
        ${isSelected 
          ? 'ring-4 ring-[#0B7077] ring-offset-4 shadow-xl' 
          : 'shadow-md group-hover:shadow-lg border border-gray-100 bg-white'
        } overflow-hidden`}>
        <exam.Logo />
      </div>

      <span className={`text-sm font-semibold text-center transition-colors duration-300 ${isSelected ? 'text-[#0B7077]' : 'text-gray-600 group-hover:text-[#0B7077]'}`}>
        {exam.label}
      </span>
      
      {isSelected && (
        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0B7077] animate-pulse"></div>
      )}
    </div>
  );
};

const ExamGuides = () => {
  const [selectedExam, setSelectedExam] = useState(EXAMS_DATA[0]);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 20);
      // Only show right arrow if the contents overflow the actual visible screen width
      setShowRightArrow(scrollWidth > clientWidth && scrollLeft < scrollWidth - clientWidth - 20);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({ 
        left: direction === 'right' ? scrollAmount : -scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      // Run once on load/resize to detect overflow
      handleScroll();
      window.addEventListener('resize', handleScroll);
    }
    return () => {
      container?.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="w-full min-h-screen text-slate-800 font-sans bg-slate-50/30">
      {/* Header Section */}
      <header className="w-full pt-16 px-4 md:px-8 lg:px-16 pb-12 text-center">
        <h1 className="md:text-4xl lg:text-5xl text-3xl font-extrabold tracking-tight text-slate-900 mb-6 drop-shadow-sm">
          Everything You Need to <span className="text-[#0B7077]">Succeed</span>
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Comprehensive guides for major international exams. Compare formats, durations, and acceptance to find your perfect fit.
        </p>
      </header>

      {/* Centered Horizontal Nav Wrapper */}
      <div className="w-full relative px-4 md:px-12 lg:px-20 mb-8">
        {showLeftArrow && (
          <button 
            onClick={() => scroll('left')}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-12 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-slate-400 hover:text-[#0B7077] hover:bg-slate-50 transition-all border border-slate-100"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* md:justify-center centers items perfectly on wider desktop views */}
        <div 
          ref={scrollContainerRef}
          className="flex justify-start md:justify-center gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 px-2"
        >
          {EXAMS_DATA.map((exam) => (
            <ExamCard 
              key={exam.id} 
              exam={exam} 
              isSelected={selectedExam.id === exam.id}
              onClick={() => setSelectedExam(exam)}
            />
          ))}
        </div>

        {showRightArrow && (
          <button 
            onClick={() => scroll('right')}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-12 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-slate-400 hover:text-[#0B7077] hover:bg-slate-50 transition-all border border-slate-100"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>

      {/* Detail Section */}
      <main className="w-full px-4 md:px-8 lg:px-16 pb-20">
        <div className="w-full bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100 grid md:grid-cols-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          {/* Visual Side */}
          <div className="md:col-span-2 bg-slate-50 p-8 lg:p-12 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-slate-100">
            <div className="w-48 h-48 bg-white rounded-full shadow-2xl p-4 mb-8">
              <selectedExam.Logo />
            </div>
            <div className="text-center">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-2" style={{ backgroundColor: selectedExam.color }}>
                {selectedExam.type}
              </span>
              <h2 className="text-3xl font-black text-slate-900">{selectedExam.name}</h2>
            </div>
          </div>

          {/* Info Side */}
          <div className="md:col-span-3 p-8 lg:p-14">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800">
              <Info size={20} className="text-[#0B7077]" />
              Exam Overview
            </h3>
            <p className="text-slate-600 leading-relaxed mb-10 text-lg italic">
              "{selectedExam.description}"
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors">
                <div className="p-2 bg-white rounded-xl shadow-sm">
                  <Clock className="text-[#0B7077]" size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Duration</p>
                  <p className="font-semibold text-slate-700">{selectedExam.duration}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors">
                <div className="p-2 bg-white rounded-xl shadow-sm">
                  <Globe className="text-[#0B7077]" size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Acceptance</p>
                  <p className="font-semibold text-slate-700">{selectedExam.accepted}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors">
                <div className="p-2 bg-white rounded-xl shadow-sm">
                  <BookOpen className="text-[#0B7077]" size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Format</p>
                  <p className="font-semibold text-slate-700">{selectedExam.type}</p>
                </div>
              </div>
            </div>

            <button className="w-full group py-4 px-6 bg-[#0B7077] hover:bg-[#095b61] text-white rounded-2xl font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              Explore Preparation Guide
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </main>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default function App() {
  return <ExamGuides />;
}