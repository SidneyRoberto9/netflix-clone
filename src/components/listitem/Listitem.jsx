import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import "./listitem.scss";

export default function ListItem({ index, item, openModal, setContent }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

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

  const style = {
    left: isHovered && index * 245 - 50 + index * 2.5,
    marginRight: isHovered && 2 + index * 2.5,
  };

  return (
    <>
      <div
        className="listItem"
        style={style}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
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
