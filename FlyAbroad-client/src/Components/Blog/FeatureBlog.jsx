import { ArrowRight, Clock, User } from 'lucide-react';
import React from 'react'
import { ImageWithFallback } from '../ImageWithFallback';
import StoryButton from '../StoryButton';

const FeatureBlog = ({featuredBlog}) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid lg:grid-cols-2 gap-0 hover:shadow-xl transition-shadow group">
            <div className="relative h-80 lg:h-auto">
                <ImageWithFallback
                    src={featuredBlog.image}
                    alt={featuredBlog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-[#0B7077] text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {featuredBlog.category}
                    </span>
                </div>
            </div>

            <div className="p-8 lg:p-10 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#0B7077] transition-colors">
                    {featuredBlog.title}
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {featuredBlog.excerpt}
                </p>

                <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                        <User className="size-4" />
                        <span>{featuredBlog.author.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="size-4" />
                        <span>{featuredBlog.readTime}</span>
                    </div>
                </div>

                <div className="inline-flex items-center gap-2 text-[#0B7077] font-semibold group-hover:gap-3 transition-all">
                    <StoryButton />
                </div>
            </div>
        </div>
    )
}

export default FeatureBlog;