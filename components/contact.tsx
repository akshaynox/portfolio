import React from "react";
import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";

const Contact = () => {
  return (
    <section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:mail.akshayks@gmail.com">
          mail.akshayks@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form className="mt-10 flex flex-col dark:text-black">
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 
          dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white 
          dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </section>
  );
};

export default Contact;
