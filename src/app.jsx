import "./GlobalStyle.scss";
import Banner from "./components/Banner/Banner";
import NavBar from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

export function App() {
  return (
    <div className="main">
      <Banner />
      <NavBar />
      <Outlet />
      <a href="https://wa.me/message/OGIV5L77E2BJP1">
        <FaWhatsapp className="whats-link" />
      </a>
    </div>
  );
}
