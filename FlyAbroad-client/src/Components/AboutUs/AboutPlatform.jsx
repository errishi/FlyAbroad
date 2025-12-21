import React from 'react'

const AboutPlatform = () => {
    return (
        <div className='lg:px-15 md:px-10 px-7 py-5 my-7'>
            <h2 className='text-3xl font-bold text-[#0B7077] drop-shadow-md'>About Us</h2>
            <div className='flex lg:flex-row flex-col justify-around mt-8'>
                <div className='lg:w-160'>
                    <p className='lg:text-xl md:text-xl text-[16px]'>At <b>FlyAbroad</b>, our mission is simple: <b>make global education accessible to every student</b>. We’re here to break down barriers with <b>transparent</b> guidance, <b>affordable</b> programs, and destinations that go beyond the ordinary - without compromising on the life-changing experiences you crave.
                        Forget the red tape and complex paperwork. With streamlined applications, English - taught courses, and minimal prerequisites, we’ve made it easier than ever to take your education global.
                        Think of <b>FlyAbroad as your launchpad</b> to the world - bridging cultures, shaping futures, and equipping you with the global perspective employers value. We’re redefining what it means to study overseas: not exclusive, not overwhelming - just accessible, exciting, and built for students like you.</p>
                </div>
                <img src="/about-image-1.jpg" className='lg:w-120 md:w-140 lg:h-70 h-auto lg:mt-0 mt-10 rounded-md shadow-2xl' alt="image" />
            </div>
        </div>
    )
}

export default AboutPlatform;