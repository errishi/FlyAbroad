import React, { useState, useEffect, useMemo } from 'react';

const COUNTRY_DATA = [
  // --- RUSSIA & ALL LAND NEIGHBORS ---
  { code: 'RU', name: 'Russia', continent: 'Asia/Europe', emoji: '🇷🇺' },
  { code: 'NO', name: 'Norway', continent: 'Europe', emoji: '🇳🇴' },
  { code: 'FI', name: 'Finland', continent: 'Europe', emoji: '🇫🇮' },
  { code: 'EE', name: 'Estonia', continent: 'Europe', emoji: '🇪🇪' },
  { code: 'LV', name: 'Latvia', continent: 'Europe', emoji: '🇱🇻' },
  { code: 'LT', name: 'Lithuania', continent: 'Europe', emoji: '🇱🇹' },
  { code: 'PL', name: 'Poland', continent: 'Europe', emoji: '🇵🇱' },
  { code: 'BY', name: 'Belarus', continent: 'Europe', emoji: '🇧🇾' },
  { code: 'UA', name: 'Ukraine', continent: 'Europe', emoji: '🇺🇦' },
  { code: 'GE', name: 'Georgia', continent: 'Asia/Europe', emoji: '🇬🇪' },
  { code: 'AZ', name: 'Azerbaijan', continent: 'Asia/Europe', emoji: '🇦🇿' },
  { code: 'KZ', name: 'Kazakhstan', continent: 'Asia/Europe', emoji: '🇰🇿' },
  { code: 'CN', name: 'China', continent: 'Asia', emoji: '🇨🇳' },
  { code: 'MN', name: 'Mongolia', continent: 'Asia', emoji: '🇲🇳' },
  { code: 'KP', name: 'North Korea', continent: 'Asia', emoji: '🇰🇵' },

  // --- ADDITIONAL ASIA SOVEREIGN STATES ---
  { code: 'JP', name: 'Japan', continent: 'Asia', emoji: '🇯🇵' },
  { code: 'IN', name: 'India', continent: 'Asia', emoji: '🇮🇳' },
  { code: 'KR', name: 'South Korea', continent: 'Asia', emoji: '🇰🇷' },
  { code: 'ID', name: 'Indonesia', continent: 'Asia', emoji: '🇮🇩' },
  { code: 'PK', name: 'Pakistan', continent: 'Asia', emoji: '🇵🇰' },
  { code: 'BD', name: 'Bangladesh', continent: 'Asia', emoji: '🇧🇩' },
  { code: 'PH', name: 'Philippines', continent: 'Asia', emoji: '🇵🇭' },
  { code: 'VN', name: 'Vietnam', continent: 'Asia', emoji: '🇻🇳' },
  { code: 'TR', name: 'Turkey', continent: 'Asia/Europe', emoji: '🇹🇷' },
  { code: 'TH', name: 'Thailand', continent: 'Asia', emoji: '🇹🇭' },
  { code: 'MY', name: 'Malaysia', continent: 'Asia', emoji: '🇲🇾' },
  { code: 'SG', name: 'Singapore', continent: 'Asia', emoji: '🇸🇬' },
  { code: 'SA', name: 'Saudi Arabia', continent: 'Asia', emoji: '🇸🇦' },
  { code: 'AE', name: 'United Arab Emirates', continent: 'Asia', emoji: '🇦🇪' },
  { code: 'IL', name: 'Israel', continent: 'Asia', emoji: '🇮🇱' },
  { code: 'IR', name: 'Iran', continent: 'Asia', emoji: '🇮🇷' },
  { code: 'NP', name: 'Nepal', continent: 'Asia', emoji: '🇳🇵' },
  { code: 'LK', name: 'Sri Lanka', continent: 'Asia', emoji: '🇱🇰' },

  // --- ADDITIONAL EUROPE SOVEREIGN STATES ---
  { code: 'FR', name: 'France', continent: 'Europe', emoji: '🇫🇷' },
  { code: 'DE', name: 'Germany', continent: 'Europe', emoji: '🇩🇪' },
  { code: 'IT', name: 'Italy', continent: 'Europe', emoji: '🇮🇹' },
  { code: 'ES', name: 'Spain', continent: 'Europe', emoji: '🇪🇸' },
  { code: 'GB', name: 'United Kingdom', continent: 'Europe', emoji: '🇬🇧' },
  { code: 'RO', name: 'Romania', continent: 'Europe', emoji: '🇷🇴' },
  { code: 'NL', name: 'Netherlands', continent: 'Europe', emoji: '🇳🇱' },
  { code: 'GR', name: 'Greece', continent: 'Europe', emoji: '🇬🇷' },
  { code: 'SE', name: 'Sweden', continent: 'Europe', emoji: '🇸🇪' },
  { code: 'CH', name: 'Switzerland', continent: 'Europe', emoji: '🇨🇭' },
  { code: 'IE', name: 'Ireland', continent: 'Europe', emoji: '🇮🇪' },
  { code: 'AT', name: 'Austria', continent: 'Europe', emoji: '🇦🇹' },
  { code: 'BE', name: 'Belgium', continent: 'Europe', emoji: '🇧🇪' },
  { code: 'PT', name: 'Portugal', continent: 'Europe', emoji: '🇵🇹' },
  { code: 'DK', name: 'Denmark', continent: 'Europe', emoji: '🇩🇰' },
  { code: 'HR', name: 'Croatia', continent: 'Europe', emoji: '🇭🇷' }
];

