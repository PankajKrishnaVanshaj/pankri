import axios from "axios";

export function getBaseUrl() {
  if (typeof window !== "undefined") {
    // Client-side → relative URL works
    return "";
  }
  // Server-side → must use absolute URL
  return process.env.NEXT_PUBLIC_BASE_URL;
}

// Create an Axios instance
export const apiClient = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    "Content-Type": "application/json",
  },
});

