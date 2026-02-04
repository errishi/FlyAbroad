import React from 'react'
import { ImageWithFallback } from '../ImageWithFallback';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, BookmarkPlus, Calendar, Clock, Share2, Tag } from 'lucide-react';
import { blogs } from './BlogData';
import CTA from '../Home/CTA';

const BlogDetails = () => {
    const { id } = useParams();
    const blog = blogs.find(b => b.id === id);

    if (!blog) {
        return (
            <div className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Article not found</h1>
                    <Link to="/blog" className="text-blue-600 hover:underline">
                        Back to Articles
                    </Link>
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
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
                        >
                            <ArrowLeft className="size-4" />
                            Back to Articles
                        </Link>

                        <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            {blog.category}
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

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Main Content */}
                    <article className="lg:col-span-3">
                        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                            {/* Article Content */}
                            <div className="prose prose-lg max-w-none">
                                {blog.content.map((paragraph, index) => {
                                    if (paragraph.startsWith('## ')) {
                                        return (
                                            <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                                                {paragraph.replace('## ', '')}
                                            </h2>
                                        );
                                    }
                                    return (
                                        <p key={index} className="text-gray-700 leading-relaxed mb-6">
                                            {paragraph}
                                        </p>
                                    );
                                })}
                            </div>

                            {/* Tags */}
                            <div className="mt-12 pt-8 border-t border-gray-200">
                                <div className="flex items-center gap-2 mb-4">
                                    <Tag className="size-5 text-gray-400" />
                                    <span className="font-semibold text-gray-900">Tags:</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {blog.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Author Bio */}
                        <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                            <div className="flex items-start gap-4">
                                <div className="size-16 rounded-full overflow-hidden ring-2 ring-blue-200 shrink-0">
                                    <ImageWithFallback
                                        src={blog.author.image}
                                        alt={blog.author.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-900 mb-1">About the Author</h3>
                                    <div className="text-sm font-semibold text-blue-600 mb-2">{blog.author.role}</div>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        {blog.author.name} is an experienced {blog.author.role.toLowerCase()} at StudyAbroad,
                                        helping thousands of students achieve their international education goals.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-20 space-y-6">
                            {/* Share Buttons */}
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <h3 className="font-semibold text-gray-900 mb-4">Share Article</h3>
                                <div className="space-y-3">
                                    <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                        <Share2 className="size-4" />
                                        Share
                                    </button>
                                    <button className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                                        <BookmarkPlus className="size-4" />
                                        Save for Later
                                    </button>
                                </div>
                            </div>

                            {/* CTA Card */}
                            <div className="bg-linear-to-br from-blue-600 to-blue-800 text-white rounded-xl p-6">
                                <h3 className="font-bold text-lg mb-2">Need Help?</h3>
                                <p className="text-sm text-blue-100 mb-4">
                                    Get personalized guidance from our expert counselors
                                </p>
                                <Link
                                    to="/contact"
                                    className="block w-full bg-white text-blue-600 text-center px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </aside>
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
                                            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                                {relatedBlog.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-5">
                                        <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
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

                {/* CTA Banner */}
                <CTA />
            </div>
        </div>
    );
}

export default BlogDetails;