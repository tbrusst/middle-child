import React from "react";
import { render } from "react-dom";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import BottomButton from "./components/BottomButton";
import "./main.scss";
import "./fonts.scss";
import ItemList from "./items/ItemList";

render(
  <>
    {/* <ItemList /> */}
    <Nav />
    {/* <Cart />
    <BottomButton /> */}
  </>,

  document.getElementById("root")
);
