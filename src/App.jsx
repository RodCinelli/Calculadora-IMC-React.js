import React, { useState } from 'react';
import IMCForm from './components/IMCForm/IMCForm';
import IMCResult from './components/IMCResult/IMCResult';
import styles from './App.module.css';

const App = () => {
  const [imc, setImc] = useState(null);

  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <h1>Calculadora de IMC</h1>
        <IMCForm setImc={setImc} />
        {imc && <IMCResult imc={imc} />}
      </div>
    </div>
  );
};

export default App;
