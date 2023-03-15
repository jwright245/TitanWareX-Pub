import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Support,
  Login,
  WebIDE,
  Lib,
  LibDir,
  Script,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/support" element={<Support />} />
      <Route path="/webide" element={<WebIDE />} />
      <Route path="/login" element={<Login />}></Route>
      <Route path="/lib" element={<Lib />}>
        <Route path="" element={<LibDir />} />
        <Route path=":postSlug" element={<Script />} />
      </Route>
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);
