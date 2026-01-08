import React from "react";
import { useModal } from "../context/ModalContext.jsx";
import TrailerEmbed from "./TrailerEmbed.jsx";

const MovieModal = () => {
  const { isOpen, selectedMovie, closeModal } = useModal();

  if (!isOpen || !selectedMovie) return null;

  const {
    name,
    summary,
    genres,
    premiered,
    rating,
    runtime,
    language,
    network,
    status,
  } = selectedMovie;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-lg w-11/12 md:w-3/4 lg:w-2/3 max-h-[90vh] overflow-y-auto p-6 relative">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-white text-xl"
        >
          ✖
        </button>

        {/* Movie Info */}
        <h2 className="text-2xl font-bold text-white mb-2">{name || "Untitled"}</h2>

        <p
          className="text-gray-300 mb-4"
          dangerouslySetInnerHTML={{ __html: summary || "No description available." }}
        />

        {/* Extra Info */}
        <div className="space-y-2 text-gray-300 mb-4">
          <p><strong>Genres:</strong> {genres?.join(", ") || "N/A"}</p>
          <p><strong>Premiered:</strong> {premiered || "Unknown"}</p>
          <p><strong>Rating:</strong> {rating?.average || "N/A"}</p>
          <p><strong>Runtime:</strong> {runtime ? `${runtime} min` : "N/A"}</p>
          <p><strong>Language:</strong> {language || "N/A"}</p>
          <p><strong>Network:</strong> {network?.name || "N/A"}</p>
          <p><strong>Status:</strong> {status || "N/A"}</p>
        </div>

        {/* 👉 Trailer Embed */}
        <TrailerEmbed showName={name} />
      </div>
    </div>
  );
};

export default MovieModal;
