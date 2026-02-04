import React from 'react'

const CategoryBlog = ({categories, selectedCategory, setSelectedCategory}) => {
    return (
        <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-5 py-2 rounded-full cursor-pointer font-medium transition-all ${selectedCategory === category
                            ? 'bg-[#0B7077] text-white shadow-md'
                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    )
}

export default CategoryBlog;