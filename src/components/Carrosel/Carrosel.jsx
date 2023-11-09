import "./Carrosel.scss";

const Carrosel = ({ fotos, capa }) => {
  return (
    <div id="carouselExample" className="carousel slide  tamanho-slider">
      <div className="carousel-inner ">
        <div className="carousel-item active">
          <img src={capa} className="d-block w-100 img-slider" />
        </div>
        {fotos.map((item) => (
          <div className="carousel-item">
            <img src={item.url} className="d-block w-100 img-slider" />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carrosel;
