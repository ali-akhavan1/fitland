import { RouterProvider } from "react-router";
import router from "./router";

import { Toaster } from "sonner";

import "./App.css";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{ classNames: { toast: "font-IRANSansX-Medium" } }}
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
