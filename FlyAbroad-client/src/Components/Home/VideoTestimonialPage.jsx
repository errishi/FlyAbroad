import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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

  const handleScroll = (direction) => {
    const el = scrollRef.current;
    if (el) {
      const scrollAmount = direction === 'left' 
        ? -el.clientWidth * 0.6 
        : el.clientWidth * 0.6;
      el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 bg-white w-full max-w-full overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-16">
        
        {/* Header section with constrained text width for legibility */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A3030] mb-4">
            Hear From Our Students
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Watch real students share their journey and experiences studying abroad with our support
          </p>
        </div>

        {/* Full-width interactive slider container */}
        <div className="relative w-full group">
          
          {/* Left Arrow Button */}
          <button
            aria-label="scroll-left"
            onClick={() => handleScroll('left')}
            className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white text-[#0A3030] rounded-full p-3 shadow-lg border border-gray-100 hover:bg-gray-50 transition-all items-center justify-center opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Horizontally scrolling list wrapper */}
          <div 
            ref={scrollRef} 
            className="flex gap-6 overflow-x-auto w-full py-4 scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {videoTestimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="shrink-0 w-72 sm:w-80 md:w-88 lg:w-96 snap-start"
              >
                <VideoTestimonial {...testimonial} />
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            aria-label="scroll-right"
            onClick={() => handleScroll('right')}
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white text-[#0A3030] rounded-full p-3 shadow-lg border border-gray-100 hover:bg-gray-50 transition-all items-center justify-center opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialPage;