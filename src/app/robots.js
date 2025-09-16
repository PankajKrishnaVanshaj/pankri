export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/dashboard/*",
      },
    ],
    sitemap: "https://pankri.com/sitemap.xml",
  };
}