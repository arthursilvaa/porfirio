import "./Perfil.scss";
import { db } from "../../db/db";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Carrosel from "../../components/Carrosel/Carrosel.jsx";

const Perfil = () => {
  const { id } = useParams();
  const [carro, setCarro] = useState();
  useEffect(() => {
    const data = db.find((item) => item.id == id);
    console.log(data);
    setCarro(data);
  }, []);
  return (
    <div className="perfil">
      {carro && (
        <div className="perfil-box">
          <h3>{carro.nome}</h3>
          <p>R$: {carro.preco}</p>
        </div>
      )}
      {carro && (
        <div className="perfil-content">
          <Carrosel capa={carro.capa} fotos={carro.fotos} />
          <div className="perfil-expecicacao">
            <p>
              <span>Ano/mod: </span>
              {carro.ano}/ {carro.modelo}
            </p>
            <p>
              <span>Tração: </span>
              {carro.tracao}
            </p>
            <p>
              <span>KM: </span>
              {carro.km}
            </p>
            <p>
              <span>Carroceria: </span>
              {carro.carroceria}
            </p>
            <p>
              <span>Cor: </span>
              {carro.cor}
            </p>
          </div>
        </div>
      )}
      {carro && (
        <div className="perfil-descricao">
          <h4>Descrição do produto!</h4>
          <p>{carro.descricao}</p>
        </div>
      )}
    </div>
  );
};

export default Perfil;
