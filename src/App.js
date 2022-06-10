import "./App.css"
import Calculadora from "./components/Calculadora";
// import Contador from "./components/Contador";
// import Estado from "./components/Estado";
// import InputControlado from "./components/InputControlado";
//import PrimeiroComponente from "./components/PrimeiroComponete";
// import Propriedades from "./components/Propriedades";
//import SegundoComponente from "./components/SegundoComponete";
const App = () => {
   let nome = "Hítalo"
  return(
    <div className="App">
     <>
     
     <Calculadora/>

  {/*<Contador meuNome={nome}/>
     <Estado /> 
     <InputControlado/>
     <PrimeiroComponente/>
     <Propriedades name={nome} idade={31} />
  <SegundoComponente/> */}
  </> 
    </div>
  );
}

export default App;