const Footer = () => {
  return (
    <footer className="border-t mt-12 py-6 text-center text-gray-600 text-sm">
      © {new Date().getFullYear()} PanKri. All rights reserved. |{" "}
      <a href="/privacy" className="text-blue-600 hover:underline">
        Privacy Policy
      </a>{" "}
      |{" "}
      <a href="/terms" className="text-blue-600 hover:underline">
        Terms & Conditions
      </a>{" "}
      |{" "}
      <a href="/contact" className="text-blue-600 hover:underline">
        Contact
      </a>{" "}
      |{" "}
      <a href="/about" className="text-blue-600 hover:underline">
        About
      </a>
    </footer>
  );
};

export default Footer;
