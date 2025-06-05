import React from "react";

const ContactUs = () => {
  return (
    <section className="contact-us flex flex-col justify-center items-center w-full bg-primary-blue-600 px-4 py-12 gap-4 text-center text-white">
      <div>
        <span className="uppercase font-medium tracking-[5px] text-[12px]">35,000+ already joined</span>
        <h2 className="text-white my-3">Stay up-to-date with what we’re doing</h2>
      </div>
      <div className="contact-form w-[90%] flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Enter your email address"
          className="py-2 px-8 bg-white rounded-md text-sm placeholder:text-black/25 "
        />
        <button className="px-8 py-2 bg-primary-red-400 text-white text-sm text-center rounded-md shadow-[0px_8px_8px_-4px_hsla(231,_58%,_55%,_0.2)]">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default ContactUs;
