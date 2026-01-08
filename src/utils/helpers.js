// Common helpers (extend as needed)
export const safeText = (text, fallback = "N/A") =>
  typeof text === "string" && text.trim().length ? text : fallback;

export const formatDate = (dateStr) => {
  if (!dateStr) return "N/A";
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString();
  } catch {
    return dateStr;
  }
};
