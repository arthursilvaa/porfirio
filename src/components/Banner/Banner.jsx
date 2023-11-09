import "./Banner.scss";
import {
  FaMapMarkedAlt,
  FaWhatsapp,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

const Banner = () => {
  return (
    <div className="banner">
      <div className="address">
        <a
          href="https://maps.app.goo.gl/ap8TxCFC79K6mYiX9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMapMarkedAlt />
          <p>Rua Serra Negra, 58, Mooca, São Paulo SP, 03332-080, Brasil</p>
        </a>
      </div>
      <div className="phones">
        <a
          href="https://wa.me/message/VK6HGO6NFIDPH1"
          className="whatsapp"
          target="_blank"
        >
          <FaWhatsapp color="#008000" />
          <p>(11) 98642-0834</p>
        </a>

        <a target="_blank" href="tel: 11 2605-0052">
          <FaPhone color="#00ff" />
          <p>(11) 2605-0052</p>
        </a>
      </div>
      <div className="social">
        <a
          className="link-social"
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100009741039869&mibextid=V3Yony"
        >
          <FaFacebook />
        </a>
        <a
          className="link-social"
          target="_blank"
          href="https://www.instagram.com/porfirioo2100/"
        >
          <FaInstagram />
        </a>
        <a
          className="link-social"
          target="_blank"
          href="https://www.tiktok.com/@artthursilvva?_t=8gBiDFm6jbh&_r=1"
        >
          <FaTiktok />
        </a>
      </div>
    </div>
  );
};

export default Banner;
