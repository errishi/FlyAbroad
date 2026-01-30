import React from 'react'

const EducationalBackground = ({ formData, setFormData }) => {
    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Highest Qualification *
                </label>
                <select
                    value={formData.highestQualification}
                    onChange={(e) => handleInputChange('highestQualification', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B7077]"
                    required
                >
                    <option value="">Select qualification</option>
                    <option value="High School">High School</option>
                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                    <option value="Master's Degree">Master's Degree</option>
                    <option value="Doctorate">Doctorate</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Institution Name *
                </label>
                <input
                    type="text"
                    value={formData.institutionName}
                    onChange={(e) => handleInputChange('institutionName', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B7077]"
                    required
                />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Field of Study *
                    </label>
                    <input
                        type="text"
                        value={formData.fieldOfStudy}
                        onChange={(e) => handleInputChange('fieldOfStudy', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B7077]"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Graduation Year *
                    </label>
                    <input
                        type="text"
                        value={formData.graduationYear}
                        onChange={(e) => handleInputChange('graduationYear', e.target.value)}
                        placeholder="e.g., 2023"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B7077]"
                        required
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    GPA / Percentage *
                </label>
                <input
                    type="text"
                    value={formData.gpa}
                    onChange={(e) => handleInputChange('gpa', e.target.value)}
                    placeholder="e.g., 3.8/4.0 or 85%"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B7077]"
                    required
                />
            </div>

            <div className="bg-[#0B7077]/10 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2">English Proficiency</h3>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Test Type *
                        </label>
                        <select
                            value={formData.englishTest}
                            onChange={(e) => handleInputChange('englishTest', e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B7077]"
                            required
                        >
                            <option value="">Select test</option>
                            <option value="IELTS">IELTS</option>
                            <option value="TOEFL">TOEFL</option>
                            <option value="PTE">PTE</option>
                            <option value="Duolingo">Duolingo</option>
                            <option value="Not taken yet">Not taken yet</option>
                        </select>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Score
                            </label>
                            <input
                                type="text"
                                value={formData.testScore}
                                onChange={(e) => handleInputChange('testScore', e.target.value)}
                                placeholder="e.g., 7.5 or 100"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B7077]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Test Date
                            </label>
                            <input
                                type="date"
                                value={formData.testDate}
                                onChange={(e) => handleInputChange('testDate', e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B7077]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationalBackground;