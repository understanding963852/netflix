import React from "react";

//첫번째요소의 이미지를 배너를 넣고자한다
const Banner = ({ movie }) => {
  console.log("movie", movie);
  return (
    /* style부분  string으로 들어가야해서 저 방법을 알아두어야한다 */
    <div
      className="banner"
      style={{
        background:
          "url(" +
          `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path}` +
          ") no-repeat center/cover",
      }}
    >
      <div>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default Banner;
