import React, { useMemo, useState } from "react";
import Universities from "../Components/Universities/Universities.json";
import { 
  Search, 
  MapPin, 
  Shield, 
  DollarSign, 
  Filter, 
  GraduationCap, 
  Star, 
  Info, 
  GraduationCap as School,
  Stethoscope,
  Cpu,
  Palette,
  Briefcase,
  Scale,
  Sprout,
  ChevronRight,
  MoreHorizontal
} from "lucide-react";


const UNIVERSITY_DATA = [
  {
    id: "msu",
    name: "Lomonosov Moscow State University",
    city: "Moscow",
    region: "Moscow",
    country: "Russia",
    categories: ["engineering", "it", "arts", "business"],
    tags: ["top", "research"],
    image: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800",
    costLevel: "high",
    safetyLevel: "high",
  },
  {
    id: "abakan-state-institute-of-education",
    name: "Abakan State Institute of Education",
    city: "Abakan",
    region: "Republic of Khakassia",
    country: "Russia",
    categories: ["arts"],
    tags: ["safest"],
    image: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=800",
    costLevel: "low",
    safetyLevel: "high"
  },
  {
    id: "abakan-state-university-of-pedagogy",
    name: "Abakan State University of Pedagogy",
    city: "Abakan",
    region: "Republic of Khakassia",
    country: "Russia",
    categories: ["arts"],
    tags: ["safest"],
    image: "https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=800",
    costLevel: "low",
    safetyLevel: "high"
  },
  {
    id: "khakassian-state-university",
    name: "Khakassian State University",
    city: "Abakan",
    region: "Republic of Khakassia",
    country: "Russia",
    categories: ["arts", "business"],
    tags: ["cheapest", "safest"],
    image: "https://images.pexels.com/photos/207682/pexels-photo-207682.jpeg?auto=compress&cs=tinysrgb&w=800",
    costLevel: "low",
    safetyLevel: "high"
  },
  {
    id: "angarsk-state-technical-academy",
    name: "Angarsk State Technical Academy",
    city: "Angarsk",
    region: "Irkutsk Oblast",
    country: "Russia",
    categories: ["engineering", "it"],
    tags: ["cheapest"],
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    costLevel: "low",
    safetyLevel: "medium"
  },
  {
    id: "arkhangelsk-state-technical-university",
    name: "Arkhangelsk State Technical University",
    city: "Arkhangelsk",
    region: "Arkhangelsk Oblast",
    country: "Russia",
    categories: ["engineering"],
    tags: [],
    image: "https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg?auto=compress&cs=tinysrgb&w=800",
    costLevel: "medium",
    safetyLevel: "medium"
  },
  {
    id: "northern-arctic-federal-university",
    name: "Northern (Arctic) Federal University",
    city: "Arkhangelsk",
    region: "Arkhangelsk Oblast",
    country: "Russia",
    categories: ["engineering", "it", "arts", "business"],
    tags: ["top", "research"],
    image: "https://images.pexels.com/photos/3803855/pexels-photo-3803855.jpeg?auto=compress&cs=tinysrgb&w=800",
    costLevel: "medium",
    safetyLevel: "medium"
  },
  {
    id: "northern-state-medical-university",
    name: "Northern State Medical University",
    city: "Arkhangelsk",
    region: "Arkhangelsk Oblast",
    country: "Russia",
    categories: ["medical"],
    tags: [],
    image: "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg?auto=compress&cs=tinysrgb&w=800",
    costLevel: "medium",
    safetyLevel: "medium"
  },
  {
    id: "armavir-state-pedagogical-university",
    name: "Armavir State Pedagogical University",
    city: "Armavir",
    region: "Krasnodar Krai",
    country: "Russia",
    categories: ["arts"],
    tags: ["cheapest"],
    image: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800",
    costLevel: "low",
    safetyLevel: "medium"
  },
  {
    id: "astrakhan-state-technical-university",
    name: "Astrakhan State Technical University",
    city: "Astrakhan",
    region: "Astrakhan Oblast",
    country: "Russia",
    categories: ["engineering"],
    tags: ["cheapest"],
    image: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=800",
    costLevel: "low",
    safetyLevel: "medium"
  },
  {
    id: "astrakhan-state-university",
    name: "Astrakhan State University",
    city: "Astrakhan",
    region: "Astrakhan Oblast",
    country: "Russia",
    categories: ["arts", "business"],
    tags: ["cheapest"],
    image: "https://images.pexels.com/photos/2893670/pexels-photo-2893670.jpeg?auto=compress&cs=tinysrgb&w=800",
    costLevel: "low",
    safetyLevel: "medium"
  },
  {
    id: "astrakhan-state-medical-academy",
    name: "Astrakhan State Medical Academy",
    city: "Astrakhan",
    region: "Astrakhan Oblast",
    country: "Russia",
    categories: ["medical"],
    tags: ["cheapest"],
    image: "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg?auto=compress&cs=tinysrgb&w=800",
    costLevel: "low",
    safetyLevel: "medium"
  },
  {
    id: "altai-state-technical-university",
    name: "Altai State Technical University",
    city: "Barnaul",
    region: "Altai Krai",
    country: "Russia",
    categories: ["engineering", "it"],
    tags: ["cheapest"],
    image: "https://images.pexels.com/photos/159539/library-la-trobe-study-students-159539.jpeg?auto=compress&cs=tinysrgb&w=800",
    costLevel: "low",
    safetyLevel: "medium"
  },
  {
    id: "belgorod-state-technological-university",
    name: "Belgorod State Technological University",
    city: "Belgorod",
    region: "Belgorod Oblast",
    country: "Russia",
    categories: ["engineering"],
    tags: [],
    image: "https://images.pexels.com/photos/159775/library-book-bookshelf-read-159775.jpeg?auto=compress&cs=tinysrgb&w=800",
    costLevel: "medium",
    safetyLevel: "medium"
  },
  {
    id: "sechenov-med-moscow",
    name: "Sechenov First Moscow State Medical University",
    city: "Moscow",
    region: "Moscow",
    country: "Russia",
    categories: ["medical"],
    tags: ["top", "research"],
    image: "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    costLevel: "high",
    safetyLevel: "high"
  },
  {
    id: "itmo-uni-spb",
    name: "ITMO University",
    city: "Saint Petersburg",
    region: "Saint Petersburg",
    country: "Russia",
    categories: ["it", "engineering"],
    tags: ["top", "research"],
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    costLevel: "high",
    safetyLevel: "high"
  },
  {
    id: "spb-state-university",
    name: "Saint Petersburg State University",
    city: "Saint Petersburg",
    region: "Saint Petersburg",
    country: "Russia",
    categories: ["engineering", "it", "arts", "business"],
    tags: ["top", "research"],
    image: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg",
    costLevel: "high",
    safetyLevel: "high"
  }
];

