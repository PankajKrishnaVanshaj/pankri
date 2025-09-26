import axios from "axios";


// Create an Axios instance
export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

import { cache } from "react";


export const getPost = cache(async (slug) => {
  try {
    const { data } = await apiClient.get(`/api/posts?slug=${slug}`);
    return data?.[0] || null; // API returns an array
  } catch (err) {
    console.error("Error fetching post:", err);
    return null;
  }
});


export async function getLatestPosts(excludeSlug, limit = 4) {
  try {
    // Fetch a few extra posts to ensure we have enough after filtering
    const { data } = await apiClient.get(`/api/posts?limit=${limit + 5}`);
    const posts = data.filter((p) => p.slug !== excludeSlug);
    return posts.slice(0, limit);
  } catch (err) {
    console.error("Error fetching latest posts:", err);
    return [];
  }
}