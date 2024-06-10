import React, { useState } from 'react';
import styles from './IMCForm.module.css';

const IMCForm = ({ setImc }) => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');

    const calcularIMC = (e) => {
        e.preventDefault();
        const alturaEmMetros = altura / 100;
        const imc = (peso / (alturaEmMetros * alturaEmMetros)).toFixed(2);
        setImc(imc);
    };

    const resetForm = () => {
        setAltura('');
        setPeso('');
        setImc(null);
    };

    return (
        <form className={styles.form} onSubmit={calcularIMC}>
            <div className={styles.inputGroup}>
                <label htmlFor="altura">Altura (cm):</label>
                <input
                    type="number"
                    id="altura"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                    required
                />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="peso">Peso (kg):</label>
                <input
                    type="number"
                    id="peso"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    required
                />
            </div>
            <div className={styles.buttonGroup}>
                <button type="submit">Calcular IMC</button>
                <button type="button" onClick={resetForm}>Resetar IMC</button>
            </div>
        </form>
    );
};

export default IMCForm;
