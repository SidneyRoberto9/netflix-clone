import { ArrowBackOutlined } from "@material-ui/icons";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  const movie = location.state;

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video
        className="video"
        autoPlay
        progress="true"
        controls
        muted
        src={movie.video}
      ></video>
    </div>
  );
}
