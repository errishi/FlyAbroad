import { Search } from 'lucide-react';
import React from 'react'

const BlogSearch = ({searchQuery, setSearchQuery}) => {
    return (
        <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search articles by title, content, or tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B7077] shadow-sm"
                />
            </div>
        </div>
    )
}

export default BlogSearch;