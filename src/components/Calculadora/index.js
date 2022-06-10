import React,{useState, useEffect} from 'react';
import './styles.css';
const Calculadora = ()=> {
    const[num1, setNumero1]= useState('10');
    const[num2, setNumero2]= useState('6');
    const[Resultado, setResultado]= useState(0);
    const[operacao, setOperacao]= useState('Soma');

    const Calcular = () =>{
        return [parseInt(num1) + parseInt(num2)] **2
    }
    useState(()=>{
        setResultado(Calcular());
     }, [num1, num2, operacao]);

    return(
        
        <div className="App">
         <h1>Calculadora React</h1>

         <label>Primeiro Número</label>
            <input type="number" value={num1} onChange={(e) => setNumero1 =e.target.value } />
            <label>Segundo Número</label>
            <input type="number" value={num2} onChange={(e) => setNumero2 = e.target.value}/>
 
         <select onChange={(e) => Calcular(e.target.value)}>
             <option value={"Soma"}>Calculadora</option>
           
         </select>
         <label>Resultado: {Resultado}</label>
        
        </div>
    );
}
export default Calculadora;