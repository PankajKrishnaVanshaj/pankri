"use client";

import Link from "next/link";
import { Share2 } from "lucide-react";

// WhatsApp SVG
const WhatsappIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="currentColor"
  >
    <path d="M380.9 97.1C339-7.7 204.3-18.1 112.1 60.8 26.1 133.7 7.1 276.6 60.3 378.6L0 512l137.7-58.1c102 53.2 245 34.2 318-51.8 79.1-92.2 68.7-226.9-75-305.1zM224 336c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z" />
  </svg>
);

// Telegram SVG
const TelegramIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 496 512"
    fill="currentColor"
  >
    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm115 168-46 216c-3 13-12 17-25 10l-70-52-34 33c-4 4-7 7-14 7l5-69 126-114c6-5-1-8-9-3l-155 97-66-21c-14-5-13-14 3-20l258-99c12-5 23 3 19 20z" />
  </svg>
);

export default function SideButtons() {
  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50">
      {/* Share Button */}
      <button
        onClick={() =>
          navigator.share?.({ title: document.title, url: window.location.href })
        }
        className="flex items-center justify-center w-14 h-14 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-tr from-blue-500 to-blue-700 text-white rounded-full shadow-xl backdrop-blur-md hover:scale-110 hover:shadow-2xl transition-all duration-300"
        title="Share"
      >
        <Share2 size={24} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>

      {/* Telegram Button */}
      <Link
        href="https://t.me/your_channel" // replace with your Telegram link
        target="_blank"
        className="flex items-center justify-center w-14 h-14 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-tr from-purple-500 to-purple-700 text-white rounded-full shadow-xl backdrop-blur-md hover:scale-110 hover:shadow-2xl transition-all duration-300"
        title="Join Telegram"
      >
        <TelegramIcon className="w-6 h-6 sm:w-5 sm:h-5 md:w-7 md:h-7" />
      </Link>

      {/* WhatsApp Button */}
      <Link
        href="https://chat.whatsapp.com/your_invite_link" // replace with your WhatsApp link
        target="_blank"
        className="flex items-center justify-center w-14 h-14 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-tr from-green-500 to-green-700 text-white rounded-full shadow-xl backdrop-blur-md hover:scale-110 hover:shadow-2xl transition-all duration-300"
        title="Join WhatsApp"
      >
        <WhatsappIcon className="w-6 h-6 sm:w-5 sm:h-5 md:w-7 md:h-7" />
      </Link>
    </div>
  );
}
