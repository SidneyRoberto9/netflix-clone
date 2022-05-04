import React, { useRef, useState } from "react";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import "./list.scss";
import ListItem from "../listitem/Listitem";

const List = ({ list }) => {
  const [isMoved, setIsMoved] = useState(false);
  const [sliderNumber, setSliderNumber] = useState(0);
  const [clickLimit] = useState(parseInt(window.innerWidth / 230));

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;

    if (direction === "left" && sliderNumber > 0) {
      setSliderNumber(sliderNumber - 1);
      listRef.current.style.transform = `translateX(${
        clickLimit * 230 + distance
      }px)`;
    }

    if (direction === "right" && sliderNumber < parseInt(10 / clickLimit)) {
      setSliderNumber(sliderNumber + 1);
      listRef.current.style.transform = `translateX(${
        clickLimit * -230 + distance
      }px)`;
    }
  };
  return (
    <div className="list">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          {list.content.map((item, i) => (
            <ListItem index={i} item={item} key={i} />
          ))}
        </div>

        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
