import React, { useEffect, useState } from "react";
import Banner from "../components/Banner.jsx";
import SearchBar from "../components/SearchBar.jsx";
import Section from "../components/Section.jsx";
import MovieModal from "../components/MovieModal.jsx";
import { searchShows, getSchedule } from "../services/tvmaze.js";
import Header from "../components/Header.jsx";   // 👉 নতুন Header import

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trendingShows = await searchShows("batman");
        setTrending(trendingShows.map((r) => r.show));

        const todaySchedule = await getSchedule();
        setSchedule(todaySchedule.map((r) => r.show));
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-y-auto">
      {/* Header */}
      <Header />

      {/* Banner */}
      {trending.length > 0 && <Banner show={trending[0]} />}

      {/* SearchBar */}
      <SearchBar />

      {/* Sections */}
      <Section title="Trending Shows" shows={trending} />
      <Section title="Today's Schedule" shows={schedule} />

      {/* Movie Modal */}
      <MovieModal />
    </div>
  );
};

export default Home;
