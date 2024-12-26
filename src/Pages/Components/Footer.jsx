import React from "react";
import "./Navbar.css";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import logo2 from "./Images/logo.png"
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <Fot />
    </div>
  );
}
const socialIcons = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2dc51e5a0a6acc8714992fb8e0fdc64f9e4bb57ee0e97b1f2fe54c6771be3e69?placeholderIfAbsent=true&apiKey=ded900a0c46e485a8db3c38d05f53533",
    alt: "Social media icon 1",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/655f01847f4f717e5708f19221f800cd99aac3887a35e6c7ba933553681034c3?placeholderIfAbsent=true&apiKey=ded900a0c46e485a8db3c38d05f53533",
    alt: "Social media icon 2",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/872fe1d64b9437d2150173407e5211fdac79783061df57c2ef4c7e9ec2a0fd54?placeholderIfAbsent=true&apiKey=ded900a0c46e485a8db3c38d05f53533",
    alt: "Social media icon 3",
  },
];
function Foot() {
  const links = ["Home", "Events", "Concert", "Contact Us", "Team"];

  return (
    <Box>
      <footer
        style={{ zIndex: 1 }}
        id="navbar"
        className="flex flex-wrap gap-10 items-start px-20 py-8 w-full  max-md:px-5 max-md:max-w-full"
      >
        <div className="grow shrink w-[235px]">
          <h2 className="text-3xl text-center text-white">HENOSIS '25</h2>
          <Box mt={4} className="justify-center flex gap-3">
            <PlaceIcon sx={{ color: "white", mt: 1 }} />
            <Typography mt={1} variant="body2" color="white">
              Dr NGP Institutions <br />
              Kalapatti Road <br />
              Coimbatore - 641 048 <br />
              Tamilnadu, India
            </Typography>
          </Box>
        </div>

        <div className="flex-auto max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[69%] max-md:ml-0 max-md:w-full">
              <Box>
                <Typography variant="h4" component="h3" color="white">
                  REACH OUT TO US!
                </Typography>
                <Typography variant="body2" color="white" mt={2}>
                  Feel free to reach out to us if any queries.
                </Typography>
                <Link
                  href="mailto:contact@henosis.org"
                  variant="h6"
                  sx={{ color: "white" }}
                >
                  contact@henosis.org
                </Link>
              </Box>
            </div>
            <div className="">
              <Grid item xs={12} md={4}>
                <Typography variant="h4" component="h4" color="white">
                  Follow Us
                </Typography>
                <Box mt={1} display="flex" gap={0}>
                  {socialIcons.map((icon, index) => (
                    <IconButton key={index}>
                      <Box
                        component="img"
                        src={icon.src}
                        alt={icon.alt}
                        sx={{ width: 30, height: 30 }}
                      />
                    </IconButton>
                  ))}
                </Box>
                <Box display="flex" mt={1} gap={2} alignItems="center">
                  <Typography color="white">Dr NGP ITECH</Typography>
                  <Box
                    component="img"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb2e2da40d4ee0ea4e789372c135f9b12fcd48c68bbc845b974b92b25b812d2b?placeholderIfAbsent=true&apiKey=ded900a0c46e485a8db3c38d05f53533"
                    alt="External link icon"
                    sx={{ width: 13 }}
                  />
                </Box>
              </Grid>
            </div>
          </div>
        </div>
        <Box mt={0}>
          <Typography variant="h4" component="h4" color="white">
            Links
          </Typography>
          {links.map((link, index) => (
            <Link
              key={index}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              sx={{ color: "white", display: "block", mt: 0 }}
            >
              {link}
            </Link>
          ))}
        </Box>
      </footer>
    </Box>
  );
}

function Fot() {
  return (
    <div style={{position:"absolute", zIndex:1, width:"100%"}}>
      <footer style={{ background: "rgba(30, 30, 30, 1)", backdropFilter:"blur(7px)" }} class="">
        <div class="mx-auto w-full p-4 py-6 lg:py-4">
          <div class="md:flex md:justify-between">
            <div class="mt-6 ml-11 md:mb-0">
            <Box component="img" src={logo2} p={1} sx={{width:"200px"}}></Box>
            </div>
            {/* Contact and Socials Section */}
            <div className="flex flex-col gap-5 md:flex-row max-md:items-center">
              <div className="flex flex-col w-full">
                <Box mt={{ sm: 2, xs: 6 }}>
                  <Typography
                    sx={{ fontWeight: 800 }}
                    className="font-bold"
                    variant="h5"
                    component="h3"
                    color="white"
                  >
                    REACH OUT TO US!
                  </Typography>
                  <Typography variant="body2" color="white" mt={1}>
                    Feel free to reach out to us if any queries.
                  </Typography>
                  <a
                    className="mt-6"
                    href="mailto:techsupport@kanam.drngpit.ac.in"
                    style={{ color: "white", fontSize: "20px" }}
                  >
                    techsupport@kanam.drngpit.ac.in
                  </a>
                </Box>
              </div>

              <Box
                mt={{ sm: 2, xs: 6 }}
                ml={3}
                className="flex flex-col items-center md:items-center"
              >
                
                <Box ml={0} mt={0} display="flex" gap={0}>
                  {socialIcons.map((icon, index) => (
                    <IconButton key={index}>
                      <Box
                        component="img"
                        src={icon.src}
                        alt={icon.alt}
                        sx={{ width: 30, height: 30 }}
                      />
                    </IconButton>
                  ))}
                </Box>
              </Box>
            </div>

            {/* Pages Links Section */}
            <div class="grid justify-center grid-cols-2 gap-8 sm:gap-6 md:grid-cols-3">
              <Box mt={{ sm: 2, xs: 6 }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 800 }}
                  component="h4"
                  color="white"
                >
                  Pages
                </Typography>
                <ul class="text-gray-400 dark:text-gray-400 font-medium">
                  <Link to="/">
                    <li class="mb-1">
                      <a class="hover:underline">Home</a>
                    </li>
                  </Link>
                  <Link to="/teams">
                    <li class="mb-1">
                      <a class="hover:underline">Teams</a>
                    </li>
                  </Link>
                  <Link to="/contact">
                    <li>
                      <a class="hover:underline">Contact Us</a>
                    </li>
                  </Link>
                </ul>
              </Box>
            </div>
          </div>

          {/* Bottom Section */}
          <hr class="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-5" />
          <div class="flex items-center justify-between">
            <div className="flex">
              <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2025{" "}
                
                . All Rights Reserved.
              </span>
              <div class="flex mt-4 sm:mt-0 sm:justify-center gap-4">
                {/* Social Icons */}
                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    class="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 8 19"
                  >
                    {/* SVG for Facebook */}
                    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135..." />
                  </svg>
                </a>
                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    class="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 21 16"
                  >
                    {/* SVG for Discord */}
                    <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3..." />
                  </svg>
                </a>
                {/* Add other social icons similarly */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
