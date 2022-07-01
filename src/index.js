import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { productsFetch } from "./redux/productsSlice";
const root = ReactDOM.createRoot(document.getElementById("root"));
store.dispatch(productsFetch());

root.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>
);
