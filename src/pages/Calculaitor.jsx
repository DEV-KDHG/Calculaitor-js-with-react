import React, { useState } from 'react';

import styles from "./Calculaitor.module.css"
import Buttones from '../shared/buttones';

function Calculaitor() {
  const [result, setResult] = useState('');
  const [nu, setNu] = useState('');

  const valor = (value) => {
    setNu((update) => update + value);
  };

  const handleCalculaitor = () => {
    try {
      setResult(eval(nu).toString());
    } catch (error) {
      setResult('error');
    }
  };

  const clean = () => {
    setNu('');
  };

  const delet = () => {
    setNu((pre) => pre.slice(0, -1));
  };

  return (
    <>
      <h1>Calculadora</h1>

      <input type="text" placeholder='Este es el resultado' value={nu} readOnly />

      <div className={styles.buttonsContainer}>
        <Buttones onClick={() => valor('1')} name={'1'} />
        <Buttones onClick={() => valor('2')} name={'2'} />
        <Buttones onClick={() => valor('3')} name={'3'} />
        <Buttones onClick={() => valor('4')} name={'4'} />
        <Buttones onClick={() => valor('5')} name={'5'} />
        <Buttones onClick={() => valor('6')} name={'6'} />
        <Buttones onClick={() => valor('7')} name={'7'} />
        <Buttones onClick={() => valor('8')} name={'8'} />
        <Buttones onClick={() => valor('+')} name={'sumar'} />
        <Buttones onClick={() => valor('-')} name={'restar'} />
        <Buttones onClick={() => valor('*')} name={'multiplicar'} />
        <Buttones onClick={() => valor('/')} name={'dividir'} />
        <Buttones onClick={handleCalculaitor} name={'calcular'} />
      </div>

      <button onClick={delet}>Eliminar caracter</button>
      <button onClick={clean}>Limpiar</button>

      {result && <div>Resultado: {result}</div>}
    </>
  );
}

export default Calculaitor;
