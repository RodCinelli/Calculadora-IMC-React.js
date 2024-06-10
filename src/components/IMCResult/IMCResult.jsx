import React from 'react';
import styles from './IMCResult.module.css';

const IMCResult = ({ imc }) => {
    const getClassificacao = (imc) => {
        if (imc < 18.5) return 'Abaixo do peso';
        if (imc < 24.9) return 'Peso normal';
        if (imc < 29.9) return 'Sobrepeso';
        return 'Obesidade';
    };

    return (
        <div className={styles.result}>
            <p>Seu IMC é: {imc}</p>
            <p>Classificação: {getClassificacao(imc)}</p>
        </div>
    );
};

export default IMCResult;
