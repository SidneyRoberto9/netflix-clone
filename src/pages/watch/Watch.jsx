import { ArrowBackOutlined } from "@material-ui/icons";
import React from "react";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
      </div>
      <video
        className="video"
        autoPlay
        muted
        progress
        controls
        src="https://video.dailymail.co.uk/video/1418450360/2015/02/1418450360_4056782948001_nerdist--1424015378606.mp4"
      ></video>
    </div>
  );
}
