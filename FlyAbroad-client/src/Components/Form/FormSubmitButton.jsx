import { CheckCircle } from 'lucide-react';
import React from 'react'

const FormSubmitButton = ({handleSubmit}) => {
    return (
        <button
            onClick={handleSubmit}
            className="flex items-center cursor-pointer gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
        >
            <CheckCircle className="size-5" />
            Submit Application
        </button>
    )
}

export default FormSubmitButton;