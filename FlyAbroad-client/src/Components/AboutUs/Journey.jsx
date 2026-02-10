import { CheckCircle } from 'lucide-react';
import React from 'react'

const milestones = [
    { year: "2009", event: "Founded UneFly.com with a vision to democratize international education" },
    { year: "2012", event: "Reached milestone of 1,000 students placed in top universities" },
    { year: "2015", event: "Expanded partnerships to 200+ universities across 15 countries" },
    { year: "2018", event: "Opened 5 regional offices to serve students better" },
    { year: "2021", event: "Launched digital platform for seamless application tracking" },
    { year: "2024", event: "Celebrated 10,000+ successful student placements globally" }
  ];

const Journey = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Our Journey
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Key milestones that shaped our story
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#0B7077]/50"></div>

                    <div className="space-y-12">
                        {milestones.map((milestone, index) => (
                            <div key={index} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 inline-block max-w-md">
                                        <div className="text-2xl font-bold text-[#0B7077] mb-2">{milestone.year}</div>
                                        <p className="text-gray-700">{milestone.event}</p>
                                    </div>
                                </div>

                                <div className="relative flex items-center justify-center">
                                    <div className="bg-[#0B7077] text-white size-12 rounded-full flex items-center justify-center font-bold z-10 shadow-lg">
                                        <CheckCircle className="size-6" />
                                    </div>
                                </div>

                                <div className="flex-1 hidden lg:block"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Journey;