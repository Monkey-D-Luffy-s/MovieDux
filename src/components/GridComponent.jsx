import React from "react";

import MovieTile from "./MovieTile";
import { useSelector } from "react-redux";

function GridComponent({ movies }) {
  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 m-2 text-gray-400">
      {movies.map((movie) => (
        <MovieTile key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default GridComponent;
