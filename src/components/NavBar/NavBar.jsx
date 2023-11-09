import "./NavBar.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid navBar-style">
          <Link className="navbar-brand box-logo" to={"/"}>
            <img src={logo} className="logo" />
          </Link>
          <button
            className="navbar-toggler text-light bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/"}
                id="text-hover"
              >
                Home
              </Link>
              <Link className="nav-link " to={"/about"} id="text-hover">
                Sobre
              </Link>
              <Link className="nav-link " to={"/stock"} id="text-hover">
                Estoque
              </Link>
              <Link className="nav-link " to={"/contact"} id="text-hover">
                Contato
              </Link>
              <Link className="nav-link " to={"/links"} id="text-hover">
                Links Importantes
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
