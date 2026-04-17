import Link from "next/link";
import { FC } from "react";

const ContactSection: FC = () => {
  return (
    <div className="flex flex-col items-center mt-14 gap-4 sm:flex-row sm:justify-center" id="contact">
      <Link
        href="https://www.linkedin.com/in/vishnu-prasad-korada"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/15"
      >
        Connect on LinkedIn
      </Link>
      <Link
        href="mailto:vishnuprasadforwork@gmail.com"
        className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-100"
      >
        Email Me
      </Link>
    </div>
  );
};

export default ContactSection