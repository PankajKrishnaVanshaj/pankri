import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NextAuthProvider } from "./Providers";
import SideButtons from "@/components/SideButtons";

const globalJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "PanKri",
  description:
    "Smart personal finance, investing strategies, stock market insights, budgeting tips, and wealth-building advice for beginners and professionals.",
  url: "https://pankri.com",
  publisher: {
    "@type": "Person",
    name: "Pankaj KrishnaVanshaj",
    url: "https://pankri.com/about-us",
  },
  sameAs: [
    "https://x.com/pankri_official",
    "https://linkedin.com/in/pankajkrishnavanshaj",
  ],
};

export const metadata = {
  metadataBase: new URL("https://pankri.com"),
  title: {
    default: "PanKri - Personal Finance, Investing & Money Tips",
    template: "%s | PanKri ",
  },
  description:
    "Master your money with PanKri Finance. Get practical personal finance advice, stock market analysis, investment strategies, budgeting guides, passive income ideas, and financial freedom tips.",
  keywords: [
    "personal finance",
    "investing for beginners",
    "stock market India",
    "mutual funds",
    "financial freedom",
    "budgeting tips",
    "passive income",
    "money management",
    "wealth building",
    "finance blog",
    "PanKri Finance",
  ],
  authors: [{ name: "Pankaj KrishnaVanshaj", url: "https://pankri.com/about-us" }],
  creator: "Pankaj KrishnaVanshaj",
  publisher: "PanKri ",

  // Open Graph / Facebook
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://pankri.com",
    siteName: "PanKri ",
    title: "PanKri Finance - Smart Money Moves & Investing Insights",
    description:
      "Learn personal finance, smart investing, stock market strategies, and how to achieve financial independence.",
    images: [
      {
        url: "/og-finance.jpg", // Recommended: Create a 1200x630 finance-themed OG image
        width: 1200,
        height: 630,
        alt: "PanKri  - Personal Finance & Investing Blog",
      },
    ],
  },

  // Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "PanKri  - Personal Finance & Investing Made Simple",
    description:
      "Practical money tips, stock market insights, and wealth-building strategies.",
    creator: "@pankri_official",
    images: ["/og-finance.jpg"],
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
  },

  // Additional SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8795652137846923"
     crossorigin="anonymous"></script>
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
