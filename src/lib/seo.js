export function generatePostMetadata(
  post,
  metadataBase = "https://pankri.com"
) {
  // Optional base for absolute URLs
  if (!post) {
    return {
      title: "Post Not Found | PanKri",
      keywords: "blog, not found",
    };
  }

  const url = `${metadataBase}/blog/${post.slug}`;
  const imageUrl = post.image
    ? `${metadataBase}${post.image}`
    : `${metadataBase}/pankri-blog.webp`;

  // Improved description: Trim to ~155 chars, remove extra whitespace, ensure complete sentences
  let description = post.excerpt
    ? post.excerpt.replace(/[\n\r]+/g, " ").trim()
    : `Explore ${post.title} on the PanKri Blog for the latest insights and updates.`;
  if (description.length > 155) {
    description = description.slice(0, 155).trim() + "...";
  }

  // Parse dates to ISO strings
  const publishedTime = post.createdAt
    ? new Date(post.createdAt).toISOString()
    : new Date().toISOString();
  const modifiedTime = post.updatedAt
    ? new Date(post.updatedAt).toISOString()
    : publishedTime;

  return {
    metadataBase, // Ensures absolute URLs
    title: `${post.title} | PanKri Blog`,
    description,
    // Keywords: Legacy support; modern SEO favors title/desc
    keywords: post.tags?.join(", ") || "blog, news, insights, PanKri",
    alternates: {
      canonical: url,
    },
    // Robots: Explicit indexing signals
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        maxSnippet: -1, // Unlimited snippet
        maxImagePreview: "large",
        maxVideoPreview: -1,
      },
    },
    openGraph: {
      title: `${post.title} | PanKri Blog`,
      description,
      url,
      siteName: "PanKri",
      images: [
        {
          url: imageUrl,
          width: post.image ? 1200 : 1200, // Assume standard
          height: post.image ? 630 : 630,
          alt: post.title || "PanKri Blog Post Image",
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime,
      modifiedTime,
      authors: post.author?.name ? [post.author.name] : ["PanKri"], // Array of strings
      // Article-specific OG tags
      article: {
        publishedTime,
        modifiedTime,
        author: post.author?.name || "PanKri",
        section: post.category || "Blog",
        tags: post.tags || [], // Array for article:tag
      },
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | PanKri Blog`,
      description,
      images: [imageUrl],
      creator: "@PanKri", // Update to real handle if different
    },
  };
}

export function generatePostJsonLd(post) {
  if (!post) return null; // Avoid invalid LD

  const imageUrl = post.image
    ? `https://pankri.com${post.image}` // Absolute; adjust if using metadataBase
    : "https://pankri.com/pankri-blog.webp";
  const url = `https://pankri.com/blog/${post.slug}`;

  // Parse dates to ISO
  const datePublished = post.createdAt
    ? new Date(post.createdAt).toISOString()
    : new Date().toISOString();
  const dateModified = post.updatedAt
    ? new Date(post.updatedAt).toISOString()
    : datePublished;

  return {
    "@context": "https://schema.org",
    "@type": "Article", // Changed to "Article" for general blog; use "NewsArticle" if timely/newsy
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: post.title,
    // Same improved description logic
    description: post.excerpt
      ? post.excerpt
          .replace(/[\n\r]+/g, " ")
          .trim()
          .slice(0, 160)
      : `Explore ${post.title} on the PanKri Blog for the latest insights.`,
    image: {
      "@type": "ImageObject",
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    url,
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: post.author?.name || "PanKri",
      url: post.author?.url || "https://pankri.com/about",
    },
    // Single author; use array if multiple: author: [{...}]
    publisher: {
      "@type": "Organization",
      name: "PanKri",
      url: "https://pankri.com",
      logo: {
        "@type": "ImageObject",
        url: "https://pankri.com/pankri.webp",
        width: 600,
        height: 60,
      },
    },
    articleSection: post.category || "Blog",
    // Keywords as array
    keywords: (post.tags || ["blog", "news", "insights", "PanKri"]).map((tag) =>
      tag.trim()
    ),
    inLanguage: "en-US",
    isAccessibleForFree: true,
    // Add for better E-E-A-T
    wordCount: post.content?.split(/\s+/).length || 0, // Estimate; fetch from post if available
    // Optional: Add speaksTo for relevance
    speaksTo: post.tags || [],
  };
}
