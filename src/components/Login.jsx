import "../styles/Login.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login({ setUsuario }){
    const[nome, setNome] = useState("")
    const navigate = useNavigate()

    function entrar(){
        if(nome.trim() === "") return

        const usuariaData = {
            nome: nome
        }

        localStorage.setItem(
            "usuario",
            JSON.stringify(usuariaData)
        )

        setUsuario(usuariaData)

        navigate("/")
    }

    return(
        <section className="login-page">
            <div className="login-box">
                <h1>Entrar</h1>

                <input 
                type="text" 
                placeholder="Digite seu nome" 
                value={nome}
                onChange={(e) => setNome(e.target.value)}/>

                <button onClick={entrar}>
                    Entrar
                </button>
            </div>
        </section>
    )
}

export default Login