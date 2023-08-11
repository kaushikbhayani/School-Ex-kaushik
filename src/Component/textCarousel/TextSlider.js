import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import TextComponent from "./TextComponent";

const TextSliderData = {};

function TextSlider() {
  return (
    <Splide
      options={{
        type: "loop",
        arrows: false,
        pagination: false,
        interval: 1000,
        autoplay: true,
      }}
      aria-label="React Splide Example"
    >
      <SplideSlide>
        <TextComponent />
      </SplideSlide>
    </Splide>
  );
}

export default TextSlider;
