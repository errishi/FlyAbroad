import { ArrowRight } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const Help = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6 mt-6 text-center">
            <p className="text-gray-600 mb-4">
                Need help with your application?
            </p>
            <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-[#FD661F]/90 font-semibold hover:text-[#FD661F]/80 hover:bg-[#FD661F]/10 transition-all px-4 py-1 rounded-md"
            >
                Contact Our Counselors
                <ArrowRight className="size-4" />
            </Link>
        </div>
    )
}

export default Help;