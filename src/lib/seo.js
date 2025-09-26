export function generatePostMetadata(post) {
  if (!post) {
    return {
      title: "Post Not Found | PanKri",
      keywords: ["blog", "not found"],
    };
  }

  const url = `https://pankri.com/blog/${post.slug}`;
  const image = post.image
    ? `https://pankri.com${post.image}`
    : "https://pankri.com/pankri-blog.webp";

  const description =
    post.excerpt?.slice(0, 160).replace(/[\n\r]+/g, " ") ||
    `Explore ${post.title} on the PanKri Blog for the latest insights and updates.`;

  return {
    title: `${post.title} | PanKri Blog`,
    description,
    keywords: post.tags?.join(", ") || "blog, news, insights, PanKri",
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${post.title} | PanKri Blog`,
      description,
      url,
      siteName: "PanKri",
      images: [
        {
          url: image,
          width: 1200,
          height: 630, // Standardized to 1.91:1 ratio
          alt: post.title || "PanKri Blog Post Image",
        },
      ],
      type: "article",
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt,
      authors: ["PanKri"],
      section: post.category || "Blog",
      tags: post.tags || [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | PanKri Blog`,
      description,
      images: [{ url: image, alt: post.title || "PanKri Blog Post Image" }],
      creator: "@PanKri",
    },
    robots: {
      index: true,
      follow: true,
      maxImagePreview: "large",
    },
  };
}

export function generatePostJsonLd(post) {
  const image = post.image
    ? `https://pankri.com${post.image}`
    : "https://pankri.com/pankri-blog.webp";

  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://pankri.com/blog/${post.slug}`,
    },
    headline: post.title,
    description:
      post.excerpt?.slice(0, 160).replace(/[\n\r]+/g, " ") ||
      `Explore ${post.title} on the PanKri Blog for the latest insights.`,
    image: [
      {
        "@type": "ImageObject",
        url: image,
        width: 1200,
        height: 630,
      },
    ],
    url: `https://pankri.com/blog/${post.slug}`,
    datePublished: post.createdAt,
    dateModified: post.updatedAt || post.createdAt,
    author: [
      {
        "@type": "Person",
        name: post.author?.name || "PanKri",
        url: post.author?.url || "https://pankri.com/about",
      },
    ],
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
    keywords: post.tags?.join(", ") || "blog, news, insights, PanKri",
    inLanguage: "en-US",
    isAccessibleForFree: true,
  };
}
