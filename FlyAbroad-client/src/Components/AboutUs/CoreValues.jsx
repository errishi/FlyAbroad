import { Globe, Heart, Lightbulb, Shield, Star, Users } from 'lucide-react';
import React from 'react'

  const values = [
    {
      icon: <Shield className="size-6" />,
      title: "Integrity",
      description: "We maintain the highest standards of honesty and transparency in all our dealings with students and partners."
    },
    {
      icon: <Heart className="size-6" />,
      title: "Student-Centric",
      description: "Every decision we make is focused on the best interests and success of our students."
    },
    {
      icon: <Star className="size-6" />,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service, from counseling to application support."
    },
    {
      icon: <Lightbulb className="size-6" />,
      title: "Innovation",
      description: "We continuously improve our processes and adopt new technologies to serve students better."
    },
    {
      icon: <Users className="size-6" />,
      title: "Collaboration",
      description: "We work closely with universities, students, and families to ensure the best outcomes."
    },
    {
      icon: <Globe className="size-6" />,
      title: "Global Vision",
      description: "We connect students to opportunities worldwide, breaking geographical barriers."
    }
  ];

const CoreValues = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Our Core Values
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        The principles that guide everything we do
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl border border-[#0B7077]/30 hover:border-[#0B7077] hover:shadow-lg transition-all">
                            <div className="bg-[#0B7077]/10 text-[#0B7077] size-12 rounded-lg flex items-center justify-center mb-4">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {value.title}
                            </h3>
                            <p className="text-gray-600">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CoreValues;