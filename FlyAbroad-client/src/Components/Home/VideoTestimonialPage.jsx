import { CheckCircle, Play } from 'lucide-react';
import React from 'react'
import VideoTestimonial from './VideoTestimonial';

const videoTestimonials = [
    {
      name: "Priya Sharma",
      university: "Stanford University",
      country: "USA",
      course: "Computer Science (MS)",
      thumbnail: "https://images.unsplash.com/photo-1727875075949-8b36efd25260?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGluZGlhbiUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njk1ODcyNzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      videoUrl: "#"
    },
    {
      name: "Sarah Chen",
      university: "University of Cambridge",
      country: "UK",
      course: "Business Administration (MBA)",
      thumbnail: "https://images.unsplash.com/photo-1758800625039-caa9007a7aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGZlbWFsZSUyMHN0dWRlbnQlMjBzbWlsaW5nfGVufDF8fHx8MTc2OTU4NzI3NXww&ixlib=rb-4.1.0&q=80&w=1080",
      videoUrl: "#"
    },
    {
      name: "David Okonkwo",
      university: "University of Toronto",
      country: "Canada",
      course: "Data Science (MSc)",
      thumbnail: "https://images.unsplash.com/photo-1631131426242-0abfa7f209c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc3R1ZGVudCUyMGdyYWR1YXRpb258ZW58MXx8fHwxNzY5NTg3Mjc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      videoUrl: "#"
    },
    {
      name: "Ahmed Hassan",
      university: "Technical University of Munich",
      country: "Germany",
      course: "Mechanical Engineering (MS)",
      thumbnail: "https://images.unsplash.com/photo-1763890499068-baf540cacf3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbGUlMjBzdHVkZW50JTIwY2FtcHVzfGVufDF8fHx8MTc2OTU4NzI3OHww&ixlib=rb-4.1.0&q=80&w=1080",
      videoUrl: "#"
    }
  ];

const VideoTestimonialPage = () => {
  return (
    <section className="py-20 mt-20 bg-linear-to-br from-[#0B7077]/80 to-[#0B7077] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] bg-repeat"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Play className="size-4" />
              <span className="text-sm">Student Success Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Hear From Our Students
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Watch real students share their journey and experiences studying abroad with our support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoTestimonials.map((testimonial, index) => (
              <VideoTestimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
  )
}

export default VideoTestimonialPage;