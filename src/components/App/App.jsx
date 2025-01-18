import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main.jsx";
import About from "../About/About.jsx";

function App() {
  return (
    <>
      <nav>
        <Link to="/" className="logo">
          Logo
        </Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
