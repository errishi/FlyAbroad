import React, { useState, useEffect } from 'react';
import { ExternalLink, Building2, GraduationCap } from 'lucide-react';

const universities =[
  {
    id: 1,
    name: "Moscow State University",
    acronym: "MSU",
    url: "https://www.msu.ru/en/",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Moscow_State_University_logo.svg/500px-Moscow_State_University_logo.svg.png"
  },
  {
    id: 2,
    name: "St. Petersburg State University",
    acronym: "SPbU",
    url: "https://english.spbu.ru/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Saint_Petersburg_State_University_logo.svg/500px-Saint_Petersburg_State_University_logo.svg.png"
  },
  {
    id: 3,
    name: "Higher School of Economics",
    acronym: "HSE",
    url: "https://www.hse.ru/en/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/HSE_University_logo.svg/500px-HSE_University_logo.svg.png"
  },
  {
    id: 4,
    name: "Moscow Institute of Physics and Technology",
    acronym: "MIPT",
    url: "https://mipt.ru/english/",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Moscow_Institute_of_Physics_and_Technology_logo.svg/500px-Moscow_Institute_of_Physics_and_Technology_logo.svg.png"
  },
  {
    id: 5,
    name: "Bauman Moscow State Technical University",
    acronym: "BMSTU",
    url: "https://bmstu.ru/en",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Bauman_Moscow_State_Technical_University_Logo.svg/500px-Bauman_Moscow_State_Technical_University_Logo.svg.png"
  },
  {
    id: 6,
    name: "Novosibirsk State University",
    acronym: "NSU",
    url: "https://english.nsu.ru/",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Novosibirsk_State_University_Logo.svg/500px-Novosibirsk_State_University_Logo.svg.png"
  },
  {
    id: 7,
    name: "Tomsk State University",
    acronym: "TSU",
    url: "https://en.tsu.ru/",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Tomsk_State_University_logo.svg/500px-Tomsk_State_University_logo.svg.png"
  },
  {
    id: 8,
    name: "National University of Science and Technology",
    acronym: "MISiS",
    url: "https://en.misis.ru/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/NUST_MISIS_logo.svg/500px-NUST_MISIS_logo.svg.png"
  },
  {
    id: 9,
    name: "Peoples’ Friendship University of Russia",
    acronym: "RUDN",
    url: "https://eng.rudn.ru/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/RUDN_University_Logo.svg/500px-RUDN_University_Logo.svg.png"
  },
  {
    id: 10,
    name: "Kazan Federal University",
    acronym: "KFU",
    url: "https://kpfu.ru/eng",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Kazan_Federal_University_coat_of_arms.svg/500px-Kazan_Federal_University_coat_of_arms.svg.png"
  },
  {
    id: 11,
    name: "Ural Federal University",
    acronym: "UrFU",
    url: "https://urfu.ru/en/",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Ural_Federal_University_Logo.svg/500px-Ural_Federal_University_Logo.svg.png"
  },
  {
    id: 12,
    name: "ITMO University",
    acronym: "ITMO",
    url: "https://en.itmo.ru/",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/ITMO_University_Logo.svg/500px-ITMO_University_Logo.svg.png"
  },
  {
    id: 13,
    name: "Samara National Research University",
    acronym: "Samara",
    url: "https://ssau.ru/en/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Samara_University_Logo.png/500px-Samara_University_Logo.png"
  },
  {
    id: 14,
    name: "Far Eastern Federal University",
    acronym: "FEFU",
    url: "https://www.dvfu.ru/en/",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Far_Eastern_Federal_University_logo.svg/500px-Far_Eastern_Federal_University_logo.svg.png"
  },
  {
    id: 15,
    name: "RANEPA",
    acronym: "RANEPA",
    url: "https://www.ranepa.ru/eng/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/RANEPA_Logo.png/500px-RANEPA_Logo.png"
  },
  {
    id: 16,
    name: "Russian New University",
    acronym: "RosNOU",
    url: "https://rosnou.ru/en",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/29/Russian_New_University_logo.png"
  },
  {
    id: 17,
    name: "Moscow International Higher Business School",
    acronym: "MIRBIS",
    url: "https://mirbis.ru/local/templates/main_new/img/logo.png"
  },
  {
    id: 18,
    name: "Synergy University",
    acronym: "Synergy",
    url: "https://synergy.ru/en/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Synergy_University_Logo.svg/500px-Synergy_University_Logo.svg.png"
  },
  {
    id: 19,
    name: "Russian State University for the Humanities",
    acronym: "RSUH",
    url: "https://www.rsuh.ru/en/",
    logo: "https://upload.wikimedia.org/wikipedia/en/8/87/Russian_State_University_for_the_Humanities_logo.png"
  },
  {
    id: 20,
    name: "Financial University",
    acronym: "FinU",
    url: "http://www.fa.ru/en/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Financial_University_Logo.svg/500px-Financial_University_Logo.svg.png"
  }
];

