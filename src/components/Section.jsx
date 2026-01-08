import React from "react";
import { useModal } from "../context/ModalContext.jsx";

const Section = ({ title, shows }) => {
  const { openModal } = useModal();

  if (!shows || shows.length === 0) return null;

  return (
    <div className="my-8 px-4">
      <h2 className="text-xl md:text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {shows.map((show) => (
          <div
            key={show.id}
            className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
            onClick={() => openModal(show)}
          >
            <img
              src={show.image?.medium || show.image?.original || "/default-poster.jpg"}
              alt={show.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-2">
              <h3 className="text-sm font-semibold text-white truncate">
                {show.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
