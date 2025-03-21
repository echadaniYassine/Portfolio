import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Home from "./components/hero";
import About from "./components/about";
import Expertise from "./components/expertise";
import Projects from "./components/projects";

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
              <Expertise />
              <Projects />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
