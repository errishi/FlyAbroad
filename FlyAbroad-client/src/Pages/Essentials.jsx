import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  ChevronRight, 
  X, 
  Calculator, 
  Check, 
  Send
} from 'lucide-react';

// Data for Student Essential Services with customized tools and details
const SERVICES_DATA = [
  {
    id: 'education-loan',
    title: 'Education loan',
    category: 'Finance',
    description: "Easy access to finances so you don't delay your dreams.",
    longDescription: "Secure highly competitive interest rates, streamlined co-signer processing, and flexible repayment terms after graduation with our verified global lending partners. Tailored specifically for international students with minimal paperwork.",
    badge: 'Popular',
    iconType: 'loan',
    features: [
      "Up to 100% of tuition and living expenses covered",
      "No collateral options available for top global universities",
      "Flexible repayment options with post-graduation moratorium",
      "Multi-currency disbursement (USD, GBP, CAD, AUD, EUR)"
    ],
    toolType: 'loan-calc',
    toolLabel: 'Estimate Your Monthly Repayment (EMI)'
  },
  {
    id: 'accommodation',
    title: 'Accommodation',
    category: 'Living',
    description: "Student apartment or homestay, the choice is yours.",
    longDescription: "Browse thousands of pre-vetted, safe, and social student accommodations. From purpose-built student apartment blocks to immersive local family homestays, find your perfect home away from home near campus.",
    badge: 'Verified Space',
    iconType: 'accommodation',
    features: [
      "24/7 security and utility-inclusive pricing",
      "Premium locations within walking/cycling distance to campus",
      "Match with compatible roommates via student profiles",
      "Flexible booking protection and cancellation policies"
    ],
    toolType: 'room-finder',
    toolLabel: 'Find Room Style & Estimated Cost'
  },
  {
    id: 'banking',
    title: 'Banking',
    category: 'Finance',
    description: "Open a bank account before you arrive.",
    longDescription: "Avoid local stress and set up your essential student checking account online before you board. Get instant digital access, free debit cards, and zero monthly maintenance fees designed just for students.",
    badge: 'Crucial Setup',
    iconType: 'banking',
    features: [
      "Instant account numbers for swift transfers",
      "Zero international transaction fees on student debit cards",
      "Apple Pay, Google Pay, and modern banking app integrations",
      "Exclusive cashback and student rewards on textbooks/groceries"
    ],
    toolType: 'bank-selector',
    toolLabel: 'Select Your Destination Country Bank Pack'
  },
  {
    id: 'health-cover',
    title: 'Health cover',
    category: 'Wellness',
    description: "Your choice, your health cover, your peace of mind abroad.",
    longDescription: "Meet mandatory visa requirements instantly with comprehensive health policies. Gain access to extensive GP consultations, dental benefits, prescription support, and premium local emergency care networks.",
    badge: 'Visa Mandatory',
    iconType: 'health-cover',
    features: [
      "100% compliant with government student visa regulations",
      "Instant certificate delivery for immediate visa submission",
      "24/7 multilingual medical helpline & digital consultation access",
      "Direct billing with major hospitals to minimize out-of-pocket costs"
    ],
    toolType: 'health-estimator',
    toolLabel: 'Compare Health Policies & Instantly Quote'
  },
  {
    id: 'money-transfer',
    title: 'Money transfer',
    category: 'Finance',
    description: "Safe, secure and fast payments to your institution and other key services.",
    longDescription: "Avoid exorbitant traditional bank markup rates. Send tuition fees, rent deposits, and monthly allowances quickly with industry-leading bank-level security and best-price exchange guarantees.",
    badge: 'Zero Markup',
    iconType: 'money-transfer',
    features: [
      "Guaranteed best exchange rates with lowest transfer fees",
      "Same-day or next-day transfers to major global universities",
      "Real-time trackable transfer statuses directly in your dashboard",
      "Fully regulated and licensed secure transaction networks"
    ],
    toolType: 'transfer-converter',
    toolLabel: 'Live Foreign Exchange Calculator (Mock)'
  },
  {
    id: 'sim-cards',
    title: 'SIM Cards',
    category: 'Logistics',
    description: "No SIM? No problem - We've got it covered.",
    longDescription: "Stay connected from the moment your flight lands. Receive a high-speed prepaid SIM card delivered straight to your home address before your departure or an instant eSIM right on your phone.",
    badge: 'Arrival Ready',
    iconType: 'sim-cards',
    features: [
      "Instant eSIM provisioning within minutes of ordering",
      "Unlimited local minutes, texts, and massive 5G data bundles",
      "Flexible month-to-month contracts - cancel or upgrade anytime",
      "No credit check required for international student activation"
    ],
    toolType: 'sim-configurator',
    toolLabel: 'Build Your Student eSIM Data Bundle'
  }
];

