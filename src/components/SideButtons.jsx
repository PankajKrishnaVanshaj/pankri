"use client";

import Link from "next/link";
import { Share2 } from "lucide-react";

export const config = { amp: 'true' };

// WhatsApp SVG
const WhatsappIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.552 4.118 1.517 5.877L0 24l6.305-1.517A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.6c-1.974 0-3.81-.64-5.297-1.723l-.37-.195-3.73.898.913-3.64-.196-.374A9.6 9.6 0 1112 21.6zm5.5-6.69c-.31-.155-1.84-.905-2.126-1.008-.285-.103-.492-.155-.7.155-.207.31-.805.905-.992 1.087-.187.182-.373.207-.683.052-.31-.155-1.31-.482-2.498-1.54-1.84-1.64-3.07-3.67-3.43-4.29-.36-.62-.038-1.395.27-1.705.28-.28.62-.36 1.03-.36.36 0 .72.103.825.258.103.154.413.905.62 1.36.207.465.258.826.052 1.136-.207.31-.31.517-.62.775-.31.258-.413.568-.31.878.103.31.465.775 1.03 1.24.568.465 1.24.775 1.705.878.465.103.878-.052 1.24-.258.36-.207.775-.465.878-.775.103-.31.103-.568.052-.775-.052-.207-.258-.31-.568-.465z" />
  </svg>
);

// Telegram SVG
const TelegramIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm4.32 5.67s-.62.21-1.64.52c-2.96.88-12.13 4.55-12.62 4.72-.36.12-.45.36-.41.62.05.27.29.48.68.53l3.16.77c.31.08.6-.03.75-.27l1.67-3.08c.14-.26.47-.34.73-.2.26.14.34.47.2.73l-1.84 3.39c-.17.31-.05.69.27.86l2.69 1.13c.24.1.51.04.69-.14l2.21-2.14 3.04-2.77c.27-.25.34-.64.17-.96-.17-.32-.55-.45-.89-.29z" />
  </svg>
);

export default function SideButtons() {
  return (
    <div className="fixed left-2 sm:left-3 top-1/2 -translate-y-1/2 flex flex-col gap-3 sm:gap-4 z-50">
      {/* Share Button */}
      <button
        onClick={() =>
          navigator.share?.({
            title: document.title,
            url: window.location.href,
          })
        }
        className="group flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 
        bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full shadow-lg 
        hover:shadow-xl backdrop-blur-lg hover:scale-105 active:scale-95 
        transition-all duration-300 ease-out"
        title="Share this page"
      >
        <Share2 className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
      </button>

      {/* Telegram Button */}
      <Link
        href="https://t.me/pankri_official"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 
        bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-full shadow-lg 
        hover:shadow-xl backdrop-blur-lg hover:scale-105 active:scale-95 
        transition-all duration-300 ease-out"
        // title="Join our Telegram"
      >
        <TelegramIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
        <span
          className="flex absolute left-full ml-2 top-1/2 -translate-y-1/2
  px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm 
  font-medium rounded-xl shadow-lg
  bg-gray-600/80 backdrop-blur-md text-white whitespace-nowrap"
        >
          Join Telegram
        </span>
      </Link>

      {/* WhatsApp Button */}
      <Link
        href="https://whatsapp.com/channel/0029Vb5vc2jJf05YiNMRXW2d"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 
        bg-gradient-to-br from-green-600 to-green-800 text-white rounded-full shadow-lg 
        hover:shadow-xl backdrop-blur-lg hover:scale-105 active:scale-95 
        transition-all duration-300 ease-out"
        // title="Join our WhatsApp"
      >
        <WhatsappIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
        <span
          className="flex absolute left-full ml-2 top-1/2 -translate-y-1/2
  px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm 
  font-medium rounded-xl shadow-lg
  bg-gray-600/80 backdrop-blur-md text-white whitespace-nowrap"
        >
          Join WhatsApp
        </span>
      </Link>
    </div>
  );
}
