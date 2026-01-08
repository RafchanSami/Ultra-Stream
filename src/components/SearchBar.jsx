import React, { useState } from "react";
import { searchShows } from "../services/tvmaze.js";
import MovieCard from "./MovieCard.jsx";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const res = await searchShows(query);
      setResults(res.map((r) => r.show));
    } catch (err) {
      console.error("Search error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-padding my-6">
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search TV shows..."
          className="flex-1 px-4 py-2 rounded bg-gray-800 text-white focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading ? (
        <div className="text-gray-400">Searching...</div>
      ) : results.length > 0 ? (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {results.map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </div>
      ) : (
        query && <div className="text-gray-400">No results found.</div>
      )}
    </div>
  );
};

export default SearchBar;
