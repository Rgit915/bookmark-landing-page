import { useState } from "react";

import illustration1 from "../assets/images/illustration-features-tab-1.svg";
import illustration2 from "../assets/images/illustration-features-tab-2.svg";
import illustration3 from "../assets/images/illustration-features-tab-3.svg";
import blueRectangle from "../assets/images/Rectangle.png";

const Features = () => {
  const [activeTab, setActiveTab] = useState(0);

  const slides = [
    {
      tabTitle: "Simple Bookmarking",
      content: {
        image: illustration1,
        heading: "Bookmark in one click",
        description:
          "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      },
    },
    {
      tabTitle: "Speedy Searching",
      content: {
        image: illustration2,
        heading: "Intelligent search",
        description:
          "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      },
    },
    {
      tabTitle: "Easy Sharing",
      content: {
        image: illustration3,
        heading: "Share your bookmarks",
        description:
          "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      },
    },
  ];

  return (
    <section className="features-container text-center px-4 py-10 md:px-0">
      <h2 className="mb-4">Features</h2>
      <p className="max-w-xl mx-auto mb-6 text-neutral-blue-950/50 font-normal text-[15px]">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <hr className="mb-4 border-divider-primary-light md:hidden" />

      <div className="tab-heading flex flex-col md:flex-row justify-center gap-4 mb-8">
        {slides.map((slide, index) => (
          <>
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 border-b-2 w-full font-normal text-[15px] text-center cursor-pointer hover:text-primary-red-400 ${
                activeTab === index
                  ? "border-primary-red-400 text-neutral-blue-950"
                  : "border-divider-primary-light text-neutral-blue-950/75"
              }`}
            >
              {slide.tabTitle}
            </button>
          </>
        ))}
      </div>

      <article className="tab-content relative flex flex-col justify-between max-w-4xl mx-auto text-center md:flex-row gap-8 md:gap-16">
        <div className="relative">
          {/* Rectangle background image */}
          <img
            src={blueRectangle}
            alt="Blue rectangle background"
            className="absolute left-0 top-1/2 -translate-y-1/3 -translate-x-1/3 -z-10 w-[577px] h-[203px] rotate-180 md:w-[1000px]"
          />
          {/* Main illustration image */}
          <img
            src={slides[activeTab].content.image}
            alt={slides[activeTab].content.heading}
            className="mx-auto mb-6 relative z-10"
          />
        </div>
        <div className="md:flex md:flex-col md:items-start">
          <h3 className="text-2xl font-medium mt-16 mb-4 md:text-left">
            {slides[activeTab].content.heading}
          </h3>
          <p className="text-neutral-blue-950/50 text-[15px] text-center mb-6 md:text-left">
            {slides[activeTab].content.description}
          </p>
          <button className="bg-primary-blue-600 text-white text-[15px] px-6 py-2 rounded-md hover:bg-primary-red-300">
            More Info
          </button>
        </div>
      </article>
    </section>
  );
};

export default Features;
