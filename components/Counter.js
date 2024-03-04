'use client'
/*import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Contador</h2>
      <p>El valor actual es: {count}</p>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
};

export default Counter;*/

import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <br></br>
      <p>Contador: {count}</p>
      <br></br>
      <button onClick={increment}
      style={{
        backgroundColor: '#F4D630',
        color: '#33312C',
        borderRadius: '20px',
        padding: '10px 12px',
        cursor: 'pointer',
        marginRight: '25px', // Añade margen derecho para separarlo del otro botón
      }}>Incrementar</button>
      <button onClick={reset}
      style={{
        backgroundColor: '#F4D630',
        color: '#33312C',
        borderRadius: '20px',
        padding: '10px 12px',
        cursor: 'pointer',
        marginRight: '25px', // Añade margen derecho para separarlo del otro botón
      }}>Resetear</button>
    </div>
  );
};

export default Counter;

