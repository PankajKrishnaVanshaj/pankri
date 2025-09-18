import { notFound } from "next/navigation";
import AdSlot from "@/components/AdSlot";
import { getPosts } from "@/lib/posts";
import Link from "next/link";

// ✅ Generate dynamic metadata per post
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const posts = await getPosts(); // fetch posts first

  const post = posts.find((p) => p.slug === slug);

  if (!post) return { title: "Post Not Found | PanKri" };

  const url = `https://pankri.com/blog/${post.slug}`;

  return {
    title: `${post.title} | PanKri Blog`,
    description: post.excerpt,
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
          url: post.image
            ? `https://pankri.com${post.image}`
            : "https://pankri.com/pankri-blog.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: post.createdAt,
      authors: ["PanKri"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | PanKri Blog`,
      description: post.excerpt,
      creator: "@pankri_official",
      images: [
        post.image
          ? `https://pankri.com${post.image}`
          : "https://pankri.com/pankri-blog.png",
      ],
    },
    alternates: {
      canonical: url,
    },
  };
}

// ✅ Structured Data (JSON-LD) generator
function getPostJsonLd(post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image
      ? `https://pankri.com${post.image}`
      : "https://pankri.com/pankri-blog.png",
    url: `https://pankri.com/blog/${post.slug}`,
    datePublished: post.createdAt,
    dateModified: post.updatedAt,
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
  };
}

export default async function Post({ params }) {
  const { slug } = await params;
;

  // Fetch all posts
  const posts = await getPosts();

  // Find current post
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  // Latest 5 posts excluding current
  const latestPosts = posts.filter((p) => p.slug !== slug).slice(0, 5);

  // Suggestions (first 3 different posts)
  const suggestions = posts.filter((p) => p.slug !== slug).slice(5, 9);

  return (
    <div className="container mx-auto px-4 py-12 grid lg:grid-cols-4 gap-6">
      {/* ✅ Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getPostJsonLd(post)) }}
      />

      {/* Main Content */}
      <article className="lg:col-span-3 max-w-3xl">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight p-4 bg-white rounded-2xl ">
            {post.title}
          </h1>
          {post.updatedAt && (
            <p className="text-sm text-gray-500">
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
          className="prose prose-lg max-w-none p-4 bg-white rounded-2xl "
          dangerouslySetInnerHTML={{ __html: post.content || "" }}
        />

        {/* In-content Ad */}
        <div className="my-16">
          <AdSlot className="mx-auto max-w-md" />
        </div>

        {/* Suggestions */}
        <section className="mt-20 pt-12 border-t border-gray-200">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              You may also like
            </h2>
            <Link
              href="/blog"
              className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              View All →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {suggestions.map((s) => (
              <Link
                key={s.slug}
                href={`/blog/${s.slug}`}
                className="block p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-lg hover:border-blue-400 transition-all group"
              >
                <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3 mt-3">{s.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      </article>

      {/* Sidebar */}
      <aside className="lg:col-span-1">
        <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100 sticky top-24">
          <h2 className="text-lg font-semibold text-gray-900 mb-5">Latest Posts</h2>
          <ul className="space-y-5 text-sm">
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
