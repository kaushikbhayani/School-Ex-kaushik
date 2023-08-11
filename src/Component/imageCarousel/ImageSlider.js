import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ImageCard from "../card/ImageCard";
import "./ImageSliderStyle.css";
const SliderData = [
  {
    id: 1,
    img: require("../../images/sl-1.jpg"),
    title: "SMILEY SATURDAY",
    text: "sadhguisagdusagduysdguyasg",
  },
  {
    id: 2,
    img: require("../../images/sl-2.jpg"),
    title: "SMILEY SATURDAY",
    text: "sadhguisagdusagduysdguyasg",
  },
  {
    id: 3,
    img: require("../../images/sl-3.jpg"),
    title: "SMILEY SATURDAY",
    text: "sadhguisagdusagduysdguyasg",
  },
  {
    id: 4,
    img: require("../../images/sl-4.jpg"),
    title: "SMILEY SATURDAY",
    text: "sadhguisagdusagduysdguyasg",
  },
  {
    id: 5,
    img: require("../../images/sl-5.jpg"),
    title: "SMILEY SATURDAY",
    text: "sadhguisagdusagduysdguyasg",
  },
  {
    id: 6,
    img: require("../../images/sl-1.jpg"),
    title: "SMILEY SATURDAY",
    text: "sadhguisagdusagduysdguyasg",
  },
  {
    id: 7,
    img: require("../../images/sl-1.jpg"),
    title: "SMILEY SATURDAY",
    text: "sadhguisagdusagduysdguyasg",
  },
  {
    id: 8,
    img: require("../../images/sl-1.jpg"),
    title: "SMILEY SATURDAY",
    text: "sadhguisagdusagduysdguyasg",
  },
  {
    id: 9,
    img: require("../../images/sl-1.jpg"),
    title: "SMILEY SATURDAY",
    text: "sadhguisagdusagduysdguyasg",
  },
  {
    id: 10,
    img: require("../../images/sl-1.jpg"),
    title: "SMILEY SATURDAY",
    text: "sadhguisagdusagduysdguyasg",
  },
  {
    id: 11,
    img: require("../../images/sl-1.jpg"),
    title: "SMILEY SATURDAY",
    text: "sadhguisagdusagduysdguyasg",
  },
  {
    id: 12,
    img: require("../../images/sl-1.jpg"),
    title: "SMILEY SATURDAY",
    text: "sadhguisagdusagduysdguyasg",
  },
  {
    id: 13,
    img: require("../../images/sl-1.jpg"),
    title: "SMILEY SATURDAY",
    text: "sadhguisagdusagduysdguyasg",
  },
  {
    id: 14,
    img: require("../../images/sl-1.jpg"),
    title: "SMILEY SATURDAY",
    text: "sadhguisagdusagduysdguyasg",
  },
  {
    id: 15,
    img: require("../../images/sl-1.jpg"),
    title: "SMILEY SATURDAY",
    text: "sadhguisagdusagduysdguyasg",
  },
];

function ImageSlider() {
  return (
    <>
      <div className="container">
        <Splide
          options={{
            type: "loop",
            focus: "center",
            autoWidth: true,
            interval: 5000,
            autoplay: true,
            arrows: false,
            pagination: false,
            gap: 10,
          }}
          aria-label="React Splide Example"
        >
          {SliderData.map((item, i) => (
            <SplideSlide>
              <ImageCard img={item.img} title={item.title} text={item.text} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
}

export default ImageSlider;
