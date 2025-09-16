export default function Terms() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl">
      {/* Page Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Terms & Conditions
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          Please read these terms carefully before using our website.
        </p>
      </header>

      {/* Terms Content */}
      <section className="space-y-8 text-gray-700">
        <article>
          <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p className="leading-relaxed">
            By accessing or using this website, you agree to comply with these Terms
            and Conditions. If you do not agree, please do not use this site.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">2. Use of Website</h2>
          <p className="leading-relaxed">
            You may use this website for personal, non-commercial purposes only. You
            agree not to use the site in any way that may damage, disrupt, or interfere
            with the website or its services.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">3. No Personal Data Collected</h2>
          <p className="leading-relaxed">
            This website does not collect, store, or share any personal information.
            You can browse freely without creating an account or submitting personal data.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">4. Intellectual Property</h2>
          <p className="leading-relaxed">
            All content, images, and code on this website are the property of PanKri
            unless otherwise stated. You may view and share content for personal use
            only and must not reproduce it for commercial purposes without permission.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">5. Limitation of Liability</h2>
          <p className="leading-relaxed">
            The website is provided "as is" without warranties of any kind. PanKri is
            not responsible for any damages, losses, or inconveniences resulting from
            the use of this website.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">6. Changes to Terms</h2>
          <p className="leading-relaxed">
            We may update these Terms & Conditions at any time. Continued use of the
            website constitutes acceptance of the updated terms.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">7. Contact Us</h2>
          <p className="leading-relaxed">
            If you have any questions about these terms, you can contact us at{" "}
            <a href="mailto:contact@pankri.com" className="text-blue-600 hover:underline">
              contact@pankri.com
            </a>.
          </p>
        </article>
      </section>
    </main>
  );
}
