import React from 'react';
import { 
    CheckCircle, 
    Home, 
    LayoutDashboard, 
    Mail, 
    Clock, 
    FileText 
} from 'lucide-react';

const ApplicationSuccess = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 sm:p-6">
            <div className="max-w-2xl w-full bg-white rounded-2xl shadow-sm p-6 sm:p-8 md:p-12 text-center border border-gray-100">
                
                {/* Animated Success Icon */}
                <div className="flex justify-center mb-6">
                    <div className="rounded-full bg-green-50 p-4 animate-pulse">
                        <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 text-green-500" />
                    </div>
                </div>

                {/* Headings */}
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                    Application Submitted!
                </h1>
                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                    Thank you for choosing us for your study abroad journey. Your application ID is <span className="font-semibold text-gray-900">#UNF-2026-8942</span>.
                </p>

                {/* What Happens Next Card */}
                <div className="bg-[#0B7077]/5 border border-[#0B7077]/20 rounded-xl p-5 sm:p-6 mb-8 text-left">
                    <h2 className="font-semibold text-[#0B7077] mb-4 sm:mb-5 text-base sm:text-lg">What happens next?</h2>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <Clock className="w-5 h-5 shrink-0 mt-0.5 text-[#0B7077]" />
                            <span className="text-sm sm:text-base text-gray-700">Our expert counselors will review your profile and preferences within <strong>24 hours</strong>.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Mail className="w-5 h-5 shrink-0 mt-0.5 text-[#0B7077]" />
                            <span className="text-sm sm:text-base text-gray-700">You will receive an email with personalized university and program recommendations.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <FileText className="w-5 h-5 shrink-0 mt-0.5 text-[#0B7077]" />
                            <span className="text-sm sm:text-base text-gray-700">You can track your application status and upload any pending documents anytime via your dashboard.</span>
                        </li>
                    </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <button
                        onClick={() => window.location.href = '/dashboard'}
                        className="flex items-center justify-center gap-2 bg-[#0B7077] text-white w-full sm:w-auto px-8 py-3 rounded-lg font-medium hover:bg-[#095c62] transition-colors shadow-sm"
                    >
                        <LayoutDashboard className="w-5 h-5" />
                        Go to Dashboard
                    </button>
                    
                    <button
                        onClick={() => window.location.href = '/'}
                        className="flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-300 w-full sm:w-auto px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                    >
                        <Home className="w-5 h-5" />
                        Return Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ApplicationSuccess;