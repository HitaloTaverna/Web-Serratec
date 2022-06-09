import "./styles.css"
const SegundoComponente = ()=> {
    return(
        <div className="container">
        <form>
            <label>
                Email:
                <input type = "text" placeholder= "digite seu email:" />
            </label>
            <br/>
            <label>
                Senha:
                <input type ="text" placeholder= "digite sua senha:"/>
            </label>
            <br/>
            <input type ="submit" value = "Entrar"  />
        </form>
        </div>
    );
}

export default SegundoComponente;