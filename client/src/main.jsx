import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { TransactionProvider } from "./context/TransactionContext";
ReactDOM.render(
  <TransactionProvider>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </TransactionProvider>,
  document.getElementById("root")
);
