import Link from 'next/link';
import Head from 'next/head';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service - PanKri Tech Blog</title>
        <meta
          name="description"
          content="PanKri’s Terms of Service outline the rules for using our tech blog and services."
        />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Terms of Service',
              url: 'https://www.pankri.com/terms',
              publisher: {
                '@type': 'Organization',
                name: 'PanKri',
              },
            }),
          }}
        />
      </Head>
      <div className="bg-white shadow-primary shadow-md rounded-lg p-6 md:p-8">
       

        <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>

        <section className="space-y-6 text-gray-700">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Acceptance of Terms</h2>
            <p className="text-sm">
              By using PanKri’s tech blog or services, you agree to these Terms of Service. If you disagree, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">2. Use of Services</h2>
            <p className="text-sm">
              You may use our blog to access tutorials on JavaScript, React.js, Node.js, MongoDB, and more. You agree not to:
              <ul className="list-disc pl-5 mt-2">
                <li>Post malicious code or spam in comments.</li>
                <li>Violate intellectual property rights.</li>
                <li>Engage in illegal activities.</li>
              </ul>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">3. Intellectual Property</h2>
            <p className="text-sm">
              All blog content, including tutorials and code samples, is owned by PanKri or licensed. You may use code snippets for personal learning but must not reproduce or distribute without permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">4. User-Submitted Content</h2>
            <p className="text-sm">
              By submitting comments or code, you grant PanKri a non-exclusive license to display and use your content. You are responsible for ensuring your submissions are lawful and non-infringing.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">5. Third-Party Links</h2>
            <p className="text-sm">
              Our blog may link to external sites (e.g., GitHub repos). We are not responsible for their content or practices.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">6. Termination</h2>
            <p className="text-sm">
              We may suspend your access for violating these Terms, such as posting harmful content or spamming.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">7. Disclaimer of Warranties</h2>
            <p className="text-sm">
              Our blog is provided “as is.” We do not guarantee error-free tutorials or uninterrupted access.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">8. Limitation of Liability</h2>
            <p className="text-sm">
              PanKri is not liable for damages from using our blog, including issues from applying code tutorials.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">9. Changes to Terms</h2>
            <p className="text-sm">
              We may update these Terms, with changes posted here. Last Updated: March 23, 2025.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">10. Governing Law</h2>
            <p className="text-sm">
              These Terms are governed by the laws of India, with disputes resolved in Uttar Pradesh courts.
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
