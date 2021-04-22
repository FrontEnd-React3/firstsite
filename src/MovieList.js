import React, { useState, useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      {movies.map(movie => (
        <Movie name={movie.name} img={movie.img} key={movie.id} />
      ))}
    </div>
  );
};
export default MovieList;

{
  /* <div>
      {movies.map(movie => (
        <li>{movie.name}</li>
      ))}
    </div> */
}
