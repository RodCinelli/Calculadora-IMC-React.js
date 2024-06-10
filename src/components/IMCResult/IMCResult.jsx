import React from 'react';
import styles from './IMCResult.module.css';

const IMCResult = ({ imc }) => {
    const getClassificacao = (imc) => {
        if (imc < 18.5) return 'Abaixo do peso';
        if (imc < 24.9) return 'Peso normal';
        if (imc < 29.9) return 'Sobrepeso';
        return 'Obesidade';
    };

    const classificacao = getClassificacao(imc);

    return (
        <div className={styles.result}>
            <p>Seu IMC é: {imc}</p>
            <p>Classificação: {classificacao}</p>
            <br />
            <table className={styles.imcTable}>
                <thead>
                    <tr>
                        <th>Classificação</th>
                        <th>IMC</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={styles.abaixoPeso}>
                        <td>Abaixo do peso</td>
                        <td>Menos de 18.5</td>
                    </tr>
                    <tr className={styles.pesoNormal}>
                        <td>Peso normal</td>
                        <td>18.5 - 24.9</td>
                    </tr>
                    <tr className={styles.sobrepeso}>
                        <td>Sobrepeso</td>
                        <td>25 - 29.9</td>
                    </tr>
                    <tr className={styles.obesidade}>
                        <td>Obesidade</td>
                        <td>30 ou mais</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default IMCResult;
