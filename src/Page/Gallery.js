import React from "react";
import { motion, spring } from "framer-motion";
import HGallery from "../Component/FilterGallery/HGallery";
function Gallery() {
  return (
    <div className="container" style={{ marginTop: "10vh" }}>
      <HGallery />
    </div>
  );
}

export default Gallery;
