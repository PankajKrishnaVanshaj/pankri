import { Twitter, Instagram, Linkedin, AtSign, Mail } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="container mx-auto px-4 py-16">
      {/* Page Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          We'd love to hear from you! Whether it's feedback, collaboration ideas, or questions about our tutorials, reach out below. We aim to respond within 24-48 hours.
        </p>
      </header>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <section className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Send a Message</h2>
          <p className="text-gray-600 mb-8">
            Fill out the form, and we'll get back to you soon.
          </p>

          <form className="space-y-6" action="#" method="POST"> {/* Replace with your form handler */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your Full Name"
                aria-describedby="name-error"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your@email.com"
                aria-describedby="email-error"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Collaboration Inquiry"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                placeholder="Tell us more about your inquiry..."
                aria-describedby="message-error"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>

          {/* Success/Error placeholders - handle via JS */}
          <div id="form-status" className="mt-4 hidden">
            <p className="text-green-600">Message sent successfully! We'll reply soon.</p>
            <p className="text-red-600 hidden">There was an error. Please try again.</p>
          </div>
        </section>

        {/* Contact Info & Socials */}
        <aside className="flex flex-col justify-between bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <div className="space-y-4">
              <p className="text-gray-700 flex items-center">
                <Mail className="w-5 h-5 text-gray-500 mr-3" />
                <a
                  href="mailto:pankajyadav91224@gmail.com"
                  className="font-medium text-blue-600 hover:underline"
                >
                  pankajyadav91224@gmail.com
                </a>
              </p>
              <p className="text-gray-700 flex items-center">
                <span className="font-medium mr-3">Location:</span>
                Mainpuri, Uttar Pradesh, India
              </p>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              For privacy concerns, see our{" "}
              <Link href="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
            <p className="text-gray-600 text-sm mb-4">
              Connect on social media for updates and tips.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.threads.net/@pankri_official"
                className="p-2 hover:scale-110 transition transform rounded-lg bg-white shadow-sm hover:shadow-md"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Threads"
              >
                <AtSign className="w-6 h-6 text-gray-700 hover:text-purple-500" />
              </a>
              <a
                href="https://x.com/Pankri_official"
                className="p-2 hover:scale-110 transition transform rounded-lg bg-white shadow-sm hover:shadow-md"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-6 h-6 text-gray-700 hover:text-blue-400" />
              </a>
              <a
                href="https://www.instagram.com/pankri_official"
                className="p-2 hover:scale-110 transition transform rounded-lg bg-white shadow-sm hover:shadow-md"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-gray-700 hover:text-pink-500" />
              </a>
             
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}