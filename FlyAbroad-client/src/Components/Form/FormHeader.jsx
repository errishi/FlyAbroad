import React from 'react'

const FormHeader = () => {
    return (
        <div className='bg-[url(/form-bg-img.png)] bg-no-repeat bg-cover'>
            <div className="bg-linear-to-t text-center lg:from-[#0B7077]/40 md:[#0B7077]/40 from-[#0B7077]/60 lg:to-transparent md:to-transparent to-[#0B7077]/70 lg:h-60 md:h-50 lg:text-[#09585e] md:text-[#09585e] text-white py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-1/2">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                        Student Application
                    </h1>
                    <p className="text-lg lg:text-[#09585e] md:text-[#09585e] text-white">
                        Complete your application to study abroad with our guided process
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FormHeader;