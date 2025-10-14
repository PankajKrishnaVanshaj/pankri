export default function Terms() {
  return (
    <main className="container mx-auto px-4 py-16">
      {/* Page Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Terms & Conditions
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </header>

      <section className="space-y-8 text-gray-700">
        <article>
          <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
          <p className="leading-relaxed">
            Welcome to PanKri[](https://pankri.com/), a blog providing original content on web development, coding tutorials, AI trends, and technology insights. These Terms & Conditions ("Terms") govern your access to and use of our website and services. By accessing or using PanKri, you agree to be bound by these Terms. If you do not agree, please do not use the site. We may update these Terms periodically; continued use constitutes acceptance of changes.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">2. Intellectual Property</h2>
          <p className="leading-relaxed">
            All content on PanKri, including articles, tutorials, images, code snippets, and designs (collectively, "Content"), is owned by or licensed to Pankaj KrishnaVanshaj (the "Owner") and protected by copyright, trademark, and other intellectual property laws. You may view, download, or print Content for personal, non-commercial use only. Unauthorized reproduction, distribution, modification, or commercial use without written permission is strictly prohibited.
          </p>
          <p className="leading-relaxed mt-4">
            If you believe your IP rights have been infringed, contact us at{" "}
            <a href="mailto:contact@pankri.com" className="text-blue-600 hover:underline">
              contact@pankri.com
            </a>
            .
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">3. User Conduct and Acceptable Use</h2>
          <p className="leading-relaxed">
            You agree to use PanKri responsibly and in compliance with all applicable laws. Prohibited activities include:
          </p>
          <ul className="list-disc list-inside leading-relaxed mt-4 space-y-1">
            <li>Posting or uploading unlawful, harmful, or infringing content (e.g., spam, malware, or copyrighted material).</li>
            <li>Attempting to hack, disrupt, or overload the site.</li>
            <li>Using automated tools (e.g., bots, scrapers) to access Content without permission.</li>
            <li>Impersonating others or misrepresenting your affiliation with PanKri.</li>
            <li>Engaging in commercial activities without consent, such as affiliate marketing in comments.</li>
          </ul>
          <p className="leading-relaxed mt-4">
            We reserve the right to monitor interactions (e.g., comments) and remove content that violates these Terms.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">4. Advertising and Third-Party Services</h2>
          <p className="leading-relaxed">
            PanKri uses Google AdSense to display advertisements. By using the site, you agree to Google's AdSense policies and terms, available at{" "}
            <a
              href="https://policies.google.com/technologies/ads"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google's Ads Policy
            </a>
            . Ads are served by third parties and may use cookies or tracking technologies. We do not endorse or control ad content. Clicks or interactions with ads are at your own risk.
          </p>
          <p className="leading-relaxed mt-4">
            The site may include links to third-party websites or services (e.g., tutorials linking to external tools). We are not responsible for their availability, content, privacy practices, or transactions. Use them at your own discretion.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">5. Disclaimers and Limitation of Liability</h2>
          <p className="leading-relaxed">
            PanKri is provided "as is" without warranties of any kind, express or implied, including accuracy, completeness, or fitness for a particular purpose. Content is for informational purposes only and not professional advice (e.g., code examples may require adaptation).
          </p>
          <p className="leading-relaxed mt-4">
            To the fullest extent permitted by law, the Owner, PanKri, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the site, including but not limited to data loss, viruses, or reliance on Content.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">6. Termination</h2>
          <p className="leading-relaxed">
            We may suspend or terminate your access to PanKri at any time, without notice, for violations of these Terms or as required by law. Upon termination, your right to use the site ends immediately.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">7. Governing Law and Disputes</h2>
          <p className="leading-relaxed">
            These Terms are governed by the laws of India, without regard to conflict of laws principles. Any disputes shall be resolved exclusively in the courts of [Your City/State, e.g., Mumbai, Maharashtra]. You agree to submit to such jurisdiction.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">8. Updates to These Terms</h2>
          <p className="leading-relaxed">
            We may revise these Terms at any time. Changes will be posted here with the updated date. It is your responsibility to review them periodically. Continued use after updates implies acceptance.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">9. Contact Us</h2>
          <p className="leading-relaxed">
            Questions about these Terms? Reach out to us at{" "}
            <a href="mailto:contact@pankri.com" className="text-blue-600 hover:underline">
              contact@pankri.com
            </a>{" "}
            or via our{" "}
            <a href="/contact" className="text-blue-600 hover:underline">
              Contact page
            </a>
            .
          </p>
        </article>
      </section>
    </main>
  );
}