import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Footer from "./Components/Footer";
import data from "./data.json"; // Ensure this is correctly imported
import { Link } from "react-router-dom";

// Initialize AOS
AOS.init();

export default function Event() {
  const [searchTerm, setSearchTerm] = useState("");
  const [day, setDay] = useState("");
  const [cluster, setCluster] = useState("");
  const [eventType, setEventType] = useState("");

  // Filter logic
  const filteredEvents = data.filter((event) => {
    return (
      (searchTerm === "" ||
        event.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (day === "" || event.day === day) &&
      (cluster === "" || event.cluster === cluster) &&
      (eventType === "" || event.type === eventType)
    );
  });

  return (
    <div
      className="event-page"
      style={{
        background: "",
        
      }}
    >
      <p>hi</p>
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
        Events & Workshop
      </Typography>

      <Box mt={10}>
        {/* Search and filters */}
        <Box
          p={2}
          className="flex flex-wrap justify-center gap-4"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search by Event Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 lg:w-1/4 p-2 border border-gray-400 rounded-md"
          />
        </Box>

        <Box
          p={2}
          mt={3}
          className="flex flex-wrap justify-center gap-2"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          {/* Day Filter */}
          <select
            className="p-2 rounded-xl w-full md:w-auto"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          >
            <option value="">All Day</option>
            <option value="Day 1">Day 1</option>
            <option value="Day 2">Day 2</option>
          </select>

          {/* Cluster Filter */}
          <select
            className="p-2 rounded-xl w-full md:w-auto"
            value={cluster}
            onChange={(e) => setCluster(e.target.value)}
          >
            <option value="">All Cluster</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Bio">Bio</option>
            <option value="Electricals & Electronics">Electricals & Electronics</option>
            <option value="Civil & Mech">Civil & Mech</option>
            <option value="Management & Commerce">Management & Commerce</option>
            <option value="Science">Science</option>
            <option value="Humanities">Humanities</option>
            <option value="General">General</option>
          </select>
          <select
            className="p-2 rounded-xl w-full md:w-auto"
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
          >
            <option value="">All Events & Workshops</option>
            <option value="Technical Events">Technical Events</option>
            <option value="Non-Technical Events">Non-Technical Events</option>
            <option value="Paper & Project Presentation">Paper & Project Presentation</option>
            <option value="Culturals">Culturals</option>
            <option value="Workshop">Workshop</option>
          </select>
        </Box>

        {/* Display filtered events */}
        <div
          className="event-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-6"
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <div key={index} className="event-item">
                <div style={{background:"rgba(63, 62, 62, 1)"}} className="w-full max-w-sm rounded-lg shadow">
                  <Link to={`/event/${event.id}`}>
                    <img
                      className="p-1 rounded-t-lg"
                      src={event.img}
                      alt={event.name}
                    />
                  </Link>
                  <div className="px-5 pb-5">
                    <h5 className="text-xl mt-4 font-semibold tracking-tight text-gray-900 dark:text-white">
                      {event.name}
                    </h5>
                    <div className="flex gap-3 items-center mt-2.5 mb-5">
                      <div className="flex gap-1 items-center space-x-1">
                      <span className="text-xl font-bold text-gray-900 dark:text-white">
                        {event.day}
                      </span>
                        
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                        {event.type}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                     
                      <Link
                        to={`/event/${event.id}`}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white text-2xl font-bold font-sans">
              No events found
            </p>
          )}
        </div>
      </Box>
      <Footer />
    </div>
  );
}
