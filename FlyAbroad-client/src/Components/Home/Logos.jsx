import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  X, 
  MapPin, 
  ExternalLink,
  Search,
  Globe
} from 'lucide-react';

const universities = [
  { id: 1, name: "Moscow State University", acronym: "MSU", url: "https://www.msu.ru/en/", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Moscow_State_University_logo.svg/500px-Moscow_State_University_logo.svg.png", location: "Moscow", type: "Public" },
  { id: 2, name: "St. Petersburg State University", acronym: "SPbU", url: "https://english.spbu.ru/", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Saint_Petersburg_State_University_logo.svg/500px-Saint_Petersburg_State_University_logo.svg.png", location: "St. Petersburg", type: "Public" },
  { id: 3, name: "Higher School of Economics", acronym: "HSE", url: "https://www.hse.ru/en/", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/HSE_University_logo.svg/500px-HSE_University_logo.svg.png", location: "Moscow", type: "National Research" },
  { id: 4, name: "Moscow Institute of Physics and Technology", acronym: "MIPT", url: "https://mipt.ru/english/", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Moscow_Institute_of_Physics_and_Technology_logo.svg/500px-Moscow_Institute_of_Physics_and_Technology_logo.svg.png", location: "Dolgoprudny", type: "Research" },
  { id: 5, name: "Bauman Moscow State Technical University", acronym: "BMSTU", url: "https://bmstu.ru/en", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Bauman_Moscow_State_Technical_University_Logo.svg/500px-Bauman_Moscow_State_Technical_University_Logo.svg.png", location: "Moscow", type: "Technical" },
  { id: 6, name: "Novosibirsk State University", acronym: "NSU", url: "https://english.nsu.ru/", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Novosibirsk_State_University_Logo.svg/500px-Novosibirsk_State_University_Logo.svg.png", location: "Novosibirsk", type: "Public" },
  { id: 7, name: "Tomsk State University", acronym: "TSU", url: "https://en.tsu.ru/", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Tomsk_State_University_logo.svg/500px-Tomsk_State_University_logo.svg.png", location: "Tomsk", type: "Public" },
  { id: 8, name: "National University of Science and Technology", acronym: "MISiS", url: "https://en.misis.ru/", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/NUST_MISIS_logo.svg/500px-NUST_MISIS_logo.svg.png", location: "Moscow", type: "Research" },
  { id: 9, name: "Peoples’ Friendship University of Russia", acronym: "RUDN", url: "https://eng.rudn.ru/", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/RUDN_University_Logo.svg/500px-RUDN_University_Logo.svg.png", location: "Moscow", type: "Public" },
  { id: 10, name: "Kazan Federal University", acronym: "KFU", url: "https://kpfu.ru/eng", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Kazan_Federal_University_coat_of_arms.svg/500px-Kazan_Federal_University_coat_of_arms.svg.png", location: "Kazan", type: "Federal" }
];

const UniversityModal = ({ university, onClose }) => {
  if (!university) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md transition-all duration-300">
      <div 
        className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden relative animate-in zoom-in-95 fade-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-all z-20 group"
          aria-label="Close modal"
        >
          <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
        </button>

        <div className="h-44 bg-linear-to-br from-[#0B7077] via-[#0D8B94] to-[#085a60] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>
        
        <div className="px-8 pb-10 -mt-16 relative z-10 text-center">
          <div className="inline-block p-5 bg-white rounded-3xl shadow-2xl mb-6 border border-slate-100 transform transition-transform hover:scale-105">
            <img 
              src={university.logo} 
              alt={`${university.name} Logo`} 
              className="w-28 h-28 object-contain"
              onError={(e) => { 
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/150?text=University';
              }}
            />
          </div>

          <h3 className="text-2xl font-extrabold text-slate-900 mb-2 leading-tight">
            {university.name}
          </h3>
          <div className="flex items-center justify-center gap-2 mb-8">
             <span className="px-3 py-1 bg-[#0B7077]/10 text-[#0B7077] rounded-full text-xs font-bold tracking-widest uppercase">
               {university.acronym}
             </span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-10 text-left">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-3">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <MapPin size={18} className="text-[#0B7077]" />
              </div>
              <div>
                <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider">Location</span>
                <span className="text-sm font-semibold text-slate-700">{university.location}</span>
              </div>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-3">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <Building2 size={18} className="text-[#0B7077]" />
              </div>
              <div>
                <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider">Type</span>
                <span className="text-sm font-semibold text-slate-700">{university.type}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={university.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-4 px-6 bg-[#0B7077] hover:bg-[#085a60] text-white rounded-2xl font-bold transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl shadow-[#0B7077]/30"
            >
              <Globe size={18} /> Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Logos() {
  const [mounted, setMounted] = useState(false);
  const [selectedUni, setSelectedUni] = useState(null);

  useEffect(() => {
    setMounted(true);
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedUni(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const firstRow = universities.slice(0, 5);
  const secondRow = universities.slice(5, 10);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-[#0B7077]/20 selection:text-[#0B7077] overflow-x-hidden flex flex-col justify-center">
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        .animate-scroll-reverse {
          animation: scroll 30s linear infinite reverse;
        }
        .animate-scroll:hover, .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header section removed as requested */}

      <main className={`py-12 transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="relative w-full overflow-hidden mb-8">
          <div className="flex w-max animate-scroll py-4">
            {[...firstRow, ...firstRow, ...firstRow].map((uni, idx) => (
              <UniversityCard 
                key={`${uni.id}-${idx}`} 
                uni={uni} 
                onClick={() => setSelectedUni(uni)} 
              />
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-linear-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-linear-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-scroll-reverse py-4">
            {[...secondRow, ...secondRow, ...secondRow].map((uni, idx) => (
              <UniversityCard 
                key={`${uni.id}-${idx}`} 
                uni={uni} 
                onClick={() => setSelectedUni(uni)} 
              />
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-linear-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-linear-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
        </div>
      </main>

      {selectedUni && (
        <div className="contents" onClick={() => setSelectedUni(null)}>
          <UniversityModal 
            university={selectedUni} 
            onClose={() => setSelectedUni(null)} 
          />
        </div>
      )}
    </div>
  );
}

const UniversityCard = ({ uni, onClick }) => {
  return (
    <button 
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className="mx-4 w-44 h-44 md:w-56 md:h-56 bg-white rounded-[2rem] shadow-sm hover:shadow-2xl hover:-translate-y-3 border border-slate-100 flex flex-col items-center justify-center p-6 md:p-10 transition-all duration-500 group relative overflow-hidden focus:outline-none focus:ring-4 focus:ring-[#0B7077]/20"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-[#0B7077] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      
      <div className="absolute top-4 right-4 p-2 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
        <div className="bg-[#0B7077]/10 p-1.5 rounded-lg text-[#0B7077]">
          <Search size={14} />
        </div>
      </div>

      <div className="w-20 h-20 md:w-28 md:h-28 mb-4 flex items-center justify-center relative">
        <img 
          src={uni.logo} 
          alt={uni.name} 
          className="max-w-full max-h-full object-contain filter group-hover:drop-shadow-lg transition-all duration-500" 
        />
      </div>

      <div className="text-center">
        <p className="font-bold text-slate-800 text-sm md:text-base mb-1 tracking-tight">{uni.acronym}</p>
        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#0B7077] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          Details
        </span>
      </div>
    </button>
  );
};