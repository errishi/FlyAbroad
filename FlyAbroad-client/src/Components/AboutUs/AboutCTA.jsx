import { ArrowRight } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const AboutCTA = () => {
    return (
        <section className="py-20 bg-[#09585e] text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    Ready to Write Your Success Story?
                </h2>
                <p className="text-xl mb-8">
                    Join thousands of students who have achieved their dreams with our expert guidance
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/apply"
                        className="bg-white text-[#FD661F] px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors inline-flex items-center justify-center gap-2"
                    >
                        Start Your Application
                        <ArrowRight className="size-5" />
                    </Link>
                    <Link
                        to="/contact"
                        className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                    >
                        Schedule Consultation
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default AboutCTA;