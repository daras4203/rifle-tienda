import Home from "../pages/Home"
import Registro from "../pages/Registro";
import LoNuevo from "../pages/LoNuevo";
import Hombre from "../pages/Hombre";
import Mujer from "../pages/Mujer";
import Rebajas from "../pages/Rebajas"


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
  {
   path: "/mujer",
   element: <Mujer />
  },
  {
    path: "/rebajas",
    element: <Rebajas />
  }
  
];



