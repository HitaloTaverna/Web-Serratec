import { Link } from "react-router-dom";

const Exercicios = () => {
    return(
        <>  
            <h1>Lista de Exercícios. Clique em um para vê-lo!</h1>
            <Link to={'/exibir'} state={"todo"}>To Do List</Link>
            <br />
            <Link to={'/exibir'} state={"contador"}>Contador</Link>
            <br />
            <Link to={'/exibir'} state={"estado"}>Estado</Link>
        </>
    );
}

export default Exercicios;