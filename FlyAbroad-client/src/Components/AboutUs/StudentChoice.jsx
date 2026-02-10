import { CheckCircle, Clock, Globe, Shield, TrendingUp, Users } from 'lucide-react';
import React from 'react'

const StudentChoice = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Why Students Choose Us
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        What sets us apart in the study abroad consulting industry
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="bg-blue-100 text-blue-600 size-12 rounded-lg flex items-center justify-center mb-4">
                            <Users className="size-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            Personalized Guidance
                        </h3>
                        <p className="text-gray-600">
                            Every student is unique. We provide one-on-one counseling tailored to your goals, background, and aspirations.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="bg-green-100 text-green-600 size-12 rounded-lg flex items-center justify-center mb-4">
                            <CheckCircle className="size-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            End-to-End Support
                        </h3>
                        <p className="text-gray-600">
                            From university selection to visa approval and pre-departure orientation, we're with you every step.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="bg-purple-100 text-purple-600 size-12 rounded-lg flex items-center justify-center mb-4">
                            <TrendingUp className="size-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            Proven Track Record
                        </h3>
                        <p className="text-gray-600">
                            95% success rate and 10,000+ students placed in top universities speak to our expertise.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="bg-orange-100 text-orange-600 size-12 rounded-lg flex items-center justify-center mb-4">
                            <Clock className="size-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            Time-Efficient Process
                        </h3>
                        <p className="text-gray-600">
                            Our streamlined systems and expert knowledge ensure faster processing and decision-making.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="bg-pink-100 text-pink-600 size-12 rounded-lg flex items-center justify-center mb-4">
                            <Shield className="size-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            Transparent & Ethical
                        </h3>
                        <p className="text-gray-600">
                            No hidden fees, honest advice, and ethical practices are the foundation of our service.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="bg-indigo-100 text-indigo-600 size-12 rounded-lg flex items-center justify-center mb-4">
                            <Globe className="size-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            Global Network
                        </h3>
                        <p className="text-gray-600">
                            Partnerships with 500+ universities across 25+ countries give you endless opportunities.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StudentChoice;