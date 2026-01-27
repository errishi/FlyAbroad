import React from 'react'

const Story = () => {
    return (
        <div className='lg:px-15 md:px-10 px-7 py-5 my-7'>
            <div className='flex lg:items-center lg:flex-row flex-col-reverse justify-around mt-8'>
                <img src="/about-image-3.jpg" className='lg:w-120 md:w-140 lg:h-70 h-auto lg:mt-0 mt-10 rounded-md shadow-2xl' alt="image" />
                <div className='lg:w-160'>
                    <h2 className='text-3xl font-bold text-[#0B7077] drop-shadow-md'>Our Story</h2>
                    <p className='lg:text-xl md:text-xl text-[16px] mt-5'>
                        <p className='my-3'><b>The UneFly Story :</b></p>
                        <b>UneFly</b> has long been a trusted resource in international education—the go-to search engine where the journey began. But we realized that searching wasn’t enough. Students needed a simpler, more affordable way to actually go.
                        That’s why in 2025, we didn't just update our website; we reinvented our purpose. UneFly has evolved from a directory into a full-service provider. We took years of data, deep global partnerships, and a legacy of quality, and re-engineered them into a bold, student-first platform.
                        <p className='my-3'><b>Our Mission: Cut the Cost, Not the Experience.</b></p>
                        Today, we connect you directly to universities worldwide - no middle layers, no hidden fees, just streamlined applications and transparent pricing. Whether it’s Spain, Morocco, Colombia, or Hungary, our programs prove that high-quality global education doesn't have to be exclusive. <br />
                        <b>UneFly</b> is more than a platform - it’s a movement to make the world accessible to every student who dreams of seeing it.</p>
                </div>
            </div>
        </div>
    )
}

export default Story;