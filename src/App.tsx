import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import Gallery from "./components/Gallery";
import Article from "./components/Article";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainNavbar />
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/article/:articleId" element={<Article />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;