//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDOM from "react-dom";

const name = "David L. Haines";
const dateobj = new Date();
const dateObject = dateobj.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {dateObject}</p>
  </div>,
  document.getElementById("root")
);
