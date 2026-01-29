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
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
      <div className="relative h-64 bg-gray-900 cursor-pointer" onClick={() => setIsPlaying(true)}>
        {!isPlaying ? (
          <>
            <ImageWithFallback
              src={thumbnail}
              alt={name}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 size-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                <Play className="size-8 text-[#0B7077] ml-1" fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-4">
              <div className="flex items-center gap-2 text-white text-sm mb-1">
                <MapPin className="size-4" />
                <span>{country}</span>
              </div>
            </div>
          </>
        ) : (
          <div className="w-full h-full bg-black flex items-center justify-center">
            <video
              className="w-full h-full"
              controls
              autoPlay
              src={videoUrl}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="font-semibold text-lg text-gray-900 mb-1">{name}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <GraduationCap className="size-4" />
          <span>{course}</span>
        </div>
        <p className="text-sm text-[#FD661F] font-medium">{university}</p>
      </div>
    </div>
  )
}

export default VideoTestimonial;