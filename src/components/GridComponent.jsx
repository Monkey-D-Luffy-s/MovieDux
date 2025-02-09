import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import Filters from "./Filters";
import MovieTile from "./MovieTile";

function GridComponent() {
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

  if (selectGenreOption !== "" && selectGenreOption !== "All") {
    content = content.filter(
      (movie) => movie.genre === selectGenreOption.toLowerCase()
    );
  }
  if (selectRatingOption !== "" && selectRatingOption !== "All") {
    let ratings = selectRatingOption.split("-");
    console.log(ratings);
    content = content.filter(
      (movie) => movie.rating >= ratings[0] && movie.rating <= ratings[1]
    );
  }

  function hanldesearch(searchtext) {
    setSearchText(searchtext);
  }
  if (searchText !== "") {
    console.log(searchText);
    content = content.filter((movie) =>
      movie.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }
  return (
    <>
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
      <div className="flex flex-col gap-4">
        <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 m-2 text-gray-400">
          {content.map((movie) => (
            <MovieTile key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
}

export default GridComponent;
