import React from "react";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="video-container">
          <video autoPlay muted loop playsInline className="background-video">
            <source src="/img/vdindex.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="img-card">
        <div className="rifle-images">
          <img src="img/card002.jpeg" alt="Moda mujer" />
          <img src="img/card003.jpeg" alt="Moda hombre" />
        </div>
        <div className="card-content">
          <h2>TIENDA ONLINE RIFLE</h2>
          <p>
            Looks de moda para todos los días. Prendas <br />
            versátiles para hombre y para mujer
          </p>
          <a href="/partials/loNuevo.html" className="card-btn">
            <button className="card-btn">VER AHORA</button>
          </a>
        </div>
      </section>

      <section className="promo-hero">
        <div className="promo-inner">
          <h1 className="promo-title">Piezas sencillas, estilo atemporal</h1>
          <div className="promo-discount">
            <div className="small">TODA LA TIENDA DESDE</div>
            <div className="big">20% DCTO</div>
            <div className="small">HASTA</div>
            <div className="big">50% DCTO</div>
          </div>
          <a href="#" className="promo-btn">
            Comprar ahora
          </a>
          <div className="promo-sub">
            15 a 25 de Septiembre 2025 · Online, WhatsApp y tiendas
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-6 col-md-4 mb-4">
              <div className="contenedor-img">
                <img
                  src="img/img9.jpg"
                  className="img-fluid img-uniforme"
                  alt="Imagen 1"
                />
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-4">
              <div className="contenedor-img">
                <img
                  src="img/img6.jpg"
                  className="img-fluid img-uniforme"
                  alt="Imagen 2"
                />
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-4">
              <div className="contenedor-img">
                <img
                  src="img/img10.webp"
                  className="img-fluid img-uniforme"
                  alt="Imagen 3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home
