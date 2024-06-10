import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
import { Cart } from "./Pages/Cart/Cart";
import { Product } from "./Pages/Product/Product";
import { Favorite } from "./Pages/Favorite/Favorite";
import { NoMatch } from "./Pages/NoMatch/NoMatch";
import { LoginPage } from "./Pages/LoginPage/LoginPage";

const routes = [
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "product/:productId",
        element: <Product />,
      },
      {
        path: "favorite",
        element: <Favorite />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
];

function App() {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
