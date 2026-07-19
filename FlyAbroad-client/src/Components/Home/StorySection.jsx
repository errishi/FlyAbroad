import StoryCard from './StoryCard';
import { Button } from "../ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogs } from '../Blog/BlogData';

const StorySection = () => {
  return (
    <div className='w-full min-h-screen py-10 lg:py-16 text-center bg-[url(/design.svg)] bg-no-repeat bg-cover bg-center'>
      {/* Main layout wrapper */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        
        {/* Header Content */}
        <div className='max-w-3xl mx-auto mb-12'>
          <h2 className='text-3xl md:text-4xl font-semibold tracking-tight text-gray-900'>
            The Hub of Insights, Stories & Success
          </h2>
          <p className='text-base md:text-lg text-gray-500 mt-4'>
            Discover real journeys, expert tips, and alumni experiences—all in one place.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 place-items-center'>
          {blogs.slice(0, 3).map((item) => (
            <StoryCard 
              key={item.id} 
              id={item.id} 
              title={item.title} 
              description={item.excerpt} 
              category={item.category} 
              readTime={item.readTime} 
              image={item.image} 
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link to="/blog">
            <Button asChild size="lg" variant="outline" className="rounded-full cursor-pointer px-8 hover:bg-green-50 border-2 border-[#09585e] text-[#FD661F] transition-colors">
              <span className="flex items-center justify-center gap-2">
                View All
                <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default StorySection;