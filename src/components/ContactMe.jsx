import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const ContactMe = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    setLoading(false);
    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      event.target.reset(); // clears the form
    } else {
      setResult("Failed to send message. Try again.");
    }
  };

  return (
    <section
      id="contact"
      className="text-white w-full max-w-6xl mx-auto mt-10 p-5 mb-20"
    >
      <h1 data-aos="zoom-in" className="text-4xl font-bold text-center mb-10">
        Get In Touch
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-64 ">
        {/* LEFT SIDE */}
        <div data-aos="fade-right" className="space-y-5 px-6">
          <p className="text-lg mb-10 mt-5">
            Looking for opportunities to grow, learn, and
            contribute—Internships, Hiring & Placement queries are welcome.
          </p>

          <p className="flex items-center gap-3 text-lg">
            <MdOutlineMail className="text-3xl text-blue-500" />{" "}
            vanshdakhode23@gmail.com
          </p>
          <p className="flex items-center gap-3 text-lg">
            <FaPhoneAlt className="text-3xl text-blue-500" /> +91 7620339526
          </p>
          <p className="flex items-center gap-3 text-lg">
            <FaLocationDot className="text-3xl text-blue-500" /> India
          </p>

          <div className="flex gap-8 text-4xl mt-10">
            <a
              href="https://www.linkedin.com/in/vansh-dakhode-29a27635a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              className="hover:scale-125 transition-transform duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/MRVx77"
              target="_blank"
              className="hover:scale-125 transition-transform duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://wa.me/917620339526"
              target="_blank"
              className="hover:scale-125 transition-transform duration-300"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form data-aos="fade-left" className="space-y-4" onSubmit={onSubmit}>
          <input
            data-aos="fade-left"
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 hover:border-gray-300 transition duration-300"
          />
          <input
            data-aos="fade-left"
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 hover:border-gray-300 transition duration-300"
          />
          <textarea
            data-aos="fade-left"
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 hover:border-gray-300 transition duration-300"
          ></textarea>

          <input type="text" name="honeypot" style={{ display: "none" }} />

          <button
            data-aos="zoom-in"
            type="submit"
            className="w-full mt-3 p-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition hover:shadow-[0_0_7px_3px_rgba(0,212,255,1)] duration-200"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          <p
            data-aos="fade-up"
            className={`text-xl mt-6 font-semibold ${
              result === "Message sent successfully!"
                ? "text-green-400"
                : "text-red-500"
            }`}
          >
            {result}
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
