import React, { useState } from "react";
import productos from "../data/productos.json";
import "./LoNuevo.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CatalogoLoNuevo = () => {
  const [filtro, setFiltro] = useState("todo");

  const catalogoLoNuevo = productos.filter((p) => {
    if (filtro === "todo") return true;
    return p.category === filtro;
  });

  return (
    <>
      <Header />

      <section className="hero">
        <div className="video-container">
          <video autoPlay muted loop playsInline className="background-video">
            <source src="/catalogoLoNuevo/videoLoNuevo.mp4" type="video/mp4" />
          </video>
          <div className="hero-content">
            <h1 className="hero-title">
              NUEVA <br /> COLECCIÓN
            </h1>
          </div>
        </div>
      </section>

      <div className="filter-buttons text-center my-4">
        <button className="filter-btn" onClick={() => setFiltro("todo")}>VER TODO</button>
        <button className="filter-btn" onClick={() => setFiltro("men")}>HOMBRE</button>
        <button className="filter-btn" onClick={() => setFiltro("women")}>MUJER</button>
      </div>

      <section className="catalogo">
        <div className="container my-5">
          <div className="row">
            {catalogoLoNuevo.map((product) => (
              <div key={product.id} className={`col-md-4 mb-4 product-card ${product.category}`}>
                <div id={`carousel-${product.id}`} className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    {product.images.map((img, i) => (
                      <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                        <img src={img} className="d-block w-100" alt={product.title} />
                      </div>
                    ))}
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${product.id}`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${product.id}`} data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                  </button>
                </div>

                <div className="product-info mt-2">
                  <h5>{product.title}</h5>
                  <p>{product.desc}</p>
                  <div className="product-price">{product.price}</div>
                  <a href={product.link} className="btn btn-dark mt-2 w-100">AGREGAR A LA BOLSA</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CatalogoLoNuevo;
