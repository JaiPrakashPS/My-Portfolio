import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Achievements from "./Components/Achievements";
import Certifications from "./Components/Certifications";
import ContactMe from "./Components/ContactMe";

function App() {
  return (
    <>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="projects"><Projects /></div>
      <div id="skills"><Skills /></div>
      <div id="education"><Education /></div>
      <div id="achievements"><Achievements /></div>
      <div id="certifications"><Certifications /></div>
      <div id="contact"><ContactMe /></div>
    </>
  );
}

export default App;
