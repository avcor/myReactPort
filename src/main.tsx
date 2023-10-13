import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewP from "./component/NewP.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/myReactPort" element={<App />} />
        <Route
          path="/myReactPort/hey"
          element={
            <NewP
              project={"HOME"}
              onClose={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
