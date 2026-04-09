import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import App from "./App";
import "./styles/_global.scss";

const basename = import.meta.env.PROD ? "/portfolio" : "";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>
);