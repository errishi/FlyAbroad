import React from 'react'
import { ImageWithFallback } from '../ImageWithFallback';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, BookmarkPlus, Calendar, Clock, Share2, Tag } from 'lucide-react';
import { blogs } from './BlogData';
import CTA from '../Home/CTA';
import SideBar from './SideBar';
import MainArticle from './MainArticle';
import NotFound from '@/Pages/NotFound';

const BlogDetails = () => {
    const { id } = useParams();
    const blog = blogs.find(b => b.id === id);

    if (!blog) {
        return (
            <div className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <NotFound />
                </div>
            </div>
        );
    }

    const relatedBlogs = blogs.filter(b =>
        b.id !== blog.id &&
        (b.category === blog.category || b.tags.some(tag => blog.tags.includes(tag)))
    ).slice(0, 3);

    return (
        <div className="min-h-screen bg-gray-50">

            {/* Header Image */}
            <div className="relative h-125 bg-gray-900">
                <ImageWithFallback
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                        <div className='flex justify-between'>
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
                        >
                            <ArrowLeft className="size-4" />
                            Back to Articles
                        </Link>

                        <div className="inline-block bg-[#0B7077] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            {blog.category}
                        </div>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                            {blog.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-white/90">
                            <div className="flex items-center gap-3">
                                <div className="size-12 rounded-full overflow-hidden ring-2 ring-white/20">
                                    <ImageWithFallback
                                        src={blog.author.image}
                                        alt={blog.author.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="font-semibold text-white">{blog.author.name}</div>
                                    <div className="text-sm text-white/70">{blog.author.role}</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <Calendar className="size-4" />
                                <span className="text-sm">{blog.publishDate}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Clock className="size-4" />
                                <span className="text-sm">{blog.readTime}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Main Content */}
                    <MainArticle blog={blog} />

                    {/* Sidebar */}
                    <SideBar />
                </div>

                {/* Related Articles */}
                {relatedBlogs.length > 0 && (
                    <div className="mt-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {relatedBlogs.map((relatedBlog) => (
                                <Link
                                    key={relatedBlog.id}
                                    to={`/blog/${relatedBlog.id}`}
                                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all group"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <ImageWithFallback
                                            src={relatedBlog.image}
                                            alt={relatedBlog.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-[#0B7077] text-white px-3 py-1 rounded-full text-xs font-semibold">
                                                {relatedBlog.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-5">
                                        <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#0B7077] transition-colors line-clamp-2">
                                            {relatedBlog.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                                            {relatedBlog.excerpt}
                                        </p>
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <Clock className="size-4" />
                                            <span>{relatedBlog.readTime}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

            </div>
            {/* CTA Banner */}
            <CTA />
        </div>
    );
}

export default BlogDetails;