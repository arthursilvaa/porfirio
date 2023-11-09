import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ capa, nome, marca, km, carroceria, preco, id }) => {
  return (
    <Link to={`perfil/${id}`} className="card">
      <img src={capa} alt="" />
      <div className="content">
        <h3>{nome}</h3>
        <p className="marca">{marca}</p>
        <div className="text">
          <p>
            <span>KM</span>
            {km}
          </p>
          <p>
            <span>Carroceria</span>
            {carroceria}
          </p>
        </div>
        <p className="preco">
          <span>R$:</span>
          {preco}
        </p>
      </div>
    </Link>
  );
};

export default Card;
