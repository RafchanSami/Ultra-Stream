import React, { useEffect, useState } from "react";

const TrailerEmbed = ({ showName }) => {
  const [trailerUrl, setTrailerUrl] = useState(null);

  useEffect(() => {
    if (!showName) return;

    const fetchTrailer = async () => {
      try {
        // ✅ Vite এ এভাবে নিতে হবে
        const apiKey = import.meta.env.VITE_APP_YOUTUBE_API_KEY;
        console.log("Loaded API Key:", apiKey); // Debugging

        const query = encodeURIComponent(showName + " trailer");

        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${query}&type=video&key=${apiKey}`;
        const res = await fetch(url);
        const data = await res.json();

        console.log("YouTube API response:", data);

        if (data.items && data.items.length > 0) {
          const videoId = data.items[0].id.videoId;
          setTrailerUrl(`https://www.youtube.com/embed/${videoId}`);
        } else {
          // 👉 Fallback: YouTube search embed
          setTrailerUrl(
            `https://www.youtube.com/embed?listType=search&list=${query}`
          );
        }
      } catch (err) {
        console.error("YouTube API error:", err);
        const query = encodeURIComponent(showName + " trailer");
        setTrailerUrl(
          `https://www.youtube.com/embed?listType=search&list=${query}`
        );
      }
    };

    fetchTrailer();
  }, [showName]);

  if (!trailerUrl) {
    return <p className="text-gray-400">No trailer available</p>;
  }

  return (
    <div className="w-full h-96 mt-4">
      <iframe
        src={trailerUrl}
        title="Movie Trailer"
        className="w-full h-full rounded-lg"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default TrailerEmbed;
