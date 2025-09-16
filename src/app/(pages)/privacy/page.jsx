export default function Privacy() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl">
      {/* Page Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          Your privacy is important to us. This page explains our practices.
        </p>
      </header>

      {/* Privacy Content */}
      <section className="space-y-8 text-gray-700">
        <article>
          <h2 className="text-2xl font-semibold mb-3">1. No Personal Information Collected</h2>
          <p className="leading-relaxed">
            We do not collect, store, or share any personal information from our visitors.
            You can use our website freely without providing any personal data.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">2. Cookies & Tracking</h2>
          <p className="leading-relaxed">
            Our website does not use cookies or tracking technologies. We respect your privacy
            and do not monitor your activity.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">3. Third-Party Services</h2>
          <p className="leading-relaxed">
            We do not use third-party services that collect or process personal information.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">4. Data Security</h2>
          <p className="leading-relaxed">
            Since we do not collect any personal data, there is no personal information to protect.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">5. Changes to This Policy</h2>
          <p className="leading-relaxed">
            We may update this Privacy Policy from time to time. The latest version will always
            be available on this page.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">6. Contact Us</h2>
          <p className="leading-relaxed">
            If you have any questions about this Privacy Policy, feel free to contact us at{" "}
            <a href="mailto:contact@pankri.com" className="text-blue-600 hover:underline">
              contact@pankri.com
            </a>.
          </p>
        </article>
      </section>
    </main>
  );
}
