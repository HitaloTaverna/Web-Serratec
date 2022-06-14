import { useState, useEffect } from 'react';
import Card from './components/Card'

const ToDoList = () => {
    const [tarefas, setTarefas] = useState([])
    const [novaTarefa, setNovaTarefa] = useState("")

    
    const handleCadastrar = () => {
        if(novaTarefa === "") return;
        setTarefas([...tarefas, novaTarefa]);
        setNovaTarefa("")
    }
    const apagarTarefas = () => {
        setTarefas([])   
    }
    // const apagarTarefas = () => {
    //     const novoArray = tarefas.filter((item, index) => index !== tarefas.length - 1 )
    //     setTarefas(novoArray);
    //} 
        
    useEffect(() => {
        console.log(tarefas);
    },[tarefas])
    
    return(
        <>
            <h1>Lista de Tarefas</h1>
            <input type="text" placeholder='Insira uma tarefa nova' value={novaTarefa} onChange={(e) => setNovaTarefa(e.target.value)} />
            <button onClick={handleCadastrar}>Cadastrar Tarefa</button>
            <button onClick={apagarTarefas}>ApagarTarefas</button>
            
            <Card minhaPropriedade={tarefas}/>

        </>
    );
}

export default ToDoList;