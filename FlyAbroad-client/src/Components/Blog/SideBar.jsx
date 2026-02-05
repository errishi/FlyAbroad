import { BookmarkPlus, Share2 } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <aside className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
                {/* Share Buttons */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Share Article</h3>
                    <div className="space-y-3">
                        <button className="w-full cursor-pointer flex items-center justify-center gap-2 bg-[#FD661F]/85 text-white px-4 py-2 rounded-lg hover:bg-[#FD661F] transition-colors">
                            <Share2 className="size-4" />
                            Share
                        </button>
                        <button className="w-full cursor-pointer flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                            <BookmarkPlus className="size-4" />
                            Save for Later
                        </button>
                    </div>
                </div>

                {/* CTA Card */}
                <div className="bg-linear-to-br from-[#0B7077]/50 to-[#0B7077] text-white rounded-xl p-6">
                    <h3 className="font-bold text-lg mb-2">Need Help?</h3>
                    <p className="text-sm text-white mb-4">
                        Get personalized guidance from our expert counselors
                    </p>
                    <Link
                        to="/contact"
                        className="block w-full bg-white text-[#FD661F] text-center px-4 py-2 rounded-lg font-semibold hover:bg-orange-50 transition-colors text-sm"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </aside>
    )
}

export default SideBar;