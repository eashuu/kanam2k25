import React from "react";
import Navb from "./Pages/Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import Concert from "./Pages/Concert";
import Event from "./Pages/Event";
import EventsList from "./Pages/EventDetail";
import Glogin from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Members from "./Pages/Members";
import Home3 from "./Pages/Home";

export default function App() {
  return (
    <div style={{ background: "rgba(20, 20, 22, 1)" }}>
      <BrowserRouter>
        <Navb />
        <Routes>
          <Route index element={<Home3 />} />
          <Route path="/concert" element={<Concert />} />
          <Route path="/events" element={<Event />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/event/:id" element={<EventsList />} />
          <Route path="/login" element={<Glogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/teams" element={<Members />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}
