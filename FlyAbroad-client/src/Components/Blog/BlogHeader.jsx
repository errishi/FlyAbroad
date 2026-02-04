import React from 'react'

const BlogHeader = () => {
  return (
    <div className="bg-[url(/blog-header-image.svg)] lg:bg-cover md:bg-contain bg-cover lg:bg-no-repeat md:bg-repeat bg-no-repeat text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-[#0B7077]">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Study Abroad Insights
        </h1>
        <p className="text-xl text-[#0B7077]/70 max-w-2xl">
          Expert advice, tips, and guides to help you navigate your study abroad journey
        </p>
      </div>
    </div>
  )
}

export default BlogHeader;