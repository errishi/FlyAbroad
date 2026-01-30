import { Book, CheckCircle, FileText, GraduationCap, User } from 'lucide-react';
import React from 'react'

const Preview = ({formData}) => {
    return (
        <div className="space-y-6">
            {/* Personal Information Summary */}
            <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <User className="size-5" />
                    Personal Information
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                        <span className="text-gray-600">Name:</span>
                        <span className="ml-2 font-medium">{formData.firstName} {formData.lastName}</span>
                    </div>
                    <div>
                        <span className="text-gray-600">Email:</span>
                        <span className="ml-2 font-medium">{formData.email}</span>
                    </div>
                    <div>
                        <span className="text-gray-600">Phone:</span>
                        <span className="ml-2 font-medium">{formData.phone}</span>
                    </div>
                    <div>
                        <span className="text-gray-600">Nationality:</span>
                        <span className="ml-2 font-medium">{formData.nationality}</span>
                    </div>
                </div>
            </div>

            {/* Education Summary */}
            <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <GraduationCap className="size-5" />
                    Education Background
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                        <span className="text-gray-600">Qualification:</span>
                        <span className="ml-2 font-medium">{formData.highestQualification}</span>
                    </div>
                    <div>
                        <span className="text-gray-600">Institution:</span>
                        <span className="ml-2 font-medium">{formData.institutionName}</span>
                    </div>
                    <div>
                        <span className="text-gray-600">Field of Study:</span>
                        <span className="ml-2 font-medium">{formData.fieldOfStudy}</span>
                    </div>
                    <div>
                        <span className="text-gray-600">GPA:</span>
                        <span className="ml-2 font-medium">{formData.gpa}</span>
                    </div>
                </div>
            </div>

            {/* Program Selection Summary */}
            <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Book className="size-5" />
                    Program Preferences
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                        <span className="text-gray-600">Country:</span>
                        <span className="ml-2 font-medium">{formData.preferredCountry}</span>
                    </div>
                    <div>
                        <span className="text-gray-600">Course:</span>
                        <span className="ml-2 font-medium">{formData.preferredCourse}</span>
                    </div>
                    <div>
                        <span className="text-gray-600">Intake:</span>
                        <span className="ml-2 font-medium">{formData.intakeMonth}</span>
                    </div>
                </div>
            </div>

            {/* Documents Summary */}
            <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <FileText className="size-5" />
                    Uploaded Documents
                </h3>
                <div className="space-y-2 text-sm">
                    {formData.passport && (
                        <div className="flex items-center gap-2 text-green-600">
                            <CheckCircle className="size-4" />
                            <span>Passport Copy</span>
                        </div>
                    )}
                    {formData.transcript && (
                        <div className="flex items-center gap-2 text-green-600">
                            <CheckCircle className="size-4" />
                            <span>Academic Transcripts</span>
                        </div>
                    )}
                    {formData.englishTestResult && (
                        <div className="flex items-center gap-2 text-green-600">
                            <CheckCircle className="size-4" />
                            <span>English Test Results</span>
                        </div>
                    )}
                    {formData.recommendationLetter && (
                        <div className="flex items-center gap-2 text-green-600">
                            <CheckCircle className="size-4" />
                            <span>Recommendation Letter</span>
                        </div>
                    )}
                    {formData.sop && (
                        <div className="flex items-center gap-2 text-green-600">
                            <CheckCircle className="size-4" />
                            <span>Statement of Purpose</span>
                        </div>
                    )}
                </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 mb-2">What happens next?</h3>
                <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
                    <li>Our counselors will review your application within 24 hours</li>
                    <li>You'll receive personalized university recommendations</li>
                    <li>We'll guide you through the complete admission process</li>
                    <li>Track your application status anytime in your dashboard</li>
                </ul>
            </div>
        </div>
    )
}

export default Preview;