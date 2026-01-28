import React, { useRef } from 'react';
import { ChevronRight } from 'lucide-react';

const ExamGuides = () => {
  const scrollContainerRef = useRef(null);

  const _scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const exams = [
    {
      id: 1,
      name: 'IELTS',
      label: 'IELTS',
      // High-fidelity SVG recreation of the IELTS logo
      Logo: () => (
        <svg viewBox="0 0 100 100" className="w-full h-full p-2">
           <rect width="100" height="100" fill="white" rx="50" />
           <text x="50" y="55" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="28" fill="#DC2626">IELTS</text>
           <text x="50" y="70" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="8" fill="#6B7280" letterSpacing="0.5">English for Life</text>
        </svg>
      )
    },
    {
      id: 2,
      name: 'TOEFL',
      label: 'TOEFL',
      // High-fidelity SVG recreation of the TOEFL logo
      Logo: () => (
        <svg viewBox="0 0 100 100" className="w-full h-full">
           <circle cx="50" cy="50" r="50" fill="#0D9488" />
           <text x="50" y="35" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="white" letterSpacing="1">ETS</text>
           <path d="M 30 40 L 70 40" stroke="white" strokeWidth="1" />
           <text x="50" y="65" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="22" fill="white" letterSpacing="1">TOEFL</text>
        </svg>
      )
    },
    {
      id: 3,
      name: 'DET',
      label: 'DET',
      // High-fidelity SVG recreation of the Duolingo logo
      Logo: () => (
        <svg viewBox="0 0 100 100" className="w-full h-full">
           <circle cx="50" cy="50" r="50" fill="#84CC16" />
           {/* Owl Eyes */}
           <g transform="translate(0, 5)">
             <circle cx="35" cy="40" r="10" fill="white" opacity="0.9"/>
             <circle cx="65" cy="40" r="10" fill="white" opacity="0.9"/>
             <circle cx="35" cy="40" r="4" fill="#84CC16" />
             <circle cx="65" cy="40" r="4" fill="#84CC16" />
             {/* Beak hint */}
             <path d="M 45 52 Q 50 57 55 52" stroke="#F59E0B" strokeWidth="2" fill="none" />
           </g>
           <text x="50" y="78" textAnchor="middle" fontFamily="Varela Round, sans-serif" fontWeight="bold" fontSize="16" fill="white">duolingo</text>
        </svg>
      )
    },
    {
      id: 4,
      name: 'PTE',
      label: 'PTE',
      // High-fidelity SVG recreation of the PTE logo
      Logo: () => (
        <svg viewBox="0 0 100 100" className="w-full h-full p-2">
           <circle cx="50" cy="50" r="48" fill="white" />
           <text x="50" y="50" textAnchor="middle" fontFamily="Serif" fontWeight="bold" fontStyle="italic" fontSize="24" fill="#1E3A8A">Pearson</text>
           <text x="50" y="65" textAnchor="middle" fontFamily="Sans-serif" fontSize="10" fill="#1E3A8A">Test of English</text>
        </svg>
      )
    },
    {
      id: 5,
      name: 'GRE',
      label: 'GRE',
      // High-fidelity SVG recreation of the GRE logo
      Logo: () => (
        <svg viewBox="0 0 100 100" className="w-full h-full">
           <circle cx="50" cy="50" r="50" fill="#581C87" />
           <text x="50" y="35" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="white" letterSpacing="1">ETS</text>
           <path d="M 30 40 L 70 40" stroke="white" strokeWidth="0.5" />
           <text x="50" y="65" textAnchor="middle" fontFamily="Serif" fontWeight="bold" fontStyle="italic" fontSize="24" fill="white">GRE</text>
        </svg>
      )
    },
    {
      id: 6,
      name: 'GMAT',
      label: 'GMAT',
      // High-fidelity SVG recreation of the GMAT logo
      Logo: () => (
        <svg viewBox="0 0 100 100" className="w-full h-full">
           <circle cx="50" cy="50" r="50" fill="#111827" />
           <text x="50" y="55" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="20" fill="white">GMAT</text>
           <rect x="35" y="65" width="30" height="2" fill="#EAB308" />
        </svg>
      )
    },
    {
      id: 7,
      name: 'SAT',
      label: 'SAT',
      // High-fidelity SVG recreation of the SAT logo
      Logo: () => (
        <svg viewBox="0 0 100 100" className="w-full h-full">
           <circle cx="50" cy="50" r="50" fill="#3B82F6" />
           <text x="50" y="60" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="28" fill="white">SAT</text>
        </svg>
      )
    },
  ];

  return (
    <div className="w-full p-4 font-sans lg:mt-30 mt-15">
      <h1 className='text-center font-bold lg:text-5xl md:text-4xl text-2xl drop-shadow-lg mb-5'>Exams</h1>

      {/* Scroll Container Wrapper */}
      <div className="relative group/container max-w-4xl mx-auto">
        
        {/* List */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-8 pb-4 scrollbar-hide scroll-smooth no-scrollbar items-center"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {exams.map((exam) => (
            <div 
              key={exam.id} 
              className="flex flex-col items-center min-w-25 py-5 cursor-pointer group/item"
            >
              {/* Circle Card */}
              <div className={`w-28 h-28 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.08)] 
                              flex items-center justify-center mb-4 transition-all duration-300 
                              group-hover/item:shadow-lg group-hover/item:-translate-y-1 
                              border border-gray-100 overflow-hidden bg-white`}>
                <exam.Logo />
              </div>

              {/* Label - Applied #0B7077 on hover */}
              <span className="text-gray-600 font-medium text-base group-hover/item:text-[#0B7077] transition-colors">
                {exam.label}
              </span>
            </div>
          ))}
          
          <div className="w-4 shrink-0"></div>
        </div>

        {/* Navigation Arrow (Right) - Applied #0B7077 on hover */}
        {/* <button 
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-8 translate-x-1/2 
                     w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100
                     flex items-center justify-center text-gray-600 
                     hover:bg-gray-50 hover:text-[#0B7077] transition-all duration-200
                     focus:outline-none z-10"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button> */}

        {/* Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 pointer-events-none z-0 hidden md:block"></div>
      </div>
    </div>
  );
};

export default function Exams() {
  return <ExamGuides />;
}