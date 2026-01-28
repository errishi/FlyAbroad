import React, { useState, _useEffect } from 'react';
import { ArrowRight, Plane, GraduationCap, Stethoscope, Briefcase, Globe, Plus } from 'lucide-react';


const PRIMARY_COLOR = '#0B7707'; 


const CATEGORIES = [
  { id: 'engineering', label: 'Engineering', icon: <GraduationCap size={16} /> },
  { id: 'medical', label: 'Medical', icon: <Stethoscope size={16} /> },
  { id: 'business', label: 'Business', icon: <Briefcase size={16} /> },
  { id: 'others', label: 'Others', icon: <Globe size={16} /> },
];

const COUNTRIES = [
  {
    id: 1,
    name: 'Ireland',
    description: 'Experience world-class education amidst breathtaking landscapes and a vibrant culture.',
    image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=2574&auto=format&fit=crop', // Cliffs of Moher
    category: 'engineering'
  },
  {
    id: 2,
    name: 'United Kingdom',
    description: 'Home to some of the oldest and most prestigious universities in the world.',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2670&auto=format&fit=crop', // London
    category: 'business'
  },
  {
    id: 3,
    name: 'Germany',
    description: 'A hub for innovation and engineering with tuition-free public universities.',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2670&auto=format&fit=crop', // German Architecture
    category: 'engineering'
  },
  {
    id: 4,
    name: 'Australia',
    description: 'Study in a paradise of beaches and bushland with a globally recognized education system.',
    image: '/australia-image.png', // Sydney Opera House
    category: 'medical'
  },
  {
    id: 5,
    name: 'United States',
    description: 'The land of opportunity, offering a diverse range of programs and cultural experiences.',
    image: 'https://images.unsplash.com/photo-1508433957232-3107f5fd5995?q=80&w=2686&auto=format&fit=crop', // NYC
    category: 'business'
  },
  {
    id: 6,
    name: 'Canada',
    description: 'Known for its friendly locals, stunning nature, and high standard of living.',
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2611&auto=format&fit=crop', // Lake Louise
    category: 'medical'
  },
  {
    id: 7,
    name: 'New Zealand',
    description: 'A safe and welcoming country with a practical teaching style and hands-on learning.',
    image: 'https://images.unsplash.com/photo-1507699622177-388891077021?q=80&w=2671&auto=format&fit=crop', // NZ Landscape
    category: 'others'
  },
  {
    id: 8,
    name: 'Russia',
    description: 'Rich history and strong scientific traditions in mathematics and physics.',
    image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=2449&auto=format&fit=crop', // Moscow
    category: 'engineering'
  },
];

