import { useState } from 'react';

//criando uma tipagem
interface ButtonProps {
  color: string;
  children: string;
}

export function Button(props: ButtonProps, texto: Text) {
  const [counter, setCounter] = useState(1)

  function increment() {
    // imutabilidade counter++;
    setCounter(counter + 1);
  }

  return (
    <button 
      type="button" 
      style={{ backgroundColor: props.color }}
      onClick={increment}
      >
      {props.children} <strong>{ counter }</strong>
      <strong>Teste</strong>
    </button>
  );
}