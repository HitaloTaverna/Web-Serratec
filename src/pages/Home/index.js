import { Link } from 'react-router-dom'
const Home = () => {
    return(
        <>
            <h1>Home</h1>
            <Link to='login'>Ir para Login</Link>
            <br />
            <Link to='aulas' state={"HOME"}>Ir para Aulas</Link>
            <br/>
            <Link to='exercicios'>Ir para Exercicios</Link>
        </>
    );
}

export default Home;