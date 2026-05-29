import { type FormEvent, useRef, useState } from "react";
const SCRIPT_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

import Email from "../icons/Email";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: new FormData(formRef.current),
      });
      setMsg("Message sent successfully!");
      formRef.current.reset();
      setTimeout(() => setMsg(""), 3000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">Contact </h2>

            <p className="flex items-center gap-2 mb-2 text-gray-400">
              <Email />
              <i className="fa-solid fa-paper-plane text-orange-400" />{" "}
              parvezahmez33@gmail.com
            </p>
            <p className="flex items-center gap-2 mb-6 text-gray-400">
              <i className="fa-solid fa-square-phone text-orange-400" />{" "}
              080-8711-7217
            </p>
            <div className="flex gap-4 mb-6 text-2xl">
              <a
                href="https://facebook.com/..."
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <i className="fa-brands fa-facebook" />
              </a>
              <a
                href="https://twitter.com/..."
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <i className="fa-brands fa-twitter" />
              </a>
              <a
                href="https://linkedin.com/..."
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <i className="fa-brands fa-linkedin" />
              </a>
            </div>
            {/* <div className="flex flex-col gap-3">
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
            </div> */}
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
                name="Name"
                placeholder="Your name"
                required
                className="bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
              />
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                required
                className="bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
              />
              <textarea
                name="Message"
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

        {/* Footer */}
        <div className="text-center mt-16 text-gray-500 text-sm border-t border-gray-800 pt-6">
          Copyright &copy; Parvez Ahmed. Made with{" "}
          <i className="fa-solid fa-heart text-orange-500" /> by Parvez Ahmed
        </div>
      </div>
    </section>
  );
}
