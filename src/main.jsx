import { render } from "preact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// importação de paginas
import { App } from "./app.jsx";
import Error from "./pages/Error/Error.jsx";
import Home from "./pages/Home/Home.jsx";
import Perfil from "./pages/Perfil/Perfil.jsx";
import Estoque from "./pages/Estoque/Estoque.jsx";
import Contato from "./pages/Contato/Contato.jsx";
import Links from "./pages/Links/Links.jsx";
import Sobre from "./pages/Sobre/Sobre.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/perfil/:id",
        element: <Perfil />,
      },
      {
        path: "/stock",
        element: <Estoque />,
      },
      {
        path: "/stock/perfil/:id",
        element: <Perfil />,
      },
      {
        path: "/contact",
        element: <Contato />,
      },
      {
        path: "/links",
        element: <Links />,
      },
      {
        path: "/about",
        element: <Sobre />,
      },
    ],
  },
]);

render(<RouterProvider router={router} />, document.getElementById("app"));
