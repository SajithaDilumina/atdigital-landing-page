import React, { useState } from "react";

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-primary">
        Frequently Asked Questions
      </h2>
      <ul className="space-y-4">
        {faqs.map((faq, index) => (
          <li key={index} className="bg-light-purple rounded">
            <button
              onClick={() => toggle(index)}
              className={
                "w-full flex justify-between items-center p-4 text-left focus:outline-none font-semibold" +
                (openIndex === index ? " text-primary" : " text-gray-800")
              }
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              {faq.question}
              <span className="text-2xl font-bold select-none">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div
                id={`faq-answer-${index}`}
                aria-labelledby={`faq-question-${index}`}
                className="p-4 pt-0 text-text-light"
              >
                {faq.answer}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
