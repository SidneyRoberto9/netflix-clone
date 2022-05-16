import React, { useRef, useState } from "react";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import "./list.scss";
import ListItem from "../listitem/Listitem";

const List = ({ list, openModal, setContent }) => {
  const [isMoved, setIsMoved] = useState(false);
  const [sliderNumber, setSliderNumber] = useState(0);
  const widthCard = 300;
  const [clickLimit] = useState(parseInt(window.innerWidth / widthCard));

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = parseInt(listRef.current.getBoundingClientRect().x - 50);

    if (direction === "left" && sliderNumber > 0) {
      setSliderNumber(sliderNumber - 1);
      listRef.current.style.transform = `translateX(${
        clickLimit * widthCard + distance
      }px)`;
    }

    if (
      direction === "right" &&
      sliderNumber < parseInt((list.content.length - 1) / clickLimit)
    ) {
      setSliderNumber(sliderNumber + 1);
      listRef.current.style.transform = `translateX(${
        clickLimit * -widthCard + distance
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
            <ListItem
              item={item}
              key={i}
              openModal={openModal}
              setContent={setContent}
            />
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
