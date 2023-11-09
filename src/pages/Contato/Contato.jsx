import "./Contato.scss";
import { FaWhatsapp, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contato = () => {
  return (
    <div className="contato">
      <h2>Fale Conosco!</h2>
      <div className="contato-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14629.82219382036!2d-46.57780241701723!3d-23.55207699771012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5ebea1687f03%3A0xc685a85d18563041!2sR.%20Serra%20Negra%2C%2058%20-%20Cidade%20M%C3%A3e%20do%20C%C3%A9u%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003332-080!5e0!3m2!1spt-BR!2sbr!4v1696277797876!5m2!1spt-BR!2sbr"
          width="700"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contato-links">
        <div className="contato-phone">
          <h3>Telefones</h3>
          <a href="https://wa.me/message/OGIV5L77E2BJP1" target="_blank">
            <FaWhatsapp color="#008800" />
            (11) 98642-0834
          </a>
          <a target="_blank" href="tel: 11 9 8642-0834">
            <FaPhone color="#00ff" />
            <p>(11) 98642-0834</p>
          </a>
        </div>
        <div className="contato-adrress">
          <a href="https://maps.app.goo.gl/ap8TxCFC79K6mYiX9" target="_blank">
            <FaMapMarkerAlt />
            Rua Serra Negra, 58, Mooca, São Paulo SP, 03332-080, Brasil
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contato;
