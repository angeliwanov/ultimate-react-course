import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QuizProvidor } from "./QuizContext";
// import BankAccount from "./BankAccount";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuizProvidor>
      <App />
    </QuizProvidor>
    {/* <BankAccount /> */}
  </React.StrictMode>
);
