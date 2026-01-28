import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react'

const FAQS = [
  {
    question: "What is the status of my application?",
    answer: "UneFly can unfortunately not tell you the status of your application, as you apply for courses directly through the university. Most universities will list information on the length of time it takes for them to respond to an application on their website. It often takes several weeks for an application to be processed, so you will need to be patient."
  },
  {
    question: "How can I contact a university?",
    answer: "UneFly helps you send all your requests and questions directly to the university you are interested in. On many UneFly programme pages there is a blue ‘Request free information’ form on the right hand side which you can use to contact the university directly. After filling in the form, it will be submitted straight to the university.If the programme does not have a ‘Request free information’ form, then use the direct link on the programme page you are viewing to go to the official programme webpage.If you click on the button, you will be taken straight to the university’s website, where you can find specific information related to your course of interest and look for contact information, if still needed.Not all pages contain these buttons.If this is the case, you can usually find a link to the university’s web pages in the “More” tab of the UneFly programme page."
  },
  {
    question: "How can I get / find a scholarship?",
    answer: "To facilitate your search for a dream programme, you can find an overview of scholarships available on My Journey – Mastersportal.com To be eligible for financial help from your university or another association, you will usually need to write a short essay on why you think you should receive it – why the area of study interests you, or why you want to study in that location. You may also need to prove you have a good academic record or financial need in order to receive a scholarship.We can’t answer individual questions about scholarships, so if you have questions regarding a specific scholarship it is easiest if you directly get in contact with the respective scholarship provider or university."
  },
  {
    question: "Where can I find an application form?",
    answer: "You cannot apply for courses through the UneFly website; you apply for a course directly through your chosen university. Usually, you can find the application forms on the programme website. If you have questions regarding this, get directly in contact with the respective university."
  },
  {
    question: "Is my English good enough to study abroad?",
    answer: "Most universities that teach in English require a certain level of English language proficiency for you to be admitted to the programme. This is to make sure that you will be able to cope with using the language in an academic environment if you are not a native speaker. The exact level required depends on the university – the international office of your university will be able to tell you exactly what level you require. For most programmes listed on our websites you can also find this information under the ‘Requirements’ tab on the study page.You will usually need to have taken an exam to prove your level of English within the last two years. If you have a certificate older than that, you may need to re-take the test. You will be expected to prove your ability in reading, writing, speaking and listening. You may not have to take an English test if you have already spent time studying or working in an English-speaking environment – all universities are different, so you should review the requirements for your universities to be sure.There are lots of different companies offering English proficiency tests. You should check with your university which tests they accept before you take the exam. One of the best and most widely recognised companies providing English language tests is IELTS (International English Language Testing System). IELTS is accepted by thousands of English-speaking institutions all over the world and is the preferred English exam for entry to UK universities. It tests English using real-life examples and has a very high academic standard. You can also check what level of English your institution requires through the IELTS website.You can find more information about the IELTS test, test dates and test locations on admissiontestportal.com.Other well-known English language tests are TOEFL (Test of English as a Foreign Language), and the Cambridge English certificates. TOEFL focuses on American English and is usually the only recognised language test for entry to US universities (remember that you may also need to take the SAT test for entry to a US university – this also tests your level of language). You can take the TOEFL at a test centre, either in paper form or electronic form. The Cambridge English certificates include IELTS and a variety of other tests at different levels, such as the Certificate of Advanced English and Certificate of English Proficiency. Apart from IELTS, these may not be accepted by your university, but are accepted by many governments and employers as proof of your level of English."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-5xl md:text-4xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
        <p className='mb-12 lg:text-lg text-[16px]'>Dear Student, before sending us a message, please have a look at our frequently asked questions. Maybe these answer your question right away!</p>
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-colors text-left cursor-pointer"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-auto opacity-100 p-4 pt-0 bg-white' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
              >
                <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;