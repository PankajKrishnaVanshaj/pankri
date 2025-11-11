import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 10000, // 10s timeout to prevent hangs
});

// Add retry logic (simple, or use axios-retry lib)
const fetchWithRetry = async (fn, maxRetries = 2) => {
  for (let i = 0; i <= maxRetries; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === maxRetries) throw err;
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1))); // Exponential backoff
    }
  }
};

export async function getPost(slug) {
  try {
    const { data } = await fetchWithRetry(() =>
      apiClient.get(`/api/posts/${slug}`, { headers: { "Cache-Control": "no-cache" } })
    );
    return data || null;
  } catch (err) {
    console.error(`Error fetching post ${slug}:`, err);
    return null;
  }
}

export async function getLatestPosts(limit = 4) {
  try {
    const { data } = await fetchWithRetry(() =>
      apiClient.get(`/api/posts?limit=${limit}`, { headers: { "Cache-Control": "no-cache" } })
    );
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("Error fetching latest posts:", err);
    return [];
  }
}