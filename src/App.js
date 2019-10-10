import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./Title";

// let variável = 0; // pra acessar a variável de outro arquivo deve ter na frente o export
//export default variável // pra fazer export como default pra uma variável tem que ser em outra linha


function App() {
  // se n tivesse o export no final poderia ser aqui: export default function App(){
  return (
    <>
      <Title text="Hello World!" msg="Oi vc clicou no título!">  {/* Title recebe o parâmetro usado na função declarada dentro dele, isso se chama: closure*/}
        <b>Texto em negrito. </b> {/* Esse é o atributo children passado como parâmetro (tudo dentro da tag do compomente) */}
      </Title>
      <ul>
        <li>Oi sdds </li>
        <li> OBRIGADA KEVIN S2 VC ARRASA</li>
      </ul>
    </>
  );
}

export default App;
