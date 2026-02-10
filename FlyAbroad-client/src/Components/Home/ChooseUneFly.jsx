import { Award, BookOpen, FileCheck, Plane, Search, Users } from 'lucide-react';
import React from 'react'

const features = [
    {
      icon: <Search className="size-6" />,
      title: "University Search",
      description: "Browse thousands of programs across top universities worldwide"
    },
    {
      icon: <FileCheck className="size-6" />,
      title: "Application Support",
      description: "Complete guidance from documentation to submission"
    },
    {
      icon: <Users className="size-6" />,
      title: "Expert Counseling",
      description: "Get personalized advice from education counselors"
    },
    {
      icon: <Plane className="size-6" />,
      title: "Visa Assistance",
      description: "Complete support for visa documentation and interview prep"
    },
    {
      icon: <Award className="size-6" />,
      title: "Scholarship Info",
      description: "Access information about scholarships and financial aid"
    },
    {
      icon: <BookOpen className="size-6" />,
      title: "Pre-departure",
      description: "Orientation and preparation for your study abroad journey"
    }
  ];

const ChooseUneFly = () => {
  return (
    <section className="py-18 border bg-[#09585e]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose UneFly?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive support throughout your entire study abroad journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border border-[#0B7077]/30 hover:border-[#0B7077] hover:shadow-lg transition-all"
              >
                <div className="bg-[#0B7077]/10 text-[#0B7077] size-12 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ChooseUneFly;