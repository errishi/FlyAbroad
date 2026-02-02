import React, { useMemo, useState } from "react";
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
import { Link, useSearchParams } from "react-router-dom";
import UniversityCard from "../Components/Home/UniversityCard";
import UNIVERSITY_DATA from "@/Components/alluniversitiesdata";


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
// 3. Main App
// -----------------------

export default function App() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCost, setSelectedCost] = useState(null);
  const [selectedSafety, setSelectedSafety] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const countryParam = searchParams.get('country') || '';
  const [selectedCountry, setSelectedCountry] = useState(countryParam);

  const filteredData = useMemo(() => {
    return ALL_UNIVERSITIES.filter((uni) => {
      const query = searchTerm.toLowerCase().trim();
      const matchesSearch = !query || 
        uni.name.toLowerCase().includes(query) || 
        uni.city.toLowerCase().includes(query) ||
        uni.country.toLowerCase().includes(query) ||
        uni.region.toLowerCase().includes(query);

      const matchesCat = selectedCategories.length === 0 || 
        selectedCategories.every(cat => uni.categories.includes(cat));

      const matchesTag = selectedTags.length === 0 || 
        selectedTags.every(tag => uni.tags.includes(tag));

      const matchesCost = !selectedCost || uni.costLevel === selectedCost;
      const matchesSafety = !selectedSafety || uni.safetyLevel === selectedSafety;
      const matchesCountry = !selectedCountry || uni.country === selectedCountry;

      return matchesSearch && matchesCat && matchesCountry && matchesTag && matchesCost && matchesSafety;
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
        <div>
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
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {filteredData.map(uni => (
                  <Link
                    key={uni.id}
                    to={`/university/${uni.id}`}
                    className="cursor-pointer shadow-sm hover:shadow-lg transition-all overflow-clip rounded-2xl group"
                  >
                    <UniversityCard key={uni.id} university={uni} />
                  </Link>
                ))}
              </div>
            )}
          </section>

        </div>
      </main>
    </div>
  );
}