export default function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [appliedServices, setAppliedServices] = useState([]);
  const [toast, setToast] = useState({ visible: false, message: '', type: 'success' });

  // Interactive Tools state inside individual modals
  const [loanAmount, setLoanAmount] = useState(30000);
  const [loanTerm, setLoanTerm] = useState(10);
  const [accommodationType, setAccommodationType] = useState('shared');
  const [destCountry, setDestCountry] = useState('US');
  const [hasCoSigner, setHasCoSigner] = useState(true);
  const [transferAmount, setTransferAmount] = useState(1000);
  const [transferCurrency, setTransferCurrency] = useState('EUR');
  const [simDataPlan, setSimDataPlan] = useState('50gb');
  
  // Form submission state
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', comments: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Auto-dismiss toast system
  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        setToast(prev => ({ ...prev, visible: false }));
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toast.visible]);

  const triggerToast = (message, type = 'success') => {
    setToast({ visible: true, message, type });
  };

  const handleApplyFormSubmit = (e, serviceId, serviceTitle) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email) {
      triggerToast('Please fill out all mandatory fields.', 'error');
      return;
    }
    
    if (!appliedServices.includes(serviceId)) {
      setAppliedServices([...appliedServices, serviceId]);
    }
    setIsSubmitted(true);
    triggerToast(`Application request for "${serviceTitle}" sent successfully!`, 'success');
  };

  const calculateEMI = () => {
    const rate = hasCoSigner ? 0.065 : 0.085;
    const monthlyRate = rate / 12;
    const numberOfPayments = loanTerm * 12;
    const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    return isNaN(emi) ? 0 : Math.round(emi);
  };

  const getExchangeRate = () => {
    const rates = { USD: 1.09, EUR: 1.0, GBP: 0.86, AUD: 1.63, CAD: 1.48 };
    return rates[transferCurrency] || 1.0;
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-sans px-4 md:px-8 lg:px-16 py-10">
      
      {/* Dynamic Toast System */}
      {toast.visible && (
        <div className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-xl shadow-2xl border transition-all duration-300 transform translate-y-0 scale-100 ${
          toast.type === 'success' 
            ? 'bg-slate-900 border-[#40E0D0]/40 text-white' 
            : 'bg-slate-900 border-slate-700 text-slate-200'
        }`}>
          <div className="w-2 h-2 rounded-full bg-[#40E0D0] animate-pulse"></div>
          <span className="text-sm font-medium">{toast.message}</span>
          <button 
            onClick={() => setToast(prev => ({ ...prev, visible: false }))} 
            className="ml-3 p-1 rounded-lg hover:bg-slate-800 text-slate-400"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Full-Width Grid View Container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 py-14">
        
        {/* Title Area */}
        <div className="mb-10">
          <div className="relative inline-block">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Student Essentials Services
            </h1>
            <div className="w-10 h-1.5 bg-[#40E0D0] rounded-full mt-2.5"></div>
          </div>
        </div>

        {/* Dynamic Full Width Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full">
          {SERVICES_DATA.map((service) => {
            const isApplied = appliedServices.includes(service.id);
            
            return (
              <div 
                key={service.id}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-7 hover:border-[#40E0D0]/60 dark:hover:border-[#40E0D0]/60 hover:shadow-xl dark:hover:shadow-slate-950/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Upper Actions */}
                  <div className="flex justify-between items-start mb-6">
                    
                    {/* SVG Vector Icons */}
                    <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 group-hover:scale-105 transition-transform duration-300">
                      {service.iconType === 'loan' && (
                        <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24 10L6 18L24 26L42 18L24 10Z" fill="#334155" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M14 21.5V30C14 30 18 34 24 34C30 34 34 30 34 30V21.5" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M38 20V28" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round"/>
                          <circle cx="36" cy="32" r="7" fill="#40E0D0" stroke="#1E293B" strokeWidth="2.5"/>
                          <path d="M36 29.5V34.5M34.5 31H37.5" stroke="#1E293B" strokeWidth="1.8" strokeLinecap="round"/>
                        </svg>
                      )}
                      {service.iconType === 'accommodation' && (
                        <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 20 L24 8 L38 20" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M14 18 L24 10 L34 18" stroke="#40E0D0" strokeWidth="4" strokeLinecap="round" opacity="0.8"/>
                          <rect x="14" y="20" width="20" height="18" rx="2" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2.5"/>
                          <path d="M21 38V28H27V38" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="37" cy="32" r="4" fill="#40E0D0" stroke="#1E293B" strokeWidth="2.5"/>
                          <path d="M37 36V38" stroke="#1E293B" strokeWidth="2"/>
                        </svg>
                      )}
                      {service.iconType === 'banking' && (
                        <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 38H42" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round"/>
                          <rect x="10" y="24" width="28" height="14" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2.5"/>
                          <line x1="15" y1="24" x2="15" y2="38" stroke="#1E293B" strokeWidth="2.5"/>
                          <line x1="24" y1="24" x2="24" y2="38" stroke="#1E293B" strokeWidth="2.5"/>
                          <line x1="33" y1="24" x2="33" y2="38" stroke="#1E293B" strokeWidth="2.5"/>
                          <path d="M8 24L24 14L40 24H8Z" fill="#F3F4F6" stroke="#1E293B" strokeWidth="2.5" strokeLinejoin="round"/>
                          <circle cx="24" cy="9" r="5" fill="#40E0D0" stroke="#1E293B" strokeWidth="2"/>
                          <path d="M24 7V11M23 8.5H25" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      )}
                      {service.iconType === 'health-cover' && (
                        <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24 38C24 38 10 30 10 19C10 12.5 15 9.5 20.5 11C22.5 11.5 23.5 13 24 13.5C24.5 13 25.5 11.5 27.5 11C33 9.5 38 12.5 38 19C38 23 34 28 30.5 31.5" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M25 28L31 34L41 22" stroke="#40E0D0" strokeWidth="4" strokeLinecap="round" opacity="0.8"/>
                          <path d="M25 28L31 34L41 22" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {service.iconType === 'money-transfer' && (
                        <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24 8C32.8366 8 40 15.1634 40 24C40 27.5 38.8 30.7 36.8 33.3" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round"/>
                          <path d="M24 40C15.1634 40 8 32.8366 8 24C8 19.5 9.8 15.4 12.8 12.5" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round"/>
                          <path d="M12.8 8V12.5H8.3" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round"/>
                          <path d="M35.3 36V31.5H39.8" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round"/>
                          <circle cx="24" cy="24" r="7" fill="#40E0D0" stroke="#1E293B" strokeWidth="2"/>
                          <path d="M24 21V27M22.5 22.5H25.5" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      )}
                      {service.iconType === 'sim-cards' && (
                        <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 10C12 7.8 13.8 6 16 6H30L38 14V38C38 40.2 36.2 42 34 42H16C13.8 42 12 40.2 12 38V10Z" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2.5" strokeLinejoin="round"/>
                          <rect x="18" y="20" width="14" height="12" rx="1.5" fill="#40E0D0" fillOpacity="0.4" stroke="#1E293B" strokeWidth="2"/>
                          <line x1="22" y1="20" x2="22" y2="32" stroke="#1E293B" strokeWidth="1.5"/>
                          <line x1="27" y1="20" x2="27" y2="32" stroke="#1E293B" strokeWidth="1.5"/>
                          <line x1="18" y1="26" x2="32" y2="26" stroke="#1E293B" strokeWidth="1.5"/>
                        </svg>
                      )}
                    </div>

                    {/* Action Badges */}
                    <div className="flex gap-2">
                      {isApplied && (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#40E0D0]/10 text-[#2ca89c] dark:text-[#40E0D0] text-[11px] font-bold">
                          <Check className="w-3.5 h-3.5" /> Applied
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Badge & Title */}
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-[10px] font-bold tracking-wider uppercase bg-slate-100 dark:bg-slate-700/60 text-slate-500 dark:text-slate-300 px-2 py-0.5 rounded">
                      {service.category}
                    </span>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-[#2ca89c] dark:text-[#40E0D0]">
                      • {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2.5 text-slate-950 dark:text-white leading-snug group-hover:text-[#2ca89c] dark:group-hover:text-[#40E0D0] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Trigger Detail Modal link */}
                <button
                  onClick={() => {
                    setSelectedService(service);
                    setIsSubmitted(false);
                    setContactForm({ name: '', email: '', phone: '', comments: '' });
                  }}
                  className="w-full inline-flex items-center justify-between py-3 px-4 rounded-xl border border-slate-100 dark:border-slate-700/40 bg-slate-50/50 dark:bg-slate-900/40 hover:bg-[#40E0D0]/5 dark:hover:bg-[#40E0D0]/10 text-slate-600 dark:text-slate-300 hover:text-[#2ca89c] dark:hover:text-[#40E0D0] hover:border-[#40E0D0]/30 font-semibold text-xs transition-all duration-200"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>

      {/* Slide-over Detailed Interactive Drawer / Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            
            {/* Backdrop overlay */}
            <div 
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
              aria-hidden="true"
            ></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            {/* Modal Body */}
            <div className="relative inline-block align-bottom bg-white dark:bg-slate-800 rounded-3xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full border border-slate-200 dark:border-slate-700">
              
              {/* Close Button top-right */}
              <button 
                onClick={() => setSelectedService(null)} 
                className="absolute top-6 right-6 p-2 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-700/60 transition-colors text-slate-500 dark:text-slate-300 z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 sm:p-10">
                
                {/* Header Grid */}
                <div className="flex flex-col sm:flex-row gap-5 items-start mb-8 pb-6 border-b border-slate-100 dark:border-slate-700">
                  <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shrink-0">
                    {selectedService.iconType === 'loan' && (
                      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 10L6 18L24 26L42 18L24 10Z" fill="#334155" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14 21.5V30C14 30 18 34 24 34C30 34 34 30 34 30V21.5" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="36" cy="32" r="7" fill="#40E0D0" stroke="#1E293B" strokeWidth="2.5"/>
                        <path d="M36 29.5V34.5M34.5 31H37.5" stroke="#1E293B" strokeWidth="1.8" strokeLinecap="round"/>
                      </svg>
                    )}
                    {selectedService.iconType === 'accommodation' && (
                      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 20 L24 8 L38 20" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <rect x="14" y="20" width="20" height="18" rx="2" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2.5"/>
                        <path d="M21 38V28H27V38" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="37" cy="32" r="4" fill="#40E0D0" stroke="#1E293B" strokeWidth="2.5"/>
                      </svg>
                    )}
                    {selectedService.iconType === 'banking' && (
                      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 38H42" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round"/>
                        <rect x="10" y="24" width="28" height="14" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2.5"/>
                        <line x1="15" y1="24" x2="15" y2="38" stroke="#1E293B" strokeWidth="2.5"/>
                        <line x1="24" y1="24" x2="24" y2="38" stroke="#1E293B" strokeWidth="2.5"/>
                        <line x1="33" y1="24" x2="33" y2="38" stroke="#1E293B" strokeWidth="2.5"/>
                        <path d="M8 24L24 14L40 24H8Z" fill="#F3F4F6" stroke="#1E293B" strokeWidth="2.5" strokeLinejoin="round"/>
                        <circle cx="24" cy="9" r="5" fill="#40E0D0" stroke="#1E293B" strokeWidth="2.5"/>
                      </svg>
                    )}
                    {selectedService.iconType === 'health-cover' && (
                      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 38C24 38 10 30 10 19C10 12.5 15 9.5 20.5 11C22.5 11.5 23.5 13 24 13.5C24.5 13 25.5 11.5 27.5 11C33 9.5 38 12.5 38 19C38 23 34 28 30.5 31.5" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M25 28L31 34L41 22" stroke="#40E0D0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    {selectedService.iconType === 'money-transfer' && (
                      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 8C32.8366 8 40 15.1634 40 24C40 27.5 38.8 30.7 36.8 33.3" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round"/>
                        <path d="M24 40C15.1634 40 8 32.8366 8 24C8 19.5 9.8 15.4 12.8 12.5" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round"/>
                        <circle cx="24" cy="24" r="7" fill="#40E0D0" stroke="#1E293B" strokeWidth="2"/>
                      </svg>
                    )}
                    {selectedService.iconType === 'sim-cards' && (
                      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 10C12 7.8 13.8 6 16 6H30L38 14V38C38 40.2 36.2 42 34 42H16C13.8 42 12 40.2 12 38V10Z" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2.5" strokeLinejoin="round"/>
                        <rect x="18" y="20" width="14" height="12" rx="1.5" fill="#40E0D0" fillOpacity="0.4" stroke="#1E293B" strokeWidth="2"/>
                      </svg>
                    )}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-xs font-bold uppercase bg-[#40E0D0]/10 text-[#2ca89c] dark:text-[#40E0D0] px-2.5 py-0.5 rounded-full">
                        {selectedService.category}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">• Pre-vetted Partner Rates</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white mb-2">
                      {selectedService.title}
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Let us help you sort your pre-departure details safely and easily.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  
                  {/* Left Side: Overview & Tool */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-slate-200 mb-2 uppercase tracking-wider">Service Overview</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {selectedService.longDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-slate-200 mb-3 uppercase tracking-wider">What's Included</h4>
                      <ul className="space-y-2.5">
                        {selectedService.features.map((feat, index) => (
                          <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                            <CheckCircle2 className="w-5 h-5 text-[#40E0D0] shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* DYNAMIC UTILITY TOOLS */}
                    <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-2 mb-4">
                        <Calculator className="w-4 h-4 text-[#40E0D0]" />
                        <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          {selectedService.toolLabel}
                        </h4>
                      </div>

                      {/* Tool UI */}
                      {selectedService.toolType === 'loan-calc' && (
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between text-xs font-semibold mb-1">
                              <span>Loan Principal Amount:</span>
                              <span className="text-[#2ca89c] dark:text-[#40E0D0] font-bold">${loanAmount.toLocaleString()}</span>
                            </div>
                            <input 
                              type="range" min="10000" max="150000" step="5000" 
                              value={loanAmount} 
                              onChange={(e) => setLoanAmount(Number(e.target.value))}
                              className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#40E0D0]"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-[11px] font-semibold text-slate-500 mb-1">Repayment Term</label>
                              <select 
                                value={loanTerm} 
                                onChange={(e) => setLoanTerm(Number(e.target.value))}
                                className="w-full text-xs p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                              >
                                <option value={5}>5 Years</option>
                                <option value={10}>10 Years</option>
                                <option value={15}>15 Years</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-[11px] font-semibold text-slate-500 mb-1">Co-signer status</label>
                              <select 
                                value={hasCoSigner ? "yes" : "no"} 
                                onChange={(e) => setHasCoSigner(e.target.value === "yes")}
                                className="w-full text-xs p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                              >
                                <option value="yes">With Co-signer</option>
                                <option value="no">Without Co-signer</option>
                              </select>
                            </div>
                          </div>

                          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center bg-[#40E0D0]/5 p-3 rounded-xl">
                            <div>
                              <p className="text-[10px] text-slate-400 font-bold uppercase">Estimated Monthly Payment</p>
                              <p className="text-xl font-black text-slate-900 dark:text-white">${calculateEMI()} <span className="text-xs font-normal text-slate-400">/mo</span></p>
                            </div>
                            <span className="text-[9px] text-slate-400 leading-tight block text-right max-w-[120px]">
                              Based on standard {hasCoSigner ? '6.5%' : '8.5%'} student loan interest rate.
                            </span>
                          </div>
                        </div>
                      )}

                      {selectedService.toolType === 'room-finder' && (
                        <div className="space-y-4">
                          <label className="block text-xs font-bold text-slate-500 mb-1">Choose Room Configuration:</label>
                          <div className="grid grid-cols-3 gap-2">
                            {['Shared Apartment', 'Private Studio', 'Homestay'].map((type) => {
                              const val = type.toLowerCase().split(' ')[0];
                              return (
                                <button
                                  key={type}
                                  onClick={() => setAccommodationType(val)}
                                  className={`p-2 rounded-xl text-xs font-bold border transition-all ${
                                    accommodationType === val 
                                      ? 'bg-[#40E0D0] border-[#39c9bb] text-slate-950 shadow-sm' 
                                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                                  }`}
                                >
                                  {type}
                                </button>
                              );
                            })}
                          </div>

                          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 bg-[#40E0D0]/5 p-3 rounded-xl flex justify-between items-center">
                            <div>
                              <p className="text-[10px] text-slate-400 font-bold uppercase">Estimated Average Cost</p>
                              <p className="text-base font-extrabold text-[#2ca89c] dark:text-[#40E0D0]">
                                {accommodationType === 'shared' ? '$180 - $280' : accommodationType === 'private' ? '$350 - $550' : '$150 - $220'}
                                <span className="text-xs font-normal text-slate-400">/week</span>
                              </p>
                            </div>
                            <span className="text-[9px] text-slate-400 max-w-[120px] text-right">
                              Varies slightly based on distance to city centers.
                            </span>
                          </div>
                        </div>
                      )}

                      {selectedService.toolType === 'bank-selector' && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-[11px] font-semibold text-slate-500 mb-1">Destination Country</label>
                              <select 
                                value={destCountry} 
                                onChange={(e) => setDestCountry(e.target.value)}
                                className="w-full text-xs p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                              >
                                <option value="US">United States (USD)</option>
                                <option value="UK">United Kingdom (GBP)</option>
                                <option value="CA">Canada (CAD)</option>
                                <option value="AU">Australia (AUD)</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-[11px] font-semibold text-slate-500 mb-1">Account Type Needed</label>
                              <select className="w-full text-xs p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                                <option>Checking (Everyday Expenses)</option>
                                <option>Savings & Term Deposits</option>
                              </select>
                            </div>
                          </div>

                          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 bg-[#40E0D0]/5 p-3 rounded-xl text-xs space-y-1">
                            <span className="font-bold text-[10px] uppercase text-[#2ca89c] dark:text-[#40E0D0] tracking-wider">Required starting deposit:</span>
                            <p className="text-slate-600 dark:text-slate-300 font-medium">
                              {destCountry === 'US' && "$0 Min deposit - Free Visa Check Included."}
                              {destCountry === 'UK' && "£0 Min deposit - Dual contactless card."}
                              {destCountry === 'CA' && "GIC compliance account package ready."}
                              {destCountry === 'AU' && "$0 Monthly Fee for students under 25."}
                            </p>
                          </div>
                        </div>
                      )}

                      {selectedService.toolType === 'health-estimator' && (
                        <div className="space-y-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-500 mb-1.5">Select Destination Region:</label>
                            <select className="w-full text-xs p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                              <option>Australia (OSHC Compliant)</option>
                              <option>United States (Waives University Plans)</option>
                              <option>United Kingdom (NHS Surcharge Match)</option>
                              <option>Germany (Statutory Health Insurance)</option>
                            </select>
                          </div>

                          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 bg-[#40E0D0]/5 p-3 rounded-xl flex items-center justify-between">
                            <div>
                              <p className="text-[10px] text-slate-400 font-bold uppercase">Estimated Quote Cost</p>
                              <p className="text-base font-extrabold text-[#2ca89c] dark:text-[#40E0D0]">From $38<span className="text-xs font-normal text-slate-400">/mo</span></p>
                            </div>
                            <span className="text-[10px] text-slate-400 italic">Government visa-compliant</span>
                          </div>
                        </div>
                      )}

                      {selectedService.toolType === 'transfer-converter' && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[11px] font-semibold text-slate-500 mb-1">Transfer Amount:</label>
                              <input 
                                type="number" 
                                value={transferAmount} 
                                onChange={(e) => setTransferAmount(Number(e.target.value))}
                                className="w-full text-xs p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-semibold text-slate-500 mb-1">Target Currency:</label>
                              <select 
                                value={transferCurrency} 
                                onChange={(e) => setTransferCurrency(e.target.value)}
                                className="w-full text-xs p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                              >
                                <option value="USD">USD ($)</option>
                                <option value="EUR">EUR (€)</option>
                                <option value="GBP">GBP (£)</option>
                                <option value="CAD">CAD ($)</option>
                                <option value="AUD">AUD ($)</option>
                              </select>
                            </div>
                          </div>

                          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 bg-[#40E0D0]/5 p-3 rounded-xl flex justify-between items-center text-xs">
                            <div>
                              <p className="text-[10px] text-slate-400 font-bold uppercase">You will send roughly:</p>
                              <p className="text-base font-extrabold text-[#2ca89c] dark:text-[#40E0D0]">
                                {Math.round(transferAmount / getExchangeRate()).toLocaleString()} Local Currency
                              </p>
                            </div>
                            <span className="text-[9px] text-slate-400 max-w-[120px] text-right">
                              Rate: 1 Local Unit = {getExchangeRate()} {transferCurrency}.
                            </span>
                          </div>
                        </div>
                      )}

                      {selectedService.toolType === 'sim-configurator' && (
                        <div className="space-y-4">
                          <label className="block text-xs font-bold text-slate-500 mb-1">Build High-Speed Data Plan:</label>
                          <div className="grid grid-cols-3 gap-2">
                            {['20GB Plan', '50GB Plan', 'Unlimited 5G'].map((plan) => {
                              const val = plan.toLowerCase().split(' ')[0];
                              return (
                                <button
                                  key={plan}
                                  onClick={() => setSimDataPlan(val)}
                                  className={`p-2 rounded-xl text-xs font-bold border transition-all ${
                                    simDataPlan === val 
                                      ? 'bg-[#40E0D0] border-[#39c9bb] text-slate-950 shadow-sm' 
                                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                                  }`}
                                >
                                  {plan}
                                </button>
                              );
                            })}
                          </div>

                          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 bg-[#40E0D0]/5 p-3 rounded-xl flex justify-between items-center">
                            <div>
                              <p className="text-[10px] text-slate-400 font-bold uppercase">Plan Price</p>
                              <p className="text-base font-extrabold text-[#2ca89c] dark:text-[#40E0D0]">
                                {simDataPlan === '20gb' ? '$15' : simDataPlan === '50gb' ? '$25' : '$40'}
                                <span className="text-xs font-normal text-slate-400">/mo</span>
                              </p>
                            </div>
                            <span className="text-[9px] text-slate-400 text-right">
                              Free delivery or eSIM QR scan available globally.
                            </span>
                          </div>
                        </div>
                      )}

                    </div>

                  </div>

                  {/* Right Side: Consultation Form Panel */}
                  <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-6 border border-slate-100 dark:border-slate-700">
                    {!isSubmitted ? (
                      <form onSubmit={(e) => handleApplyFormSubmit(e, selectedService.id, selectedService.title)} className="space-y-4">
                        <div className="mb-2">
                          <h4 className="font-bold text-sm text-slate-900 dark:text-slate-200 mb-1">Request Callback / Apply Now</h4>
                          <p className="text-xs text-slate-400">
                            Our verified partners will contact you within 24 business hours to lock in standard student rates.
                          </p>
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-slate-400 mb-1 uppercase tracking-wider">Your Full Name *</label>
                          <input 
                            type="text" 
                            required
                            placeholder="John Doe"
                            value={contactForm.name}
                            onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                            className="w-full text-xs p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-1 focus:ring-[#40E0D0] outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-slate-400 mb-1 uppercase tracking-wider">Email Address *</label>
                          <input 
                            type="email" 
                            required
                            placeholder="john@university.edu"
                            value={contactForm.email}
                            onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                            className="w-full text-xs p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-1 focus:ring-[#40E0D0] outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-slate-400 mb-1 uppercase tracking-wider">Contact Number</label>
                          <input 
                            type="tel" 
                            placeholder="+1 234 567 890"
                            value={contactForm.phone}
                            onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                            className="w-full text-xs p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-1 focus:ring-[#40E0D0] outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-slate-400 mb-1 uppercase tracking-wider">Specific Questions</label>
                          <textarea 
                            rows="2"
                            placeholder="Tell us about your flight date, uni destination, etc."
                            value={contactForm.comments}
                            onChange={(e) => setContactForm({ ...contactForm, comments: e.target.value })}
                            className="w-full text-xs p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-1 focus:ring-[#40E0D0] outline-none resize-none"
                          ></textarea>
                        </div>

                        <button 
                          type="submit"
                          className="w-full py-3.5 bg-[#40E0D0] hover:bg-[#39c9bb] active:scale-[0.98] transition-all text-slate-950 font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#40E0D0]/20"
                        >
                          <Send className="w-3.5 h-3.5" /> Submit Setup Request
                        </button>
                      </form>
                    ) : (
                      /* Success Submission View */
                      <div className="text-center py-10 space-y-4">
                        <div className="w-16 h-16 bg-[#40E0D0]/10 text-[#2ca89c] dark:text-[#40E0D0] rounded-full flex items-center justify-center mx-auto border border-[#40E0D0]/20 animate-bounce">
                          <Check className="w-8 h-8" />
                        </div>
                        <h4 className="font-extrabold text-lg text-slate-900 dark:text-white">Request Received!</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed px-2">
                          Thank you <strong className="text-slate-800 dark:text-slate-200">{contactForm.name}</strong>. We've recorded your interest in <strong className="text-slate-800 dark:text-slate-200">{selectedService.title}</strong>!
                        </p>
                        <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 text-left text-xs text-slate-500 space-y-1.5 shadow-sm">
                          <p className="font-bold text-slate-800 dark:text-slate-200 uppercase text-[10px] tracking-wider text-[#2ca89c] dark:text-[#40E0D0]">Next Steps:</p>
                          <p>• A personal advisor will email you at <span className="font-semibold">{contactForm.email}</span>.</p>
                          <p>• We have also updated your progress tracker with this task status!</p>
                        </div>
                        <button 
                          onClick={() => setIsSubmitted(false)}
                          className="text-xs font-bold text-[#2ca89c] dark:text-[#40E0D0] hover:underline"
                        >
                          Submit another request
                        </button>
                      </div>
                    )}
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}