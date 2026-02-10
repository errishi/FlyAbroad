import { CheckCircle } from 'lucide-react';
import React from 'react'
import { ImageWithFallback } from '../ImageWithFallback';

const Partners = () => {
    return (
        <div>
            {/* Partnership Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="rounded-2xl overflow-hidden lg:mx-10 md:mx-10 shadow-2xl">
                                <ImageWithFallback
                                    src="/partners.png"
                                    alt="Partnership"
                                    className="w-full h-125 object-cover"
                                />
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                                Strong University Partnerships
                            </h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
                                <p>
                                    Our success is built on strong, trusted relationships with over 500 universities across the globe. These partnerships ensure our students receive priority consideration and exclusive opportunities.
                                </p>
                                <p>
                                    We work closely with admissions teams to stay updated on requirements, scholarships, and program changes, ensuring our students always have the most current and accurate information.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="size-6 text-[#FD661F] shrink-0 mt-1" />
                                    <div>
                                        <div className="font-semibold text-gray-900">Direct University Connections</div>
                                        <div className="text-sm text-gray-600">Fast-track admissions through established relationships</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="size-6 text-[#FD661F] shrink-0 mt-1" />
                                    <div>
                                        <div className="font-semibold text-gray-900">Exclusive Scholarships</div>
                                        <div className="text-sm text-gray-600">Access to partner university scholarship programs</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="size-6 text-[#FD661F] shrink-0 mt-1" />
                                    <div>
                                        <div className="font-semibold text-gray-900">Updated Information</div>
                                        <div className="text-sm text-gray-600">Real-time updates on programs and requirements</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Partners;