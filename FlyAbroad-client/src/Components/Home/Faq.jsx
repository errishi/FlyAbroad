import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ChevronDown
} from 'lucide-react';

const FAQ_DATA = [
  {
    id: 1,
    category: 'Courses',
    question: 'How do I choose the right university and course for my profile?',
    answer: 'Unefly uses an AI-driven matching algorithm combined with expert counselor validation. We analyze your academic background, test scores (IELTS/TOEFL/GRE), budget, and career goals to recommend a curated list of universities where you have the highest chance of acceptance.'
  },
  {
    id: 2,
    category: 'Courses',
    question: 'Does Unefly offer guidance for both Undergraduate and Postgraduate programs?',
    answer: 'Yes! We support students looking for Bachelors, Masters, MBA, and PhD programs across the USA, UK, Canada, Australia, and 15+ other countries.'
  },
  {
    id: 3,
    category: 'Enrollment',
    question: 'What documents are required for the application process?',
    answer: 'Generally, you will need your academic transcripts, Standardized Test Scores (SAT/GRE/GMAT), English Proficiency Proof (IELTS/TOEFL), Statement of Purpose (SOP), Letters of Recommendation (LORs), and a valid passport.'
  },
  {
    id: 4,
    category: 'Enrollment',
    question: 'Is there an application fee for applying to universities via Unefly?',
    answer: 'Unefly itself is a free platform for students. However, most universities charge their own application fees. In some cases, Unefly partners with universities to offer application fee waivers for eligible students.'
  },
  {
    id: 5,
    category: 'Enrollment',
    question: 'How long does it take to get an offer letter?',
    answer: 'Timelines vary by country and university. Generally, the UK and Australia can take 2-4 weeks, while US and Canadian universities may take 4-8 weeks.'
  },
  {
    id: 6,
    category: 'Career',
    question: 'Can I work while studying abroad?',
    answer: 'Most study destinations allow international students to work part-time (usually 20 hours per week) during term time and full-time during breaks.'
  },
  {
    id: 7,
    category: 'Career',
    question: 'What are the post-study work opportunities?',
    answer: 'Post-study work rights (PSW) vary by country. For example, the UK offers a 2-year Graduate Route visa, while Canada offers a PGWP for up to 3 years.'
  },
  {
    id: 8,
    category: 'Visa & Finance',
    question: 'Does Unefly help with student loans and scholarships?',
    answer: 'Absolutely. We have tied up with leading financial institutions to help you secure education loans. We also maintain a database of over 5,000 scholarships.'
  },
  {
    id: 9,
    category: 'Visa & Finance',
    question: 'When should I apply for my student visa?',
    answer: 'We recommend starting your visa process at least 3 months before your course start date. Once you receive your CAS (UK) or I-20 (USA), our experts will guide you.'
  }
];

export default function Faq() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItem, setOpenItem] = useState(null);

  const toggleAccordion = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  const filteredFAQs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      return item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
             item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-white py-18 px-4 font-sans text-slate-800">
      <div className="max-w-3xl mx-auto">
        
        {/* Simplified Search Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Frequently Asked Questions</h2>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search for answers..." 
              style={{ caretColor: '#0B7707' }}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B7707]/20 focus:border-[#0B7707] transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq) => (
              <div 
                key={faq.id} 
                className={`bg-white rounded-xl border transition-all duration-200 ${
                  openItem === faq.id 
                    ? 'border-[#0B7707]/30 ring-4 ring-[#0B7707]/5' 
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-6 py-5 cursor-pointer flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`font-semibold transition-colors duration-200 ${openItem === faq.id ? 'text-[#0B7707]' : 'text-slate-800'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 transition-transform duration-300 ${openItem === faq.id ? 'rotate-180 text-[#0B7707]' : 'text-slate-400'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openItem === faq.id ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <div className="pt-2 text-slate-600 leading-relaxed border-t border-slate-50">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-500">No matching questions found.</p>
              <button 
                onClick={() => setSearchQuery('')}
                className="mt-2 font-medium hover:opacity-80 transition-opacity"
                style={{ color: '#0B7707' }}
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}