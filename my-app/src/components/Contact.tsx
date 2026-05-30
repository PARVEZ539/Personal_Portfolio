import ContactField from "../Layouts/ContactField";
import InputField from "../Layouts/InputField";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-10">Contact Me</h1>
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left — form*/}
          <ContactField />
          {/* Right — form */}
          <div className="flex-1">
            <InputField />
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
