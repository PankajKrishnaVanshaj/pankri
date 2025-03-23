import Link from 'next/link';

export default function Terms() {
  return (
    <div className="bg-white shadow-primary shadow-md rounded-lg p-6 md:p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
      
      <section className="space-y-6 text-gray-700">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Acceptance of Terms</h2>
          <p className="text-sm">
            By accessing or using PanKri and its associated websites, applications, or services (collectively, “Services”), you agree to be bound by these Terms of Service (“Terms”). If you do not agree to these Terms, please refrain from using our Services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">2. Use of Services</h2>
          <p className="text-sm">
            PanKri provides a platform for accessing multiple websites and applications. You agree to use our Services only for lawful purposes and in accordance with these Terms. You are prohibited from using the Services to engage in any illegal activity, violate the rights of others, or distribute harmful or offensive content.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">3. Intellectual Property</h2>
          <p className="text-sm">
            All content on PanKri, including but not limited to text, graphics, logos, images, and code, is the property of PanKri or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without prior written consent.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">4. User Conduct</h2>
          <p className="text-sm">
            You agree not to misuse our Services, including but not limited to: hacking, spamming, uploading malicious code, or attempting to interfere with the functionality of the platform. Violation of this clause may result in immediate termination of your access to the Services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">5. Third-Party Content and Links</h2>
          <p className="text-sm">
            Our Services may contain links to third-party websites or content not owned or controlled by PanKri. We are not responsible for the content, privacy policies, or practices of these third parties. Accessing such links is at your own risk.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">6. Termination</h2>
          <p className="text-sm">
            We reserve the right to suspend or terminate your access to the Services at our sole discretion, with or without notice, if you violate these Terms or for any other reason we deem necessary to protect our platform or users.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">7. Disclaimer of Warranties</h2>
          <p className="text-sm">
            PanKri provides the Services on an “as is” and “as available” basis without warranties of any kind, express or implied. We do not guarantee that the Services will be uninterrupted, error-free, or free of viruses or other harmful components.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">8. Limitation of Liability</h2>
          <p className="text-sm">
            To the fullest extent permitted by law, PanKri and its affiliates shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Services, including loss of data, profits, or business opportunities.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">9. Changes to These Terms</h2>
          <p className="text-sm">
            We may update these Terms from time to time to reflect changes in our Services or legal requirements. The updated Terms will be posted on this page with a revised “Last Updated” date. Continued use of the Services after such changes constitutes your acceptance of the revised Terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">10. Governing Law</h2>
          <p className="text-sm">
            These Terms shall be governed by and construed in accordance with the laws of [Insert Jurisdiction, e.g., “the State of California, United States”], without regard to its conflict of law principles.
          </p>
        </div>

        <div>
          <p className="text-sm">
            For questions or to request the full terms, please contact us at{' '}
            <a href="mailto:info@pankri.com" className="text-blue-600 hover:underline">
              info@pankri.com
            </a>.
          </p>
          <p className="text-sm mt-2">Last Updated: March 23, 2025</p>
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
  );
}