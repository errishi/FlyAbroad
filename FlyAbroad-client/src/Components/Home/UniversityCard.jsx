import { ArrowRight, DollarSign, MapPin, Shield, Star, Users } from 'lucide-react';
import React from 'react'
import { ImageWithFallback } from '../ImageWithFallback';

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

const UniversityCard = ({ university }) => {
  const formatPopulation = (pop) => {
    if (pop == null) return 'N/A';
    if (typeof pop === 'number') return `${Math.round(pop / 1000)}K`;
    if (typeof pop === 'string') {
      const digits = pop.replace(/[^\d]/g, '');
      if (!digits) return pop;
      const num = parseInt(digits, 10);
      return num >= 1000 ? `${Math.round(num / 1000)}K` : `${num}`;
    }
    return String(pop);
  };

  const programsCount = university.programsOfferedCount ?? university.availablePrograms?.length ?? null;

  return (
    <div className='rounded-2xl overflow-hidden'>
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={university.image}
          alt={university.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {university.worldRanking && (
          <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-[#FD661F] shadow-md">
            #{university.worldRanking}
          </div>
        )}
      </div>

      <div className="p-6 rounded-2xl overflow-clip">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#FD661F]/80 transition-colors">
          {university.name}
        </h3>

        <div className="flex items-center gap-2 text-gray-600 mb-3">
          <MapPin className="size-4" />
          <span className="text-sm">{university.city}, {university.country}</span>
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {university.overview || university.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Users className="size-4" />
              <span>{formatPopulation(university.studentPopulation)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="size-4 text-yellow-500 fill-yellow-500" />
              <span>{university.universityType || 'University'}</span>
            </div>
          </div>
          <ArrowRight className="size-5 text-[#09585e] group-hover:translate-x-1 transition-transform" />
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="text-sm text-gray-600 mb-1">
            Available Programs
          </div>
          <div className="text-sm font-semibold text-gray-900">
            <p>{university.programsOfferedCount || programsCount || '10+'}+ Programs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityCard;