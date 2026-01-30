import { useState } from 'react';
import { 
  User,
  GraduationCap,
  Upload,
  CheckCircle,
  Book
} from 'lucide-react';

import PersonalInfo from '@/Components/Form/PersonalInfo';
import EducationalBackground from '@/Components/Form/EducationalBackground';
import ProgramSelection from '@/Components/Form/ProgramSelection';
import DocumentUpload from '@/Components/Form/DocumentUpload';
import Preview from '@/Components/Form/Preview';
import FormHeader from '@/Components/Form/FormHeader';
import FormSteps from '@/Components/Form/FormSteps';
import FormSubmitButton from '@/Components/Form/FormSubmitButton';
import NextButton from '@/Components/Form/NextButton';
import PreviousButton from '@/Components/Form/PreviousButton';
import Help from '@/Components/Form/Help';

export default function ApplyNow() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    nationality: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    
    // Education Background
    highestQualification: '',
    institutionName: '',
    fieldOfStudy: '',
    graduationYear: '',
    gpa: '',
    
    // Program Selection
    preferredCountry: '',
    preferredUniversity: '',
    preferredCourse: '',
    intakeMonth: '',
    
    // English Proficiency
    englishTest: '',
    testScore: '',
    testDate: '',
    
    // Documents (file names for demo)
    passport: null,
    transcript: null,
    englishTestResult: null,
    recommendationLetter: null,
    sop: null
  });

  const steps = [
    { number: 1, title: 'Personal Info', icon: <User className="size-5" /> },
    { number: 2, title: 'Education', icon: <GraduationCap className="size-5" /> },
    { number: 3, title: 'Program', icon: <Book className="size-5" /> },
    { number: 4, title: 'Documents', icon: <Upload className="size-5" /> },
    { number: 5, title: 'Review', icon: <CheckCircle className="size-5" /> }
  ];

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = () => {
    alert('Application submitted successfully! Our counselors will contact you within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <FormHeader />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Steps */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex justify-between flex-wrap lg:gap-0 md:gap-0 gap-5 items-center">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <FormSteps step={step} currentStep={currentStep} />

                {index < steps.length - 1 && (
                  <div
                    className={`h-0.5 flex-1 mx-2 -mt-8 transition-all ${
                      currentStep > step.number ? 'bg-[#0B7077]' : 'bg-gray-300'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
              
              <PersonalInfo formData={formData} setFormData={setFormData} />
            </div>
          )}

          {/* Step 2: Education Background */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Education Background</h2>
              
              <EducationalBackground formData={formData} setFormData={setFormData} />
            </div>
          )}

          {/* Step 3: Program Selection */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Selection</h2>
              
              <ProgramSelection setFormData={setFormData} formData={formData} />
            </div>
          )}

          {/* Step 4: Document Upload */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload Documents</h2>
              
              <DocumentUpload setFormData={setFormData} formData={formData} />
            </div>
          )}

          {/* Step 5: Review */}
          {currentStep === 5 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Review Your Application</h2>
              
              <Preview formData={formData} />
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex lg:flex-row md:flex-row flex-col gap-5 justify-between items-center mt-8 pt-6 border-t border-gray-200">

            <PreviousButton currentStep={currentStep} prevStep={prevStep} />

            {currentStep < 5 ? (
              <NextButton nextStep={nextStep} />
            ) : (
              <FormSubmitButton handleSubmit={handleSubmit} />
            )}
          </div>
        </div>

        {/* Help Card */}
        <Help />
      </div>
    </div>
  );
}
