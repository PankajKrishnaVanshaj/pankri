import { apiClient } from "@/lib/api";

// Enable AMP mode for this page
export const config = { amp: 'true' };

// Helper to fetch a single post by slug (server-side)
async function getPost(slug) {
  try {
    const { data } = await apiClient.get(`/api/posts?slug=${slug}`);
    return data?.[0] || null; // API returns array
  } catch (err) {
    console.error("Error fetching post:", err);
    return null;
  }
}

// Fetch related posts (server-side, adapted from PostClient)
async function getLatestPosts(excludeSlug, limit = 4) {
  try {
    const { data } = await apiClient.get(`/api/posts?limit=${limit + 5}`);
    const posts = data.filter((p) => p.slug !== excludeSlug);
    return posts.slice(0, limit); // Return only the suggestions
  } catch (err) {
    console.error("Error fetching latest posts:", err);
    return [];
  }
}

// Metadata for SEO & Google Discover
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found | PanKri",
      keywords: ['blog', 'not found'],
    };
  }

  const url = `https://pankri.com/blog/${post.slug}`;
  const image = post.image
    ? `https://pankri.com${post.image}`
    : "https://pankri.com/pankri-blog.webp";

  const description = post.excerpt?.slice(0, 160).replace(/[\n\r]+/g, ' ') ||
    `Explore ${post.title} on the PanKri Blog for the latest insights and updates.`;

  return {
    title: `${post.title} | PanKri Blog`,
    description,
    keywords: post.tags?.join(', ') || 'blog, news, insights, PanKri',
    alternates: {
      canonical: url,
      amphtml: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | PanKri Blog`,
      description,
      url,
      siteName: "PanKri",
      images: [{
        url: image,
        width: 1200,
        height: 630, // Optimized for Discover (1.91:1 aspect ratio)
        alt: post.title || 'PanKri Blog Post Image',
      }],
      type: "article",
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt || post.createdAt,
      authors: ["PanKri"],
      section: post.category || "Blog",
      tags: post.tags || ["PanKri", "technology", "insights", "blog"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | PanKri Blog`,
      description,
      images: [{
        url: image,
        alt: post.title || 'PanKri Blog Post Image',
      }],
      creator: "@PanKri",
    },
    robots: {
      index: true,
      follow: true,
      maxImagePreview: "large",
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
      },
    },
  };
}

// JSON-LD helper optimized for Google Discover
function getPostJsonLd(post) {
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
    description: post.excerpt?.slice(0, 160).replace(/[\n\r]+/g, ' ') ||
      `Explore ${post.title} on the PanKri Blog for the latest insights.`,
    image: [{
      "@type": "ImageObject",
      url: image,
      width: 1200,
      height: 630, // Optimized for Discover
    }],
    url: `https://pankri.com/blog/${post.slug}`,
    datePublished: post.createdAt,
    dateModified: post.updatedAt || post.createdAt,
    author: [{
      "@type": "Person",
      name: post.author?.name || "PanKri",
      url: post.author?.url || "https://pankri.com/about",
    }],
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
    keywords: post.tags?.join(', ') || "blog, news, insights, PanKri",
    inLanguage: "en-US",
    isAccessibleForFree: true,
    hasPart: post.video ? [{
      "@type": "VideoObject",
      name: post.title,
      description: post.excerpt || post.title,
      thumbnailUrl: image,
      uploadDate: post.createdAt,
      contentUrl: post.video,
    }] : [],
  };
}

