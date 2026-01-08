// TVMaze API service functions
// তুমি এগুলো Home.jsx, Banner.jsx, SearchBar.jsx ইত্যাদিতে ব্যবহার করতে পারবে

const BASE_URL = "https://api.tvmaze.com";

// 🔍 Search shows by query
export const searchShows = async (query) => {
  try {
    const res = await fetch(`${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`);
    if (!res.ok) throw new Error("Failed to fetch search results");
    return await res.json();
  } catch (err) {
    console.error("searchShows error:", err);
    return [];
  }
};

// 📺 Get today's schedule
export const getSchedule = async () => {
  try {
    const res = await fetch(`${BASE_URL}/schedule`);
    if (!res.ok) throw new Error("Failed to fetch schedule");
    return await res.json();
  } catch (err) {
    console.error("getSchedule error:", err);
    return [];
  }
};

// 🎬 Get show details by ID
export const getShowDetails = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/shows/${id}`);
    if (!res.ok) throw new Error("Failed to fetch show details");
    return await res.json();
  } catch (err) {
    console.error("getShowDetails error:", err);
    return null;
  }
};

// ⭐ Get popular shows (example: using a keyword)
export const getPopularShows = async () => {
  try {
    const res = await fetch(`${BASE_URL}/search/shows?q=popular`);
    if (!res.ok) throw new Error("Failed to fetch popular shows");
    return await res.json();
  } catch (err) {
    console.error("getPopularShows error:", err);
    return [];
  }
};
