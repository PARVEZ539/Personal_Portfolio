import { useRef, useState, type FormEvent } from "react";
import emailjs from "emailjs-com";

const InputField = () => {
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
        {msg && <p className="text-green-400 text-sm text-center">{msg}</p>}
      </form>
    </div>
  );
};

export default InputField;
