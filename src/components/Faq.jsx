import React, { useState } from "react";
import downArrow from "../assets/images/icon-arrow.svg";

const faqData = [
  {
    question: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget.",
  },
  {
    question: "What about other Chromium browsers?",
    answer:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-container flex flex-col justify-center items-center text-center w-full gap-6 px-4 py-12 max-w-3xl mx-auto">
      <div>
        <h2 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
        <p className="text-neutral-blue-950/50 text-[15px]">
          Here are some of our FAQs. If you have any other questions, please feel free to email us.
        </p>
      </div>

      <div className="w-full text-left">
        {faqData.map((item, index) => (
          <div key={index} className="mb-4 border-b border-neutral-blue-950/15">
            <button
              onClick={() => toggleAnswer(index)}
              className="flex justify-between items-center w-full py-4 text-neutral-blue-950 font-normal text-[15px]"
            >
              {item.question}
              <img
                src={downArrow}
                alt="toggle arrow"
                className={`transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}
              />
            </button>
            {activeIndex === index && (
              <p className="pb-4 text-neutral-blue-950/70 text-[15px]">{item.answer}</p>
            )}
          </div>
        ))}
      </div>

      <button className="mt-4 bg-primary-blue-600 text-white py-2 px-6 rounded hover:bg-primary-red-300">
        More Info
      </button>
    </section>
  );
};

export default Faq;
