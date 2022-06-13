import { useState } from 'react';

const Cadastro = () => {
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [sexo, setSexo] = useState("")
    const [cidade, setCidade] = useState("")

    const handleCadastro = (e) => {
    
        const dados = `Nome: ${nome}. Idade: ${idade}. Sexo: ${sexo}. Cidade: ${cidade}`
        console.log(dados)

        if(nome === "" || idade === 30 || sexo === "" || cidade === ""){
            alert("Preencha todos os campos")
        } else {
            setNome("")
            setIdade("")
            setSexo("")
            setCidade("")
            alert("Cadastro Realizado com sucesso")
        }
    }

    return(
        <form>
            <label>
                Nome:
                <input type="text" placeholder="Digite seu nome" value={nome} onChange={(info) => setNome(info.target.value)}/>
            </label>
            <br/>
            <label>
                Idade:
                <input type="text" placeholder="Digite sua Idade" value={idade} onChange={(e) => { setIdade(e.target.value)}}/>
            </label>
            <br/>
            <label>
                Sexo:
                <input type="text" placeholder="Digite seu sexo" value={sexo} onChange={(e) => { setSexo(e.target.value)}}/>
            </label>
            <br/>
            <label>
                Cidade:
                <input type="text" placeholder="Digite sua cidade" value={cidade} onChange={(e) => { setCidade(e.target.value)}}/>
            </label>
            <br/>
            <input type="button" value="CADASTRAR" onClick={handleCadastro}/>
        </form>
    );
}
export default Cadastro;