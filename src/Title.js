import React from "react";

// function Title(props) { // ao declarar uma função pra ser usada como componente o nome dela deve começar com maiúscula
//   return (
//     <h1 className="titulo" onClick={olá} onMouseEnter={olá}>
//       {props.text}
//     </h1>
//   );
// }

function Title({ text, children, msg}) {
  function olá() {
    alert(msg);
  }

  return (
    <>
      <h1 className="titulo" onClick={olá}>
        {text}
      </h1>
      {children}
    </>
  );
}

export default Title;
