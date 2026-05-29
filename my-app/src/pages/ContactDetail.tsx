import { type FormEvent, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Email from "../icons/Email";
import Phone from "../icons/Phone";
import emailjs from "emailjs-com";

export default function ContactDetail() {
  const formRef = useRef<HTMLFormElement>(null);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      const SERVICE_ID = "service_uopmdvs";
      const TEMPLATE_ID = "template_ejeghte";
      const USER_ID = "lniRFCLLbzM-niG6H";
      
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID);
      setMsg("Message sent successfully!");
      formRef.current.reset();
      setTimeout(() => setMsg(""), 3000);
    } catch (err) {
      console.error(err);
      setMsg("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        {/* Back button */}
        <Link
          to="/"
          className="flex items-center gap-2 text-orange-400 hover:text-orange-300 mb-10 text-sm"
        >
          <i className="fa-solid fa-arrow-left" /> Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-10">Contact Me</h1>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left — info */}
          <div className="flex-1 space-y-4">
            <p className="flex items-center gap-3 text-gray-400">
              <Email />
              <a
                href="mailto:parvezahmez33@gmail.com"
                className="hover:text-orange-400 transition-colors"
              >
                parvezahmez33@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-3 text-gray-400">
              <Phone />
              <a
                href="tel:08087117217"
                className="hover:text-orange-400 transition-colors"
              >
                080-8711-7217
              </a>
            </p>

            <div className="flex gap-4 text-2xl pt-2">
              <a
                href="https://facebook.com/"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <i className="fa-brands fa-facebook" />
              </a>
              <a
                href="https://twitter.com/"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <i className="fa-brands fa-twitter" />
              </a>
              <a
                href="https://linkedin.com/"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <i className="fa-brands fa-linkedin" />
              </a>
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <a
                href="/my-cv.pdf"
                download
                className="inline-block border border-orange-500 text-orange-500 px-6 py-2 rounded-full text-sm text-center hover:bg-orange-500 hover:text-white transition-colors"
              >
                Download CV
              </a>
              <a
                href="/Skillsheet.pdf"
                download
                className="inline-block border border-orange-500 text-orange-500 px-6 py-2 rounded-full text-sm text-center hover:bg-orange-500 hover:text-white transition-colors"
              >
                Download Skillsheet
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="flex-1">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
              />
              <textarea
                name="message"
                rows={6}
                placeholder="Your Message"
                className="bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 resize-none"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white py-3 rounded-full font-medium hover:bg-orange-600 transition-colors"
              >
                Submit
              </button>
              {msg && (
                <p className="text-green-400 text-sm text-center">{msg}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
