import React from 'react'
import { ImageWithFallback } from '../ImageWithFallback';
import { Tag } from 'lucide-react';

const MainArticle = ({blog}) => {
    return (
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
    )
}

export default MainArticle;