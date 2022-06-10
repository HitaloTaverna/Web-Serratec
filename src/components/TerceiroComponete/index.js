import React,{useState, useEffect} from 'react';
import './styles.css';
function TerceiroComponente () {
    const[num1, setNumero1]= useState(0);
    const[num2, setNumero2]= useState(0);
    const[Resultado, setResultado]= useState(0);
    const[operacao, setOperacao]= useState('Somar');

    const Calcular = () =>{
        if(operacao=="Somar")
        return parseFloat(num1) + parseFloat(num2);
    }
    useEffect(()=>{
        setResultado(Calcular());
     }, [num1, num2, operacao]);

    return(
        
        <div className="App">
         <h1>Calculadora React</h1>

         <label>Primeiro Número</label>
            <input type="number" value={num1} onChange={(e) => setNumero1 = e.target.value} />
            <label>Segundo Número</label>
            <input type="number" value={num2} onChange={(e) => setNumero2 = e.target.value}/>
 
         <select onChange={(e) => setOperacao(e.target.value)}>
             <option>Somar</option>
         </select>

         <label>Resultado{Resultado}</label>
        </div>
    );
}
export default TerceiroComponente;