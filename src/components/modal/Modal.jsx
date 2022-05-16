import { Close, VolumeOff, VolumeUp } from "@material-ui/icons";
import ReactPlayer from "react-player/lazy";
import React, { useState } from "react";
import "./modal.scss";

function Modal({ closeModal, content }) {
  const [muted, setMuted] = useState(false);

  const cap = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn" onClick={() => closeModal(false)}>
          <Close className="close" />
        </div>
        <div className="title">
          <ReactPlayer
            className="video"
            url={content.trailer + "?controls=0"}
            width="80vw"
            height="60vh"
            config={{
              youtube: {
                playerVars: { disablekb: 1 },
              },
            }}
            playing={true}
            muted={muted}
          />
        </div>

        <div className="muted" onClick={() => setMuted(!muted)}>
          {muted ? <VolumeOff /> : <VolumeUp />}
        </div>

        <div className="body">
          <h2 className="title">{content.title}</h2>
          <div className="info">
            <span> {content.year} </span> -
            <b className="limit"> +{content.limit} </b> -
            <span> {content.duration} </span>
          </div>
          <span className="span">{content.desc}</span>
          <span className="span">
            <span className="subtitle">Genre: </span>
            {cap(content.genre)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Modal;
