import { CheckCircle, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useRef } from 'react'
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
  const scrollRef = useRef(null);
  return (
    <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A3030] mb-4">Hear From Our Students</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">Watch real students share their journey and experiences studying abroad with our support</p>
          </div>

          <div className="relative">
            <button
              aria-label="scroll-left"
              onClick={() => {
                const el = scrollRef.current;
                if (el) el.scrollBy({ left: -el.clientWidth * 0.6, behavior: 'smooth' });
              }}
              className="hidden sm:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5 text-[#0A3030]" />
            </button>

            <div ref={scrollRef} className="flex gap-6 overflow-x-auto px-3 py-2 scroll-smooth">
              {videoTestimonials.map((testimonial, index) => (
                <div key={index} className="shrink-0 w-60 sm:w-65 md:w-70 lg:w-75">
                  <VideoTestimonial {...testimonial} />
                </div>
              ))}
            </div>

            <button
              aria-label="scroll-right"
              onClick={() => {
                const el = scrollRef.current;
                if (el) el.scrollBy({ left: el.clientWidth * 0.6, behavior: 'smooth' });
              }}
              className="hidden sm:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 items-center justify-center"
            >
              <ChevronRight className="w-5 h-5 text-[#0A3030]" />
            </button>
          </div>
        </div>
      </section>
  )
}

export default VideoTestimonialPage;