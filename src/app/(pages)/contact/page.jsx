import { Facebook, Twitter, Instagram, Linkedin, AtSign } from "lucide-react";

export default function Contact() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <section className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-gray-600 mb-8">
            Have questions, suggestions, or want to collaborate? Fill out the form
            below and we’ll respond as soon as possible.
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message..."
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Contact Info & Socials */}
        <aside className="flex flex-col justify-between bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Info</h2>
            <p className="text-gray-700 mb-2">
              <span className="font-medium">Email:</span> contact@pankri.com
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Location:</span> Mainpuri, Uttar Pradesh, India
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:scale-110 transition transform">
                <Facebook className="w-6 h-6 text-gray-700 hover:text-blue-600" />
              </a>
              <a href="https://www.threads.net/@pankri_official" className="hover:scale-110 transition transform">
                <AtSign className="w-6 h-6 text-gray-700 hover:text-blue-400" />
              </a>
              <a href="https://x.com/Pankri_official" className="hover:scale-110 transition transform">
                <Twitter className="w-6 h-6 text-gray-700 hover:text-blue-400" />
              </a>
              <a href="https://www.instagram.com/pankri_official" className="hover:scale-110 transition transform">
                <Instagram className="w-6 h-6 text-gray-700 hover:text-pink-500" />
              </a>
              <a href="#" className="hover:scale-110 transition transform">
                <Linkedin className="w-6 h-6 text-gray-700 hover:text-blue-700" />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
