// import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/videos/:videoId" element={<Video></Video>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
