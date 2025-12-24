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
import Badge from './Badge';
import UniversityCard from './UniversityCard';

// Data and constants (you can move these to a separate data.js file if preferred)
const UNIVERSITY_DATA = [
  // ... (paste the full UNIVERSITY_DATA array from the original code here)
];

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

export default function UniversitiesApp() {
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
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
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