import { Link, useNavigate, useLocation } from "react-router-dom";

const Aulas = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return(
        <>
            <h1>AULAS</h1>
            <h2>Você veio da {location.state}</h2>
            <Link to="home">Ir para Home</Link>
            <h2>Clique para ver o exercício</h2>
            <button onClick={() => navigate('/estado')}>Estado</button>
        </>
    );
}

export default Aulas
