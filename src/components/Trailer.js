import React from "react";
import useTrailerVideo from "../customHooks/useTrailerVideo";
import { useSelector } from "react-redux";

function Trailer({ movieId }) {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  // console.log(movieId);

  useTrailerVideo(movieId);
  return (
    <>
      <div className="w-sceen">
        <iframe
          className="w-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo?.key +
            "?&autoplay=1"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default Trailer;

// <iframe
//   width="560"
//   height="315"
//   src= "https://www.youtube.com/embed/" +
//trailerVideo?.key
//   title="YouTube video player"
//   frameborder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media;
//   gyroscope; picture-in-picture; web-share"
//   allowfullscreen
// ></iframe>

// <iframe
//           className="w-screen aspect-video"
//           // height="315"
//           src={
//             "https://www.youtube.com/embed/" +
//             trailerVideo?.key +
//             "?&autoplay=1"
//           }
//           title="YouTube video player"
//           // frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write;
//         encrypted-media; gyroscope; picture-in-picture; web-share"
//           // allowFullScreen
//         ></iframe>
