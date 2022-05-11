import { Close } from "@material-ui/icons";
import React from "react";
import "./modal.scss";

function Modal({ closeModal, content }) {
  const baseImg = new Image();
  baseImg.src = content.img;

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn" onClick={() => closeModal(false)}>
          <Close className="close" />
        </div>
        <div className="title">
          <img src={baseImg.src} alt="" />
          <video src={content.trailer} autoPlay muted></video>
        </div>
        <div className="body">
          <p>
            the next page is awesome! You should more forward, you will enjoy
          </p>
        </div>
        <div className="footer">
          <button onClick={() => closeModal(false)}>Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
