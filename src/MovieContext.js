import React, { useState, createContext } from "react";
export const MovieContext = createContext();
export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      img: "harry.jpg",
      id: "23456"
    }
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