// Combine provided lists and sort alphabetically by name
const ALL_UNIVERSITIES = [...UNIVERSITY_DATA].sort((a, b) => a.name.localeCompare(b.name));

const CATEGORY_OPTIONS = [
  { id: "medical", label: "Medical", icon: Stethoscope },
  { id: "engineering", label: "Engineering", icon: School },
  { id: "it", label: "IT & Tech", icon: Cpu },
  { id: "arts", label: "Arts & Humanities", icon: Palette },
  { id: "business", label: "Business", icon: Briefcase },
  { id: "law", label: "Law", icon: Scale },
  { id: "agriculture", label: "Agriculture", icon: Sprout },
];

const TAG_OPTIONS = ["cheapest", "safest", "top", "research"];
const COST_LEVELS = ["low", "medium", "high"];
const SAFETY_LEVELS = ["low", "medium", "high"];

// -----------------------
// 2. Components
// -----------------------

const Badge = ({ children, variant = "default" }) => {
  const variants = {
    default: "bg-slate-100 text-slate-700",
    accent: "bg-[#0B7077]/10 text-[#0B7077]",
  };
  return (
    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${variants[variant]}`}>
      {children}
    </span>
  );
};

const UniversityCard = ({ university }) => (
  <div className="group relative flex flex-col rounded-2xl border-2 border-transparent bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#0B7077] hover:shadow-xl overflow-hidden">
    <div className="relative h-44 w-full overflow-hidden bg-slate-100">
      <img
        src={university.image}
        alt={university.name}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        onError={(e) => { e.target.src = "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg"; }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </div>

    <div className="flex flex-1 flex-col p-5">
      <div className="mb-2">
        <h3 className="line-clamp-2 text-md font-extrabold leading-tight text-slate-900 group-hover:text-[#0B7077]">
          {university.name}
        </h3>
        <div className="mt-2 flex items-center gap-1 text-sm text-slate-500">
          <MapPin className="h-3.5 w-3.5 text-[#0B7077]" />
          <span className="truncate">{university.city}, {university.region}</span>
        </div>
      </div>

      <div className="mb-4 mt-2 flex flex-wrap gap-1.5">
        {university.categories.map((cat) => (
          <Badge key={cat}>{cat}</Badge>
        ))}
        {university.tags.map((tag) => (
          <Badge key={tag} variant="accent">{tag}</Badge>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-semibold">
        <div className="flex items-center gap-1.5 text-slate-600">
          <DollarSign className="h-3.5 w-3.5 text-[#0B7077]" />
          <span className="capitalize">{university.costLevel}</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-600">
          <Shield className="h-3.5 w-3.5 text-[#0B7077]" />
          <span className="capitalize">{university.safetyLevel}</span>
        </div>
      </div>
    </div>
  </div>
);

// -----------------------
// 3. Main App
// -----------------------

export default function App() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCost, setSelectedCost] = useState(null);
  const [selectedSafety, setSelectedSafety] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredData = useMemo(() => {
    return ALL_UNIVERSITIES.filter((uni) => {
      const query = searchTerm.toLowerCase().trim();
      const matchesSearch = !query || 
        uni.name.toLowerCase().includes(query) || 
        uni.city.toLowerCase().includes(query) ||
        uni.region.toLowerCase().includes(query);

      const matchesCat = selectedCategories.length === 0 || 
        selectedCategories.every(cat => uni.categories.includes(cat));

      const matchesTag = selectedTags.length === 0 || 
        selectedTags.every(tag => uni.tags.includes(tag));

      const matchesCost = !selectedCost || uni.costLevel === selectedCost;
      const matchesSafety = !selectedSafety || uni.safetyLevel === selectedSafety;

      return matchesSearch && matchesCat && matchesTag && matchesCost && matchesSafety;
    });
  }, [searchTerm, selectedCategories, selectedTags, selectedCost, selectedSafety]);

  const toggle = (list, set, val) => set(list.includes(val) ? list.filter(v => v !== val) : [...list, val]);

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-slate-900">

      {/* Hero Section with Search Bar */}
      <section className="bg-white border-b border-slate-200 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#0B7077]/5 px-4 py-1.5 text-[#0B7077]">
              <Star className="h-3.5 w-3.5 fill-[#0B7077]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Verified Partner Institutions</span>
            </div>
            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Search Your <span className="text-[#0B7077]">Ideal University</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
              Access the complete directory of Russian higher education. Filter by city, safety, and tuition levels.
            </p>
          </div>

          {/* Main Search Bar */}
          <div className="mx-auto mt-10 max-w-3xl">
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-[#0B7077] to-[#085a61] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative flex items-center bg-white rounded-2xl shadow-xl overflow-hidden p-1">
                <div className="flex items-center flex-1 px-4">
                  <Search className="h-6 w-6 text-slate-300" />
                  <input 
                    type="text" 
                    placeholder="Enter university name, city or region..."
                    className="w-full border-none bg-transparent py-4 px-4 text-lg font-medium outline-none placeholder:text-slate-300"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                  />
                </div>
                <button className="hidden sm:flex items-center gap-2 bg-[#FD661F] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#f57e47] cursor-pointer transition-all">
                  Search <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs font-bold text-slate-400">
              <span>Popular:</span>
              <button onClick={() => setSearchTerm("Moscow")} className="text-[#0B7077] hover:underline">Moscow</button>
              <button onClick={() => setSearchTerm("Medical")} className="text-[#0B7077] hover:underline">Medical</button>
              <button onClick={() => setSearchTerm("ITMO")} className="text-[#0B7077] hover:underline">ITMO</button>
            </div>
          </div>
        </div>
      </section>

      {/* Category List Navigation */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar py-6">
            <button 
              onClick={() => setSelectedCategories([])}
              className={`flex flex-col items-center gap-2 min-w-25 p-4 rounded-2xl transition-all ${selectedCategories.length === 0 ? 'bg-[#0B7077] text-white shadow-lg' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
            >
              <div className="p-2 rounded-xl bg-white/20">
                <School className="h-6 w-6" />
              </div>
              <span className="text-xs font-bold">All Fields</span>
            </button>
            {CATEGORY_OPTIONS.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategories.includes(cat.id);
              return (
                <button 
                  key={cat.id}
                  onClick={() => toggle(selectedCategories, setSelectedCategories, cat.id)}
                  className={`flex flex-col items-center gap-2 min-w-25 p-4 rounded-2xl transition-all ${isActive ? 'bg-[#0B7077] text-white shadow-lg' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
                >
                  <div className={`p-2 rounded-xl ${isActive ? 'bg-white/20' : 'bg-white shadow-sm'}`}>
                    <Icon className={`h-6 w-6 ${isActive ? 'text-white' : 'text-[#0B7077]'}`} />
                  </div>
                  <span className="text-xs font-bold whitespace-nowrap">{cat.label}</span>
                </button>
              );
            })}
            {/* See More Icon Button */}
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="flex flex-col items-center gap-2 min-w-25 p-4 rounded-2xl transition-all bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-[#0B7077]"
            >
              <div className="p-2 rounded-xl bg-white shadow-sm">
                <MoreHorizontal className="h-6 w-6" />
              </div>
              <span className="text-xs font-bold whitespace-nowrap">See More</span>
            </button>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr]">
          
          {/* Sidebar Filters */}
          <aside className={`${isSidebarOpen ? 'block' : 'hidden'} fixed inset-0 z-50 bg-white p-6 lg:relative lg:z-0 lg:block lg:bg-transparent lg:p-0 overflow-y-auto`}>
            <div className="flex items-center justify-between lg:hidden mb-6">
              <h2 className="text-xl font-bold">Refine Results</h2>
              <button onClick={() => setIsSidebarOpen(false)} className="rounded-lg p-2 bg-slate-100 text-slate-600">✕</button>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="mb-4 text-xs font-black uppercase tracking-widest text-slate-400">Field of Study (Advanced)</h3>
                <div className="grid grid-cols-1 gap-2">
                  {CATEGORY_OPTIONS.map(opt => (
                    <label key={opt.id} className="flex cursor-pointer items-center gap-3 text-sm text-slate-600 hover:text-[#0B7077]">
                      <input 
                        type="checkbox" 
                        className="h-4 w-4 rounded border-slate-300 text-[#0B7077] focus:ring-[#0B7077]"
                        checked={selectedCategories.includes(opt.id)}
                        onChange={() => toggle(selectedCategories, setSelectedCategories, opt.id)}
                      />
                      <span className="capitalize">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-xs font-black uppercase tracking-widest text-slate-400">Institutional Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {TAG_OPTIONS.map(opt => (
                    <button 
                      key={opt}
                      onClick={() => toggle(selectedTags, setSelectedTags, opt)}
                      className={`rounded-full border px-3 py-1 text-xs font-bold capitalize transition-all ${selectedTags.includes(opt) ? 'border-[#0B7077] bg-[#0B7077] text-white' : 'border-slate-200 text-slate-500 hover:border-[#0B7077]'}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-xs font-black uppercase tracking-widest text-slate-400">Tuition Range</h3>
                <div className="flex gap-2">
                  {COST_LEVELS.map(opt => (
                    <button 
                      key={opt}
                      onClick={() => setSelectedCost(selectedCost === opt ? null : opt)}
                      className={`flex-1 rounded-lg border py-2 text-xs font-bold capitalize transition-all ${selectedCost === opt ? 'border-[#0B7077] bg-[#0B7077]/10 text-[#0B7077]' : 'border-slate-200 text-slate-400 hover:border-[#0B7077]'}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0B7077]/5 border border-[#0B7077]/10">
                <div className="flex items-center gap-2 mb-2">
                  <Info className="h-4 w-4 text-[#0B7077]" />
                  <span className="text-xs font-bold text-[#0B7077]">Safety Note</span>
                </div>
                <p className="text-[11px] leading-relaxed text-[#0B7077]/70">
                  Data updated for 2025. All "Safest" tags are verified against regional security indexes.
                </p>
              </div>

              <button 
                onClick={() => {
                  setSelectedCategories([]);
                  setSelectedTags([]);
                  setSelectedCost(null);
                  setSelectedSafety(null);
                  setSearchTerm("");
                }}
                className="w-full rounded-xl border border-slate-200 py-3 text-xs font-bold text-slate-400 hover:bg-slate-50 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </aside>

          {/* Results Grid */}
          <section>
            <div className="mb-8 flex items-end justify-between">
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Showing <span className="text-slate-900">{filteredData.length}</span> Results
              </h2>
            </div>

            {filteredData.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-200 py-24 text-center">
                <Search className="mb-4 h-12 w-12 text-slate-200" />
                <h3 className="text-xl font-bold text-slate-900">No match found</h3>
                <p className="mt-2 text-slate-500">Broaden your search or reset filters.</p>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 cursor-pointer">
                {filteredData.map(uni => (
                  <UniversityCard key={uni.id} university={uni} />
                ))}
              </div>
            )}
          </section>

        </div>
      </main>
    </div>
  );
}