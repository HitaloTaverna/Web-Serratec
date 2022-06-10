import "./App.css"
import Contador from "./components/Contador";
import InputControlado from "./components/InputControlado";
// import Estado from "./components/Estado";
// import TerceiroComponente from "./components/TerceiroComponete";
// import Propriedades from "./components/Propriedades";
const App = () => {
  let nome = "Hítalo"
  return(
    <div className="App">
     <>
  {/*
  <PrimeiroComponente/>
  <SegundoComponente/>  
  <TerceiroComponente/> 
   <Estado /> 
<Propriedades name={nome} idade={31} />
<Contador meuNome={nome}/>*/}
<InputControlado/>
  </> 
    </div>
  );
}

export default App;