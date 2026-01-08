import React from "react";
import { useModal } from "../context/ModalContext.jsx";

const Banner = ({ show }) => {
  const { openModal } = useModal();

  if (!show) return null;

  return (
    <div className="relative h-[60vh] bg-gray-900 mb-6">
      {/* Background Image */}
      <img
        src={show.image?.original || show.image?.medium || "/default-poster.jpg"}
        alt={show.name}
        className="w-full h-full object-cover opacity-60"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          {show.name}
        </h1>
        <p
          className="text-gray-200 max-w-xl mb-6 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: show.summary }}
        />

        <button
          onClick={() => openModal(show)}
          className="bg-blue-600 px-6 py-2 rounded text-white font-semibold hover:bg-blue-700 transition"
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default Banner;
