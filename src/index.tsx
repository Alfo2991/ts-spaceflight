import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Article from "./components/Article";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article/:articleId" element={<Article />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);