import React, { useState } from 'react';
import { MapPin, BookOpen, Clock, Calendar, DollarSign, ArrowLeft, ChevronRight, Star, Globe, Award } from 'lucide-react';

// Theme
const THEME = {
  primary: '#0B7707',
  primaryHover: '#085e05',
  bg: '#f8fafc',
  textMain: '#1e293b',
  textMuted: '#64748b',
};

// Demo Data
const DATA = {
  countries: [
    {
      id: 'uk',
      name: 'United Kingdom',
      flag: '🇬🇧',
      courses: '40K+',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
      description: 'Home to some of the world\'s oldest and most prestigious universities.'
    },
    {
      id: 'usa',
      name: 'United States',
      flag: '🇺🇸',
      courses: '45K+',
      // Updated to a more scenic/campus vibe
      image: 'https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=800&q=80',
      description: 'The top destination for international students with diverse opportunities.'
    },
    {
      id: 'ireland',
      name: 'Ireland',
      flag: '🇮🇪',
      courses: '10K+',
      // Updated to a historic stone building/greenery vibe
      image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=800&q=80',
      description: 'Known as the "Land of Saints and Scholars" with a friendly environment.'
    },
    {
      id: 'nz',
      name: 'New Zealand',
      flag: '🇳🇿',
      courses: '5K+',
      // Updated to a dramatic landscape/nature vibe
      image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=800&q=80',
      description: 'World-class education amidst breathtaking natural landscapes.'
    },
    {
      id: 'aus',
      name: 'Australia',
      flag: '🇦🇺',
      courses: '25K+',
      // Updated to iconic Sydney Opera House view
      image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80',
      description: 'Innovative research facilities and a high quality of life.'
    },
    {
      id: 'germany',
      name: 'Germany',
      flag: '🇩🇪',
      courses: '15K+',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80',
      description: 'Tuition-free education options and a strong economy.'
    },
    {
      id: 'canada',
      name: 'Canada',
      flag: '🇨🇦',
      courses: '30K+',
      image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=800&q=80',
      description: 'Welcoming culture and post-study work opportunities.'
    },
    {
      id: 'netherlands',
      name: 'Netherlands',
      flag: '🇳🇱',
      courses: '8K+',
      // Updated to a vibrant, scenic Dutch windmill and tulip field view
      image: 'https://images.unsplash.com/photo-1543329027-e85d97f5b9d3?auto=format&fit=crop&w=800&q=80',
      description: 'Pioneers in English-taught programs in continental Europe.'
    },
  ],
  universities: {
    'uk': [
      { id: 'u-oxford', name: 'University of Oxford', location: 'Oxford', rank: '#1 UK', image: 'https://images.unsplash.com/photo-1580843411760-d387641d4a03?auto=format&fit=crop&w=600&q=80' },
      { id: 'u-cambridge', name: 'University of Cambridge', location: 'Cambridge', rank: '#2 UK', image: 'https://images.unsplash.com/photo-1590629724135-263748248554?auto=format&fit=crop&w=600&q=80' },
      { id: 'u-icl', name: 'Imperial College London', location: 'London', rank: '#3 UK', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80' },
    ],
    'usa': [
      { id: 'u-harvard', name: 'Harvard University', location: 'Cambridge, MA', rank: '#1 Global', image: 'https://images.unsplash.com/photo-1559135197-8a45ea74d367?auto=format&fit=crop&w=600&q=80' },
      { id: 'u-mit', name: 'MIT', location: 'Cambridge, MA', rank: '#2 Global', image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=600&q=80' },
      { id: 'u-stanford', name: 'Stanford University', location: 'Stanford, CA', rank: '#3 Global', image: 'https://images.unsplash.com/photo-1633512879555-667cb5d73489?auto=format&fit=crop&w=600&q=80' },
    ],
    'germany': [
      { id: 'u-tum', name: 'Technical University of Munich', location: 'Munich', rank: '#1 Germany', image: 'https://images.unsplash.com/photo-1596499696985-7096e1919427?auto=format&fit=crop&w=600&q=80' },
      { id: 'u-heidelberg', name: 'Heidelberg University', location: 'Heidelberg', rank: '#2 Germany', image: 'https://images.unsplash.com/photo-1606138927008-0129208a5426?auto=format&fit=crop&w=600&q=80' },
    ],
    'ireland': [
      { id: 'u-tcd', name: 'Trinity College Dublin', location: 'Dublin', rank: '#1 Ireland', image: 'https://images.unsplash.com/photo-1590089415225-401eb6b9861d?auto=format&fit=crop&w=600&q=80' },
      { id: 'u-ucd', name: 'University College Dublin', location: 'Dublin', rank: '#2 Ireland', image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80' },
    ],
    'nz': [
      { id: 'u-auckland', name: 'University of Auckland', location: 'Auckland', rank: '#1 NZ', image: 'https://images.unsplash.com/photo-1572957849183-b7b514d3f260?auto=format&fit=crop&w=600&q=80' },
      { id: 'u-otago', name: 'University of Otago', location: 'Dunedin', rank: '#2 NZ', image: 'https://images.unsplash.com/photo-1579767222851-40432f93318f?auto=format&fit=crop&w=600&q=80' },
    ],
    'aus': [
      { id: 'u-melbourne', name: 'University of Melbourne', location: 'Melbourne', rank: '#1 Aus', image: 'https://images.unsplash.com/photo-1523482580638-016775bc1463?auto=format&fit=crop&w=600&q=80' },
      { id: 'u-sydney', name: 'University of Sydney', location: 'Sydney', rank: '#2 Aus', image: 'https://images.unsplash.com/photo-1624823183492-f0278152e038?auto=format&fit=crop&w=600&q=80' },
      { id: 'u-anu', name: 'Australian National University', location: 'Canberra', rank: '#3 Aus', image: 'https://images.unsplash.com/photo-1563804803738-4e8979318b76?auto=format&fit=crop&w=600&q=80' },
    ],
    'canada': [
      { id: 'u-toronto', name: 'University of Toronto', location: 'Toronto', rank: '#1 Canada', image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=600&q=80' },
      { id: 'u-mcgill', name: 'McGill University', location: 'Montreal', rank: '#2 Canada', image: 'https://images.unsplash.com/photo-1581362072979-3c9966524317?auto=format&fit=crop&w=600&q=80' },
      { id: 'u-ubc', name: 'University of British Columbia', location: 'Vancouver', rank: '#3 Canada', image: 'https://images.unsplash.com/photo-1551636898-17551989710f?auto=format&fit=crop&w=600&q=80' },
    ],
    'netherlands': [
      { id: 'u-amsterdam', name: 'University of Amsterdam', location: 'Amsterdam', rank: '#1 Netherlands', image: 'https://images.unsplash.com/photo-1512470876302-687da745caac?auto=format&fit=crop&w=600&q=80' },
      { id: 'u-delft', name: 'Delft University of Technology', location: 'Delft', rank: '#2 Netherlands', image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=600&q=80' },
    ],
  },
  courses: {
    'u-oxford': [
      { id: 'c-cs', title: 'MSc in Computer Science', duration: '1 Year', fee: '£32,000', type: 'Masters', intake: 'Sep 2024' },
      { id: 'c-mba', title: 'MBA', duration: '1 Year', fee: '£71,000', type: 'MBA', intake: 'Sep 2024' },
      { id: 'c-law', title: 'Bachelor of Civil Law', duration: '10 Months', fee: '£28,000', type: 'Bachelors', intake: 'Oct 2024' },
    ],
    'u-harvard': [
      { id: 'c-data', title: 'Data Science Master\'s', duration: '1.5 Years', fee: '$65,000', type: 'Masters', intake: 'Aug 2024' },
      { id: 'c-econ', title: 'Economics Ph.D.', duration: '5 Years', fee: 'Fully Funded', type: 'Ph.D.', intake: 'Aug 2024' },
    ],
    //Fallback for others
  }
};

//Helper Components

const Badge = ({ children, className }) => (
  <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-opacity-10 ${className}`}>
    {children}
  </span>
);

const PageContainer = ({ children }) => (
  <div className="min-h-screen bg-slate-50 p-6 md:p-12 font-sans text-slate-800">
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </div>
);
//Main Application Component

export default function Destination() {
  const [view, setView] = useState('countries'); // 'countries', 'universities', 'courses'
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  // Navigation handlers
  const goToUniversities = (country) => {
    setSelectedCountry(country);
    setView('universities');
    window.scrollTo(0, 0);
  };

  const goToCourses = (university) => {
    setSelectedUniversity(university);
    setView('courses');
    window.scrollTo(0, 0);
  };

  const goBack = () => {
    if (view === 'courses') setView('universities');
    if (view === 'universities') setView('countries');
  };

  // View: Country Selection
  const CountryView = () => (
    <div className="animate-fade-in">
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <h2 className="text-xl md:text-2xl font-medium text-gray-500 mb-2">Welcome To Study Abroad Journey!</h2>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Where Do You Plan To <span style={{ color: THEME.primary }}>Study?</span>
          </h1>
        </div>
        <div className="hidden md:block text-right">
          <p className="text-gray-400 text-sm">Select a destination to explore top universities</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {DATA.countries.map((country) => (
          <div 
            key={country.id}
            onClick={() => goToUniversities(country)}
            className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 transform hover:-translate-y-1"
          >
            {/* Image Container */}
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
              <img 
                src={country.image} 
                alt={country.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-3 right-3 z-20 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-gray-700 shadow-sm">
                {country.flag}
              </div>
            </div>

            {/* Content Container */}
            <div className="p-5 text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-[#0B7707] transition-colors">
                {country.name}
              </h3>
              <p className="text-xs text-gray-500 font-medium tracking-wide uppercase">
                {country.courses}
              </p>
              
              {/* Hover Indicator (Green Line) */}
              <div 
                className="h-1 w-0 group-hover:w-16 transition-all duration-300 mx-auto mt-4 rounded-full"
                style={{ backgroundColor: THEME.primary }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  //View: University Selection
  const UniversityView = () => {
    // Get universities or fallback to generic data for demo purposes if country not fully populated
    const universities = DATA.universities[selectedCountry.id] || [
      { id: 'u-gen-1', name: `University of ${selectedCountry.name}`, location: 'Capital City', rank: '#1 National', image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80' },
      { id: 'u-gen-2', name: `${selectedCountry.name} Tech Institute`, location: 'Tech Hub', rank: '#5 National', image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=600&q=80' },
      { id: 'u-gen-3', name: 'Royal College of Arts', location: 'Cultural Center', rank: '#3 National', image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=600&q=80' },
      { id: 'u-gen-4', name: 'National Science Academy', location: 'Science Park', rank: '#2 National', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80' },
    ];

    return (
      <div className="animate-fade-in">
        {/* Nav Header */}
        <div className="flex items-center mb-8">
          <button 
            onClick={goBack}
            className="flex items-center space-x-2 text-gray-500 hover:text-[#0B7707] transition-colors group"
          >
            <div className="p-2 rounded-full bg-white shadow-sm border border-gray-100 group-hover:border-[#0B7707]">
              <ArrowLeft size={20} />
            </div>
            <span className="font-medium">Back to Countries</span>
          </button>
        </div>

        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-900">
            Study in <span style={{ color: THEME.primary }}>{selectedCountry.name}</span> {selectedCountry.flag}
          </h1>
          <p className="text-gray-500 mt-2 max-w-2xl">{selectedCountry.description}</p>
        </div>

        {/* University Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {universities.map((uni) => (
            <div 
              key={uni.id}
              onClick={() => goToCourses(uni)}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden cursor-pointer group transition-all duration-300"
            >
              <div className="relative h-56">
                <img src={uni.image} alt={uni.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur rounded-md text-xs font-bold text-[#0B7707] shadow-sm flex items-center gap-1">
                    <Award size={12} /> {uni.rank}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#0B7707] transition-colors mb-2">
                  {uni.name}
                </h3>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <MapPin size={16} className="mr-1" />
                  {uni.location}
                </div>
                <div className="w-full py-3 mt-2 rounded-lg bg-gray-50 text-center text-sm font-semibold text-gray-600 group-hover:bg-[#0B7707] group-hover:text-white transition-all duration-300 flex justify-center items-center gap-2">
                  View Courses <ChevronRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // View: Courses Selection
  const CoursesView = () => {
    // Fallback courses
    const courses = DATA.courses[selectedUniversity.id] || [
      { id: 'c-1', title: 'Masters in Management', duration: '2 Years', fee: '$25,000/yr', type: 'Masters', intake: 'Sep / Jan' },
      { id: 'c-2', title: 'Bachelor of Computer Science', duration: '4 Years', fee: '$18,000/yr', type: 'Bachelors', intake: 'Sep' },
      { id: 'c-3', title: 'MBA - International Business', duration: '1 Year', fee: '$40,000', type: 'MBA', intake: 'Jan' },
      { id: 'c-4', title: 'Biotechnology Research', duration: '3 Years', fee: '$22,000/yr', type: 'Ph.D.', intake: 'Rolling' },
      { id: 'c-5', title: 'Digital Marketing & Analytics', duration: '1 Year', fee: '$15,000', type: 'Diploma', intake: 'May' },
    ];

    return (
      <div className="animate-fade-in">
        {/* Nav Header */}
        <div className="flex items-center mb-8">
          <button 
            onClick={goBack}
            className="flex items-center space-x-2 text-gray-500 hover:text-[#0B7707] transition-colors group"
          >
            <div className="p-2 rounded-full bg-white shadow-sm border border-gray-100 group-hover:border-[#0B7707]">
              <ArrowLeft size={20} />
            </div>
            <span className="font-medium">Back to Universities</span>
          </button>
        </div>

        {/* University Header Card */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-xl overflow-hidden shadow-md">
             <img src={selectedUniversity.image} alt={selectedUniversity.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2 justify-center md:justify-start">
              <h1 className="text-3xl font-bold text-gray-900">{selectedUniversity.name}</h1>
              <span className="px-3 py-1 bg-green-50 text-[#0B7707] rounded-full text-sm font-semibold border border-green-100 w-fit mx-auto md:mx-0">
                Top Rated
              </span>
            </div>
            <div className="flex items-center justify-center md:justify-start text-gray-500 mb-6 gap-4">
              <span className="flex items-center gap-1"><MapPin size={16} /> {selectedUniversity.location}</span>
              <span className="flex items-center gap-1"><Globe size={16} /> {selectedCountry.name}</span>
            </div>
            <div className="flex gap-4 justify-center md:justify-start">
              <div className="text-center px-4 py-2 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-400 uppercase font-bold">World Rank</p>
                <p className="font-bold text-gray-800">{selectedUniversity.rank.split('#')[1] || 'Top 100'}</p>
              </div>
              <div className="text-center px-4 py-2 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-400 uppercase font-bold">Satisfaction</p>
                <p className="font-bold text-gray-800">4.8/5.0</p>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <BookOpen className="text-[#0B7707]" /> Available Programs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-l-transparent hover:border-l-[#0B7707] hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <Badge className="bg-blue-50 text-blue-700">{course.type}</Badge>
                <div className="p-2 bg-gray-50 rounded-full">
                  <Star size={14} className="text-yellow-400 fill-yellow-400" />
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2 min-h-14">
                {course.title}
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Clock size={16} className="mr-3 text-gray-400" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <DollarSign size={16} className="mr-3 text-gray-400" />
                  <span>{course.fee}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar size={16} className="mr-3 text-gray-400" />
                  <span>Intake: <span className="font-medium text-gray-900">{course.intake}</span></span>
                </div>
              </div>

              <button className="w-full mt-6 py-2.5 rounded-lg border border-[#0B7707] text-[#0B7707] font-semibold hover:bg-[#0B7707] hover:text-white transition-all duration-300">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <PageContainer>
      {view === 'countries' && <CountryView />}
      {view === 'universities' && <UniversityView />}
      {view === 'courses' && <CoursesView />}
    </PageContainer>
  );
}