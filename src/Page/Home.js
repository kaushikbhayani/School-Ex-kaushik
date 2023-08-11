import React, { useRef } from "react";
import Slider from "../Component/carousel/Slider";
import DrawerAppBar from "../Layoute/HeaderComponent/DrawerAppBar";
import { motion, useScroll, useTransform } from "framer-motion";

import {
  FaRegHandPaper,
  FaGripfire,
  FaSpinner,
  FaRegBellSlash,
  FaQuestion,
  FaStar,
} from "react-icons/fa";
import "./PageStyle.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ImageSlider from "../Component/imageCarousel/ImageSlider";
import { Button, CardMedia } from "@mui/material";
import ReactPlayer from "react-player";
import TextSlider from "../Component/textCarousel/TextSlider";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
const GridData = [
  {
    id: 1,
    h3: "5 ELEMENTS OF PRAYER",
    p: "As the title goes, this innovative homework is different from the regular academic homework and is assigned to make studentsaware of the social responsibilities and knowledge apart frombooks as well",
    icon: <FaRegHandPaper />,
  },
  {
    id: 2,
    h3: "5 ELEMENTS OF PRAYER",
    p: "As the title goes, this innovative homework is different from the regular academic homework and is assigned to make studentsaware of the social responsibilities and knowledge apart frombooks as well",
    icon: <FaGripfire />,
  },
  {
    id: 3,
    h3: "5 ELEMENTS OF PRAYER",
    p: "As the title goes, this innovative homework is different from the regular academic homework and is assigned to make studentsaware of the social responsibilities and knowledge apart frombooks as well",
    icon: <FaSpinner />,
  },
  {
    id: 4,
    h3: "5 ELEMENTS OF PRAYER",
    p: "As the title goes, this innovative homework is different from the regular academic homework and is assigned to make studentsaware of the social responsibilities and knowledge apart frombooks as well",
    icon: <FaRegBellSlash />,
  },
];

const missionVision = [
  {
    id: 1,
    pBig: "  મેં એક બાળક ને પૂછ્યું કે તને કેવી શાળા ગમે ?????",
    p: "   તેણે કહ્યું .......બંધ .......ને મેં સ્કૂલ બનાવી.",
    bgc: "##386fa4",
    icon: <FaQuestion />,
  },
  {
    id: 2,
    pBig: "  મેં એક બાળક ને પૂછ્યું કે તને કેવી શાળા ગમે ?????",
    p: "   તેણે કહ્યું .......બંધ .......ને મેં સ્કૂલ બનાવી.",
    bgc: "##386fa4",
    icon: <FaQuestion />,
  },
  {
    id: 3,
    pBig: "  મેં એક બાળક ને પૂછ્યું કે તને કેવી શાળા ગમે ?????",
    p: "   તેણે કહ્યું .......બંધ .......ને મેં સ્કૂલ બનાવી.",
    bgc: "##386fa4",
    icon: <FaQuestion />,
  },
];

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  backgroundColor: "#386fa4",
  boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.27)",
  borderRadius: "1.5rem",
  margin: ".5rem",
  color: "white",
  height: "12rem",
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
}));

function Home() {
  return (
    <motion.div className="container-fluid">
      <DrawerAppBar />

      <section style={{ marginTop: "70px" }}>
        <Slider />
      </section>
      <section>
        <div className="row grid-sytyle">
          {GridData.map((item, index) => (
            <div className="col-md-3 ">
              <div className="grid-col-style">
                <i style={{ fontSize: "10vh", color: "#133c55" }}>
                  <motion.div
                    style={{ paddingTop: "10px" }}
                    initial={{ opacity: 0.6 }}
                    whileHover={{
                      scale: 1.2,

                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    whileInView={{ opacity: 1 }}
                  >
                    {item.icon}
                  </motion.div>
                </i>

                <h3 className="mt-5" style={{ fontSize: "21px" }}>
                  {item.h3}
                </h3>
                <p style={{ padding: "8px 10px 20px 8px", fontSize: "14px" }}>
                  {item.p}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="row grid-sytyle">
          <div
            style={{
              color: "orange",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5rem",
            }}
          >
            <p>
              <FaStar />
            </p>
            <p>
              <FaStar />
            </p>
            <p>
              <FaStar />
            </p>
          </div>

          <h1 className="mossion-style">Mission and Vision</h1>

          <motion.div
            className="col-md-6"
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            // viewport={{ once: true }}
          >
            <div className="img-div-sairam">
              <img src={require("../images/Sairam-dave-2.jpg")} />
            </div>
          </motion.div>

          <motion.div
            className="col-md-6"
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            // viewport={{ once: true }}
          >
            <div className="row">
              <div className="col-sm-12 mt-5">
                <Box sx={{ flexGrow: 1 }}>
                  {missionVision.map((item, index) => (
                    <Grid container spacing={2}>
                      <Grid item xs={4} md={4}>
                        <Item>
                          <div className=" avtar">{item.icon}</div>
                        </Item>
                      </Grid>
                      <Grid item xs={8} md={8}>
                        <Item>
                          <div>
                            <p style={{ fontSize: "1.5vw" }}>{item.pBig}</p>

                            <p style={{ fontSize: "1vw" }}>{item.p}</p>
                          </div>
                        </Item>
                      </Grid>
                    </Grid>
                  ))}
                </Box>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section>
        <div className="row grid-sytyle">
          <div
            style={{
              color: "orange",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5rem",
            }}
          >
            <p>
              <FaStar />
            </p>
            <p>
              <FaStar />
            </p>
            <p>
              <FaStar />
            </p>
          </div>

          <h1 className="mossion-style">Current Happenings </h1>
          <p style={{ marginTop: "-30px" }}>ALL ABOUT NACHIKETA UPDATES</p>
        </div>
        <ImageSlider />
      </section>
      <section>
        <div
          className="my-4"
          style={{
            position: "relative",
            height: "29rem",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <ReactPlayer
            width="100%"
            height="100%"
            url="https://youtu.be/ECrIwfBiJcI"
            playing
          />
          <div class="overlay">
            <motion.div whileHover={{ color: "#fff" }}>
              <PlayCircleOutlineIcon sx={{ fontSize: "15rem" }} />
            </motion.div>
          </div>
        </div>
      </section>
      <section>
        <div className="container my-4">
          <div className="row ">
            <div className="col-sm-10 cdb">
              <h3
                style={{
                  fontWeight: "900px",
                  fontSize: "22px",
                }}
              >
                WE NURTURE YOUR KIDS
              </h3>

              <p>
                Education, the term has been derived from the Greek word 'educo'
                which means 'bring out'. We, at Nachiketa Schooling System
                believe and breathe this meaning. Education definitely does not
                mean to stuff information in creative souls of children; after
                all, child is the father of the man! A teacher's duty is to
                nurture and bring out the inner talent and strength of children.
                Let's stop our rising generation from suffocating under the
                heavy burden of dry information; let's celebrate education.
              </p>
            </div>
            <div
              className="col-sm-2"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button variant="contained">Visit Nachiketa</Button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="my-4">
          <TextSlider />
        </div>
      </section>
    </motion.div>
  );
}

export default Home;
