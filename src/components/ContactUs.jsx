import React, { useState } from "react";
import errorIcon from "../assets/images/icon-error.svg";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateEmail(email)) {
      setError("Whoops make sure it's an email");
      return;
    }

    setSuccess("Thanks for joining! We'll keep you updated.");
    setEmail("");
  };

  return (
    <section className="contact-us flex flex-col justify-center items-center w-full bg-primary-blue-600 px-4 py-12 gap-4 text-center text-white">
      <div>
        <span className="uppercase font-medium tracking-[5px] text-[12px]">
          35,000+ already joined
        </span>
        <h2 className="text-white my-3 md:max-w-md">
          Stay up-to-date with what we’re doing
        </h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="contact-form w-[90%] flex flex-col items-center justify-center md:flex-row gap-4 px-4"
      >
        {/* Input with error box positioned absolutely below it */}
        <div className="relative w-full md:w-sm">
          <div
            className={`relative w-full md:w-sm rounded-md ${
              error ? "border-2 border-red-500" : ""
            } bg-white`}
          >
            <input
              type="text"
              placeholder="Enter your email address"
              className={`py-2 px-8 rounded-md text-sm text-neutral-blue-950/50 placeholder:text-black/25 w-full ${
                error ? "pr-10 border-none" : "border-none"
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email Address"
            />

            {/* Error icon inside input */}
            {error && (
              <img
                src={errorIcon}
                alt="Error icon"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
              />
            )}

            {/* Error box below input, absolutely positioned */}
            {error && (
              <div className="absolute left-0 top-full bg-primary-red-400 text-white px-4 py-2 rounded-md text-[10px] w-full">
                <p>{error}</p>
              </div>
            )}
          </div>
        </div>

        {/* Button stays aligned horizontally on md+ screens */}
        <button
          type="submit"
          className="px-8 py-2 bg-primary-red-400 text-white text-sm text-center rounded-md shadow-[0px_8px_8px_-4px_hsla(231,_58%,_55%,_0.2)] cursor-pointer w-full md:w-[20%] hover:bg-white hover:border hover:border-primary-red-400 hover:text-primary-red-400"
        >
          Contact Us
        </button>
      </form>

      {success && (
        <p className="text-neutral-blue-950 text-[10px] mt-2">{success}</p>
      )}
    </section>
  );
};

export default ContactUs;
