export function generatePostMetadata(
  post,
  metadataBase = "https://pankri.com"
) {
  if (!post) {
    return {
      title: "Article Not Found | PanKri Finance",
      description: "The requested finance article could not be found.",
    };
  }

  const url = `${metadataBase}/blog/${post.slug}`;
  const imageUrl = post.image
    ? `${metadataBase}${post.image.startsWith("/") ? "" : "/"}${post.image}`
    : `${metadataBase}/og-finance.jpg`;

  // Smart description: Use excerpt → fallback to first 155 chars of content → generic
  let description = post.excerpt?.replace(/\s+/g, " ").trim();
  if (!description && post.content) {
    description = post.content.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
  }
  if (!description) {
    description = `Learn about ${post.title.toLowerCase()} – expert insights on personal finance, investing, and wealth building.`;
  }
  if (description.length > 158) {
    description = description.slice(0, 155).trim() + "...";
  }

  const publishedTime = post.createdAt ? new Date(post.createdAt).toISOString() : new Date().toISOString();
  const modifiedTime = post.updatedAt ? new Date(post.updatedAt).toISOString() : publishedTime;

  return {
    metadataBase: new URL(metadataBase),
    title: `${post.title} | PanKri Finance`,
    description,
    keywords: [
      ...(post.tags || []),
      "personal finance India",
      "stock market",
      "mutual funds",
      "financial freedom",
      "investing tips",
      "money management",
      post.category || "Finance",
    ],
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: `${post.title} | PanKri Finance`,
      description,
      url,
      siteName: "PanKri Finance",
      type: "article",
      locale: "en_IN",
      publishedTime,
      modifiedTime,
      authors: [post.author?.name || "Pankaj KrishnaVanshaj"],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${post.title} - PanKri Finance`,
        },
      ],
      article: {
        publishedTime,
        modifiedTime,
        authors: [post.author?.name || "Pankaj KrishnaVanshaj"],
        section: post.category || "Personal Finance",
        tags: post.tags || [],
      },
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | PanKri Finance`,
      description,
      images: [imageUrl],
      creator: "@pankri_official",
    },
  };
}

export function generatePostJsonLd(post) {
  if (!post) return null;

  const baseUrl = "https://pankri.com";
  const url = `${baseUrl}/blog/${post.slug}`;
  const imageUrl = post.image
    ? `${baseUrl}${post.image.startsWith("/") ? "" : "/"}${post.image}`
    : `${baseUrl}/og-finance.jpg`;

  const datePublished = post.createdAt ? new Date(post.createdAt).toISOString() : new Date().toISOString();
  const dateModified = post.updatedAt ? new Date(post.updatedAt).toISOString() : datePublished;

  // Estimate reading time
  const wordCount = post.content?.replace(/<[^>]*>/g, "").split(/\s+/).filter(Boolean).length || 800;
  const readingTime = Math.max(1, Math.round(wordCount / 225)); // ~225 wpm average

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: post.title,
    description:
      post.excerpt?.replace(/\s+/g, " ").trim().slice(0, 160) ||
      `In-depth guide on ${post.title.toLowerCase()} – learn actionable finance and investing strategies.`,
    image: {
      "@type": "ImageObject",
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    author: {
      "@type": "Person",
      name: post.author?.name || "Pankaj KrishnaVanshaj",
      url: `${baseUrl}/about-us`,
      sameAs: [
        "https://twitter.com/pankri_official",
        "https://linkedin.com/in/pankajkrishnavanshaj",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "PanKri Finance",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo-finance.png`,
        width: 600,
        height: 60,
      },
    },
    datePublished,
    dateModified,
    wordCount,
    timeRequired: `PT${readingTime}M`,
    inLanguage: "en-IN",
    isAccessibleForFree: true,
    articleSection: post.category || "Personal Finance",
    keywords: [
      ...(post.tags || []),
      "personal finance",
      "investing",
      "stock market",
      "financial freedom",
      "money tips",
    ],
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".post-title", ".post-content p"],
    },
   
  };
}