export default async function PostAmpPage({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  const suggestions = await getLatestPosts(slug, 4); // Fetch 4 related posts

  if (!post) {
    return (
      <div>
        <h1>Post Not Found</h1>
        <p>Sorry, the requested post could not be found.</p>
      </div>
    );
  }

  // Inline CSS for AMP (under 75KB, optimized for readability)
  const styles = `
    body { font-family: 'Roboto', Arial, sans-serif; margin: 0; padding: 0; background: #f7fafc; }
    .container { max-width: 800px; margin: 0 auto; padding: 16px; }
    h1 { font-size: 2.5rem; color: #1a202c; margin-bottom: 1rem; font-weight: 700; }
    .date { font-size: 0.9rem; color: #718096; margin-bottom: 1.5rem; }
    .content { font-size: 1.1rem; line-height: 1.8; color: #2d3748; }
    .content img { max-width: 100%; height: auto; border-radius: 8px; }
    .content a { color: #2b6cb0; text-decoration: underline; }
    .content a:hover { color: #2c5282; }
    .ad-container { margin: 2rem 0; text-align: center; }
    .back-link { display: inline-block; margin: 2rem 0; color: #2b6cb0; font-weight: 600; text-decoration: none; }
    .back-link:hover { text-decoration: underline; }
    .suggestions { margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid #e2e8f0; }
    .suggestions h2 { font-size: 1.5rem; color: #1a202c; margin-bottom: 1rem; font-weight: 600; }
    .suggestions-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1.5rem; }
    .suggestion-card { padding: 1rem; border: 1px solid #e2e8f0; border-radius: 8px; background: #fff; transition: border-color 0.2s; }
    .suggestion-card h3 { font-size: 1.1rem; color: #1a202c; margin-bottom: 0.5rem; font-weight: 500; }
    .suggestion-card p { font-size: 0.9rem; color: #718096; }
    .suggestion-card:hover { border-color: #2b6cb0; }
    .view-all { display: inline-block; margin-top: 1rem; color: #2b6cb0; font-weight: 600; text-decoration: none; }
    .view-all:hover { text-decoration: underline; }
    .author-bio { margin: 2rem 0; padding: 1rem; background: #edf2f7; border-radius: 8px; }
    .author-bio p { font-size: 0.9rem; color: #4a5568; }
  `;

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#2b6cb0" />
      <title>{`${post.title} | PanKri Blog`}</title>
      <link rel="canonical" href={`https://pankri.com/blog/${post.slug}`} />
      <style dangerouslySetInnerHTML={{
        __html: `
          body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-animation:-amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}
        `
      }} />
      <noscript>
        <style dangerouslySetInnerHTML={{
          __html: `
            body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}
          `
        }} />
      </noscript>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <script async src="https://cdn.ampproject.org/v0.js"></script>
      <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
      <script async custom-element="amp-video" src="https://cdn.ampproject.org/v0/amp-video-0.1.js"></script>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getPostJsonLd(post)) }}
      />
      <div className="container">
        <h1>{post.title}</h1>
        {post.updatedAt && (
          <p className="date">
            {new Date(post.updatedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        )}
        {post.image && (
          <amp-img
            src={`https://pankri.com${post.image}` }
            alt={post.title || "PanKri Blog Post Image"}
            width="1200"
            height="630"
            layout="responsive"
            style={{ borderRadius: '8px' }}
          />
        )}
        {post.video && (
          <amp-video
            width="640"
            height="360"
            src={post.video}
            poster={post.image || "https://pankri.com/pankri-blog.webp"}
            layout="responsive"
            controls
          >
            <source src={post.video} type="video/mp4" />
          </amp-video>
        )}
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: post.content || "" }}
        />
        {post.author?.bio && (
          <div className="author-bio">
            <p><strong>About the Author:</strong> {post.author.bio}</p>
          </div>
        )}
        <div className="ad-container">
          <amp-ad
            width="300"
            height="250"
            type="doubleclick"
            data-slot="/your-ad-network/ad-unit"
            layout="fixed"
          />
        </div>
        {suggestions.length > 0 && (
          <section className="suggestions">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h2>You May Also Like</h2>
              <a href="/blog" className="view-all">View All →</a>
            </div>
            <div className="suggestions-grid">
              {suggestions.map((s) => (
                <a key={s.slug} href={`/blog/${s.slug}`} className="suggestion-card">
                  {s.image && (
                    <amp-img
                      src={`https://pankri.com${s.image}`}
                      alt={s.title || "Related Post Image"}
                      width="250"
                      height="140"
                      layout="responsive"
                      style={{ borderRadius: '8px' }}
                    />
                  )}
                  <h3>{s.title}</h3>
                  <p>{s.excerpt?.slice(0, 100) + '...'}</p>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}