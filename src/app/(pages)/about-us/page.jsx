import Image from "next/image";
import Link from "next/link";
import { Globe, Target, Shield, TrendingUp, Users, Mail } from "lucide-react";

export default function About() {
  return (
    <main className="container mx-auto px-4 py-16 lg:py-24">
      {/* Hero Header */}
      <header className="text-center mb-16 lg:mb-20">
        <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-700">PanKri Finance</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-medium">
          Clear, honest, and actionable personal finance & investing advice — 
          for everyone, everywhere.
        </p>
      </header>

      {/* Main Grid */}
      <section className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
        {/* Left: Content */}
        <div className="space-y-10">
          {/* Our Story */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-3">
              <Globe className="w-9 h-9 text-emerald-600" />
              Our Story
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              PanKri Finance was created because great financial education shouldn’t be locked behind paywalls, confusing jargon, or aggressive sales.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I’m <strong>Pankaj KrishnaVanshaj</strong> — a full-stack developer turned independent investor — 
              and I built this platform to share <em>what actually works</em> in building wealth: 
              simple principles, proven strategies, and zero hype.
            </p>
          </div>

          {/* Mission */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-3">
              <Target className="w-9 h-9 text-blue-600" />
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To make personal finance and investing <strong>understandable, approachable, and empowering</strong> — 
              no matter where you are in your financial journey.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every article is researched, fact-checked, and written with one reader in mind: 
              <strong>you</strong>.
            </p>
          </div>

          {/* What We Cover */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-3">
              <TrendingUp className="w-9 h-9 text-green-600" />
              What You’ll Learn Here
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4 text-gray-700 text-lg">
              {[
                "Smart investing basics",
                "Building passive income",
                "Budgeting & saving",
                "Debt elimination",
                "Retirement planning",
                "Psychology of money",
                "Index funds & ETFs",
                "Long-term wealth strategies",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-emerald-600 text-xl">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="pt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Say Hello
            </Link>
          </div>
        </div>

        {/* Right: Image + Trust Box */}
        <div className="flex flex-col items-center lg:items-end space-y-10">
          {/* Founder Photo */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-3xl blur-xl opacity-70 group-hover:opacity-90 transition duration-700"></div>
            <Image
              src="/pankaj-krishnavanshaj.png"
              alt="Pankaj KrishnaVanshaj - Founder of PanKri Finance"
              width={440}
              height={440}
              className="relative rounded-3xl shadow-2xl object-cover border-8 border-white transition-transform group-hover:scale-105 duration-500"
              priority
            />
          </div>

          {/* Trust & Transparency Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 max-w-md w-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-emerald-600" />
              Our Commitment to You
            </h3>
            <ul className="space-y-4 text-gray-700">
              {[
                "100% original content",
                "No sponsored posts",
                "No hidden affiliate links",
                "Clear, honest advice only",
                "Free forever — no paywall",
                "Backed by real experience",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-emerald-600 font-bold">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-blue-700 rounded-3xl p-12 lg:p-16 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-black mb-6">
          Start Building Your Financial Future Today
        </h2>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-95">
          Every great journey begins with a single step. Take yours now — completely free.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/blog"
            className="bg-white text-emerald-700 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition"
          >
            Explore All Articles
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}