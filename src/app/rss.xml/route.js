import { NextResponse } from "next/server";
import RSS from "rss";
import { apiClient } from "@/lib/api"; 

export async function GET() {
  try {
    // Fetch posts from backend
    const { data: posts } = await apiClient.get(`/api/posts?limit=100`);

    // Create RSS feed
    const feed = new RSS({
      title: "Pankri RSS Feed",
      description:
        "Stay updated with the latest articles, insights, and updates from Pankri.",
      feed_url: "https://pankri.com/rss.xml",
      site_url: "https://pankri.com",
      language: "en",
      pubDate: new Date(),
    });

    // Add items
    posts.forEach((post) => {
      feed.item({
        title: post.title,
        description: post.excerpt || "", // use summary if available
        url: `https://pankri.com/blog/${post.slug}`,
        guid: post._id, // unique identifier
        date: post.updatedAt || post.createdAt,
      });
    });

    // Generate XML
    let xml = feed.xml({ indent: true });

    // Inject stylesheet (avoid double XML declaration)
    xml = xml.replace(
      /^<\?xml version="1.0" encoding="UTF-8"\?>/,
      `<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="/rss-style.xsl"?>`
    );

    // Return response
    return new NextResponse(xml, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } catch (error) {
    console.error("❌ Failed to generate RSS feed:", error);
    return new NextResponse("Failed to generate RSS feed", { status: 500 });
  }
}
