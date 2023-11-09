import "./Home.scss";
import banner from "../../assets/img/banner2.jpeg";
import Card from "../../components/Card/Card";
import { db } from "../../db/db";
import { useEffect, useState } from "react";

const Home = () => {
  const [carros, setCarros] = useState([]);
  useEffect(() => {
    const data = db.filter((item) => item.destaque === true);
    setCarros(data);
  }, []);
  return (
    <div className="home">
      <div className="home-banner container-fluid w-100">
        <img src={banner} alt="" className=" img-banner" />
      </div>
      <h3 className="home-title">Destaques</h3>
      <div className="home-destaque">
        {carros &&
          carros.map((item) => (
            <Card
              id={item.id}
              nome={item.nome}
              km={item.km}
              carroceria={item.carroceria}
              capa={item.capa}
              marca={item.marca}
              preco={item.preco}
              key={item.id}
              fotos={item.fotos}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
