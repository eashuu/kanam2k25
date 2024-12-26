import React, { useEffect, useRef } from "react";
import anime from "animejs";
import { Box, Typography } from "@mui/material";
import "./Load.css";
import AOS from "aos";
import "aos/dist/aos.css"; 
import Typed from 'typed.js';

const AnimatedSVG = () => {
  const el = useRef(null);  // Ref for Typed.js first text
   // Ref for Typed.js second text
    // Ref for SVG path

  

  useEffect(() => {
    // First typed text for the event name
    const typed = new Typed(el.current, {
      strings: ["HENOSIS '25"],
      typeSpeed: 215,
    });

    // Second typed text for the event description
    

    return () => {
      // Destroy Typed instances during cleanup to stop animation
      typed.destroy();
      
    };
  }, []);

  return (
    <Box
      className="flex justify-center items-center"
      sx={{
        height: {
          xs: "100svh", // Auto height for extra small devices (mobile)
          sm: "100vh", // Full viewport height for small devices and up
        },
        width: "100%",
        background: "rgba(20, 20, 22, 1)",
      }}
    >
      <Box>
        {/* First Animated Text (Event Name) */}
        <Typography
          className="font-sans font-extrabold text-center"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "3rem", md: "3rem", lg: "7rem" },
          }}
          variant="h1"
          color="white"
          data-aos="fade-up"
          data-aos-duration="1000"
          id="font"
        >
          <span ref={el} />
        </Typography>

        {/* Second Animated Text (Event Description) */}
        
        {/* Example SVG (replace with your SVG) */}
        
      </Box>
    </Box>
  );
};

export default AnimatedSVG;
