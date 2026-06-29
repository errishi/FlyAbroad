import React from 'react'

const ProgramSelection = ({ formData, setFormData }) => {
    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Country <span className='text-destructive'>*</span>
                </label>
                <select
                    value={formData.preferredCountry}
                    onChange={(e) => handleInputChange('preferredCountry', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B7077]"
                    required
                >
                    <option value="">Select country</option>
                    <option value="USA">🇺🇸 USA</option>
                    <option value="UK">🇬🇧 UK</option>
                    <option value="Canada">🇨🇦 Canada</option>
                    <option value="Australia">🇦🇺 Australia</option>
                    <option value="Germany">🇩🇪 Germany</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred University
                </label>
                <input
                    type="text"
                    value={formData.preferredUniversity}
                    onChange={(e) => handleInputChange('preferredUniversity', e.target.value)}
                    placeholder="Enter university name or leave blank for counselor recommendation"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B7077]"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Course/Major <span className='text-destructive'>*</span>
                </label>
                <input
                    type="text"
                    value={formData.preferredCourse}
                    onChange={(e) => handleInputChange('preferredCourse', e.target.value)}
                    placeholder="e.g., Computer Science, Business Administration"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B7077]"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Intake <span className='text-destructive'>*</span>
                </label>
                <select
                    value={formData.intakeMonth}
                    onChange={(e) => handleInputChange('intakeMonth', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B7077]"
                    required
                >
                    <option value="">Select intake</option>
                    <option value="September 2027">September 2027</option>
                    <option value="January 2028">January 2028</option>
                    <option value="May 2028">May 2028</option>
                </select>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-900">
                    <strong>Note:</strong> Our counselors will help you shortlist the best universities and programs based on your profile and preferences.
                </p>
            </div>
        </div>
    )
}

export default ProgramSelection;