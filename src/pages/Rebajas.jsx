import React, { useState } from "react";
import productos from "../data/productos.json";
import "./Mujer.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CatalogoRebajas = () => {
  const [filtro, setFiltro] = useState("todo");


  const productosFiltrados = productos.filter((p) => {
    if (filtro === "todo") return true;
    return p.category === filtro;
  });

  return (
    <>
      <Header />

      {/* Imagen rebajas */}
      <div className="contenedor text-center">
        <img
          src="/catalogoRebajas/rebajas.png"
          alt="imagen de rebajas 50%"
          className="imagen"
        />
      </div>

      {/* Filtros */}
      <div className="filter-buttons text-center my-4">
        <button className="filter-btn" onClick={() => setFiltro("todo")}>
          VER TODO
        </button>
        <button className="filter-btn" onClick={() => setFiltro("men")}>
          HOMBRE
        </button>
        <button className="filter-btn" onClick={() => setFiltro("women")}>
          MUJER
        </button>
      </div>

      <div className="row rowr">
        {/* Producto 1 */}
        <div className="col-md-3">
          <div className="producth-card men">
            <div className="product-badge">30%OFF</div>
            <div
              id="carousel1"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/public/catalogoRebajas/img1.webp"
                    className="d-block w-100"
                    alt="Jean Hombre"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/public/catalogoRebajas/img1.2.webp"
                    className="d-block w-100"
                    alt="Jean Hombre"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carousel1"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carousel1"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
            <div className="product-info">
              <h5>Jean Classic Tono Claro Para Hombre</h5>
              <p>
                Estos jeans Classic fit con su silueta relajada y su lavado
                frosted, le dan un aire retro al estilo.
              </p>
              <div className="product-price">
                <span className="old-price">Antes: $149.900</span>
                <span className="new-price">Ahora: $99.900</span>
              </div>
              <a
                href="/partials/producto1rebajas.html"
                className="btn btn-dark mt-2 w-100"
              >
                AGREGAR A LA BOLSA
              </a>
            </div>
          </div>
        </div>

        {/* Producto 2 */}
        <div className="col-md-3">
          <div className="producth-card men">
            <div className="product-badge">20%OFF</div>
            <div
              id="carousel2"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/public/catalogoRebajas/img2.webp"
                    className="d-block w-100"
                    alt="Camiseta Hombre"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/public/catalogoRebajas/img2.2.webp"
                    className="d-block w-100"
                    alt="Camiseta Hombre"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carousel2"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carousel2"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
            <div className="product-info">
              <h5>Camisa Con Estampado En Espalda Para Hombre</h5>
              <p>
                Esta camisa tipo Resort redefine el estilo formal. Confeccionada
                en una mezcla ecológica
              </p>
              <div className="product-price">
                <span className="old-price">Antes: $139.900</span>
                <span className="new-price">Ahora: $111.920</span>
              </div>
              <a
                href="/partials/producto2rebajas.html"
                className="btn btn-dark mt-2 w-100"
              >
                AGREGAR A LA BOLSA
              </a>
            </div>
          </div>
        </div>

        {/* Producto 3 */}
        <div className="col-md-3">
          <div className="producth-card men">
            <div className="product-badge">50%OFF</div>
            <div
              id="carousel3"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/public/catalogoRebajas/img4.webp"
                    className="d-block w-100"
                    alt="Camisa Hombre"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/public/catalogoRebajas/img4.2.webp"
                    className="d-block w-100"
                    alt="Camisa Hombre"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carousel3"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carousel3"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
            <div className="product-info">
              <h5>Polo En Tejido Piqué Para Hombre</h5>
              <p>
                Esta polo comfort fit en tejido piqué para hombre combina
                comodidad detalles que marcan la diferencia.
              </p>
              <div className="product-price">
                <span className="old-price">Antes: $189.900</span>
                <span className="new-price">Ahora: $69.950</span>
              </div>
              <a
                href="/partials/producto3rebajas.html"
                className="btn btn-dark mt-2 w-100"
              >
                AGREGAR A LA BOLSA
              </a>
            </div>
          </div>
        </div>

        {/* Producto 4 */}
        <div className="col-md-3">
          <div className="producth-card women">
            <div className="product-badge">20%OFF</div>
            <div
              id="carousel4"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/public/catalogoRebajas/img3.webp"
                    className="d-block w-100"
                    alt="Jean Mujer"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/public/catalogoRebajas/img3.2.webp"
                    className="d-block w-100"
                    alt="Jean Mujer"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carousel4"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carousel4"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
            <div className="product-info">
              <h5>Jean Wide Leg con pretina cruzada para mujer</h5>
              <p>
                Este jean Wide ajusta suavemente en la cadera y se amplía desde
                la rodilla.
              </p>
              <div className="product-price">
                <span className="old-price">Antes: $189.900</span>
                <span className="new-price">Ahora: $151.920</span>
              </div>
              <br />
              <button className="btn btn-dark mt-2 w-100">
                AGREGAR A LA BOLSA
              </button>
            </div>
          </div>
        </div>

        {/* Producto 5 */}
        <div className="col-md-3">
          <div className="producth-card women">
            <div className="product-badge">20%OFF</div>
            <div
              id="carousel5"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/public/catalogoRebajas/img5.webp"
                    className="d-block w-100"
                    alt="Falda Mujer"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/public/catalogoRebajas/img5.2.webp"
                    className="d-block w-100"
                    alt="Falda Mujer"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carousel5"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carousel5"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
            <div className="product-info">
              <h5>Falda larga en tejido de punto para mujer</h5>
              <p>
                Esta falda larga tipo columna para mujer, confeccionada en
                tejido de punto
              </p>
              <div className="product-price">
                <span className="old-price">Antes: $129.900</span>
                <span className="new-price">Ahora: $103.920</span>
              </div>
              
              <button className="btn btn-dark mt-2 w-100">
                AGREGAR A LA BOLSA
              </button>
            </div>
          </div>
        </div>

        {/* Producto 6 */}
        <div className="col-md-3">
          <div className="producth-card women">
            <div className="product-badge">20%OFF</div>
            <div
              id="carousel6"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/public/catalogoRebajas/img6.webp"
                    className="d-block w-100"
                    alt="Jean Mujer"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/public/catalogoRebajas/img6.2.webp"
                    className="d-block w-100"
                    alt="Jean Mujer"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carousel6"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carousel6"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
            <div className="product-info">
              <h5>Camisa manga larga acampanada con tiras para mujer</h5>
              <p>Camisa con toque delicado en cada detalle.</p>
              <div className="product-price">
                <span className="old-price">Antes: $109.900</span>
                <span className="new-price">Ahora: $87.920</span>
              </div>
              <button className="btn btn-dark mt-2 w-100">
                AGREGAR A LA BOLSA
              </button>
            </div>
          </div>
        </div>

        {/* Producto 7 */}
        <div className="col-md-3">
          <div className="producth-card men">
            <div className="product-badge">20%OFF</div>
            <div
              id="carousel7"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/public/catalogoRebajas/img7.webp"
                    className="d-block w-100"
                    alt="Chaleco Hombre"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/public/catalogoRebajas/img7.2.webp"
                    className="d-block w-100"
                    alt="Chaleco Hombre"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carousel7"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carousel7"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
            <div className="product-info">
              <h5>Chaqueta Bomber para hombre</h5>
              <p>Chaqueta para hombre que combina funcionalidad y estilo.</p>
              <div className="product-price">
                <span className="old-price">Antes: $209.900</span>
                <span className="new-price">Ahora: $167.920</span>
              </div>
              <br />
              <button className="btn btn-dark mt-2 w-100">
                AGREGAR A LA BOLSA
              </button>
            </div>
          </div>
        </div>

        {/* Producto 8 */}
        <div className="col-md-3">
          <div className="producth-card men">
            <div className="product-badge">20%OFF</div>
            <div
              id="carousel8"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/public/catalogoRebajas/img9.webp"
                    className="d-block w-100"
                    alt="Camisa Hombre"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/public/catalogoRebajas/img9.2.webp"
                    className="d-block w-100"
                    alt="Camisa Hombre"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carousel8"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carousel8"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
            <div className="product-info">
              <h5>Polo tejida con tipping en puños y fajón para hombre</h5>
              <p>Polo tejida con tipping en puños y fajón estilo clásico.</p>
              <div className="product-price">
                <span className="old-price">Antes: $179.900</span>
                <span className="new-price">Ahora: $143.920</span>
              </div>
              <br />
              <button className="btn btn-dark mt-2 w-100">
                AGREGAR A LA BOLSA
              </button>
            </div>
          </div>
        </div>

        {/* Producto 9 */}
        <div className="col-md-3">
          <div className="producth-card women">
            <div className="product-badge">20%OFF</div>
            <div
              id="carousel9"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/public/catalogoRebajas/img8.webp"
                    className="d-block w-100"
                    alt="Short Mujer"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/public/catalogoRebajas/img8.2.webp"
                    className="d-block w-100"
                    alt="Short Mujer"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carousel9"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carousel9"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
            <div className="product-info">
              <h5>Short de tono claro con rotos para mujer</h5>
              <p>Short que brindan comodidad y estilo.</p>
              <div className="product-price">
                <span className="old-price">Antes: $159.900</span>
                <span className="new-price">Ahora: $127.920</span>
              </div>
              <button className="btn btn-dark mt-2 w-100">
                AGREGAR A LA BOLSA
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CatalogoRebajas;