import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";



const Home = () => {
return (
  <>
    <Header />

    {/* Video Hero */}
    <section className="hero">
      <div className="video-container">
        <video autoPlay muted loop playsInline className="background-video">
          <source src="/vdindex.mp4" type="video/mp4" />
        </video>
      </div>
    </section>

    {/* Card */}
    <section className="img-card">
      <div className="rifle-images">
        <img src="/card002.jpeg" alt="Moda mujer" />
        <img src="/card003.jpeg" alt="Moda hombre" />
      </div>
      <div className="card-content">
        <h2>TIENDA ONLINE RIFLE</h2>
        <p>
          Looks de moda para todos los días. Prendas <br />
          versátiles para hombre y para mujer
        </p>
        <Link to="#" className="card-btn">
          <button className="card-btn">VER AHORA</button>
        </Link>
      </div>
    </section>

    {/* Promo */}
    <section className="promo-hero">
      <div className="promo-inner">
        <h1 className="promo-title">Piezas sencillas, estilo atemporal</h1>
        <div className="promo-discount">
          <div className="small">TODA LA TIENDA DESDE</div>
          <div className="big">20% DCTO</div>
          <div className="small">HASTA</div>
          <div className="big">50% DCTO</div>
        </div>
        <Link to="#" className="promo-btn">
          Comprar ahora
        </Link>
        <div className="promo-sub">
          15 a 25 de Septiembre 2025 · Online, WhatsApp y tiendas
        </div>
      </div>
    </section>

    {/* Galería */}
    <section className="galeria">
      <div className="contenedor-img">
        <img
          src="/img9.jpg"
          className="img-fluid img-uniforme"
          alt="Imagen 1"
        />
      </div>
      <div className="contenedor-img">
        <img
          src="/img6.jpg"
          className="img-fluid img-uniforme"
          alt="Imagen 2"
        />
      </div>
      <div className="contenedor-img">
        <img
          src="/img10.webp"
          className="img-fluid img-uniforme"
          alt="Imagen 3"
        />
      </div>
    </section>

    <Footer />
  </>
);
}
export default Home
