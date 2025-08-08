import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";

export default function SocialShareBar({ date }: { date: string }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-gray-500 text-sm mb-6 bg-[#FAFBFC] px-4 py-2 w-full">
      <span>{date}</span>
      <span className="hidden md:inline">•</span>
      <span>Share:</span>
      <div className="flex gap-2">
        <span className="inline-block w-5 h-5 flex items-center justify-center bg-gray-200 rounded-full">
          <FaFacebookF size={14} />
        </span>
        <span className="inline-block w-5 h-5 flex items-center justify-center bg-gray-200 rounded-full">
          <FaTwitter size={14} />
        </span>
        <span className="inline-block w-5 h-5 flex items-center justify-center bg-gray-200 rounded-full">
          <FaInstagram size={14} />
        </span>
        <span className="inline-block w-5 h-5 flex items-center justify-center bg-gray-200 rounded-full">
          <FaLinkedinIn size={14} />
        </span>
        <span className="inline-block w-5 h-5 flex items-center justify-center bg-gray-200 rounded-full">
          <FiCopy size={14} />
        </span>
      </div>
    </div>
  );
} 