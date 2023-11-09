import { Link } from "react-router-dom";
import "./Error.scss";

const Error = () => {
  return (
    <div className="box-erro">
      <p className="error"> Erro 404</p>
      <Link to={"/"} className="erro-link">
        Voltar a pagina princinpal
      </Link>
    </div>
  );
};

export default Error;
