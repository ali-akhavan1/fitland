import { createBrowserRouter } from "react-router";

import AuthLayout from "./layouts/AuthLayout";
import AppLayout from "./layouts/AppLayout";
import ProductsPage from "./pages/public/Products/ProductsPage";
import HomePage from "./pages/public/Home/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import FAQPage from "./pages/public/FAQ/FAQPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, handle: { hasTopbar: true }, element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "faq", element: <FAQPage /> },
      { path: "cart", element: <div>سبد خرید</div> },
      { path: "dashboard", handle: { isFooterShow: false } },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

export default router;
