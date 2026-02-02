import { CheckCircle } from 'lucide-react';
import React from 'react'

const DocumentUpload = ({formData, setFormData}) => {
    const handleFileChange = (field, file) => {
    setFormData(prev => ({ ...prev, [field]: file }));
  };

    return (
        <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-blue-900">
                    Upload clear scanned copies of your documents. Accepted formats: PDF, JPG, PNG (Max 5MB per file)
                </p>
            </div>

            {[
                { field: 'passport', label: 'Passport Copy *', required: true },
                { field: 'transcript', label: 'Academic Transcripts *', required: true },
                { field: 'englishTestResult', label: 'English Test Results', required: false },
                { field: 'recommendationLetter', label: 'Recommendation Letter', required: false },
                { field: 'sop', label: 'Statement of Purpose', required: false }
            ].map((doc) => (
                <div key={doc.field} className="border border-gray-300 rounded-lg p-4">
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                        {doc.label}
                    </label>
                    <div className="flex items-center gap-4">
                        <input
                            type="file"
                            onChange={(e) => handleFileChange(doc.field, e.target.files?.[0] || null)}
                            accept=".pdf,.jpg,.jpeg,.png"
                            className="flex-1 text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            required={doc.required}
                        />
                        {formData && (
                            <CheckCircle className="size-5 text-green-600" />
                        )}
                    </div>
                    {formData && (
                        <p className="text-sm text-green-600 mt-2">
                            ✓ {formData.name}
                        </p>
                    )}
                </div>
            ))}

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-gray-600">
                    <strong>Don't have all documents ready?</strong> You can submit your application now and upload remaining documents later through your dashboard.
                </p>
            </div>
        </div>
    )
}

export default DocumentUpload;