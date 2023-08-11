import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSliderDataStart } from "../Redux/actions";

function Aboute() {
  const dispatch = useDispatch();
  const { CurrentHappeningData, Sliderdata, loading } = useSelector(
    (state) => state.data
  );

  useEffect(() => {
    dispatch(getSliderDataStart());
  }, []);
  return (
    <div className=" container">
      <div style={{ height: "200vh", marginTop: "10vh" }}>sdafdsf</div>
    </div>
  );
}

export default Aboute;
