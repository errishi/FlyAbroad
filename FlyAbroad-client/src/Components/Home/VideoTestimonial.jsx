import { GraduationCap, MapPin, Play } from 'lucide-react';
import React, { useState } from 'react'
import { ImageWithFallback } from '../ImageWithFallback';

const VideoTestimonial = ({ 
  name, 
  university, 
  country, 
  course, 
  thumbnail,
  videoUrl 
}) => {
    const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="group">
      <div className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-sm cursor-pointer" onClick={() => setIsPlaying(true)}>
        {!isPlaying ? (
          <>
            <ImageWithFallback
              src={thumbnail}
              alt={name}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/95 w-14 h-14 rounded-full flex items-center justify-center drop-shadow-lg transition-transform group-hover:scale-105">
                <Play className="text-[#0B7077]" />
              </div>
            </div>
            <div className="absolute left-4 bottom-4 right-4">
              <div className="h-1 bg-white/40 rounded-full" />
            </div>
          </>
        ) : (
          <div className="w-full h-48 bg-black flex items-center justify-center">
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              src={videoUrl}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>

      <div className="flex items-center gap-3 mt-3">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
          <ImageWithFallback src={thumbnail} alt={`${name}-avatar`} className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="font-semibold text-sm text-[#0A3030]">{name}</h3>
          <p className="text-xs text-gray-500">{country}</p>
        </div>
      </div>
    </div>
  )
}

export default VideoTestimonial;