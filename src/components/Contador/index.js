import React,{useState} from 'react';

const Contador = ({meuNome}) => {
    const [contador, setContador] = useState(0)
    
    const incrementaContador = () =>{
        setContador(contador+1)
        // setContador((prevState) => prevState+1)
    }
    return(
        <>
        <h1>Olá, {meuNome}!</h1>
        <h1>Contador de Cliques: {contador}</h1>
        <button onClick={incrementaContador}>CLIQUE AQUI!!!</button>

        </>
    );
}

export default Contador;