import React, { useEffect, useState } from "react";
import { Movie } from "../../models/movie.model";
import { api } from "../../services/api";
import "./listitem.scss";

export default function ListItem({ item, openModal, setContent }) {
  const [movie, setMovie] = useState({} as Movie);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await api.get("movies/" + item, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setMovie(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [item]);

  return (
    <>
      <div
        className="listItem"
        onClick={() => {
          openModal(true);
          setContent(movie);
        }}
      >
        <img src={movie.img} loading="lazy" alt="..." />
      </div>
    </>
  );
}
