import React, { useEffect, useMemo, useState } from "react";
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
  MoreHorizontal,
  Loader2
} from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import UniversityCard from "../Components/Home/UniversityCard";
import { universitiesApi } from "@/services/universitiesApi";
import PaginationComponent from "@/Components/PaginationComponent";

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

// 3. Main App
export default function App() {
  // 1. Initial Router & URL Setup
  const [searchParams, setSearchParams] = useSearchParams();
  const countryParam = searchParams.get('country') || '';
  
  // Read initial page from URL (fallback to 1 if it doesn't exist)
  const pageParam = parseInt(searchParams.get('page'), 10);
  const initialPage = isNaN(pageParam) ? 1 : pageParam;

  // 2. All State Hooks (MUST be declared before any conditional returns)
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCost, setSelectedCost] = useState(null);
  const [selectedSafety, setSelectedSafety] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryParam);

  const [allUniversities, setAllUniversities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 3. Fetch Data Logic
  const loadData = async () => {
    try {
      setIsLoading(true);

      const firstPageResponse = await universitiesApi.getAllUniversities(1);
      const firstPageData = firstPageResponse?.data || firstPageResponse || [];
      const totalPages = firstPageResponse?.metadata?.totalPages || 1;

      if (totalPages <= 1) {
        setAllUniversities(Array.isArray(firstPageData) ? firstPageData : []);
        return;
      }

      const pagePromises = [];
      for (let page = 2; page <= totalPages; page += 1) {
        pagePromises.push(universitiesApi.getAllUniversities(page));
      }

      const otherResponses = await Promise.all(pagePromises);
      const otherData = otherResponses.flatMap((response) => {
        const data = response?.data || response || [];
        return Array.isArray(data) ? data : [];
      });

      setAllUniversities([...(Array.isArray(firstPageData) ? firstPageData : []), ...otherData]);
    } catch (error) {
      console.error("Failed to fetch universities:", error);
      setAllUniversities([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch complete dataset once and filter/paginate on client side
  useEffect(() => {
    loadData();
  }, []);

  // Listen for browser Back/Forward navigation to update the UI
  useEffect(() => {
    const urlPage = parseInt(searchParams.get('page'), 10);
    const validPage = isNaN(urlPage) ? 1 : urlPage;
    if (validPage !== currentPage) {
      setCurrentPage(validPage);
    }
  }, [searchParams, currentPage]);

  useEffect(() => {
    const nextCountry = searchParams.get('country') || '';
    if (nextCountry !== selectedCountry) {
      setSelectedCountry(nextCountry);
    }
  }, [searchParams, selectedCountry]);

  // 4. Memoized Filter Logic (applies on complete dataset)
  const filteredData = useMemo(() => {
    return allUniversities.filter((uni) => {
      const query = searchTerm.toLowerCase().trim();

      // Helper to safely check if a string includes the query
      const safeInclude = (field, searchStr) =>
        field ? String(field).toLowerCase().includes(searchStr.toLowerCase()) : false;

      // 1. Search Logic (Including overview based on your API)
      const matchesSearch = !query ||
        safeInclude(uni.name, query) ||
        safeInclude(uni.city, query) ||
        safeInclude(uni.country, query) ||
        safeInclude(uni.overview, query);

      // 2. Category Logic
      const matchesCat = selectedCategories.length === 0 || selectedCategories.some(cat => {
        const categories = Array.isArray(uni.categories) ? uni.categories : [];
        return categories.some(category => safeInclude(category, cat));
      });

      // 3. Tag Logic
      const matchesTag = selectedTags.length === 0 || selectedTags.every(tag => {
        const apiTags = uni.tags || [];
        if (apiTags.length > 0) {
          return apiTags.some(t => String(t).toLowerCase() === tag.toLowerCase());
        }

        // Fallback for partial API payloads
        return safeInclude(uni.overview, tag) || safeInclude(uni.name, tag);
      });

      // 4. Exact/Standardized matches for dropdowns
      const matchesCost = !selectedCost || safeInclude(uni.costLevel, selectedCost);
      const matchesSafety = !selectedSafety || safeInclude(uni.safetyLevel, selectedSafety);
      const matchesCountry = !selectedCountry || safeInclude(uni.country, selectedCountry);

      return matchesSearch && matchesCat && matchesCountry && matchesTag && matchesCost && matchesSafety;
    });
  }, [searchTerm, selectedCategories, selectedTags, selectedCost, selectedSafety, selectedCountry, allUniversities]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategories, selectedTags, selectedCost, selectedSafety, selectedCountry]);

  const derivedMetadata = useMemo(() => {
    const totalUniversity = allUniversities.length;
    const itemPerPage = 24;
    const totalPages = Math.max(1, Math.ceil(filteredData.length / itemPerPage));
    const safeCurrentPage = Math.min(currentPage, totalPages);

    return {
      totalUniversity,
      currentPage: safeCurrentPage,
      totalPages,
      itemPerPage,
      hasNextPage: safeCurrentPage < totalPages,
      hasPrevPage: safeCurrentPage > 1,
    };
  }, [allUniversities.length, filteredData.length, currentPage]);

  const paginatedData = useMemo(() => {
    const start = (derivedMetadata.currentPage - 1) * derivedMetadata.itemPerPage;
    const end = start + derivedMetadata.itemPerPage;
    return filteredData.slice(start, end);
  }, [filteredData, derivedMetadata]);

  // 5. Handlers
  const toggle = (list, set, val) => set(list.includes(val) ? list.filter(v => v !== val) : [...list, val]);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > derivedMetadata.totalPages) return;
    setCurrentPage(newPage);
    
    // Update the URL so it can be restored on 'back' navigation
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      next.set('page', String(newPage));
      return next;
    });
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 6. EARLY RETURN (Must be placed exactly here, after all hooks are declared)
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB]">
        <div className="text-xl font-semibold text-slate-500 flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-[#0B7077]" />
          Loading universities...
        </div>
      </div>
    );
  }

  // 7. Main UI
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
              <button onClick={() => setSearchTerm("Moscow")} className="text-[#0B7077] hover:underline cursor-pointer">Moscow</button>
              <button onClick={() => setSearchTerm("Medical")} className="text-[#0B7077] hover:underline cursor-pointer">Medical</button>
              <button onClick={() => setSearchTerm("ITMO")} className="text-[#0B7077] hover:underline cursor-pointer">ITMO</button>
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
              className={`flex flex-col items-center gap-2 min-w-25 p-4 cursor-pointer rounded-2xl transition-all ${selectedCategories.length === 0 ? 'bg-[#0B7077] text-white shadow-lg' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
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
                  className={`flex flex-col items-center gap-2 min-w-25 p-4 cursor-pointer rounded-2xl transition-all ${isActive ? 'bg-[#0B7077] text-white shadow-lg' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
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
              className="flex flex-col items-center gap-2 min-w-25 p-4 rounded-2xl cursor-pointer transition-all bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-[#0B7077]"
            >
              <div className="p-2 rounded-xl bg-white shadow-sm">
                <MoreHorizontal className="h-6 w-6" />
              </div>
              <span className="text-xs font-bold whitespace-nowrap">See More</span>
            </button>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <div>
          {/* Results Grid */}
          <section>
            <div className="mb-8 flex items-end justify-between">
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Showing <span className="text-slate-900">{derivedMetadata?.itemPerPage || 0}</span> Results out of <span className="text-slate-900">{derivedMetadata?.totalUniversity || 0}</span> Universities
              </h2>
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Page <span className="text-slate-900">{derivedMetadata?.currentPage || 1}</span> of <span className="text-slate-900">{derivedMetadata?.totalPages || 1}</span>
              </h2>
            </div>

            {filteredData?.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-200 py-24 pb-10 text-center">
                <Search className="mb-4 h-12 w-12 text-slate-200" />
                <h3 className="text-xl font-bold text-slate-900">No match found</h3>
                <p className="mt-2 text-slate-500">Broaden your search or reset filters.</p>
              </div>
            ) : (
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {paginatedData.map(uni => (
                  <Link
                    key={uni._id || uni.id}
                    to={`/university/details/${uni._id || uni.id}`}
                    className="cursor-pointer shadow-sm hover:shadow-lg transition-all overflow-clip rounded-2xl group"
                  >
                    <UniversityCard university={uni} />
                  </Link>
                ))}
              </div>
            )}
          </section>

        </div>
      </main>
      
      <PaginationComponent metadata={derivedMetadata} onPageChange={handlePageChange} />
      
    </div>
  );
}