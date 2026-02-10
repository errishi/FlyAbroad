import { Eye, Target } from 'lucide-react';
import React from 'react'

const MissionVision = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-linear-to-br from-[#FD661F]/10 to-[#FD661F]15 p-8 rounded-2xl border border-[#FD661F]/50">
                        <div className="bg-[#FD661F] text-white size-16 rounded-xl flex items-center justify-center mb-6">
                            <Target className="size-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                        <p className="text-gray-700 leading-relaxed">
                            To provide comprehensive, personalized guidance that empowers students to achieve their international education goals. We are committed to making the study abroad process transparent, accessible, and successful for every student we serve.
                        </p>
                    </div>

                    <div className="bg-linear-to-br from-[#0B7077]/10 to-[#0B7077]/15 p-8 rounded-2xl border border-[#0B7077]/50">
                        <div className="bg-[#0B7077] text-white size-16 rounded-xl flex items-center justify-center mb-6">
                            <Eye className="size-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                        <p className="text-gray-700 leading-relaxed">
                            To be the world's most trusted partner in international education, creating a global community of successful students who contribute positively to society and break barriers through knowledge and cross-cultural understanding.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MissionVision;