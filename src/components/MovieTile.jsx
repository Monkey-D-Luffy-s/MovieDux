import React from "react";
import { useDispatch } from "react-redux";
import { UpdateMovie } from "../Slices/MoviesSlice";

function MovieTile({ movie }) {
  const dispatch = useDispatch();

  function handlewatchList() {
    dispatch(
      UpdateMovie({
        id: movie.id,
        movie: { watchlist: movie.watchlist === 1 ? 0 : 1 },
      })
    );
  }
  return (
    <div className="flex flex-col group relative duration-500 max-w-48 h-[110%] overflow-hidden hover:scale-110 gap-2 mb-10">
      <img src={`/images/${movie.image}`} className="transition-transform" />
      <div className="absolute mt-2 flex flex-col opacity-0 group-hover:opacity-100 transition duration-500 justify-center items-center">
        <button
          className="bg-blue-500 rounded-md text-white px-4 text-sm py-1 hover:bg-blue-400"
          onClick={handlewatchList}
        >
          {movie.watchlist == 0
            ? "Add to watch list"
            : "Remove from watch list"}
        </button>
        <p className="text-orange-500 font-bold italic">{movie.title}</p>
        <div className="flex gap-4 text-sm text-white">
          <p>Genre: {movie.genre}</p>
          <p>Ratinmg: {movie.rating}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieTile;
