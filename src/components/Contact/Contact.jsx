import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="h-screen w-full bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/f9c57b5b-88c0-42fc-98e4-c2bbc1831a3c"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="py-4 text-gray-300">
          <p className="text-4xl font-bold border-b-4 border-b-[#00E469] inline">
            Let's Work!
          </p>
          <p className="py-5">
            Submit the form below or shoot me an email me at&nbsp;
            <span className="text-[#00E469]">
              <a href="mailto:hassan.aneeq01@gmail.com">
                hassan.aneeq01@gmail.com
              </a>
            </span>
          </p>
        </div>
        <input
          required
          type="text"
          placeholder="Name"
          className="p-2 mb-3 bg-[#ccd6f6]"
          name="name"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          className="p-2 mb-3 bg-[#ccd6f6]"
        />
        <textarea
          required
          name="Message"
          placeholder="Message"
          className="p-2 bg-[#ccd6f6]"
          rows="10"
        ></textarea>

        <button
          type="submit"
          className="border-2 text-[#00E469] px-7 py-3 my-5 mx-auto font-bold submit-button"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
