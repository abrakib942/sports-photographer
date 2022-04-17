import Header from "./components/Header/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Style.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import AllServices from "./components/allServices/AllServices";
import Blog from "./components/blogs/Blog";
import About from "./components/about/About";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/services" element={<AllServices />}></Route>
        <Route path="/blogs" element={<Blog />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
