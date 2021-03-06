import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";
import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Movie } from "../../models/movie.model";

export default function Featured({ type, setGenre }) {
  const [content, setContent] = useState({} as Movie);

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const { data } = await api.get(`movies/random/movie?type=${type}`, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setContent(data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomContent();
  }, [type]);

  const handleGenreChange = (e: any) => {
    e.preventDefault();
    setGenre(e.target.value);
  };

  return (
    <div className="featured">
      {type !== "null" && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre" onChange={handleGenreChange}>
            <option value="">All</option>
            <option value="adventure">Adventure</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}

      <img src={content.img} loading="lazy" alt="" />
      <span className="bg"></span>

      <div className="info">
        <h3 className="title">{content.title}</h3>
        <span className="dsc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>

          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
