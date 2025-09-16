import { Facebook, Twitter, Instagram, Linkedin, AtSign } from "lucide-react";

const Footer = () => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ];

  const socials = [
    { Icon: Facebook, href: "#" },
    { Icon: Twitter, href: "https://x.com/Pankri_official" },
    { Icon: Instagram, href: "https://www.instagram.com/pankri_official" },
    { Icon: Linkedin, href: "#" },
    { Icon: AtSign, href: "https://www.threads.net/@pankri_official" },
  ];

  return (
    <footer className="w-full bg-white rounded-2xl shadow-md text-gray-900 mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand & About */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-700">PanKri</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            Sharing knowledge, insights, and stories on tech, coding, and
            creativity. Explore tutorials, articles, and tips to stay inspired
            with <span className="font-semibold text-gray-900">PanKri</span>.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {links.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 hover:underline underline-offset-4 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            {socials.map(({ Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white hover:scale-110 transition transform"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-800 text-center py-4 text-sm text-white">
        © {new Date().getFullYear()} PanKri. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
