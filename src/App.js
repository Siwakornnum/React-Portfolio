import React from "react";
import Navbar  from "./components/Navbar";

import "./App.css";

// Contents
import Home from "./contents/Home";
import About from "./contents/About";
import Education from "./contents/Education";
import Skills from "./contents/Skills";
import Contact from "./contents/Contact";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/education" element={<Education />}></Route>
            <Route exact path="/skills" element={<Skills />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
          </Routes>
            

      </div>
    </Router>
  );
}

export default App;
