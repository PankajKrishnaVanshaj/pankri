import Link from "next/link";

export default function Terms() {
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
          Terms & Conditions
        </h1>
        
      </header>

      {/* Content */}
      <section className="prose prose-lg prose-emerald max-w-none space-y-12 text-gray-700">
        <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            1. Welcome to PanKri Finance
          </h2>
          <p className="leading-relaxed text-base">
            PanKri Finance (
            <Link
              href="/"
              className="text-emerald-600 hover:underline font-medium"
            >
              https://pankri.com
            </Link>
            ) is a personal finance and investing education platform created and
            operated by <strong>Pankaj KrishnaVanshaj</strong>.
          </p>
          <p className="mt-4">
            By accessing or using our website, you agree to be bound by these
            Terms & Conditions. If you do not agree, please do not use the site.
          </p>
        </article>

        <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            2. Important Disclaimer – Not Financial Advice
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <p className="font-bold text-amber-900 text-lg mb-2">
              Critical Notice
            </p>
            <p className="text-amber-800">
              All content on PanKri Finance is for{" "}
              <strong>informational and educational purposes only</strong>. It
              is{" "}
              <strong>
                not personalized financial, investment, legal, or tax advice
              </strong>
              .
            </p>
            <p className="mt-3 text-amber-800">
              You should not make any financial decisions based solely on what
              you read here. Always consult a qualified financial advisor before
              investing or making money-related decisions.
            </p>
          </div>
        </article>

        <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            3. Intellectual Property
          </h2>
          <p>
            All content on PanKri Finance — including articles, guides, images,
            videos, and code — is owned by Pankaj KrishnaVanshaj or used under
            license.
          </p>
          <p className="mt-4">
            You may read, share, and link to our content freely (we appreciate
            it!). However, you may <strong>not</strong> republish, sell, or
            claim our content as your own without written permission.
          </p>
          <p className="mt-4">
            For collaboration, republishing, or licensing inquiries, contact us
            at{" "}
            <a
              href="mailto:hello@pankri.com"
              className="text-emerald-600 font-medium hover:underline"
            >
              hello@pankri.com
            </a>
            .
          </p>
        </article>

        <article className="bg-white p-8 rounded-2xl shadowHard border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            4. User Responsibilities
          </h2>
          <p>You agree not to:</p>
          <ul className="mt-4 space-y-2 text-base">
            <li>• Copy or scrape large amounts of content automatically</li>
            <li>• Use the site for commercial purposes without permission</li>
            <li>• Attempt to hack, disrupt, or overload the website</li>
            <li>
              • Post harmful, illegal, or misleading content (if comments are
              enabled)
            </li>
          </ul>
        </article>

        <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            5. Advertising & Third-Party Links
          </h2>
          <p>
            We may display advertisements (via Google AdSense or similar) to
            keep the site free.
          </p>
          <p className="mt-4">
            We may also link to third-party tools, books, or services we
            genuinely recommend. Some links may be affiliate links — meaning we
            earn a small commission at no extra cost to you.
          </p>
          <p className="mt-4 font-medium text-gray-800">
            We only recommend products we use or believe in. However, always do
            your own research.
          </p>
        </article>

        <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            6. Limitation of Liability
          </h2>
          <p>
            PanKri Finance is provided “as is” with no warranties. We strive for
            accuracy, but cannot guarantee that all information is complete,
            current, or error-free.
          </p>
          <p className="mt-4">
            To the fullest extent permitted by law, PanKri Finance and its owner
            shall not be liable for any financial losses, damages, or
            consequences resulting from your use of this website or reliance on
            its content.
          </p>
        </article>

        <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            7. Changes to These Terms
          </h2>
          <p>
            We may update these Terms from time to time. Significant changes
            will be announced on the site or via email (if you’ve contacted us).
            Your continued use means you accept the updated terms.
          </p>
        </article>

        <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            8. Contact Us
          </h2>
          <p className="text-base">
            Have questions about these terms or anything else?
          </p>
          <div className="mt-4 space-y-2 font-medium">
            <p>
              Email:{" "}
              <a
                href="mailto:hello@pankri.com"
                className="text-emerald-600 hover:underline"
              >
                hello@pankri.com
              </a>
            </p>
            <p>
              Visit:{" "}
              <Link
                href="/contact"
                className="text-emerald-600 hover:underline"
              >
                Contact Page
              </Link>
            </p>
          </div>
        </article>
      </section>

      
    </main>
  );
}
