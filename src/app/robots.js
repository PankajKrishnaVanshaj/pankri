export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/dashboard/*',
      crawlDelay: 1,
    },
    sitemap: 'https://pankri.com/sitemap.xml',
    // Optional: Add subdomain sitemaps
    // sitemap: 'https://grapix.pankri.com/sitemap.xml',
  };
}