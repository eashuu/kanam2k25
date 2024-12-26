import { Box, Typography } from "@mui/material";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Footer from "./Components/Footer";
import map from "./map.png"
// ..
AOS.init();
export default function Contact() {
  return (
    <div>
      <Hero />
      <Footer/>
    </div>
  );
}

function Hero() {
  return (
    <Box height={{lg:"100vH", md:"100vh", sm:"130vh", xs:"130vh"}} className="relative w-full">
      <img
        className="absolute top-0 left-0 w-full h-full z-0 object-cover"
        src="https://images.unsplash.com/photo-1497911270199-1c552ee64aa4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D"
        alt=""
      />
      <Box
        className="absolute justify-center top-0 left-0 w-full h-full z-10 flex"
        style={{
          background:
            "linear-gradient(to bottom, rgba(20, 20, 22, 0.5) 0%, rgba(20, 20, 22, 0.7) 70%, rgba(20, 20, 22, 0.7) 100%)",
        }}
      >
        <Box p={{lg:4,md:3,sm:2,xs:1}} data-aos="fade-up" className="flex items-center">
          <Box
            sx={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(7px)",
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-2xl p-6"
          >
            <div className="md:mr-4">
              <img
                src={map}
                alt=""
                className="rounded-xl w-full h-auto"
              />
              <Box
                my={2}
                p={3}
                sx={{
                  background: "rgba(208, 208, 208, 0.4)",
                  borderRadius: "15px",
                }}
              >
                <p className="text-xl md:text-3xl text-white">General Enquiry</p>
                <hr className="mt-2" />
                <ul className="mt-4 space-y-2">
                  <li>
                    <p className="text-white text-sm md:text-base">
                      Abinash V: <span>+91 59456567</span>
                    </p>
                  </li>
                  <li>
                    <p className="text-white text-sm md:text-base">
                      Vikash S: <span>+91 59456567</span>
                    </p>
                  </li>
                </ul>
              </Box>
            </div>

            <div className="mt-6">
              <p className="font-sans font-bold text-2xl md:text-4xl text-center text-white">
                Contact Us
              </p>
              <form className="mt-6 mx-auto">
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="name@gmail.com"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="number"
                    id="phone"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Phone number"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="query"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Queries
                  </label>
                  <textarea
                    id="query"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="text-white text-lg w-full bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg px-5 py-2.5 text-center"
                >
                  Submit
                </button>
              </form>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}