import React from 'react'

const NewsletterSub = () => {
    return (
        <div className="mt-16 bg-linear-to-r from-[#0B7077]/80 to-[#0B7077] rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-white mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest study abroad tips, guides, and updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white border text-white"
                />
                <button className="bg-white cursor-pointer text-[#FD661F] px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
                    Subscribe
                </button>
            </div>
        </div>
    )
}

export default NewsletterSub;