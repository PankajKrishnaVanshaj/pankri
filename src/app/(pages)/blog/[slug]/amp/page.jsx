import { getPost, getLatestPosts } from "@/lib/api";
import { generatePostJsonLd } from "@/lib/seo";

// This config enables AMP-first mode for this page in Next.js
export const config = { amp: "true" };

export default async function PostAmpPage({ params }) {
  const { slug } = params;
  const [post, suggestions] = await Promise.all([
    getPost(slug),
    getLatestPosts(slug, 4),
  ]);

  if (!post) {
    return (
      <div className="container">
        <h1>Post Not Found</h1>
        <p>Sorry, the requested post could not be found.</p>
      </div>
    );
  }

  const jsonLd = generatePostJsonLd(post);

  // All custom styles must be within the <style amp-custom> tag.

  const styles = `
    body {
      font-family: 'Roboto', Arial, sans-serif;
      margin: 0;
      padding: 0;
      background: #f7fafc;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 16px;
    }
    h1 {
      font-size: 2.5rem;
      color: #1a202c;
      margin-bottom: 1rem;
      font-weight: 700;
      line-height: 1.2;
    }
    .date {
      font-size: 0.9rem;
      color: #718096;
      margin-bottom: 1.5rem;
    }
    .content {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #2d3748;
    }
    .content amp-img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
    }
    .content a {
      color: #2b6cb0;
      text-decoration: underline;
    }
    .ad-container {
      margin: 2rem 0;
      text-align: center;
    }
    .suggestions {
      margin-top: 2rem;
      padding-top: 1.5rem;
      border-top: 1px solid #e2e8f0;
    }
    .suggestions h2 {
      font-size: 1.5rem;
      color: #1a202c;
      margin-bottom: 1rem;
      font-weight: 600;
    }
    /* FIX: Added this class to replace the inline style attribute */
    .suggestions-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }
    .suggestions-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1.5rem;
    }
    .suggestion-card {
      padding: 1rem;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      background: #fff;
      text-decoration: none; /* Good practice for card links */
    }
    .suggestion-card h3 {
      font-size: 1.1rem;
      color: #1a202c;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }
    .suggestion-card p {
      font-size: 0.9rem;
      color: #718096;
    }
    .view-all {
      display: inline-block;
      margin-top: 1rem;
      color: #2b6cb0;
      font-weight: 600;
      text-decoration: none;
    }
    
    /* Responsive adjustments */
    @media (max-width: 1024px) {
      .container { max-width: 90%; }
      h1 { font-size: 2.2rem; }
      .suggestions h2 { font-size: 1.4rem; }
    }
    @media (max-width: 768px) {
      .container { padding: 12px; }
      h1 { font-size: 2rem; }
      .content { font-size: 1rem; }
      .suggestions-grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 480px) {
      h1 { font-size: 1.6rem; }
      .content { font-size: 0.95rem; line-height: 1.6; }
      .suggestions h2 { font-size: 1.2rem; }
      .suggestion-card h3 { font-size: 1rem; }
      .suggestion-card p, .date { font-size: 0.85rem; }
      .view-all { font-size: 0.9rem; }
    }
  `;

  return (
    <>
      
      <style
        dangerouslySetInnerHTML={{
          __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-animation:-amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`,
          "amp-boilerplate": "",
        }}
      />
      <noscript>
        <style
          dangerouslySetInnerHTML={{
            __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`,
            "amp-boilerplate": "",
          }}
        />
      </noscript>
      <style dangerouslySetInnerHTML={{ __html: styles, "amp-custom": "" }} />
      
      {/* Required AMP scripts for components used on the page */}
      <script async src="https://cdn.ampproject.org/v0.js"></script>
      <script
        async
        custom-element="amp-ad"
        src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"
      ></script>
      <script
        async
        custom-element="amp-video"
        src="https://cdn.ampproject.org/v0/amp-video-0.1.js"
      ></script>
      
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
            src={`https://pankri.com${post.image}`}
            alt={post.title || "PanKri Blog Post Image"}
            width="1200"
            height="630"
            layout="responsive"
          ></amp-img>
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

        <div className="ad-container">
          <amp-ad
            width="300"
            height="250"
            type="adsense"
            data-ad-client="ca-pub-2178056161997357"
            data-ad-slot="XXXXXXXXXX" // Remember to replace this placeholder
            layout="fixed"
          />
        </div>

        {suggestions.length > 0 && (
          <section className="suggestions">
            {/* FIX: Replaced the div with an inline style with a div using a CSS class */}
            <div className="suggestions-header">
              <h2>You May Also Like</h2>
              <a href="/blog" className="view-all">
                View All →
              </a>
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
                    ></amp-img>
                  )}
                  <h3>{s.title}</h3>
                  <p>{s.excerpt?.slice(0, 100) + "..."}</p>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}