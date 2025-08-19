import React, { useState } from 'react';
import { FaChevronDown} from "react-icons/fa";
import {  Link } from "react-router-dom";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqData = [
    {
      question: "Authentication Issues",
      answer: "Mi est diam hendrerit ut ipsum, sodales aliquam mauris neque. Ut vel orci blandit mauris, bibendum imperdiet ipsum. Sed congue ipsum sit amet lorem consectetur, at tempor nulla volutpat.",
      tag: "New",
      tagColor: "text-blue-600 bg-blue-50"
    },
    {
      question: "Mi est diam hendrerit ut ipsum, sodales aliquam mauris neque.",
      answer: "Ut vel orci blandit mauris, bibendum imperdiet ipsum. Sed congue ipsum sit amet lorem consectetur, at tempor nulla volutpat. Donec facilisis urna vel mauris cursus.",
      lastUpdated: "Updated last week"
    },
    {
      question: "Cras vitae, scelerisque tortor augue.",
      answer: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet.",
      lastUpdated: "Updated last week"
    },
    {
      question: "Venenatis malesuada turpis sit integer felis rhoncus dictum eget ut.",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      lastUpdated: "Updated last week"
    },
    {
      question: "Pretium ultricies donec non mollis senectus lectus libero tellus.",
      answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      lastUpdated: "Updated last week"
    },
    {
      question: "Elit massa amet aenean ultrices vitae placerat augue.",
      answer: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
      lastUpdated: "Updated last week"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
            been the industry's standard dummy text ever since the 1500s,
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {faq.tag && (
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${faq.tagColor}`}>
                        {faq.tag}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-3 flex-shrink-0">
                    {faq.lastUpdated && (
                      <span className="text-sm text-gray-500 hidden sm:block">
                        {faq.lastUpdated}
                      </span>
                    )}
                    < FaChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                        openFAQ === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </div>
                </div>
              </button>

              {/* Answer Content */}
              <div className={`transition-all duration-300 ease-in-out ${
                openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-6 pb-4">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
        
             <Link to="/contact" className="hover:text-blue-500 transition-colors">
            Contact Us
          </Link>
      
        </div>
      </div>
    </section>
  );
};

export default FAQ;