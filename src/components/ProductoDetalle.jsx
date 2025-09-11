import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductoDetalle = () => {
  const { id } = useParams(); // Obtiene el id desde la URL
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch("/productos.json") // carga tu JSON
      .then((res) => res.json())
      .then((data) => {
        const encontrado = data.find((p) => p.id === parseInt(id));
        setProducto(encontrado);
      });
  }, [id]);

  if (!producto) return <p className="text-center mt-5">Cargando producto...</p>;

  return (
    <div className="producto-detalle container my-5">
      <div className="row">
        {/* Galería de imágenes */}
        <div className="col-md-6 galeria-img">
          <div className="row g-3">
            {producto.gallery.map((img, i) => (
              <div className="col-6" key={i}>
                <img src={img} alt={producto.title} className="img-fluid rounded" />
              </div>
            ))}
          </div>
        </div>

        {/* Información del producto */}
        <div className="col-md-6 product-info">
          <h2>{producto.title}</h2>
          <p>{producto.desc}</p>
          <h4 className="product-price">{producto.price}</h4>

          <form action="https://wa.me/573225183789" method="get" target="_blank">
            <div className="mb-3">
              <label htmlFor="talla" className="form-label">Talla:</label>
              <select name="text" id="talla" className="form-select">
                <option value="Quiero el producto en talla 28">28</option>
                <option value="Quiero el producto en talla 30">30</option>
                <option value="Quiero el producto en talla 32">32</option>
                <option value="Quiero el producto en talla 34">34</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="cantidad" className="form-label">Cantidad:</label>
              <input
                type="number"
                name="text"
                className="form-control"
                min="1"
                defaultValue="1"
              />
            </div>

            <button type="submit" className="btn btn-success w-100">
              Finalizar compra por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalle;
