import "./Estoque.scss";
import { db } from "../../db/db";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";

const Estoque = () => {
  const [filtro, setfiltro] = useState(db);
  const [marca, setMarca] = useState("all");
  const [ordem, setOrdem] = useState("menor");
  useEffect(() => {
    if (marca !== "all") {
      const data = db.filter((item) => item.marca === marca);
      setfiltro(data);
    } else {
      setfiltro(db);
    }
    if (ordem === "menor") {
      filtro.reverse();
    }
    if (ordem === "maior") {
      filtro.sort();
    }
  }, [marca, ordem]);

  return (
    <div className="estoque">
      <div className="filtros">
        <select onChange={(ev) => setMarca(ev.target.value)}>
          <option value="all">Todos</option>
          {db &&
            db.map((item) => (
              <option value={item.marca} key={item.id}>
                {item.marca}
              </option>
            ))}
        </select>

        <select onChange={(ev) => setOrdem(ev.target.value)}>
          <option value="maior">Maior Preço</option>
          <option value="menor">Menor Preço</option>
        </select>
      </div>
      <div className="catalogo-card">
        {filtro &&
          filtro.map((item) => (
            <Card
              key={item.id}
              capa={item.capa}
              carroceria={item.carroceria}
              id={item.id}
              km={item.km}
              marca={item.marca}
              nome={item.nome}
              preco={item.preco}
            />
          ))}
      </div>
    </div>
  );
};

export default Estoque;
