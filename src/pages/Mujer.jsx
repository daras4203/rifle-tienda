import React, { useState } from "react";
import productos from "../data/productos.json";
import "./Mujer.css";
import Header from "../components/Header";
import Footer from "../components/Footer";


const CatalogoMujer = () => {
    const [filtro, setFiltro] = useState("todo");
     
const catalogoMujer = productos.filter((p) => {
    if (!p.category.startsWith("mujer-")) return false; 
    if (filtro === "todo") return true; 
    return p.category === `mujer-${filtro}`; 
  });
  return (
    <>
      <Header />
      <div className="container-nuevo">
  <section className="container-hero">
    <section className="hero">
      <div className="video-container">
        <video autoPlay muted loop playsInline className="background-video">
          <source src="/catalogoMujer/video.mp4" type="video/mp4" />
        </video>
        <div className="hero-content">
          <h1 className="hero-title">
            ROPA <br /> MUJER
          </h1>
        </div>
      </div>
    </section>

    <div className="filter-buttons text-center my-4">
      <button className="filter-btn" onClick={() => setFiltro("todo")}>
        VER TODO
      </button>
      <button className="filter-btn" onClick={() => setFiltro("jeans")}>
        JEANS
      </button>
      <button className="filter-btn" onClick={() => setFiltro("t-shirts")}>
        CAMISETAS
      </button>
      <button className="filter-btn" onClick={() => setFiltro("shirts")}>
        CAMISAS
      </button>
      <button className="filter-btn" onClick={() => setFiltro("jackets")}>
        VESTIDOS
      </button>
    </div>
  </section>
  <div className="row">
  {/* Producto 1 */}
  <div className="col-md-3">
    <div className="producth-card t-shirts">
      <div id="carousel1" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/public/catalogoMujer/img5.webp" className="d-block w-100" alt="Camiseta" />
          </div>
          <div className="carousel-item">
            <img src="/public/catalogoMujer/img5.2.webp" className="d-block w-100" alt="Camiseta" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel1" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel1" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      <div className="product-info">
        <h5>Camiseta Cuello Redondo Estampada Para Mujer</h5>
        <p>Camiseta básica para mujer que dará actitud para el día a día.</p>
        <div className="product-price">$59.900</div><br /><br />
        <a href="/partials/producto1mujer.html" className="btn btn-dark mt-2 w-100">AGREGAR A LA BOLSA</a>
      </div>
    </div>
  </div>

  {/* Producto 2 */}
  <div className="col-md-3">
    <div className="producth-card t-shirts">
      <div id="carousel2" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/public/catalogoMujer/img6.webp" className="d-block w-100" alt="Camiseta" />
          </div>
          <div className="carousel-item">
            <img src="/public/catalogoMujer/img6.2.webp" className="d-block w-100" alt="Camiseta" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel2" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel2" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      <div className="product-info">
        <h5>Camiseta Ajustada Con Escote En Espalda Para Mujer</h5>
        <p>Camiseta para mujer de fit ajustado y escote en la espalda.</p>
        <div className="product-price">$89.900</div><br />
        <a href="/partials/producto2mujer.html" className="btn btn-dark mt-2 w-100">AGREGAR A LA BOLSA</a>
      </div>
    </div>
  </div>

  {/* Producto 3 */}
  <div className="col-md-3">
    <div className="producth-card t-shirts">
      <div id="carousel3" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/public/catalogoMujer/img3.webp" className="d-block w-100" alt="Camiseta" />
          </div>
          <div className="carousel-item">
            <img src="/public/catalogoMujer/img3.2.webp" className="d-block w-100" alt="Camiseta" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel3" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel3" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      <div className="product-info">
        <h5>Camiseta Con Animal Print Para Mujer</h5>
        <p>Una camiseta para mujer con el toque justo de audacia.</p>
        <div className="product-price">$49.900</div><br /><br />
        <a href="/partials/producto3mujer.html" className="btn btn-dark mt-2 w-100">AGREGAR A LA BOLSA</a>
      </div>
    </div>
  </div>

  {/* Producto 4 */}
  <div className="col-md-3">
    <div className="producth-card jackets">
      <div id="carousel4" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/public/catalogoMujer/img1.webp" className="d-block w-100" alt="Vestido" />
          </div>
          <div className="carousel-item">
            <img src="/public/catalogoMujer/img1.2.webp" className="d-block w-100" alt="Vestido" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel4" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel4" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      <div className="product-info">
        <h5>Vestido Largo Efecto Tejido Para Mujer</h5>
        <p>Vestido largo tejido con diseño que combina sofisticación y estilo.</p>
        <div className="product-price">$169.900</div><br /><br />
        <button className="btn btn-dark mt-2 w-100">AGREGAR A LA BOLSA</button>
      </div>
    </div>
  </div>

  {/* Producto 5 */}
  <div className="col-md-3">
    <div className="producth-card jackets">
      <div id="carousel5" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/public/catalogoMujer/img9.webp" className="d-block w-100" alt="Vestido" />
          </div>
          <div className="carousel-item">
            <img src="/public/catalogoMujer/img9.2.webp" className="d-block w-100" alt="Vestido" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel5" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel5" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      <div className="product-info">
        <h5>Vestido Corto Con Escote Para Mujer</h5>
        <p>Diseño corto con escote en frente y escote en espalda con tira para anudar.</p>
        <div className="product-price">$129.900</div><br />
        <button className="btn btn-dark mt-2 w-100">AGREGAR A LA BOLSA</button>
      </div>
    </div>
  </div>

  {/* Producto 6 */}
  <div className="col-md-3">
    <div className="producth-card shirts">
      <div id="carousel6" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/public/catalogoMujer/img2.webp" className="d-block w-100" alt="Camisa" />
          </div>
          <div className="carousel-item">
            <img src="/public/catalogoMujer/img2.2.webp" className="d-block w-100" alt="Camisa" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel6" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel6" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      <div className="product-info">
        <h5>Camisa Efecto Cuero Con Bolsillos En Frente Para Mujer</h5>
        <p>Camisa de efecto cuero para transformar el estilo personal.</p>
        <div className="product-price">$179.900</div><br />
        <button className="btn btn-dark mt-2 w-100">AGREGAR A LA BOLSA</button>
      </div>
    </div>
  </div>

  {/* Producto 7 */}
  <div className="col-md-3">
    <div className="producth-card shirts">
      <div id="carousel7" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/public/catalogoMujer/img7.webp" className="d-block w-100" alt="Camisa" />
          </div>
          <div className="carousel-item">
            <img src="/public/catalogoMujer/img7.2.webp" className="d-block w-100" alt="Camisa" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel7" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel7" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      <div className="product-info">
        <h5>Camisa Clásica Para Mujer</h5>
        <p>Diseño clásico de regular fit con cuello de solapa y manga larga.</p>
        <div className="product-price">$129.900</div><br /><br /><br />
        <button className="btn btn-dark mt-2 w-100">AGREGAR A LA BOLSA</button>
      </div>
    </div>
  </div>

  {/* Producto 8 */}
  <div className="col-md-3">
    <div className="producth-card jeans">
      <div id="carousel8" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/public/catalogoMujer/img4.webp" className="d-block w-100" alt="Jean" />
          </div>
          <div className="carousel-item">
            <img src="/public/catalogoMujer/img4.2.webp" className="d-block w-100" alt="Jean" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel8" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel8" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      <div className="product-info">
        <h5>Jean Wide Leg Tono Claro Con Cinturón Para Mujer</h5>
        <p>Estos jeans que se ajustan suavemente en la cadera.</p>
        <div className="product-price">$199.900</div><br /><br />
        <button className="btn btn-dark mt-2 w-100">AGREGAR A LA BOLSA</button>
      </div>
    </div>
  </div>

  {/* Producto 9 */}
  <div className="col-md-3">
    <div className="producth-card jeans">
      <div id="carousel9" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/public/catalogoMujer/img8.webp" className="d-block w-100" alt="Pantalón" />
          </div>
          <div className="carousel-item">
            <img src="/public/catalogoMujer/img8.2.webp" className="d-block w-100" alt="Pantalón" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel9" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel9" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      <div className="product-info">
        <h5>Pantalón Straight En Dril Pesado Para Mujer</h5>
        <p>Pantalón para mujer de fit recto y tiro alto moderno.</p>
        <div className="product-price">$189.900</div><br /><br />
        <button className="btn btn-dark mt-2 w-100">AGREGAR A LA BOLSA</button>
      </div>
    </div>
  </div>
</div>
  </div>
      <Footer />
    </>
  );
}

export default CatalogoMujer;