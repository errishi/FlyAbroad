import React from 'react';
import { MapPin, DollarSign, Shield } from "lucide-react";

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

export default UniversityCard;