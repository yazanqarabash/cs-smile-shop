import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import RootLayout from "../RootLayout";
import ProductsPage from "../pages/ProductsPage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ProductsPage />,
      },
      {
        path: "products/category/:category",
        element: <ProductsPage />,
      },
      {
        path: "search/:term",
        element: <ProductsPage />,
      },
      {
        path: "products/:productId",
        element: <ProductPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
