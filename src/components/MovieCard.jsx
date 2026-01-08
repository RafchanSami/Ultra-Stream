import React from "react";
import defaultPoster from "../assets/default-poster.jpg";
import { useModal } from "../context/ModalContext.jsx";

const MovieCard = ({ movie }) => {
  const { openModal } = useModal();

  const poster =
    movie.image?.medium || movie.image?.original || defaultPoster;

  return (
    <div
      className="w-40 flex-shrink-0 cursor-pointer transform transition hover:scale-105"
      onClick={() => openModal(movie)}
    >
      <img
        src={poster}
        alt={movie.name}
        className="rounded shadow-md w-full h-56 object-cover"
      />
      <h4 className="mt-2 text-sm text-gray-200 truncate">{movie.name}</h4>
    </div>
  );
};

export default MovieCard;
