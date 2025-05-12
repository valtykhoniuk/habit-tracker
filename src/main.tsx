import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./output.css";
import App from "./App.tsx";
import bgImage from "./assets/image.png";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <App />
    </div>
  </StrictMode>
);
