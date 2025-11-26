import PostCard from "@/components/PostCard";
import { getLatestPosts } from "@/lib/api";
import Script from "next/script";

export const dynamic = "force-dynamic"; 

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "PanKri Blog",
  url: "https://pankri.com/blog",
  description:
    "Smart personal finance, investing strategies, stock market insights, budgeting tips, and wealth-building advice for beginners and professionals.",
  publisher: {
    "@type": "Organization",
    name: "PanKri",
    url: "https://pankri.com",
    logo: {
      "@type": "ImageObject",
      url: "https://pankri.com/pankri.webp",
    },
  },
};

export const metadata = {
  title: "PanKri - Personal Finance, Investing & Money Tips",
  description:
    "Master your money with PanKri Finance. Get practical personal finance advice, stock market analysis, investment strategies, budgeting guides, passive income ideas, and financial freedom tips.",
};

export default async function Blog() {
  // ✅ Now fetches fresh data each time
  const posts = await getLatestPosts(100);

  return (
    <main className="container mx-auto px-4 py-16">
      {/* JSON-LD for SEO */}
      <Script
        id="blog-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(blogJsonLd)}
      </Script>

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
      <section aria-labelledby="all-posts">
        <h2 id="all-posts" className="sr-only">All Posts</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {posts.length > 0 ? (
            posts.map((post) => <PostCard key={post.slug} {...post} />)
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No posts available.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
