/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

  images: {
    domains: ["lh3.googleusercontent.com"],
    unoptimized: true, // optional; Next.js can handle optimized images
  },
  async headers() {
    return [
      // HTML pages: allow revalidation but not bfcache-killing
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-transform",
          },
        ],
      },
      // Next.js static assets
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Images
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};
export default nextConfig;
