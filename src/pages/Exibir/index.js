import { useLocation } from "react-router-dom";
import Contador from "../../components/Contador";
import ToDoList from "../../components/toDoList";
import Estado from "../../components/Estado";

const Exibir = () => {
    const location = useLocation();
    //Lógica que vai comparar a string do location.state e vai retornar o componente correspondente

    const escolheComponente = () => {
         if(location.state === "todo"){
             return <ToDoList />
         } else if(location.state === "contador"){
             return <Contador />
         } else if(location.state === "estado"){
             return <Estado />
        }
        
	/*
		switch(location.state){
            	case "todo": 
                return <ToDoList />
                // break; Adicionar break quando não tiver return
            case "contador":
                return <Contador />
            case "estado":
                return <Estado />
            default: //caso não seja nenhum dos anteriores
                return;
        	}
	*/
    }

    return(
        <>
            <h1>Exibir</h1>
            {escolheComponente()}
        </>
    )
}

export default Exibir