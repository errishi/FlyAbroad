import { useState } from 'react';
import { Link } from 'react-router';
import { Search } from 'lucide-react';
import { blogs, categories } from '@/Components/Blog/BlogData';
import BlogSearch from '@/Components/Blog/BlogSearch';
import CategoryBlog from '@/Components/Blog/CategoryBlog';
import FeatureBlog from '@/Components/Blog/FeatureBlog';
import BlogCard from '@/Components/Blog/BlogCard';
import BlogHeader from '@/Components/Blog/BlogHeader';
import NewsletterSub from '@/Components/Blog/NewsletterSub';

export default function Blogs() {
    const [selectedCategory, setSelectedCategory] = useState('All Articles');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredBlogs = blogs.filter(blog => {
        const matchesCategory = selectedCategory === 'All Articles' || blog.category === selectedCategory;
        const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    const featuredBlog = blogs[0];

    return (
        <div className="min-h-screen bg-gray-50">

            {/* Header */}
            <BlogHeader />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Search Bar */}
                <BlogSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

                {/* Category Filter */}
                <div className="mb-12">
                    <CategoryBlog categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                </div>

                {/* Featured Article */}
                {selectedCategory === 'All Articles' && !searchQuery && (
                    <div className="mb-16">
                        <div className="text-center mb-8">
                            <span className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                Featured Article
                            </span>
                        </div>

                        <Link
                            to={`/blog/${featuredBlog.id}`}>
                            <FeatureBlog featuredBlog={featuredBlog} />
                        </Link>
                    </div>
                )}

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-gray-600">
                        {filteredBlogs.length === 0 ? 'No articles found' :
                            `Showing ${filteredBlogs.length} ${filteredBlogs.length === 1 ? 'article' : 'articles'}`}
                    </p>
                </div>

                {/* Blog Grid */}
                {filteredBlogs.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredBlogs.map((blog) => (
                            <Link
                                key={blog.id}
                                to={`/blog/${blog.id}`}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all group"
                            >
                                <BlogCard blog={blog} />
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                        <div className="text-gray-400 mb-4">
                            <Search className="size-16 mx-auto" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            No articles found
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Try adjusting your search or filter to find what you're looking for
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('All Articles');
                            }}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}

                {/* Newsletter Subscription */}
                <NewsletterSub />
            </div>
        </div>
    );
}
