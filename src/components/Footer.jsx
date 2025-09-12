import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="hola">
      <footer>
        <div className="container-footer">
          <div className="espacio icons">
            <Link
              to="https://wa.me/573225183789"
              title="WhatsApp"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#ffffff"
                viewBox="0 0 24 24"
              >
                <path d="M20.52 3.478A11.766 11.766 0 0 0 12.045 0C5.656 0 .511 5.146.511 11.535a11.45 11.45 0 0 0 1.59 5.89L.023 24l6.741-2.02a11.58 11.58 0 0 0 5.285 1.317h.005c6.389 0 11.535-5.146 11.535-11.535a11.464 11.464 0 0 0-3.068-7.284zM12.05 21.275h-.004a9.49 9.49 0 0 1-4.832-1.31l-.346-.205-4.002 1.198 1.24-3.898-.224-.369a9.478 9.478 0 0 1-1.454-5.05c0-5.253 4.275-9.528 9.534-9.528a9.45 9.45 0 0 1 6.717 2.787 9.452 9.452 0 0 1 2.792 6.717c0 5.259-4.275 9.533-9.521 9.533zm5.19-7.097c-.284-.142-1.674-.827-1.934-.92-.26-.095-.45-.142-.639.142-.19.284-.732.92-.9 1.111-.166.19-.33.213-.613.071-.284-.142-1.198-.441-2.284-1.407-.843-.75-1.41-1.675-1.577-1.96-.166-.284-.018-.438.124-.58.127-.126.284-.33.426-.495.142-.165.189-.284.284-.47.095-.188.047-.355-.023-.497-.07-.142-.638-1.538-.874-2.107-.23-.554-.466-.479-.639-.488-.165-.007-.355-.009-.545-.009s-.498.071-.76.355c-.26.284-.994.973-.994 2.37 0 1.396 1.017 2.747 1.158 2.938.142.19 2.004 3.055 4.861 4.287.68.293 1.21.468 1.624.598.682.217 1.303.186 1.792.113.547-.082 1.674-.683 1.911-1.343.236-.66.236-1.226.165-1.343-.07-.118-.26-.189-.545-.33z" />
              </svg>
            </Link>
            <Link to="#" title="Carrito" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#ffffff"
                viewBox="0 0 24 24"
              >
                <path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2c1.105 0 2-.896 2-2s-.895-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2c1.105 0 2-.896 2-2s-.895-2-2-2zM7.334 14h9.918c.845 0 1.602-.52 1.878-1.301l2.854-8.042a1 1 0 0 0-.945-1.357H5.21L4.27.958A1 1 0 0 0 3.293 0H1a1 1 0 1 0 0 2h1.577l3.6 10.42A3.003 3.003 0 0 0 7.334 14z" />
              </svg>
            </Link>
            <Link to="/registro" title="Iniciar sesión">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#ffffff"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
              </svg>
            </Link>
            <Link to="#" title="Entregas" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#ffffff"
                viewBox="0 0 24 24"
              >
                <path d="M20 8V4H0v13h2a3 3 0 0 0 6 0h8a3 3 0 0 0 6 0h2v-7l-4-2zm-2 0h-4V6h4v2zM6 19a1 1 0 1 1 .001-2.001A1 1 0 0 1 6 19zm14 0a1 1 0 1 1 .001-2.001A1 1 0 0 1 20 19zm0-7.5V11h-4v-1.5h4z" />
              </svg>
            </Link>
          </div>
          <div className="espacio enlaces">
            <Link to="">Nosotros</Link>
            <Link to="https://api.whatsapp.com/send/?phone=573225183789">
              Servicio al cliente
            </Link>
            <Link to="https://www.magneto365.com/co/empresas/rifle">
              Trabaja con nosotros
            </Link>
            <Link to="">Encuentra nuestra tienda</Link>
          </div>
          <div className="espacio derechos">
            &copy; COMODIN S.A.S., NIT 800.069.933-6, Calle 14 No. 52 A - 372,
            Medellín - Colombia.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
