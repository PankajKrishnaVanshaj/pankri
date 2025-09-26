import axios from "axios";
import { cache } from "react";

// Create an Axios instance
export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Fetch a single post by slug (cached for performance)
export const getPost = cache(async (slug) => {
  
  try {
    // Use clean endpoint for single post
    const { data } = await apiClient.get(`/api/posts/${slug}`);
    return data || null;
  } catch (err) {
    console.error(`Error fetching post ${slug}:`, err);
    return null;
  }
});

// Fetch latest posts (safe + fallback)
export async function getLatestPosts(limit = 4) {
  try {
    const { data } = await apiClient.get(`/api/posts?limit=${limit}`);
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("Error fetching latest posts:", err);
    return [];
  }
}
