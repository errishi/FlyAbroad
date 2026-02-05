import React from 'react'
import StoryButton from '../StoryButton';
import { ArrowRight, Clock } from 'lucide-react';
import { ImageWithFallback } from '../ImageWithFallback';

const BlogCard = ({ blog }) => {
  return (
    <div>
      <div className="relative h-56 overflow-hidden">
        <ImageWithFallback
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[#0B7077] text-white px-3 py-1 rounded-full text-xs font-semibold">
            {blog.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0B7077] transition-colors line-clamp-2">
          {blog.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {blog.excerpt}
        </p>

        <div className="flex items-center gap-2 mb-4">
          <div className="size-8 rounded-full overflow-hidden">
            <ImageWithFallback
              src={blog.author.image}
              alt={blog.author.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-sm">
            <div className="font-medium text-gray-900">{blog.author.name}</div>
            <div className="text-gray-500 text-xs">{blog.author.role}</div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock className="size-4" />
            <span>{blog.readTime}</span>
          </div>
          <div className="flex items-center gap-2 text-[#0B7077] font-semibold text-sm group-hover:gap-3 transition-all">
            <StoryButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard;