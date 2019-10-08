import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import { App } from './nome-do-arquivo.js' (se App não tiver exportado como default coloca chaves)

//  ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(
//     [<h1> Hello World! </h1>,
//     <ul>
//         <li>Oi sdds </li>
//     </ul>],
//     document.getElementById('root'));

ReactDOM.render(
  <>
    <h1> Hello World! OI SDDDSSSS </h1>
    <ul>
      <li>Oi sdds </li>
      <li> OBRIGADA KEVIN S2 VC ARRASA</li>
    </ul>
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
