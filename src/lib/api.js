import axios from "axios";

// Create an Axios instance
export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Fetch a single post by slug
 * Always fetches fresh data from API
 */
export async function getPost(slug) {
  try {
    const { data } = await apiClient.get(`/api/posts/${slug}`, {
      headers: { "Cache-Control": "no-cache" }, // prevent axios caching
    });
    return data || null;
  } catch (err) {
    console.error(`Error fetching post ${slug}:`, err);
    return null;
  }
}

/**
 * Fetch the latest posts
 * @param {number} limit - Number of posts to fetch (default = 4)
 */
export async function getLatestPosts(limit = 4) {
  try {
    const { data } = await apiClient.get(`/api/posts?limit=${limit}`, {
      headers: { "Cache-Control": "no-cache" }, // prevent axios caching
    });
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("Error fetching latest posts:", err);
    return [];
  }
}
