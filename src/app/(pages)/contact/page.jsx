import {
  Mail,
  Send,
  Globe,
  ShieldCheck,
  MessageSquare,
  AtSign,
  Instagram,
} from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="container mx-auto px-4 py-16 lg:py-24">
      {/* Hero Header */}
      <header className="text-center mb-16 lg:mb-20">
        <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
          Get in Touch with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-700">
            PanKri Finance
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-medium">
          Have questions about investing, personal finance, or our content?
          We're here to help. Drop us a message — we respond within 24-48 hours.
        </p>
      </header>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Contact Form */}
        <section className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <Send className="w-8 h-8 text-emerald-600" />
            Send Us a Message
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Share your thoughts, ask for advice, or suggest topics. We're all
            ears.
          </p>

          <form className="space-y-6" action="#" method="POST">
            {" "}
            {/* Integrate your backend handler */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="John Doe"
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="E.g., Question about Investing Basics"
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder="Tell us what's on your mind..."
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-vertical transition"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-600 to-blue-700 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-xl hover:brightness-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300"
            >
              Send Message
            </button>
          </form>

          {/* Placeholder for form status (handle with JS/state) */}
          <div id="form-status" className="mt-6 hidden">
            <p className="text-emerald-600 font-medium">
              Message sent! We'll get back to you soon.
            </p>
            <p className="text-red-600 font-medium hidden">
              Oops, something went wrong. Please try again.
            </p>
          </div>
        </section>

        {/* Contact Info & Socials */}
        <aside className="bg-gradient-to-br from-gray-50 to-white p-8 lg:p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Mail className="w-8 h-8 text-blue-600" />
              Contact Details
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 flex items-center gap-3">
                <Globe className="w-6 h-6 text-emerald-600" />
                <span>Global Community — We're here for you worldwide</span>
              </p>
              <p className="text-lg text-gray-700 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-blue-600" />
                <a
                  href="mailto:pankajyadav91224@gmail.com"
                  className="text-emerald-700 font-semibold hover:underline"
                >
                  pankajyadav91224@gmail.com
                </a>
              </p>
            </div>
            <p className="text-sm text-gray-500">
              Your privacy matters. See our{" "}
              <Link
                href="/privacy-policy"
                className="text-emerald-600 hover:underline font-medium"
              >
                Privacy Policy
              </Link>{" "}
              for details.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <ShieldCheck className="w-7 h-7 text-emerald-600" />
              Stay Connected
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Follow for daily finance tips, market updates, and more.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.threads.net/@pankri_official"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Threads"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <AtSign className="w-6 h-6 text-gray-700 hover:text-purple-600" />
              </a>
              <a
                href="https://x.com/Pankri_official"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <svg
                  className="w-6 h-6 text-gray-700 hover:text-blue-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/pankri_official"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Instagram className="w-6 h-6 text-gray-700 hover:text-pink-600" />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
