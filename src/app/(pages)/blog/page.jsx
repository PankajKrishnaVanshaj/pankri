import AdSlot from "@/components/AdSlot";
import PostCard from "@/components/PostCard";
import { getPosts } from "@/lib/posts";

// ✅ Page-level SEO Metadata
export const metadata = {
  title: "Blog - PanKri | Tech, Coding & Creativity Articles",
  description:
    "Explore the latest blog posts on PanKri. Discover insights, tutorials, and stories about Next.js, React, Tailwind CSS, and modern web development.",
  keywords: [
    "PanKri Blog",
    "Coding Tutorials",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Web Development",
    "Tech Articles",
    "Programming Insights",
  ],
  openGraph: {
    title: "Blog - PanKri | Tech, Coding & Creativity Articles",
    description:
      "Explore the latest blog posts on PanKri. Tutorials, insights, and creativity on modern web development and coding.",
    url: "https://pankri.com/blog",
    siteName: "PanKri",
    images: [
      {
        url: "https://pankri.com/pankri.png",
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
    title: "Blog - PanKri | Tech, Coding & Creativity Articles",
    description:
      "Read the latest articles on coding, Next.js, Tailwind CSS, and web development at PanKri Blog.",
    creator: "@pankri_official",
    images: ["https://pankri.com/pankri.png"],
  },
  alternates: {
    canonical: "https://pankri.com/blog",
  },
};

// ✅ Structured Data for Blog Listing
const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "PanKri Blog",
  url: "https://pankri.com/blog",
  description:
    "The PanKri Blog features tutorials, insights, and creativity on Next.js, React, Tailwind CSS, and web development.",
  publisher: {
    "@type": "Organization",
    name: "PanKri",
    url: "https://pankri.com",
    logo: {
      "@type": "ImageObject",
      url: "https://pankri.com/pankri.png",
    },
  },
};

export default async function Blog() {
    const posts = await getPosts();
  
  return (
    <main className="container mx-auto px-4 py-16">
      {/* ✅ Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

      {/* Page Header */}
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          Blog Posts
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          Explore the latest articles on tech, coding, and creativity. Stay
          inspired with new insights every week.
        </p>
      </header>

      {/* Posts Grid */}
      <section>
        <h2 className="sr-only">All Posts</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {posts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      </section>

      {/* Ad Slot */}
      <section className="max-w-md mx-auto mt-16">
        <AdSlot />
      </section>
    </main>
  );
}
