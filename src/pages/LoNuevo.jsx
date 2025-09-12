import React, { useState } from "react";
import productos from "../data/productos.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./LoNuevo.css";

const LoNuevo = () => {
  const [filtro, setFiltro] = useState("todo");

  const catalogoFiltrado = productos.filter((p) => {
    if (filtro === "todo") return true;
    if (filtro === "hombre") return p.category.startsWith("hombre");
    if (filtro === "mujer") return p.category.startsWith("mujer");
  });
  return (
    <>
      <Header />
      <div className="container-nuevo">
        <section className="container-hero">
          <section className="hero">
            <div className="video-container">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="background-video"
              >
                <source
                  src="/catalogoLoNuevo/videoLoNuevo.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="hero-content">
                <h1 className="hero-title">
                  NUEVA <br /> COLECCIÓN
                </h1>
              </div>
            </div>
          </section>
        </section>
        <div className="filters">
          <div className="filter-buttons">
            <button className="filter-btn" onClick={() => setFiltro("todo")}>
              VER TODO
            </button>
            <button className="filter-btn" onClick={() => setFiltro("hombre")}>
              HOMBRE
            </button>
            <button className="filter-btn" onClick={() => setFiltro("mujer")}>
              MUJER
            </button>
          </div>
        </div>
        <div className="catalogo">
          <div className="products-grid">
            {catalogoFiltrado.map((product) => (
              <div
                key={product.id}
                className={` product-card ${product.category}`}
              >
                <div className="producth-badge">NUEVO</div>
                <div
                  id={`carousel-${product.id}`}
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {product.images.map((img, i) => (
                      <div
                        key={i}
                        className={`carousel-item ${i === 0 ? "active" : ""}`}
                      >
                        <img
                          src={img}
                          className="d-block w-100"
                          alt={product.title}
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target={`#carousel-${product.id}`}
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon"></span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target={`#carousel-${product.id}`}
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon"></span>
                  </button>
                </div>

                <div className="product-info mt-2">
                  <h5>{product.title}</h5>
                  <p>{product.desc}</p>
                  <div className="product-price">{product.price}</div>
                  <a href={product.link} className="btn btn-dark mt-2 w-100">
                    AGREGAR A LA BOLSA
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoNuevo;
