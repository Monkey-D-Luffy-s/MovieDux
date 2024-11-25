import React, { useState } from "react";
import { useRef } from "react";
import src from "../Assets/Manoj.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";

import { faPlay, faPause, faExpand } from "@fortawesome/free-solid-svg-icons";

function Videoplayer({ title }) {
  const location = useLocation();
  const { image } = location.state || "./images/5.jpg";
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const handlePlay = () => {
    setIsPlaying((prev) => !prev);
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };
  const handleFullscreen = () =>
    videoRef.current.requestFullscreen && videoRef.current.requestFullscreen();

  return (
    <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-lg">
      <h1 className="text-lg font-semibold text-white mb-4">{title}</h1>
      <video
        ref={videoRef}
        poster={`./images/${image}`}
        className="w-full max-w-2xl rounded-md shadow-md"
        src={src}
        onClick={handlePlay}
        controls={false}
      />
      <div className="flex justify-evenly gap-20 mt-4">
        <button
          onClick={handlePlay}
          className="px-4 py-2 rounded hover:bg-gray-600 transition"
        >
          {isPlaying ? (
            <FontAwesomeIcon icon={faPlay} />
          ) : (
            <FontAwesomeIcon icon={faPause} />
          )}
        </button>

        <button
          onClick={handleFullscreen}
          className="px-4 py-2 rounded hover:bg-gray-600 transition"
        >
          <FontAwesomeIcon icon={faExpand} />
        </button>
      </div>
    </div>
  );
}

export default Videoplayer;
