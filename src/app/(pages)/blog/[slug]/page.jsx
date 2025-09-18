import { notFound } from "next/navigation";
import AdSlot from "@/components/AdSlot";
import { getPosts } from "@/lib/posts";
import Link from "next/link";

// ✅ Generate dynamic metadata per post
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const posts = await getPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return { title: "Post Not Found | PanKri" };

  const url = `https://pankri.com/blog/${post.slug}`;
  const image = post.image
    ? `https://pankri.com${post.image}`
    : "https://pankri.com/pankri-blog.png";

  return {
    title: `${post.title} | PanKri Blog`,
    description: post.excerpt?.slice(0, 160) || "Read the latest blog post on PanKri.",
    keywords: [
      "PanKri",
      "Blog",
      "Coding",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Web Development",
      post.title,
    ],
    openGraph: {
      title: `${post.title} | PanKri Blog`,
      description: post.excerpt,
      url,
      siteName: "PanKri",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt,
      authors: ["PanKri"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | PanKri Blog`,
      description: post.excerpt,
      creator: "@pankri_official",
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
    alternates: {
      canonical: url,
    },
  };
}

// ✅ Structured Data (JSON-LD) generator
function getPostJsonLd(post) {
  const image = post.image
    ? `https://pankri.com${post.image}`
    : "https://pankri.com/pankri-blog.png";

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: [image, "https://pankri.com/pankri-blog.png"], 
    url: `https://pankri.com/blog/${post.slug}`,
    datePublished: post.createdAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://pankri.com/blog/${post.slug}`,
    },
    author: {
      "@type": "Person",
      name: "PanKri",
      url: "https://pankri.com",
    },
    publisher: {
      "@type": "Organization",
      name: "PanKri",
      logo: {
        "@type": "ImageObject",
        url: "https://pankri.com/pankri.png",
      },
    },
    isPartOf: {
      "@type": "Blog",
      name: "PanKri Blog",
      url: "https://pankri.com/blog",
    },
  };
}

export default async function Post({ params }) {
  const { slug } = await params;

  // Fetch all posts
  const posts = await getPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  // Latest 5 posts excluding current
  const latestPosts = posts.filter((p) => p.slug !== slug).slice(0, 5);

  // Suggestions (first 3 different posts)
  const suggestions = posts.filter((p) => p.slug !== slug).slice(5, 9);

  return (
    <div className="container mx-auto px-4 py-12 grid lg:grid-cols-4 gap-10">
      {/* ✅ Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getPostJsonLd(post)) }}
      />

      {/* Main Content */}
      <article className="lg:col-span-3 max-w-3xl">
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 bg-white p-6 rounded-2xl shadow-sm">
            {post.title}
          </h1>
          {post.updatedAt && (
            <p className="text-sm text-gray-500 pl-2">
              {new Date(post.updatedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}
        </header>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none p-6 bg-white rounded-2xl shadow-sm prose-headings:text-gray-900 prose-p:text-gray-700"
          dangerouslySetInnerHTML={{ __html: post.content || "" }}
        />

        {/* In-content Ad */}
        <div className="my-16 flex justify-center">
          <AdSlot className="w-full max-w-md" />
        </div>

        {/* Suggestions */}
        <section className="mt-20 pt-12 border-t border-gray-200">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              You may also like
            </h2>
            <Link
              href="/blog"
              className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              View All →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {suggestions.map((s) => (
              <Link
                key={s.slug}
                href={`/blog/${s.slug}`}
                className="block p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-blue-400 transition-all group"
              >
                <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3 mt-3">
                  {s.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </article>

      {/* Sidebar */}
      <aside className="lg:col-span-1">
        <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100 sticky top-24">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Latest Posts
          </h2>
          <ul className="space-y-4">
            {latestPosts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="flex items-start space-x-3 group"
                >
                  <div className="flex-1">
                    <p className="text-gray-700 font-medium group-hover:text-blue-600 transition line-clamp-2">
                      {p.title}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
