import React from "react";
import ReactDOM from "react-dom";

import "./styles/styles.scss";
import { JournalApp } from "./JournalApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <JournalApp />
  </BrowserRouter>,
  document.getElementById("root")
);
