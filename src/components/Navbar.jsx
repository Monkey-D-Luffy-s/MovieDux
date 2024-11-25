import React from "react";

function Navbar({ setlist }) {
  return (
    <div className="flex gap-4 py-2 bg-gray-800 text-gray-600 justify-center my-3">
      <p className="hover:text-orange-500" onClick={() => setlist("movieList")}>
        Movies List
      </p>
      <p className="hover:text-orange-500" onClick={() => setlist("watchList")}>
        Watch List
      </p>
    </div>
  );
}

export default Navbar;
