import { ArrowLeft } from 'lucide-react';
import React from 'react'

const PreviousButton = ({prevStep, currentStep}) => {
    return (
        <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`flex items-center cursor-pointer gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${currentStep === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
        >
            <ArrowLeft className="size-5" />
            Previous
        </button>
    )
}

export default PreviousButton;