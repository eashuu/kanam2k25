import { Box, Typography } from "@mui/material";
import React from "react";
import bgv from "../Pages/Components/Images/music.mp4";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Cardsh from "./Components/Cardsh";
import Footer from "./Components/Footer";
import inr from "../Pages/Components/Images/inr.png"
import sri from "../Pages/Components/Images/sri.png"
import sam from "../Pages/Components/Images/sam.png"
import kumu from "../Pages/Components/Images/kumu.png"
import shi from "../Pages/Components/Images/Shivali.png"
import ConCard from "./Components/ConCard";
// ..
AOS.init();
export default function Concert() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Background video */}
      <Box
        sx={{
          position: "fixed", // Keep the video fixed
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <video
          src={bgv}
          loop={true}
          muted={true}
          autoPlay={true}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Make the video cover the whole background
          }}
        ></video>
      </Box>

      {/* Foreground content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1, // Ensure the content is above the video
          padding: "20px",
          color: "white",
        }}
      >
        <Typography
          mt={10}
          className="text-center"
          variant="h2"
          sx={{
            color: "white",
            fontWeight: 800,
            fontSize: { xs: "2rem", md: "3rem", lg: "4rem" }, // Responsive font size
          }}
          data-aos="fade-up"
        >
          Concert Night
        </Typography>

        {/* Scrollable content */}
        <div className="p-6 justify-center">
          <Box
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5" // Responsive grid layout
            sx={{ marginTop: "50px" }}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <ConCard
            img={inr}
            />
            <ConCard img={sam}/>
            <ConCard img={shi}/>
            <ConCard img={kumu}/>
            <ConCard img={sri}/>

          </Box>
        </div>
      </Box>
    </div>
  );
}

