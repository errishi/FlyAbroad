import React, { useState, useEffect } from 'react';

const INITIAL_FAQS = [
  {
    id: 1,
    question: "What services does Unefly offer?",
    answer: "Unefly helps students and professionals with study abroad admissions, work abroad placements, and online degree programs. Our platform also provides financial services, affordable and safe housing, visa and consular services, and continuous career guidance."
  },
  {
    id: 2,
    question: "How do I get started?",
    answer: "To get started, you can sign up on our platform and book a free counseling session. Our expert advisors will assess your profile, discuss your career goals, and map out a personalized plan for your academic or professional journey abroad."
  },
  {
    id: 3,
    question: "Which countries can I apply to?",
    answer: "We assist with applications to top study destinations worldwide, including the United States, United Kingdom, Canada, Australia, Ireland, Germany, New Zealand, Singapore, and several European countries."
  },
  {
    id: 4,
    question: "How does the study abroad process work?",
    answer: "The process begins with career counseling and university selection, followed by test preparation (IELTS, TOEFL, GRE, etc.). We then assist with document preparation (SOPs, LORs), application submission, securing scholarships, applying for student visas, and pre-departure briefings."
  },
  {
    id: 5,
    question: "Can you help with scholarships and education loans?",
    answer: "Yes, we have a dedicated financial services arm, Unefly Finance, which helps you discover eligible scholarships, compare competitive education loan offers from leading banks, and facilitate international money transfers seamlessly."
  },
  {
    id: 6,
    question: "Do you provide support after I land abroad?",
    answer: "Absolutely! Through our post-landing services, we help you find safe and affordable accommodation, set up local bank accounts, secure student SIM cards, and connect you with global student communities to ensure a smooth transition."
  }
];

export default function App() {
  const [openId, setOpenId] = useState(1); // Set Q1 open by default to match the exact screenshot

  // Inject Google Fonts on mount for beautiful serif and sans-serif typography
  useEffect(() => {
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
  }, []);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white transition-colors duration-300 pb-24 relative overflow-hidden">
      
      {/* Styles Injection for Custom Font Families */}
      <style>{`
        .faq-serif {
          font-family: 'Playfair Display', Georgia, serif;
        }
        .faq-sans {
          font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
        }
      `}</style>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-24">
        
        {/* Exact Replica Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b-0">
          <div className="flex-shrink-0">
            <h1 className="text-4xl lg:text-[54px] faq-serif text-[#0b2d3f] font-normal leading-[1.1] tracking-tight">
              Frequently <br />
              Asked Questions
            </h1>
          </div>
          
          {/* Decorative Horizontal Line matching the screenshot */}
          <div className="hidden lg:block flex-grow h-[1px] bg-[#0b2d3f] opacity-20 mx-8 mb-4"></div>
          
          <div className="lg:max-w-xs self-start lg:self-end lg:mb-1">
            <p className="faq-sans text-[15px] lg:text-[17px] font-normal leading-relaxed text-[#0b2d3f] text-left">
              Find answers to common questions about our programs and services
            </p>
          </div>
        </div>

        {/* Accordion List Container */}
        <div className="space-y-[14px]">
          {INITIAL_FAQS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id} 
                className="rounded-[4px] overflow-hidden bg-[#f4f5f7] hover:bg-[#eaecef] transition-all duration-300"
              >
                {/* Header Row */}
                <div 
                  onClick={() => handleToggle(item.id)}
                  className="flex justify-between items-center py-[22px] px-6 md:px-8 cursor-pointer select-none"
                >
                  <span className="text-[17px] md:text-[19px] faq-serif font-semibold tracking-wide text-[#0b2d3f]">
                    {item.question}
                  </span>
                  
                  <div className="flex items-center">
                    {/* Clean Chevron SVG matching the original design */}
                    <svg
                      className={`w-5 h-5 text-[#0b2d3f] transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Smooth Expandable Panel */}
                <div 
                  className="transition-all duration-500 ease-in-out overflow-hidden"
                  style={{
                    maxHeight: isOpen ? '300px' : '0px',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <div className="px-6 md:px-8 pb-[26px] pt-1">
                    <p className="faq-sans text-[14px] md:text-[15px] leading-[1.65] font-normal tracking-wide text-[#445a66]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}