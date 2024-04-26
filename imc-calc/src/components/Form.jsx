import React, { useState } from "react";

function Form(){
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [imc, setImc] = useState(null);
    const [classificacao, setClassificacao] = useState('');

    const calculaIMC = () =>{
        const alturaEmMetro = altura / 100;
        const imcCalculado = peso / (Math.pow(alturaEmMetro,2));
        setImc(imcCalculado.toFixed(2));
        determinaClassificacao(imcCalculado);
    }

    const determinaClassificacao = (imc) => {
        if (imc < 18.5) {
            setClassificacao('Abaixo do peso');
        } else if (imc >= 18.5 && imc < 24.9) {
            setClassificacao('Peso normal');
        } else if (imc >= 25 && imc < 29.9) {
            setClassificacao('Acima do peso');
        } else {
            setClassificacao('Obesidade');
        }
    }

    return(
        <div className="form">
            <label htmlFor="altura">Altura - cm</label>
            <input id="altura" type="number" onBlur={e => setAltura(e.target.value)} />
            <label htmlFor="peso">Peso - kg</label>
            <input id="peso" type="number" onBlur={e => setPeso(e.target.value)} />
            <button onClick={calculaIMC}>Calcular</button>
            {imc && (<p>IMC: {imc} - {classificacao}</p>)}
        </div>
    )
}

export default Form;