const injectCustomCSS = () => {
  const styleId = "marquee-animations-v2";
  if (document.getElementById(styleId)) return;
  const style = document.createElement('style');
  style.id = styleId;
  style.textContent = `
    @keyframes ltr-scroll {
      0% {
        transform: translate3d(-50%, 0, 0);
      }
      100% {
        transform: translate3d(0%, 0, 0);
      }
    }
    .animate-marquee-ltr {
      display: flex;
      width: max-content;
      animation: ltr-scroll var(--speed-duration, 85s) linear infinite;
    }
    .animate-marquee-ltr-slow {
      display: flex;
      width: max-content;
      animation: ltr-scroll var(--speed-duration-slow, 120s) linear infinite;
    }
  `;
  document.head.appendChild(style);
};

export default function App() {
  useEffect(() => {
    injectCustomCSS();
  }, []);

  const [showEmojiFallback, setShowEmojiFallback] = useState({});

  const uniqueCountries = useMemo(() => {
    const seen = new Set();
    return COUNTRY_DATA.filter(country => {
      if (seen.has(country.code)) {
        return false;
      }
      seen.add(country.code);
      return true;
    });
  }, []);

  const asiaCountries = useMemo(() => {
    return uniqueCountries.filter(c => c.continent.includes('Asia'));
  }, [uniqueCountries]);

  const europeCountries = useMemo(() => {
    return uniqueCountries.filter(c => c.continent.includes('Europe'));
  }, [uniqueCountries]);

  const handleFlagError = (code) => {
    setShowEmojiFallback(prev => ({ ...prev, [code]: true }));
  };

  /* Relaxed 0.5x crawl pace values */
  const durationStyle = {
    '--speed-duration': '80s',
    '--speed-duration-slow': '115s',
  };

  return (
    <div className="bg-white text-slate-800 font-sans overflow-hidden selection:bg-indigo-100 selection:text-indigo-900 w-full pb-0">
      <main className="w-full pt-2 pb-0">
        {/* Dynamic Motion Tracks */}
        <div className="space-y-4 w-full">
          
          {/* Row 1: Asia Track */}
          <div className="space-y-2 w-full">
            <div className="flex items-center justify-between px-6 md:px-12">
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Asian Corridor
              </span>
            </div>
            
            {/* Full-width corridor */}
            <div className="relative overflow-hidden w-full h-20 bg-slate-50/60 border-y border-slate-200/60 flex items-center shadow-inner">
              <div className="animate-marquee-ltr" style={durationStyle}>
                
                {/* Clone Match Set 1 */}
                <div className="flex shrink-0">
                  {asiaCountries.map((country, idx) => (
                    <div 
                      key={`${country.code}-asia-s1-${idx}`}
                      className="flex items-center gap-4 px-4 py-2.5 mx-2 bg-white border border-slate-200/75 rounded-xl shadow-sm"
                    >
                      <div className="w-10 h-7 rounded shadow-xs overflow-hidden bg-slate-100 border border-slate-200/50 flex items-center justify-center shrink-0">
                        {showEmojiFallback[country.code] ? (
                          <span className="text-xl">{country.emoji}</span>
                        ) : (
                          <img 
                            src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`} 
                            alt={country.name} 
                            className="w-full h-full object-cover"
                            onError={() => handleFlagError(country.code)}
                          />
                        )}
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-slate-800 leading-none">{country.name}</p>
                        <p className="text-[9px] text-slate-400 font-medium mt-0.5">Asia</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Clone Match Set 2 (Guarantees infinite loop with zero jump) */}
                <div className="flex shrink-0">
                  {asiaCountries.map((country, idx) => (
                    <div 
                      key={`${country.code}-asia-s2-${idx}`}
                      className="flex items-center gap-4 px-4 py-2.5 mx-2 bg-white border border-slate-200/75 rounded-xl shadow-sm"
                    >
                      <div className="w-10 h-7 rounded shadow-xs overflow-hidden bg-slate-100 border border-slate-200/50 flex items-center justify-center shrink-0">
                        {showEmojiFallback[country.code] ? (
                          <span className="text-xl">{country.emoji}</span>
                        ) : (
                          <img 
                            src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`} 
                            alt={country.name} 
                            className="w-full h-full object-cover"
                            onError={() => handleFlagError(country.code)}
                          />
                        )}
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-slate-800 leading-none">{country.name}</p>
                        <p className="text-[9px] text-slate-400 font-medium mt-0.5">Asia</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* Row 2: Europe Track */}
          <div className="space-y-2 w-full">
            <div className="flex items-center justify-between px-6 md:px-12">
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                European Corridor
              </span>
            </div>
            
            {/* Full-width corridor */}
            <div className="relative overflow-hidden w-full h-20 bg-slate-50/60 border-y border-slate-200/60 flex items-center shadow-inner">
              <div className="animate-marquee-ltr-slow" style={durationStyle}>
                
                {/* Clone Match Set 1 */}
                <div className="flex shrink-0">
                  {europeCountries.map((country, idx) => (
                    <div 
                      key={`${country.code}-euro-s1-${idx}`}
                      className="flex items-center gap-4 px-4 py-2.5 mx-2 bg-white border border-slate-200/75 rounded-xl shadow-sm"
                    >
                      <div className="w-10 h-7 rounded shadow-xs overflow-hidden bg-slate-100 border border-slate-200/50 flex items-center justify-center shrink-0">
                        {showEmojiFallback[country.code] ? (
                          <span className="text-xl">{country.emoji}</span>
                        ) : (
                          <img 
                            src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`} 
                            alt={country.name} 
                            className="w-full h-full object-cover"
                            onError={() => handleFlagError(country.code)}
                          />
                        )}
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-slate-800 leading-none">{country.name}</p>
                        <p className="text-[9px] text-slate-400 font-medium mt-0.5">Europe</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Clone Match Set 2 (Guarantees infinite loop with zero jump) */}
                <div className="flex shrink-0">
                  {europeCountries.map((country, idx) => (
                    <div 
                      key={`${country.code}-euro-s2-${idx}`}
                      className="flex items-center gap-4 px-4 py-2.5 mx-2 bg-white border border-slate-200/75 rounded-xl shadow-sm"
                    >
                      <div className="w-10 h-7 rounded shadow-xs overflow-hidden bg-slate-100 border border-slate-200/50 flex items-center justify-center shrink-0">
                        {showEmojiFallback[country.code] ? (
                          <span className="text-xl">{country.emoji}</span>
                        ) : (
                          <img 
                            src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`} 
                            alt={country.name} 
                            className="w-full h-full object-cover"
                            onError={() => handleFlagError(country.code)}
                          />
                        )}
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-slate-800 leading-none">{country.name}</p>
                        <p className="text-[9px] text-slate-400 font-medium mt-0.5">Europe</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}