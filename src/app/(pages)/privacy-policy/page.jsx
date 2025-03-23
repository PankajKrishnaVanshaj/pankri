import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="bg-white shadow-primary shadow-md rounded-lg p-6 md:p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
      
      <section className="space-y-6 text-gray-700">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Information We Collect</h2>
          <p className="text-sm">
            PanKri collects personal information such as your name, email address, and usage data when you interact with our websites and apps to enhance your experience. This may include information you provide during account creation, subscription, or form submissions, as well as data collected automatically, such as IP addresses, browser type, and device information.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">2. How We Use Your Information</h2>
          <p className="text-sm">
            We use your data to provide and improve our services, personalize your experience, communicate with you, and ensure the security of our platform. This includes sending you updates, newsletters, or promotional content (which you can opt out of at any time) and analyzing usage patterns to optimize our website.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">3. Cookies and Tracking Technologies</h2>
          <p className="text-sm">
            We use cookies and similar tracking technologies to enhance your browsing experience, analyze traffic, and serve personalized advertisements. Cookies may store preferences and track user behavior on our site. You can manage your cookie preferences through your browser settings, though disabling them may affect site functionality.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">4. Third-Party Services and Advertising</h2>
          <p className="text-sm">
            We may share your data with third-party service providers, such as Google AdSense, to display ads on our site. These partners may use cookies or other technologies to collect information about your activity on our site and other websites to provide targeted advertising. To learn more about how Google uses data, visit{' '}
            <a href="https://policies.google.com/technologies/partner-sites" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Google’s Privacy & Terms
            </a>.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">5. Data Protection</h2>
          <p className="text-sm">
            We implement reasonable security measures, such as encryption and access controls, to protect your information from unauthorized access, loss, or misuse. However, no system is completely secure, and we cannot guarantee absolute security of your data.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">6. Your Rights and Choices</h2>
          <p className="text-sm">
            You have the right to access, update, or delete your personal information. You may also opt out of marketing communications or request details about how your data is processed. To exercise these rights, contact us at{' '}
            <a href="mailto:info@pankri.com" className="text-blue-600 hover:underline">
              info@pankri.com
            </a>. If you are in the EU or California, you may have additional rights under GDPR or CCPA, respectively.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">7. Children’s Privacy</h2>
          <p className="text-sm">
            Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If we become aware of such data, we will take steps to delete it promptly.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">8. Changes to This Privacy Policy</h2>
          <p className="text-sm">
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated policy will be posted on this page with a revised “Last Updated” date. We encourage you to review it periodically.
          </p>
        </div>

        <div>
          <p className="text-sm">
            For more details or to address any concerns, reach out to us at{' '}
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