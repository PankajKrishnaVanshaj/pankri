import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NextAuthProvider } from "./Providers";
import SideButtons from "@/components/SideButtons";
import Script from "next/script";

const globalJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "PanKri",
  description:
    "A blog about web development, coding tutorials, and creative tech insights.",
  url: "https://pankri.com",
  publisher: {
    "@type": "Organization",
    name: "PanKri",
    logo: {
      "@type": "ImageObject",
      url: "https://pankri.com/pankri.webp",
    },
  },
};

export const metadata = {
  metadataBase: new URL("https://pankri.com"),
  title: "PanKri - Web Dev, Coding Tutorials & Creative Tech Blog",
  description:
    "Explore expert tutorials on Next.js, Tailwind CSS, JavaScript, and creative web development insights at PanKri’s tech blog.",
  keywords: [
    "web development tutorials",
    "Next.js blog",
    "Tailwind CSS guide",
    "coding tutorials",
    "JavaScript tips",
    "tech blog",
    "PanKri",
  ],
  authors: [{ name: "PanKri" }],
  creator: "PanKri",
  openGraph: {
    title: "PanKri - Web Dev, Coding Tutorials & Creative Tech Blog",
    description:
      "Explore expert tutorials on Next.js, Tailwind CSS, JavaScript, and creative web development insights.",
    url: "https://pankri.com",
    siteName: "PanKri",
    images: [
      {
        url: "/pankri.webp",
        width: 1200,
        height: 630,
        alt: "PanKri Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PanKri - Web Dev, Coding Tutorials & Creative Tech Blog",
    description:
      "Explore expert tutorials on Next.js, Tailwind CSS, JavaScript, and creative web development insights.",
    creator: "@pankri_official",
    images: ["/pankri.webp"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Basic Meta */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />

        {/* ✅ Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(globalJsonLd),
          }}
        />
      </head>

      <body className="bg-gray-50 text-gray-900 antialiased">
        {/* ✅ Load AdSense script safely */}
        <Script
          id="adsense-script"
          strategy="afterInteractive"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2178056161997357"
          crossOrigin="anonymous"
        />

        <NextAuthProvider>
          <Header />
          <SideButtons />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
