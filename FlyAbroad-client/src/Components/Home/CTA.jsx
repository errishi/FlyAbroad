import React from 'react'
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-20 bg-gray-200 text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="lg:text-lg text-black mb-8">
            Join thousands of students who have achieved their dream of studying abroad with our support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/apply" 
              className="bg-white text-[#FD661F] px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
            >
              Apply Now
            </Link>
            <Link 
              to="/contact" 
              className="hover:bg-[#0B585C] border-2 border-[#127379] text-gray-100 px-8 py-3 rounded-lg font-semibold bg-[#127379c1]  hover:text-white transition-colors"
            >
              Talk to Counselor
            </Link>
          </div>
        </div>
      </section>
  )
}

export default CTA;