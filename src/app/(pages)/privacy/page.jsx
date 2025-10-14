export default function Privacy() {
  return (
    <main className="container mx-auto px-4 py-16">
      {/* Page Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          Your privacy is important to us. This page explains our practices regarding data collection, use, and protection.
        </p>
      </header>

      {/* Privacy Content */}
      <section className="space-y-8 text-gray-700">
        <article>
          <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
          <p className="leading-relaxed">
            Welcome to PanKri[](https://pankri.com/), a blog focused on web development, coding tutorials, and tech insights. This Privacy Policy explains how we collect, use, share, and protect your information when you visit our site, interact with content, or view advertisements. We comply with applicable privacy laws, including the General Data Protection Regulation (GDPR) for EEA/UK users and the California Consumer Privacy Act (CCPA)/CalOPPA for California residents. By using our site, you consent to these practices.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">2. Use of Google AdSense</h2>
          <p className="leading-relaxed">
            We use Google AdSense, a third-party advertising vendor, to display personalized ads on our site. Google uses cookies and similar technologies to serve ads based on your prior visits to our site and other sites on the Internet. This enables remarketing (e.g., showing ads for topics you've browsed) and targeted advertising in placements like sidebars, headers, or within content. Ads may be based on your general location, device type, and browsing history. Earnings from ads are generated through views or clicks.
          </p>
          <p className="leading-relaxed mt-4">
            You can opt out of personalized advertising by visiting the{" "}
            <a
              href="https://adssettings.google.com/"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads Settings
            </a>{" "}
            page or managing your Google Account. For more on Google's practices, see their{" "}
            <a
              href="https://policies.google.com/privacy"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            .
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">3. Cookies and Tracking Technologies</h2>
          <p className="leading-relaxed">
            We and our third-party partners, including Google AdSense and ad networks, use cookies (small text files stored on your device) and similar technologies like web beacons to enhance your experience, analyze site traffic, and serve relevant ads. These include:
          </p>
          <ul className="list-disc list-inside leading-relaxed mt-2 space-y-1">
            <li><strong>First-party cookies:</strong> Set by us for site functionality (e.g., session management).</li>
            <li><strong>Third-party cookies:</strong> Set by Google and ad networks for ad personalization, fraud prevention, and avoiding ad repetition. Cookies are placed when you visit pages with ad tags or click ads.</li>
          </ul>
          <p className="leading-relaxed mt-4">
            You can manage or disable cookies via your browser settings (e.g., Chrome's cookie controls). For broader management, visit{" "}
            <a
              href="https://www.youronlinechoices.com/"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Your Online Choices
            </a>{" "}
            or{" "}
            <a
              href="https://www.internetcookies.com/"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Internet Cookies
            </a>
            . Note: Disabling cookies may limit site features or ad relevance. For EEA/UK users, we use a cookie consent banner to obtain your affirmative consent before placing non-essential cookies.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">4. Data Collection</h2>
          <p className="leading-relaxed">
            We collect limited information to improve our services:
          </p>
          <ul className="list-disc list-inside leading-relaxed mt-2 space-y-1">
            <li><strong>Automatically collected (non-personal):</strong> Browser type, operating system, IP address, device information, referring URLs, pages viewed, time spent, and general location (derived from IP).</li>
            <li><strong>Via AdSense/third parties:</strong> Browsing history, search queries, and interaction data for ad personalization.</li>
            <li><strong>Voluntarily provided:</strong> Contact details (e.g., email) via forms or messages.</li>
          </ul>
          <p className="leading-relaxed mt-4">
            We do not collect sensitive personal data (e.g., health or financial info). For EEA/UK users, consent is obtained via our cookie banner before processing for ads.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">5. Data Sharing</h2>
          <p className="leading-relaxed">
            We share non-personal data with Google AdSense and affiliated ad networks to serve and measure ads. This may include device info, IP addresses, and browsing data for targeted advertising and analytics. We do not sell your data. Third parties are contractually obligated to protect it under Google's policies. No sharing occurs without your consent where required by law.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">6. Your Rights</h2>
          <p className="leading-relaxed">
            You have control over your data:
          </p>
          <ul className="list-disc list-inside leading-relaxed mt-2 space-y-1">
            <li><strong>Access, Rectify, Erase:</strong> Request details or updates to your data.</li>
            <li><strong>Object/Withdraw Consent:</strong> Opt out of ad personalization via links above or contact us.</li>
            <li><strong>CCPA Rights (CA residents):</strong> Know what data is collected, request deletion, or opt out of sales (none occur here).</li>
            <li><strong>GDPR Rights (EEA/UK):</strong> Portability, restriction, or complaint to supervisory authorities.</li>
          </ul>
          <p className="leading-relaxed mt-4">
            To exercise rights, email us (see Contact section). We respond within 30 days and retain consent records.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">7. Security</h2>
          <p className="leading-relaxed">
            We implement reasonable security measures (e.g., encryption, access controls) to protect data from unauthorized access or loss. However, no system is fully secure—please use strong passwords and avoid sharing sensitive info.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">8. Third-Party Links</h2>
          <p className="leading-relaxed">
            Our site may contain links to external websites. We are not responsible for their content or privacy practices. Please review their policies before interacting.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">9. Updates to This Policy</h2>
          <p className="leading-relaxed">
            We may update this policy to reflect changes in practices or laws. We'll notify you via site notice for material updates. Continued use constitutes acceptance.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">10. Contact Us</h2>
          <p className="leading-relaxed">
            For privacy questions, rights requests, or concerns, contact our Data Protection Officer at{" "}
            <a
              href="mailto:contact@pankri.com"
              className="text-blue-600 hover:underline"
            >
              contact@pankri.com
            </a>
            .
          </p>
        </article>
        <p className="text-gray-500 text-sm mt-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </section>
    </main>
  );
}