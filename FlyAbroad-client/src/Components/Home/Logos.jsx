import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  X, 
  MapPin, 
  Globe, 
  GraduationCap,
  ExternalLink,
  Search
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
  { id: 10, name: "Kazan Federal University", acronym: "KFU", url: "https://kpfu.ru/eng", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Kazan_Federal_University_coat_of_arms.svg/500px-Kazan_Federal_University_coat_of_arms.svg.png", location: "Kazan", type: "Federal" },
  { id: 11, name: "Ural Federal University", acronym: "UrFU", url: "https://urfu.ru/en/", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Ural_Federal_University_Logo.svg/500px-Ural_Federal_University_Logo.svg.png", location: "Yekaterinburg", type: "Federal" },
  { id: 12, name: "ITMO University", acronym: "ITMO", url: "https://en.itmo.ru/", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/ITMO_University_Logo.svg/500px-ITMO_University_Logo.svg.png", location: "St. Petersburg", type: "Research" },
  { id: 13, name: "Samara National Research University", acronym: "Samara", url: "https://ssau.ru/en/", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Samara_University_Logo.png/500px-Samara_University_Logo.png", location: "Samara", type: "National Research" },
  { id: 14, name: "Far Eastern Federal University", acronym: "FEFU", url: "https://www.dvfu.ru/en/", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Far_Eastern_Federal_University_logo.svg/500px-Far_Eastern_Federal_University_logo.svg.png", location: "Vladivostok", type: "Federal" },
  { id: 15, name: "RANEPA", acronym: "RANEPA", url: "https://www.ranepa.ru/eng/", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/RANEPA_Logo.png/500px-RANEPA_Logo.png", location: "Moscow", type: "Public" },
  { id: 16, name: "Russian New University", acronym: "RosNOU", url: "https://rosnou.ru/en", logo: "https://upload.wikimedia.org/wikipedia/en/2/29/Russian_New_University_logo.png", location: "Moscow", type: "Private" },
  { id: 17, name: "MIRBIS", acronym: "MIRBIS", url: "https://mirbis.ru/", logo: "https://mirbis.ru/local/templates/main_new/img/logo.png", location: "Moscow", type: "Business" },
  { id: 18, name: "Synergy University", acronym: "Synergy", url: "https://synergy.ru/en/", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Synergy_University_Logo.svg/500px-Synergy_University_Logo.svg.png", location: "Moscow", type: "Private" },
  { id: 19, name: "Russian State University for the Humanities", acronym: "RSUH", url: "https://www.rsuh.ru/en/", logo: "https://upload.wikimedia.org/wikipedia/en/8/87/Russian_State_University_for_the_Humanities_logo.png", location: "Moscow", type: "Public" },
  { id: 20, name: "Financial University", acronym: "FinU", url: "http://www.fa.ru/en/", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Financial_University_Logo.svg/500px-Financial_University_Logo.svg.png", location: "Moscow", type: "Public" }
];

const UniversityModal = ({ university, onClose }) => {
  if (!university) return null;

  return (
    <div className="fixed inset-0 `z-[100]` flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-all animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="h-32 bg-linear-to-r from-[#0B7077] to-[#085a60]" />
        
        <div className="px-8 pb-8 -mt-12 text-center">
          <div className="inline-block p-4 bg-white rounded-2xl shadow-xl mb-4 border border-slate-100">
            <img 
              src={university.logo} 
              alt={university.name} 
              className="w-24 h-24 object-contain"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=No+Logo' }}
            />
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-1">{university.name}</h3>
          <p className="text-[#0B7077] font-semibold tracking-widest uppercase text-sm mb-6">
            {university.acronym}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex flex-col items-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <MapPin size={18} className="text-[#0B7077] mb-2" />
              <span className="text-xs text-slate-500 uppercase tracking-wider mb-1 font-bold">Location</span>
              <span className="text-sm font-medium text-slate-900">{university.location}</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <Building2 size={18} className="text-[#0B7077] mb-2" />
              <span className="text-xs text-slate-500 uppercase tracking-wider mb-1 font-bold">Institution Type</span>
              <span className="text-sm font-medium text-slate-900">{university.type}</span>
            </div>
          </div>

          <div className="flex gap-3">
            <a 
              href={university.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#0B7077] hover:bg-[#085a60] text-white rounded-2xl font-bold transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#0B7077]/20"
            >
              Visit Official Website <ExternalLink size={18} />
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
  }, []);

  const firstRow = universities.slice(0, 10);
  const secondRow = universities.slice(10, 20);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-[#0B7077]/20 selection:text-[#0B7077] overflow-x-hidden">
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 45s linear infinite;
        }
        .animate-scroll-reverse {
          animation: scroll 50s linear infinite reverse;
        }
        .animate-scroll:hover, .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>

      <main className="py-12 md:py-20 px-4">
        <div className={`space-y-4 transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          {/* Marquee Row 1 */}
          <div className="relative w-full overflow-hidden py-10">
            <div className="flex w-max animate-scroll">
              {[...firstRow, ...firstRow].map((uni, idx) => (
                <button 
                  key={`${uni.id}-${idx}`}
                  onClick={() => setSelectedUni(uni)}
                  className="mx-4 w-52 h-52 bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 border border-slate-100 flex flex-col items-center justify-center p-8 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Search size={16} className="text-slate-300" />
                  </div>
                  <div className="w-24 h-24 mb-4 flex items-center justify-center">
                    <img src={uni.logo} alt={uni.name} className="max-w-full max-h-full object-contain filter group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-slate-900 text-sm line-clamp-1">{uni.acronym}</p>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#0B7077] opacity-0 group-hover:opacity-100 transition-opacity">
                      View Details
                    </span>
                  </div>
                </button>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
          </div>

          {/* Marquee Row 2 */}
          <div className="relative w-full overflow-hidden py-10">
            <div className="flex w-max animate-scroll-reverse">
              {[...secondRow, ...secondRow].map((uni, idx) => (
                <button 
                  key={`${uni.id}-${idx}`}
                  onClick={() => setSelectedUni(uni)}
                  className="mx-4 w-52 h-52 bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 border border-slate-100 flex flex-col items-center justify-center p-8 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Search size={16} className="text-slate-300" />
                  </div>
                  <div className="w-24 h-24 mb-4 flex items-center justify-center">
                    <img src={uni.logo} alt={uni.name} className="max-w-full max-h-full object-contain filter group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-slate-900 text-sm line-clamp-1">{uni.acronym}</p>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#0B7077] opacity-0 group-hover:opacity-100 transition-opacity">
                      View Details
                    </span>
                  </div>
                </button>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
          </div>
        </div>
      </main>

      <UniversityModal 
        university={selectedUni} 
        onClose={() => setSelectedUni(null)} 
      />
    </div>
  );
}