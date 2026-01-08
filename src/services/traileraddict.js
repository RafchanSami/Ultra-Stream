export const getTrailerEmbedUrl = async (movieName) => {
  try {
    const slug = movieName.toLowerCase().replace(/\s+/g, "-");
    // TrailerAddict embed URL
    return `https://www.traileraddict.com/trailer/${slug}/trailer`;
  } catch (err) {
    console.error("TrailerAddict error:", err);
    return null;
  }
};
