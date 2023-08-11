import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { getSliderDataStart } from "../../Redux/actions";
import Loader from "../../Component/LoaderComponent/Loader";
const Slider = () => {
  const dispatch = useDispatch();
  const { Sliderdata, loading } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getSliderDataStart());
  }, []);

  return (
    <>
      <Carousel
        indicators={false}
        style={{
          borderRadius: "30px",
          overflow: "hidden",
        }}
      >
        {Sliderdata.map((item, i) => {
          return (
            <Carousel.Item interval={1000} key={i}>
              <img
                style={{ width: "100vw", height: "85vh" }}
                src={item.imagePath}
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <Loader lodding={loading} />
    </>
  );
};

export default Slider;
