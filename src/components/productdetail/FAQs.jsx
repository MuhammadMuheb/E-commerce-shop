import React, { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi2";

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the material of the t-shirt?",
      answer:
        "Provide details about the fabric type (e.g., cotton, polyester, blend), weight, and any specific features.",
    },
    {
      question: "What are the care instructions for the t-shirt?",
      answer:
        "Outline recommended washing, drying, and ironing methods to maintain quality and longevity.",
    },
    {
      question: "What is the design or print on the t-shirt made of?",
      answer:
        "Explain the material used for the design (e.g., vinyl, screen print, embroidery) and its durability.",
    },
    {
      question: "Is the t-shirt unisex or designed for specific genders?",
      answer:
        "Indicate whether the shirt is suitable for both men and women or targeted towards a particular gender.",
    },
    {
      question: "What are the shipping options and costs?",
      answer:
        "Provide information about shipping methods, estimated delivery times, and associated fees.",
    },
    {
      question: "What is the return policy for the t-shirt?",
      answer:
        "Outline the return window, conditions, and refund or exchange procedures.",
    },
  ];
  
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mb-12 sm:mb-16">
      <section>
        <h3 className="text-xl sm:text-2xl font-bold text-black mb-5 sm:mb-6">
          Frequently Asked Questions
        </h3>

        <div className="border-t divide-y">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between py-4 text-left text-sm sm:text-base font-[600] text-black transition-all hover:underline"
              >
                {faq.question}
                <HiOutlineChevronDown
                  className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="pb-4 text-sm text-black/70">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default FAQs;
