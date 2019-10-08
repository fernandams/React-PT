import React from 'react';
import logo from './logo.svg';
import './App.css';

// let variável = 0; // pra acessar a variável de outro arquivo deve ter na frente o export
//export default variável // pra fazer export como default pra uma variável tem que ser em outra linha

function App() { // se n tivesse o export no final poderia ser aqui: export default function App(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
