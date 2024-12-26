import React from "react";
import { useParams } from "react-router-dom";
import data from "./data.json"; // Ensure the path is correct
import { Box } from "@mui/material";
import Footer from "./Components/Footer";
export default function EventsList() {
  const { id } = useParams(); // Get the event ID from the URL
  const event = data.find((event) => event.id === parseInt(id)); // Find the event by ID

  if (!event) {
    return <p>Event not found</p>; // Handle case where event is not found
  }

  return (
    <div
      style={{
        background: "rgba(23, 23, 23, 1)",
      }}
      className=""
    >
      <p>hi</p>
      <Box mt={4} p={{ lg: 4, md: 3, sm: 2, xs: 2 }} data-aos="fade-up" className="flex items-center">
        <Box
          sx={{
            background: "rgba(63, 62, 62, 0.8)",
            backdropFilter: "blur(7px)",
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-2xl p-6"
        >
          <div className="md:mr-4 flex justify-center items-center h-full">
            <img
              src={event.img}
              alt={event.name}
              className="rounded-xl object-cover"
              style={{ height: "90%", maxHeight: "90%", width: "auto" }}
            />
          </div>

          <div className="flex flex-col mt-0 md:mt-12">
            <p className="font-sans font-bold text-2xl md:text-4xl text-center text-white">
              {event.name}
            </p>
            <hr className="my-7" />
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-4">
              <p style={{ flexGrow: 1 }} className="text-white">
                <strong>Hosted by : </strong>{event.hosted}
              </p>

            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-2">
              <p style={{ flexGrow: 1 }} className="text-white">
                <strong>Date & Time : </strong>{event.date}
              </p>

            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-2">
              <p style={{ flexGrow: 1 }} className="text-white">
                <strong> Venue: </strong><span>{event.venue}</span>
              </p>

            </div>
            <Box mt={6}>
              <p className="text-2xl text-white font-sans mb-4 font-bold">
                Description
              </p>
              <div className="w-full" style={{ height: "210px", overflowY: "scroll" }}>
                <p className="text-white font-sans text-justify">
                  {event.description}
                </p>
              </div>
            </Box>
            <Box
              mt={3}
              p={{ lg: 3, md: 2, sm: 2, xs: 2 }}
              sx={{
                background: "rgba(208, 208, 208, 0.4)",
                borderRadius: "15px",
              }}
            >
              <div className="flex justify-between w-full">
                <div className="w-full">
                  <ul className="">
                    <li className="mt-0">
                      <ul>
                        <li>
                          <p className="text-white text-sm md:text-base">
                            <strong className="">Speaker : </strong> {event.speaker}
                          </p>
                        </li>
                        <li className="mt-2">
                          <div className="w-full">
                            <p className="text-white text-sm md:text-base">
                              <strong>Speaker Detail :  </strong>  {event.speaker_detail}
                            </p>
                          </div>
                        </li>
                        <li className="w-full mt-2">
                          <p className="text-white text-sm md:text-base w-full">
                            <strong>Profile:</strong>{" "}
                            {event.speaker_profile ? (
                              <a
                                className="text-blue-900 underline break-words"
                                target="_blank"
                                rel="noopener noreferrer"
                                href={event.speaker_profile}
                              >
                                {event.speaker_profile}
                              </a>
                            ) : (
                              "Not Available"
                            )}
                          </p>
                        </li>


                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

            </Box>
            <Box
              my={2}
              p={{ lg: 3, md: 2, sm: 2, xs: 2 }}
              sx={{
                background: "rgba(208, 208, 208, 0.4)",
                borderRadius: "15px",
              }}
            >
              <div className="flex justify-between">
                <div>
                  <ul className="">

                    <li className="mt-0">
                      <ul>
                        <p className="text-white text-sm md:text-base">
                          <strong>Student Coordinators </strong>
                        </p>
                        <li>
                          <p className="text-white text-sm md:text-base">
                            {event.coordinator1}
                          </p>
                        </li>
                        <li>
                          <p className="text-white text-sm md:text-base">
                            {event.coordinator2}
                          </p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

            </Box>

          </div>
        </Box>
      </Box>
      <Footer />
    </div>
  );
}
