import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t mt-12 py-6 text-center text-gray-600 text-sm bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        © {new Date().getFullYear()} <span className="font-semibold">PanKri</span>. All rights reserved.
        {" | "}
        <Link href="/privacy-policy" className="text-blue-600 hover:underline">
          Privacy Policy
        </Link>
        {" | "}
        <Link href="/terms" className="text-blue-600 hover:underline">
          Terms & Conditions
        </Link>
        {" | "}
        <Link href="/contact" className="text-blue-600 hover:underline">
          Contact
        </Link>
        {" | "}
        <Link href="/about-us" className="text-blue-600 hover:underline">
          About
        </Link>
      </div>
    </footer>
  );
};

export default Footer;