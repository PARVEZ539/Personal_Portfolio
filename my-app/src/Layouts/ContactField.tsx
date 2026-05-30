import Email from "../icons/Email";
import Phone from "../icons/Phone";
import Facebook from "../icons/Facebook";
import Twitter from "../icons/Twitter";
import Linkedin from "../icons/Linkedin";

const ContactField = () => {
  return (
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

      {/* // Social media links */}
      <div className="flex gap-4 text-2xl pt-2">
        <a href="https://www.facebook.com/profile.php?id=100011190123004">
          <Facebook />
        </a>
        <a href="https://x.com/PPavel360">
          <Twitter />
        </a>
        <a href="https://www.linkedin.com/in/parvez-ahmed-3a94911b3/">
          <Linkedin />
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
  );
};

export default ContactField;
