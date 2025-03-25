import React, { useState } from 'react';
import './Calculadora.css';

const Calculadora = () => {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState(null);

    const handleSumar = () => {
        const suma = parseFloat(num1) + parseFloat(num2);
        setResultado(suma);
    };

    const handleRestar = () => {
        const resta = parseFloat(num1) - parseFloat(num2);
        setResultado(resta);
    };

    const handleMultiplicar = () => {
        const Multiplicacion = parseFloat(num1) * parseFloat(num2);
        setResultado(Multiplicacion);
    };

    const handleDividir = () => {
        const Division = parseFloat(num1) / parseFloat(num2);
        setResultado(Division);
    };

    const handleLimpiar = () => {
        setNum1('');
        setNum2('');
        setResultado(null);
    };

    return (
        <div className="calculadora">
            <h1>Calculadora</h1>
            <input
                type="number"
                placeholder="Número 1"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <input
                type="number"
                placeholder="Número 2"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <button onClick={handleSumar}>Sumar</button>
            <br></br>
            <button onClick={handleRestar}>restar</button>
            <br></br>
            <button onClick={handleMultiplicar}>Multiplicar</button>
            <br></br>
            <button onClick={handleDividir}>Dividir</button>
            <br></br>
            <button onClick={handleLimpiar}>Limpiar</button>
            {resultado !== null && <p>Resultado: {resultado}</p>}
        </div>
    );
};

export default Calculadora;