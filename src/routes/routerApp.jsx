import Home from "../pages/Home"
import Registro from "../pages/Registro";
import LoNuevo from "../pages/LoNuevo";
import Hombre from "../pages/Hombre";

export const routerApp = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/registro",
    element: <Registro />,
  },
  {
    path: "/loNuevo",
    element: <LoNuevo />,
  },
  {
    path: "/hombre",
    element: <Hombre />,
  },
];



