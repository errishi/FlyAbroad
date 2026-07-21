import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Loader2, MapPin, Search, Star } from "lucide-react";
import UniversityCard from "../Components/Home/UniversityCard";
import { universitiesApi } from "@/services/universitiesApi";
import PaginationComponent from "@/Components/PaginationComponent";

const PAGE_SIZE = 24;

const UniversityByCountry = () => {
  const { country } = useParams();

  const [allUniversities, setAllUniversities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const normalizedCountry = useMemo(() => {
    if (!country) return "";
    return decodeURIComponent(country).replace(/-/g, " ").trim();
  }, [country]);

  const formattedCountry = useMemo(() => {
    if (!normalizedCountry) return "";
    return normalizedCountry
      .toLowerCase()
      .split(/\s+/)
      .map((word) => (word ? word.charAt(0).toUpperCase() + word.slice(1) : ""))
      .join(" ");
  }, [normalizedCountry]);

  useEffect(() => {
    const loadUniversities = async () => {
      try {
        setIsLoading(true);

        const firstPageResponse = await universitiesApi.getAllUniversities(1);
        const firstPageData = firstPageResponse?.data || firstPageResponse || [];
        const totalPages = firstPageResponse?.metadata?.totalPages || 1;

        if (totalPages <= 1) {
          setAllUniversities(Array.isArray(firstPageData) ? firstPageData : []);
          return;
        }

        const otherPagePromises = [];
        for (let page = 2; page <= totalPages; page += 1) {
          otherPagePromises.push(universitiesApi.getAllUniversities(page));
        }

        const otherPageResponses = await Promise.all(otherPagePromises);
        const otherPageData = otherPageResponses.flatMap((response) => {
          const data = response?.data || response || [];
          return Array.isArray(data) ? data : [];
        });

        setAllUniversities([...(Array.isArray(firstPageData) ? firstPageData : []), ...otherPageData]);
      } catch (error) {
        console.error("Failed to fetch universities by country:", error);
        setAllUniversities([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadUniversities();
  }, []);

  const countryUniversities = useMemo(() => {
    const query = searchTerm.toLowerCase().trim();

    return allUniversities.filter((uni) => {
      const uniCountry = String(uni?.country || "").toLowerCase().trim();
      const isCountryMatch = normalizedCountry
        ? uniCountry === normalizedCountry.toLowerCase() || uniCountry.includes(normalizedCountry.toLowerCase())
        : true;

      if (!isCountryMatch) return false;

      if (!query) return true;

      return [uni?.name, uni?.city, uni?.country, uni?.overview]
        .filter(Boolean)
        .some((field) => String(field).toLowerCase().includes(query));
    });
  }, [allUniversities, normalizedCountry, searchTerm]);

  useEffect(() => {
    setCurrentPage(1);
  }, [normalizedCountry, searchTerm]);

  const paginatedUniversities = useMemo(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    return countryUniversities.slice(startIndex, startIndex + PAGE_SIZE);
  }, [countryUniversities, currentPage]);

  const paginationMetadata = useMemo(() => {
    const totalPages = Math.max(1, Math.ceil(countryUniversities.length / PAGE_SIZE));
    const safeCurrentPage = Math.min(currentPage, totalPages);

    return {
      currentPage: safeCurrentPage,
      totalPages,
      hasNextPage: safeCurrentPage < totalPages,
      hasPrevPage: safeCurrentPage > 1,
    };
  }, [countryUniversities.length, currentPage]);

  const handlePageChange = (page) => {
    if (page < 1 || page > paginationMetadata.totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-slate-900">
      <section className="bg-white border-b border-slate-200 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#0B7077]/5 px-4 py-1.5 text-[#0B7077]">
              <Star className="h-3.5 w-3.5 fill-[#0B7077]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Country Specific University List</span>
            </div>
            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Universities In <span className="text-[#0B7077]">{formattedCountry || "Selected Country"}</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
              Explore verified institutions and compare your options in one place.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-[#0B7077] to-[#085a61] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative flex items-center bg-white rounded-2xl shadow-xl overflow-hidden p-1">
                <div className="flex items-center flex-1 px-4">
                  <Search className="h-6 w-6 text-slate-300" />
                  <input
                    type="text"
                    placeholder="Search by university name, city or details..."
                    className="w-full border-none bg-transparent py-4 px-4 text-lg font-medium outline-none placeholder:text-slate-300"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            Showing <span className="text-slate-900">{countryUniversities.length}</span> universities
          </h2>
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            Page <span className="text-slate-900">{paginationMetadata.currentPage}</span> of <span className="text-slate-900">{paginationMetadata.totalPages}</span>
          </h2>
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-500">
            <MapPin className="h-3.5 w-3.5 text-[#0B7077]" />
            {formattedCountry || "All Countries"}
          </div>
        </div>

        {countryUniversities.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-200 py-24 pb-10 text-center">
            <Search className="mb-4 h-12 w-12 text-slate-200" />
            <h3 className="text-xl font-bold text-slate-900">No universities found</h3>
            <p className="mt-2 text-slate-500">Try changing the search text or check the country name in the URL.</p>
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {paginatedUniversities.map((uni) => (
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
      </main>

      <PaginationComponent metadata={paginationMetadata} onPageChange={handlePageChange} />
    </div>
  );
};

export default UniversityByCountry;