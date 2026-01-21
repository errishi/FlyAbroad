import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Library, Wifi, Home, Utensils, Dumbbell, Bus, HeartPulse, Laptop, Sparkles } from "lucide-react";

const facilities = [
  {
    icon: Library,
    title: "Modern Library",
    description: "Over 2 million books and digital resources with 24/7 access",
    image: "https://images.unsplash.com/photo-1703236079592-4d2f222e8d2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaWJyYXJ5JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4NTc3MjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Laptop,
    title: "Research Labs",
    description: "State-of-the-art laboratories for all disciplines",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Home,
    title: "Hostel Accommodation",
    description: "Comfortable on-campus housing for 8,000+ students",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Utensils,
    title: "Cafeteria & Dining",
    description: "Multiple dining options with diverse cuisines",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Dumbbell,
    title: "Sports Complex",
    description: "Olympic-size pool, gym, and sports facilities",
    color: "from-red-500 to-rose-500",
  },
  {
    icon: HeartPulse,
    title: "Health Center",
    description: "24/7 medical facility with qualified doctors",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Campus-wide gigabit internet connectivity",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Bus,
    title: "Transportation",
    description: "Shuttle service connecting campus and city",
    color: "from-yellow-500 to-orange-500",
  },
];

export function FacilitiesSection() {
  return (
    <section className="my-10 py-15 px-6 bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-40 right-20 w-96 h-96 bg-green-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-orange-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white border-0 px-4 py-1.5">
            <Sparkles className="w-4 h-4 mr-1 inline" />
            World-Class Infrastructure
          </Badge>
          <h2 className="lg:text-5xl md:text-4xl text-2xl font-bold mb-4 drop-shadow-lg">
            Campus <span className="bg-[#FD661F] bg-clip-text text-transparent">Facilities</span>
          </h2>
          <p className="lg:text-lg md:text-lg text-[16px] text-gray-600 max-w-2xl mx-auto">
            Experience state-of-the-art amenities designed for your success
          </p>
        </div>
        
        {/* Featured Facility - Library */}
        <div className="mb-12">
          <Card className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-[400px] overflow-hidden group">
                <img
                  src={facilities[0].image}
                  alt={facilities[0].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-white/90 text-blue-600 border-0">
                  Featured Facility
                </Badge>
              </div>
              <div className="p-10 flex flex-col justify-center bg-linear-to-br from-blue-50 to-indigo-50">
                <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${facilities[0].color} flex items-center justify-center mb-6 shadow-xl`}>
                  <Library className="w-8 h-8 text-white" />
                </div>
                <h3 className="lg:text-3xl md:text-2xl text-xl font-bold mb-4">{facilities[0].title}</h3>
                <p className="text-gray-600 mb-6 lg:text-lg md:text-lg text-[16px]">{facilities[0].description}</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    Advanced digital catalog systems
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    Individual study rooms & collaborative spaces
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    24/7 access during exam periods
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    Extensive online databases & research journals
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Other Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.slice(1).map((facility, index) => {
            const Icon = facility.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all hover:-translate-y-2 border-0 shadow-lg bg-white relative overflow-hidden"
              >
                {/* Gradient line */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-linear-to-r ${facility.color}`}></div>
                
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${facility.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-[#FD661F] transition-colors">
                    {facility.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 leading-relaxed">{facility.description}</p>
                </CardContent>
                
                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-linear-to-br ${facility.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}