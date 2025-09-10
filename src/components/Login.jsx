import "./Login.css";

function Login() {
  return (
    <div className="form-container">
      <h1 className="h1">LA MODA, DEMANDA ESTAR ACTUALIZADO!</h1>
      <div>
        <button className="btn-selection" id="mostrar-inicio">
          {" "}
          Iniciar sesión
        </button>
        <button className="btn-selection" id="mostrar-inicio">
          Registrarse
        </button>
      </div>
      <div id="iniciar-sesion">
        <form className="iniciar-sesion" id="switch" autoComplete="off">
          <label htmlFor="email-switch">Correo</label>
          <input type="email" id="email-switch" name="email-switch" />
          <div className="password-container">
            <label htmlFor="password-switch">Contraseña</label>
            <div>
              <input
                type="password"
                id="password-switch"
                name="password-switch"
                className="show-password"
              />
              <img
                src="../src/img/login/close.png"
                alt="ver contraseña"
                className="icon-password icon-password-switch"
                id="icon-password-switch"
              />
            </div>
          </div>
          <div className="forgot-password">
            <a href="">Olvidaste tu contraseña?</a>
          </div>
          <input
            type="submit"
            id="iniciar-sesion"
            name="iniciar-sesion"
            className="btn-enviar"
            value={"Iniciar sesión"}
          />
        </form>
      </div>
      <div className="registrarse" id="registrarse">
        <form className="form" id="form-login" autoComplete="off">
          <label htmlFor="name-login">Nombre</label>
          <input type="text" id="name-login" name="name-login" />
          <label htmlFor="email-login">Correo</label>
          <input type="email" name="email-login" id="email-login" />
          <div className="password-container">
            <label htmlFor="password-login">Contraseña</label>
            <div id="input-wrapper">
              <input
                type="password"
                id="password-login"
                name="password-login"
                className="show-password"
              />
              <img
                src="../src/img/login/close.png"
                alt="ver contraseña"
                className="icon-password"
                id="password-login"
              />
            </div>
          </div>
          <div className="password-container">
            <label htmlFor="confirm-password-login">Cnfirmar contraseña</label>
            <div id="input-wrapper">
              <input
                type="password"
                id="confirm-password-login"
                name="confirm-password-login"
                className="show-password"
              />
              <img
                src="../src/img/login/close.png"
                alt="ver contraseña"
                className="icon-password"
                id="confirm-password-login"
              />
            </div>
          </div>
          <input
            type="sunmit"
            name="registrarse"
            id="btn-registrarse"
            className="btn-enviar"
            value={"Registrarse"}
          />
        </form>
      </div>
    </div>
  );
}
export default Login;
