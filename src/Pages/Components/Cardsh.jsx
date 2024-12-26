import React, { useState } from "react";
import { Box, Typography, Collapse } from "@mui/material";

export default function Cardsh({src,title,description}) {
  const [showText, setShowText] = useState(false);
  const [flag, setflag] = useState(false);
  const handleCardClick = () => {
    setShowText(!showText); // Toggle the showText state
    setflag(!flag);
  };

  return (
    <Box>
      <Box
        className="relative cursor-pointer"
        sx={{
          width: { xs: '100%', sm: '350px' }, // Responsive width for different screen sizes
          height: { xs: '450px', sm: '560px' }, // Adjust height based on screen size
          borderRadius: '50px',
          overflow: 'hidden',
          transition: 'transform 0.3s ease', // Smooth scaling effect on hover
          '&:hover': { opacity:"1" },
        }}
        onClick={handleCardClick} // Toggle animation on click
      >
        {/* Image Box */}
        <Box
          component="img"
          src={src}
          sx={{
            height: '100%',
            width: '100%',
            borderRadius: '50px',
            objectFit: 'cover',
          }}
        />

        {/* Overlay Box */}
        <Box
          className="absolute top-0 left-0 w-full h-full z-10 flex items-end p-6"
          sx={{
            background:
              'linear-gradient(to bottom, rgba(20, 20, 22, 0.0) 0%, rgba(20, 20, 22, 0.5) 60%, rgba(20, 20, 22, 0.7) 80%)',
            borderRadius: '50px',
            backdropFilter: flag ? "blur(5px)" : "blur(0px)"
          }}
        >
          <Box>
            <Typography sx={{ color: 'white', fontSize:"33px" }}>
              {title}
            </Typography>

            {/* Animated Collapse with slide effect */}
            <Collapse in={showText} timeout={500}> {/* Timeout for smooth animation */}
              <Typography mt={2} variant="body2" sx={{ color: 'white' }}>
                {description}
              </Typography>
            </Collapse>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
