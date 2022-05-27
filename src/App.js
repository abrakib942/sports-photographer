import Header from "./components/Header/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Style.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import AllServices from "./components/allServices/AllServices";

import Login from "./components/login/Login";
import Register from "./components/register/Register";
import NotFound from "./components/notFound/NotFound";
import RequiredAuth from "./components/requiredAuth/RequiredAuth";
import Checkout from "./components/checkout/Checkout";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/services" element={<AllServices />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/checkout"
          element={
            <RequiredAuth>
              <Checkout />
            </RequiredAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
