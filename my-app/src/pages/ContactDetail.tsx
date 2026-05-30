import { Link } from "react-router-dom";
import InputField from "../Layouts/InputField";
import ContactField from "../Layouts/ContactField";

export default function ContactDetail() {
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
          {/* Left — form */}
          <ContactField />
          {/* Right — form */}
          <div className="flex-1">
            <InputField />
          </div>
        </div>
      </div>
    </div>
  );
}
