import { ArrowRight } from 'lucide-react';
import React from 'react'

const NextButton = ({nextStep}) => {
    return (
        <button
            onClick={nextStep}
            className="flex items-center gap-2 cursor-pointer bg-[#09585e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0B7077] transition-colors"
        >
            Next
            <ArrowRight className="size-5" />
        </button>
    )
}

export default NextButton;