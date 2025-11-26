import Link from "next/link";

export default function Privacy() {
  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl">
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
          Privacy Policy
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
          Your trust is our top priority. This policy explains exactly how we collect, use, and protect your information — 
          transparently and responsibly.
        </p>
      </header>

      {/* Content */}
      <section className="prose prose-lg prose-emerald max-w-none space-y-12 text-gray-700">
        <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Introduction</h2>
          <p className="leading-relaxed text-base">
            Welcome to <strong>PanKri Finance</strong> (<Link href="/" className="text-emerald-600 hover:underline font-medium">https://pankri.com</Link>), 
            a personal finance and investing education platform created and operated by <strong>Pankaj KrishnaVanshaj</strong>.
          </p>
          <p className="mt-4">
            We are committed to protecting your privacy and being fully transparent about what data we collect (very little), 
            why we collect it, and how it’s used. This Privacy Policy applies to all visitors and users of our website.
          </p>
          <p className="mt-4 font-medium">
            By using PanKri Finance, you agree to the practices described in this policy.
          </p>
        </article>

        <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
          <p>We collect only what is necessary to deliver and improve our service:</p>
          <ul className="mt-4 space-y-3 text-base">
            <li className="flex items-start gap-3">
              <span className="text-emerald-600 mt-1">→</span>
              <div>
                <strong>Automatically collected (anonymous):</strong> Browser type, device information, approximate location (country-level), 
                pages viewed, time spent, and referral source — via Google Analytics.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-600 mt-1">→</span>
              <div>
                <strong>Advertising data:</strong> If ads are displayed (via Google AdSense), Google may use cookies to show relevant ads 
                based on your past visits to this and other sites.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-600 mt-1">→</span>
              <div>
                <strong>Voluntarily provided:</strong> Only your name and email if you contact us via the contact form.
              </div>
            </li>
          </ul>
          <p className="mt-6 font-semibold text-gray-800">
            We do NOT collect sensitive personal information such as financial details, passwords, or identity documents.
          </p>
        </article>

        <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
          <ul className="space-y-3 text-base">
            <li className="flex items-start gap-3">
              <span className="text-emerald-600 mt-1">→</span>
              To improve content and user experience
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-600 mt-1">→</span>
              To understand which topics readers find most helpful
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-600 mt-1">→</span>
              To respond to your messages or inquiries
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-600 mt-1">→</span>
              To display relevant (non-intrusive) ads that support free access to our content
            </li>
          </ul>
        </article>

        <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Cookies & Tracking</h2>
          <p>We use cookies only for:</p>
          <ul className="mt-4 space-y-2">
            <li>• Essential site functionality</li>
            <li>• Google Analytics (anonymous usage stats)</li>
            <li>• Google AdSense (personalized advertising, if enabled)</li>
          </ul>
          <p className="mt-6">
            You can disable cookies in your browser at any time. You can also opt out of personalized ads here:
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 font-medium hover:underline"
            >
              Google Ads Settings
            </a>
            <span>•</span>
            <a
              href="https://optout.aboutads.info"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 font-medium hover:underline"
            >
              AdChoices Opt-Out
            </a>
          </div>
        </article>

        <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Third-Party Services</h2>
          <p>We use the following trusted services:</p>
          <ul className="mt-4 space-y-3 text-base">
            <li>
              <strong>Google Analytics</strong> – Anonymous website traffic analysis
            </li>
            <li>
              <strong>Google AdSense</strong> – Contextual and personalized advertising (when active)
            </li>
            <li>
              <strong>VPS</strong> – Secure hosting and performance
            </li>
          </ul>
          <p className="mt-4">
            These partners have their own privacy policies and may place cookies. We do not control their data practices.
          </p>
        </article>

        <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Data Security</h2>
          <p>
            We use industry-standard security measures including:
          </p>
          <ul className="mt-4 space-y-2">
            <li>• HTTPS encryption (SSL/TLS)</li>
            <li>• Secure server infrastructure</li>
            <li>• Limited access controls</li>
            <li>• Regular security updates</li>
          </ul>
          <p className="mt-6">
            While we take strong precautions, no online service can guarantee 100% security.
          </p>
        </article>

        <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
          <p>You have full control:</p>
          <ul className="mt-4 space-y-3 text-base">
            <li>• Access any data we hold about you</li>
            <li>• Request correction or deletion</li>
            <li>• Opt out of personalized advertising</li>
            <li>• Withdraw consent at any time</li>
          </ul>
          <p className="mt-6">
            To exercise your rights, email us at{" "}
            <a href="mailto:privacy@pankri.com" className="text-emerald-600 font-medium hover:underline">
              privacy@pankri.com
            </a>
          </p>
        </article>

        <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">8. No Children Under 16</h2>
          <p>
            PanKri Finance is not intended for children under 16 years of age. 
            We do not knowingly collect personal information from children. 
            If you are a parent and believe your child has provided us with information, please contact us immediately.
          </p>
        </article>

        <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Significant changes will be announced on our homepage 
            or via email (if you’ve contacted us). Continued use of the site after changes constitutes acceptance.
          </p>
        </article>

        <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
          <p className="text-base">
            For any privacy questions, concerns, or data requests:
          </p>
          <div className="mt-4 space-y-2 font-medium">
            <p>Email: <a href="mailto:privacy@pankri.com" className="text-emerald-600 hover:underline">privacy@pankri.com</a></p>
            <p>Website: <Link href="/contact" className="text-emerald-600 hover:underline">Contact Page</Link></p>
          </div>
        </article>
      </section>

     
    </main>
  );
}