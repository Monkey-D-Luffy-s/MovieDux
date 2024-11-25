import React from "react";
import Navbar from "./Navbar";
import GridComponent from "./GridComponent";
import { useSelector } from "react-redux";
import { useState } from "react";
import Filters from "./Filters";

function Header() {
  const movies = useSelector((state) => state.movies.movies);
  const [listype, setListype] = useState("movieList");
  const [searchText, setSearchText] = useState("");
  const [selectGenreOption, setSelectedGenreOption] = useState("");
  const [selectRatingOption, setSelectedRatingOption] = useState("");
  const genres = ["All", "Action", "Drama", "Fantasy", "Horror"];
  const ratings = ["All", "5-7", "7-9", "9-10"];

  let content = movies;

  const handleGenreChange = (event) => {
    setSelectedGenreOption(event.target.value);
  };

  const handleRatingChange = (event) => {
    setSelectedRatingOption(event.target.value);
  };

  if (listype !== "movieList") {
    content = movies.filter((movie) => movie.watchlist === 1);
  } else {
    content = movies.filter((movie) => movie.watchlist === 0);
  }

  if (selectGenreOption != "" && selectGenreOption != "All") {
    content = content.filter(
      (movie) => movie.genre === selectGenreOption.toLowerCase()
    );
  }
  if (selectRatingOption != "" && selectRatingOption != "All") {
    let ratings = selectRatingOption.split("-");
    console.log(ratings);
    content = content.filter(
      (movie) => movie.rating >= ratings[0] && movie.rating <= ratings[1]
    );
  }

  function hanldesearch(searchtext) {
    setSearchText(searchtext);
  }
  if (searchText != "") {
    console.log(searchText);
    content = content.filter((movie) =>
      movie.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center my-4">
        <h1 className="text-6xl font-bold italic text-transparent bg-gradient-to-r from-blue-500 via-red-500 to-pink-500 bg-clip-text animation-glow">
          MovieDux
        </h1>
      </div>
      <input
        className="px-6 py-1 rounded-2xl bg-gray-600 w-auto text-white flex justify-center outline-none hover:outline-orange-500 m-3"
        onChange={(e) => hanldesearch(e.target.value)}
      />
      <div className="flex justify-end text-end items-end gap-2 mx-10">
        <Filters
          Lable="filter by genre"
          selectedOption={selectGenreOption}
          handleChange={handleGenreChange}
          options={genres}
        />
        <Filters
          Lable="filter by rating"
          selectedOption={selectRatingOption}
          handleChange={handleRatingChange}
          options={ratings}
        />
      </div>
      <div>
        <Navbar setlist={setListype} />
        <GridComponent movies={content} />
      </div>
    </>
  );
}

export default Header;
