import React from "react";
import { BrowserRouter,Routes ,Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import StarWars from "./pages/StarWars";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about_me" element={<AboutMe />} />
        <Route path="/star_wars" element={<StarWars />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
