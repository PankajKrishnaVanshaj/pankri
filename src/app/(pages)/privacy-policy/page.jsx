import Link from 'next/link';
import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - PanKri Tech Blog</title>
        <meta
          name="description"
          content="PanKri’s Privacy Policy explains how we collect, use, and protect your data when you use our tech blog and services."
        />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Privacy Policy',
              url: 'https://www.pankri.com/privacy',
              publisher: {
                '@type': 'Organization',
                name: 'PanKri',
              },
            }),
          }}
        />
      </Head>
      <div className="bg-white shadow-primary shadow-md rounded-lg p-6 md:p-8">
       

        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>

        <section className="space-y-6 text-gray-700">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Information We Collect</h2>
            <p className="text-sm">
              PanKri collects data to enhance your experience on our tech blog, including:
              <ul className="list-disc pl-5 mt-2">
                <li><strong>Personal Information</strong>: Name, email, and comments you submit via blog forms.</li>
                <li><strong>Usage Data</strong>: IP address, browser type, device info, and pages visited.</li>
                <li><strong>User-Submitted Content</strong>: Code snippets or feedback shared in blog comments or forums.</li>
              </ul>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">2. How We Use Your Information</h2>
            <p className="text-sm">
              We use your data to:
              <ul className="list-disc pl-5 mt-2">
                <li>Deliver blog content and respond to comments.</li>
                <li>Send newsletters with JavaScript, React.js, or Node.js tutorials (opt-out available).</li>
                <li>Analyze traffic to improve our tutorials and site performance.</li>
                <li>Ensure security and prevent abuse.</li>
              </ul>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">3. Cookies and Tracking</h2>
            <p className="text-sm">
              We use cookies to personalize content, analyze traffic, and serve ads via Google AdSense. You can manage cookies via your browser or our cookie consent popup (for EU users). Disabling cookies may limit blog features like comment persistence.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">4. Third-Party Services</h2>
            <p className="text-sm">
              We partner with Google AdSense and analytics providers who may collect data via cookies. See{' '}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google’s Privacy & Terms
              </a>{' '}
              for details. We do not control third-party data practices.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">5. Data Protection</h2>
            <p className="text-sm">
              We use encryption and access controls to secure your data, including comments and code submissions. However, no system is 100% secure, and we cannot guarantee absolute protection.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">6. Your Rights</h2>
            <p className="text-sm">
              You can access, update, or delete your data (e.g., blog comments) by contacting{' '}
              <a href="mailto:info@pankri.com" className="text-blue-600 hover:underline">
                info@pankri.com
              </a>. EU and California users have additional GDPR/CCPA rights.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">7. Children’s Privacy</h2>
            <p className="text-sm">
              Our blog is not for users under 13. We delete any data from children upon discovery.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">8. Policy Updates</h2>
            <p className="text-sm">
              We may update this policy, with changes posted here. Last Updated: March 23, 2025.
            </p>
          </div>

          <div>
            <p className="text-sm">
              Questions? Contact us at{' '}
              <a href="mailto:info@pankri.com" className="text-blue-600 hover:underline">
                info@pankri.com
              </a>.
            </p>
          </div>
        </section>

        <div className="mt-8">
          <Link href="/">
            <span className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm cursor-pointer">
              Back to Home
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
