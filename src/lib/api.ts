export const API_BASE_URL = (import.meta.env.VITE_API_URL || "https://home-serviceapp-backend.onrender.com").replace(/\/$/, "");

export function getImageUrl(path?: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE_URL}${cleanPath}`;
}

export interface BackendCategory {
  _id: string;
  name: string;
  image?: string;
  status?: string;
  servicesCount?: number;
  description?: string;
}

export interface BackendGalleryItem {
  _id: string;
  imageUrl: string;
  type?: string;
  description?: string;
  isUsedInFeed?: boolean;
}

export async function fetchCategories(): Promise<BackendCategory[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/services/categories`);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data = await res.json();
    const categories = data.categories || data || [];
    return Array.isArray(categories) ? categories : [];
  } catch (err) {
    console.error("Failed to fetch categories:", err);
    return [];
  }
}

export async function fetchGalleryFeeds(): Promise<BackendGalleryItem[]> {
  try {
    // Try fetching images marked for feed first
    const res = await fetch(`${API_BASE_URL}/api/gallery?limit=30&isUsedInFeed=true`);
    if (res.ok) {
      const data = await res.json();
      const images = data.images || data.data || (Array.isArray(data) ? data : []);
      if (Array.isArray(images) && images.length > 0) {
        return images;
      }
    }

    // Fallback: fetch all gallery images
    const fallbackRes = await fetch(`${API_BASE_URL}/api/gallery?limit=30`);
    if (fallbackRes.ok) {
      const fallbackData = await fallbackRes.json();
      const images = fallbackData.images || fallbackData.data || (Array.isArray(fallbackData) ? fallbackData : []);
      if (Array.isArray(images)) {
        return images;
      }
    }
  } catch (err) {
    console.error("Failed to fetch gallery feeds:", err);
  }
  return [];
}

export interface SupportSettings {
  success: boolean;
  supportPhone: string;
  formattedPhone: string;
  whatsappPhone: string;
  supportEmail: string;
}

export async function fetchSupportSettings(): Promise<SupportSettings> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/support`);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("Failed to fetch support settings:", err);
    return {
      success: false,
      supportPhone: "9744146638",
      formattedPhone: "+91 9744146638",
      whatsappPhone: "919744146638",
      supportEmail: "support@prohands.in"
    };
  }
}
