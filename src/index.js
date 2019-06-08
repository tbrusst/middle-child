import React from "react";
import { render } from "react-dom";
import Nav from "./components/Nav";
import "./main.scss";
import "./fonts.scss";

render(
  <>
    <Nav />
  </>,

  document.getElementById("root")
);