// Marquee item component
const UniversityLogoItem = ({ university }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <a
      href={university.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex-0 mx-4 w-48 h-48 flex flex-col items-center justify-center p-4 bg-white rounded-full shadow-lg border border-slate-100 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:z-10 cursor-pointer overflow-hidden"
    >
      {/* Logo Container - slides up on hover */}
      <div className="w-full h-28 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-3 px-2">
         {imgError ? (
          <div className="flex flex-col items-center text-slate-300">
             <Building2 size={32} className="mb-1" />
             <span className="text-[10px]">Logo Unavailable</span>
          </div>
        ) : (
          <img
            src={university.logo}
            alt={`${university.name} logo`}
            className="w-full h-full object-contain filter transition-all duration-300"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      
      {/* Text Container - slides up and fades in on hover */}
      <div className="absolute inset-x-0 bottom-6 flex flex-col items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <p className="text-slate-900 font-bold text-[10px] leading-tight text-center px-6 line-clamp-2">
            {university.name}
          </p>
          <div className="flex items-center gap-1 mt-1 text-[#0B7077]">
            <span className="text-[9px] font-bold tracking-wider uppercase">{university.acronym}</span>
            <ExternalLink size={10} />
          </div>
      </div>
    </a>
  );
};

// Marquee Row Component
const MarqueeRow = ({ items, speed = 40, direction = 'normal' }) => {
  // We duplicate the items to create the seamless infinite loop
  const marqueeItems = [...items, ...items];
  
  return (
    <div className="w-full overflow-hidden py-8 relative">
       {/* Gradient overlays for fade effect at edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-linear-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-linear-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

      <div 
        className="flex"
        style={{
          width: 'max-content',
          animation: `scroll ${speed}s linear infinite ${direction === 'reverse' ? 'reverse' : 'normal'}`,
        }}
      >
        {marqueeItems.map((uni, idx) => (
          <UniversityLogoItem key={`${uni.id}-${idx}`} university={uni} />
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const [mounted, setMounted] = useState(false);

  // Split universities into two groups for two rows
  const firstRow = universities.slice(0, 10);
  const secondRow = universities.slice(10, 20);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#0B7077]/20 selection:text-[#0B7077] overflow-x-hidden">
      
      {/* Inject Styles for Animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        /* Pause animation on hover for accessibility and interaction */
        .group:hover .flex {
           animation-play-state: paused !important;
        }
      `}</style>

      {/* Main Content */}
      <main className="flex flex-col justify-center py-20 min-h-[80vh]">
        
        <div className="text-center mb-16 max-w-2xl mx-auto px-4">
          <h2 className={`
            text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 transition-all duration-700 delay-100
            ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}>
            World-Class Education
          </h2>
          <p className={`
            text-slate-600 text-lg leading-relaxed transition-all duration-700 delay-200
            ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}>
            Discover the most prestigious universities across Russia. 
            <br className="hidden sm:block" />
            <span className="text-[#0B7077] font-medium">Scroll to explore</span> the official institutions.
          </p>
        </div>

        {/* Marquee Container */}
        <div className={`
          transition-opacity duration-1000 delay-500
          ${mounted ? 'opacity-100' : 'opacity-0'}
        `}>
          {/* Row 1: Slides Left */}
          <MarqueeRow items={firstRow} speed={40} direction="normal" />
          
          {/* Row 2: Slides Right */}
          <MarqueeRow items={secondRow} speed={45} direction="reverse" />
        </div>

      </main>

    </div>
  );
}