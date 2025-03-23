import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="w-full px-3 bg-white shadow-primary shadow-md text-gray-800 rounded-xl mt-7">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-gray-900">PanKri</h3>
                        <p className="text-sm text-gray-600">
                            Empowering digital innovation through a universe of websites and apps.
                        </p>
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} PanKri. All rights reserved.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about">
                                    <span className="text-gray-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer text-sm">
                                        About Us
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy">
                                    <span className="text-gray-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer text-sm">
                                        Privacy Policy
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms">
                                    <span className="text-gray-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer text-sm">
                                        Terms of Use
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Get in Touch</h4>
                        <ul className="space-y-2">
                            <li className="text-sm text-gray-600">
                                Email:{' '}
                                <a
                                    href="mailto:info@pankri.com"
                                    className="hover:text-blue-600 transition-colors duration-200"
                                >
                                    info@pankri.com
                                </a>
                            </li>
                            <li className="text-sm text-gray-600">
                                Phone:{' '}
                                <a
                                    href="tel:+9163961663960"
                                    className="hover:text-blue-600 transition-colors duration-200"
                                >
                                    +91 6396-16-6396
                                </a>
                            </li>
                            <li className="text-sm text-gray-600">
                                Address: Mainpuri (205001), Uttar Pradesh India
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-center items-center">
                    <p className="text-sm text-gray-500 mb-4 md:mb-0">
                        Designed with ❤️ by PanKri Team</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;