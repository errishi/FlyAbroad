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
    <section className="py-12 bg-[#F1F9F8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A3030] mb-4">
              Why Choose UneFly?
            </h2>
            <p className="text-base text-[#0A3030] max-w-2xl mx-auto">
              Comprehensive support throughout your entire study abroad journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-transparent p-4 rounded-md"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white shadow-md text-[#0B7077] p-3 rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0A3030] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#334646]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ChooseUneFly;