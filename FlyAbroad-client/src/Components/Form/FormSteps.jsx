import React from 'react'

const FormSteps = ({step, currentStep}) => {
    return (
        <div className="flex flex-col items-center flex-1">
            <div
                className={`flex items-center justify-center size-12 rounded-full border-2 transition-all ${currentStep >= step.number
                        ? 'bg-[#0B7077] border-[#0B7077] text-white'
                        : 'bg-white border-gray-300 text-gray-400'
                    }`}
            >
                {step.icon}
            </div>
            <div className="mt-2 text-center">
                <div
                    className={`text-sm font-medium ${currentStep >= step.number ? 'text-[#0B7077]' : 'text-gray-500'
                        }`}
                >
                    {step.title}
                </div>
            </div>
        </div>
    )
}

export default FormSteps;