export default function Destination() {
  const [activeCategory, setActiveCategory] = useState('engineering');
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle changing the main display when a thumbnail is clicked
  const handleCountrySelect = (country) => {
    if (selectedCountry.id === country.id) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedCountry(country);
      setIsAnimating(false);
    }, 200); 
  };

  return (
    <div className="min-h-screen mt-20 bg-gray-100 font-sans text-slate-800 selection:bg-green-200">
      
      {/* Decorative Background Element (Subtle grid) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#0B7707 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col items-center">
        
        {/* --- Header Section --- */}
        <div className="text-center max-w-3xl mb-10 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight relative inline-block">
            Top Countries to Study Abroad
            {/* Decorative Arrow SVG using the custom green */}
            <svg 
              className="absolute -bottom-10 right-5 w-24 h-12 md:w-32 md:h-16 transform rotate-3 translate-x-8 md:translate-x-12" 
              viewBox="0 0 100 50" 
              fill="none" 
              stroke={PRIMARY_COLOR} 
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M10,25 Q50,45 90,10" />
              <path d="M80,15 L90,10 L85,25" />
            </svg>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl pt-4">
            Pack your bags to get top-notch education beyond borders in the USA, UK, Canada, Australia, Ireland, New Zealand, and more!
          </p>
        </div>

        {/* --- Main Content Area --- */}
        <div className="w-full flex flex-col items-center gap-8">
          
          {/* 1. Featured Card (The Big Image) */}
          <div className="relative w-full max-w-4xl h-100 md:h-125 rounded-3xl overflow-hidden shadow-2xl group transition-all duration-500 bg-gray-900">
            {/* Background Image with animation key */}
            <img 
              key={selectedCountry.id}
              src={selectedCountry.image} 
              alt={selectedCountry.name}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isAnimating ? 'opacity-50' : 'opacity-80 group-hover:opacity-60'}`}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />

            {/* Content Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
              <div className="self-center mt-4">
                <h2 className="text-white text-4xl md:text-6xl font-bold tracking-tight drop-shadow-lg text-center">
                  {selectedCountry.name}
                </h2>
              </div>

              <div className="flex flex-col items-center gap-6 mb-4">
                 <p className={`text-gray-200 text-center max-w-lg text-lg drop-shadow-md transition-all duration-500 ${isAnimating ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}`}>
                   {selectedCountry.description}
                 </p>

                <button 
                  className="group relative cursor-pointer inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-bold text-lg transition-transform duration-300 hover:scale-105 shadow-lg active:scale-95"
                  style={{ backgroundColor: PRIMARY_COLOR }}
                >
                  Explore
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                  
                  {/* Button Glow Effect */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-300" 
                       style={{ backgroundColor: PRIMARY_COLOR }}></div>
                </button>
              </div>
            </div>
          </div>

          {/* 2. Thumbnails Carousel */}
          <div className="w-full max-w-6xl overflow-x-auto pb-4 pt-5 scrollbar-hide">
            <div className="flex justify-start md:justify-center gap-4 px-4 min-w-max">
              {COUNTRIES.map((country) => {
                const isSelected = selectedCountry.id === country.id;
                
                return (
                  <div 
                    key={country.id}
                    onClick={() => handleCountrySelect(country)}
                    className="group flex flex-col items-center gap-3 cursor-pointer"
                  >
                    {/* Thumbnail Image Container */}
                    <div 
                      className={`
                        relative w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden transition-all duration-300 ease-out shadow-md
                        ${isSelected ? 'ring-4 ring-offset-2 ring-offset-gray-100 scale-110' : 'hover:scale-105 hover:shadow-xl opacity-80 hover:opacity-100'}
                      `}
                      style={{ ringColor: isSelected ? PRIMARY_COLOR : 'transparent', '--tw-ring-color': PRIMARY_COLOR }}
                    >
                      <img 
                        src={country.image} 
                        alt={country.name}
                        className="w-full h-full object-cover"
                      />
                      {/* Dark overlay on idle items for contrast */}
                      {!isSelected && (
                         <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                      )}
                    </div>
                    
                    {/* Country Name Label */}
                    <span 
                      className={`
                        text-sm font-semibold text-center w-24 leading-tight transition-colors duration-300
                        ${isSelected ? 'text-gray-900 font-bold' : 'text-gray-500 group-hover:text-gray-700'}
                      `}
                    >
                      {country.name}
                    </span>
                  </div>
                );
              })}

              {/* Explore More Card (Added) */}
              <div className="group flex flex-col items-center gap-3 cursor-pointer">
                <div 
                  className="relative w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden bg-white border-2 border-dashed border-gray-300 flex items-center justify-center transition-all duration-300 hover:border-[#0B7707] hover:bg-green-50 shadow-sm hover:shadow-md"
                >
                  <div className="flex flex-col items-center gap-1 text-gray-400 group-hover:text-[#0B7707] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all">
                       <Plus size={20} />
                    </div>
                  </div>
                </div>
                
                <span className="text-sm font-semibold text-center w-24 leading-tight text-gray-500 group-hover:text-[#0B7707] transition-colors">
                  Explore More
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}