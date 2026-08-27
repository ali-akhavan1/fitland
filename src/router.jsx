import { createBrowserRouter } from "react-router";

import AuthLayout from "./layouts/AuthLayout";
import AppLayout from "./layouts/AppLayout";
import ProductsPage from "./pages/public/Products/ProductsPage";
import HomePage from "./pages/public/Home/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import FAQPage from "./pages/public/FAQ/FAQPage";
import ProductDetailsPage from "./pages/public/Products/ProductDetailsPage";
import LoginForm from "./features/auth/components/LoginForm";
import RegisterForm from "./features/auth/components/RegisterForm";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, handle: { hasTopbar: true }, element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "product/:productID", element: <ProductDetailsPage /> },
      { path: "faq", element: <FAQPage /> },
      { path: "cart", element: <div>سبد خرید</div> },
      { path: "dashboard", handle: { isFooterShow: false } },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      { index: true, element: <LoginForm /> },
      { path: "login", element: <LoginForm />, handle: { stage: "otp" } },
      { path: "register", element: <RegisterForm />, handle: { stage: "register" } },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

export default router;
