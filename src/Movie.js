import React from "react";

const Movie = ({ name, img }) => {
  return (
    <>
      <h1>{name}</h1>
      <img src={img} alt={img} />
      <img src={require(`./imgflder/${img}`)} alt={img} />
      <h1>{`./${img}`}</h1>
      <img src={require('./harry.jpg')} alt={img} />
    </>
  );
};

export default Movie;

{
  /* line 11<img src={require(`./${movieimg}`)} alt={props.movieimg} /> */
}
