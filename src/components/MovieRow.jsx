import React from "react";
import MovieCard from "./MovieCard.jsx";

const MovieRow = ({ title, items, anchorId }) => {
  if (!items || items.length === 0) return null;

  return (
    <section id={anchorId} className="my-6">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {items.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>
    </section>
  );
};

export default MovieRow;
