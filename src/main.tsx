import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline } from "tlp-ui-kit";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
);
