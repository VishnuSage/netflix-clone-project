import React, { useEffect, useState } from "react";
import instance from "../instance";
import "./Row.css";

function Row({ title, fetchUrl }) {
  console.log(title);
  console.log(fetchUrl);
  const image_base_url = "https://image.tmdb.org/t/p/original";
  const [allMovies, setAllMovies] = useState();
  const fetchData = async () => {
    const response = await instance.get(fetchUrl);
    console.log("=======response=======");
    console.log(response);
    setAllMovies(response.data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log("=====All Movies=====");
  console.log(allMovies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="movie_row">
        {allMovies?.map((item) => (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img
            className="movies"
            src={`${image_base_url}${item?.backdrop_path}`}
            alt="no image"
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
