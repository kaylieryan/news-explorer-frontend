import { Routes, Route} from "react-router-dom";
import "./App.css";
import Main from "../Main/Main.jsx";
import About from "../About/About.jsx";
import Header from "../Header/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
