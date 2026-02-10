import React from 'react'
import { ImageWithFallback } from '../ImageWithFallback';

const AboutPlatform = () => {
    return (
        <div className='lg:px-15 md:px-10 px-7 py-5 my-7'>
            <h2 className='text-3xl font-bold text-[#0B7077] drop-shadow-md'>About Us</h2>
            <div className='flex lg:flex-row flex-col justify-around lg:mt-8 md:mt-8 -mt-10 lg:h-auto md:h-auto h-200'>
                <div className='lg:w-170'>
                    <p className='lg:text-[18px] md:text-[18px] text-[16px]'>At <b>UneFly</b>, our mission is simple: <b>make global education accessible to every student</b>. We’re here to break down barriers with <b>transparent</b> guidance, <b>affordable</b> programs, and destinations that go beyond the ordinary - without compromising on the life-changing experiences you crave.
                        Forget the red tape and complex paperwork. With streamlined applications, English - taught courses, and minimal prerequisites, we’ve made it easier than ever to take your education global.
                        Think of <b>UneFly as your launchpad</b> to the world - bridging cultures, shaping futures, and equipping you with the global perspective employers value. We’re redefining what it means to study overseas: not exclusive, not overwhelming - just accessible, exciting, and built for students like you.</p>
                </div>
                <div className="relative">
                    <div className="rounded-2xl overflow-hidden shadow-2xl lg:mt-0 md:mt-10 -mt-30 lg:mx-10 md:mx-10">
                        <ImageWithFallback
                            src="/about-image-1.jpg"
                            alt="Our team"
                            className="w-full lg:h-70 h-auto object-cover"
                        />
                    </div>
                    <div className="absolute lg:-bottom-6 md:-bottom-6 -bottom-25 -right-4 bg-[#0B7077] text-white p-8 rounded-xl shadow-xl max-w-xs">
                        <div className="text-4xl font-bold mb-2">15+</div>
                        <div className="text-white">Years of helping students achieve their dreams</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPlatform;