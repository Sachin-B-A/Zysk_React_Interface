import React, { useState } from 'react';
import { Plus } from 'lucide-react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can change your plan at any time. Your new plan will take effect immediately.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "You can cancel your subscription at any time. Once cancelled, you'll have access until the end of your billing period.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "Yes, additional information can be added to your invoice. Please contact our support team for assistance.",
    },
    {
      question: "How does billing work?",
      answer: "Billing is done on a monthly or annual basis, depending on your chosen plan.",
    },
    {
      question: "How do I change my account email?",
      answer: "You can update your account email in the settings. Reach out to support if you encounter any issues.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Frequently asked questions
          <p className="text-sm text-gray-600">Everything you need to know about Product and Billing</p>
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b border-gray-200 pb-6 transition-all duration-300 ${
                activeIndex === index ? "bg-gray-100 rounded-lg p-4" : ""
              }`}
            >
              <button
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <Plus
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-45" : ""
                  }`}
                />
              </button>
              <p
                className={`mt-4 text-gray-600 transition-all duration-300 ${
                  activeIndex === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-lg font-medium mb-4 text-gray-900">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Please chat to our friendly team.
          </p>
          <div className="flex justify-center items-center gap-2 mb-4">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Support team member"
              className="rounded-full w-10 h-10 transform hover:scale-110 transition-transform duration-300"
            />
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="Support team member"
              className="rounded-full w-10 h-10 transform hover:scale-110 transition-transform duration-300"
            />
            <img
              src="https://randomuser.me/api/portraits/women/46.jpg"
              alt="Support team member"
              className="rounded-full w-10 h-10 transform hover:scale-110 transition-transform duration-300"
            />
          </div>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 shadow-lg transform hover:scale-105 transition-transform duration-300">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}
