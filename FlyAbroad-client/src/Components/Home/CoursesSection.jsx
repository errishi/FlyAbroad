import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Clock, DollarSign, BookOpen, ArrowRight, TrendingUp } from "lucide-react";
import { Link } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: "Computer Science & Engineering",
    degree: "B.Tech",
    duration: "4 Years",
    fees: "$52,000/year",
    seats: 120,
    category: "Engineering",
    growth: "+35%",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Business Administration",
    degree: "MBA",
    duration: "2 Years",
    fees: "$74,000/year",
    seats: 80,
    category: "Management",
    growth: "+28%",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Data Science",
    degree: "M.Sc",
    duration: "2 Years",
    fees: "$48,000/year",
    seats: 60,
    category: "Science",
    growth: "+42%",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Mechanical Engineering",
    degree: "B.Tech",
    duration: "4 Years",
    fees: "$50,000/year",
    seats: 100,
    category: "Engineering",
    growth: "+18%",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "Medicine",
    degree: "MBBS",
    duration: "5.5 Years",
    fees: "$68,000/year",
    seats: 150,
    category: "Medical",
    growth: "+22%",
    color: "from-red-500 to-rose-500",
  },
  {
    id: 6,
    title: "Law",
    degree: "LLB",
    duration: "3 Years",
    fees: "$45,000/year",
    seats: 90,
    category: "Legal",
    growth: "+15%",
    color: "from-amber-500 to-yellow-500",
  },
];

export function CoursesSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        
        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {courses.map((course) => (
            <Card 
              key={course.id} 
              className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden hover:-translate-y-2 bg-white"
            >
              {/* Gradient Header */}
              <div className={`h-2 -mt-6 bg-linear-to-r ${course.color}`}></div>
              
              <CardHeader className="relative">
                <div className="flex items-start justify-between mb-3">
                  <Badge className={`bg-linear-to-r ${course.color} text-white border-0 shadow-lg`}>
                    {course.category}
                  </Badge>
                  <Badge variant="outline" className="border-gray-300">
                    {course.degree}
                  </Badge>
                </div>
                
                {/* Growth indicator */}
                <div className="absolute top-6 right-6 flex items-center gap-1 text-green-600 text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>{course.growth}</span>
                </div>
                
                <CardTitle className="text-xl mb-2 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </CardTitle>
                <p className="text-sm text-gray-500">Full-time degree program</p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Clock className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-sm text-gray-600">Duration</span>
                    </div>
                    <span className="text-sm">{course.duration}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                        <DollarSign className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-sm text-gray-600">Annual Fees</span>
                    </div>
                    <span className="text-sm">{course.fees}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="text-sm text-gray-600">Available Seats</span>
                    </div>
                    <span className="text-sm">{course.seats}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-linear-to-r from-[#09585e] to-[#0b7077] hover:from-[#0e8f98] hover:to-[#0f919b] text-white shadow-lg group cursor-pointer"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center">
        <Link to={"/courses"}>
          <Button size="lg" variant="outline" className="rounded-full cursor-pointer px-8 hover:bg-green-50 border-2 border-[#09585e] text-[#FD661F]">
            View All Programs
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
        </div>
      </div>
    </section>
  );
}