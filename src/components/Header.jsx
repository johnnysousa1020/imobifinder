import { useState } from "react";
import "../styles/Header.css"
import { Link } from "react-router-dom"
import imoveis from "../data/imoveis";

function Header({ favoritos, busca, setBusca, usuario, logout }){
    const [menuAberto, setMenuAberto] = useState(false)
    const [sugestoes, setSugestoes] = useState([])

    return(
        <>
        <header className="header">

            <div className="logo">
                <span className="logo-icon">🏠</span>
                <Link to="/" className="span">ImobiFinder</Link>
            </div>

            <div className="menu-toggle" onClick={() => setMenuAberto(true)}>☰</div>

            <div className="search-container">
                <input 
                type="text" 
                placeholder="Buscar imóveis, cidade ou bairro..."
                value={busca}
                onChange={(e) => {
                    const valor = e.target.value
                    setBusca(valor)

                    const termo = valor.toLowerCase()

                    if(termo.length < 2){
                        setSugestoes([])
                        return
                    }

                    const lista = [...new Set(imoveis.flatMap((imovel) => [
                        imovel.titulo,
                        imovel.cidade,
                        imovel.bairro,
                        imovel.tipo
                    ]))]

                    const filtradas = lista.filter(item => 
                        item.toLowerCase().includes(termo)
                    )

                    setSugestoes(filtradas.slice(0, 5))
                }}/>
                {sugestoes.length > 0 && (
                    <div className="sugestoes-box">
                        {sugestoes.map((item, index) => (
                            <div
                            key={index}
                            className="sugestao-item"
                            onClick={() => {
                                setBusca(item)
                                setSugestoes([])
                            }}>🔍 {item}</div>
                        ))}
                    </div>
                )}
                <span className="search-icon">🔍</span>
            </div>

            <nav className="nav">
                <Link className="link-a" to="/" href="#">Home</Link>
                <Link to="/imoveis">Imóveis</Link>
                <Link to="/favoritos" className="nav-link favorito-link">
                   Favoritos
                   {favoritos.length > 0 && (
                    <span className="badge-count">{favoritos.length}</span>
                   )}
                </Link>
                {usuario ? (
                    <div className="usuario-area">
                    <span className="usuario-nome">
                      👤  {usuario.nome}
                    </span>

                      <button className="btn-login" onClick={logout}>
                        Sair
                    </button>
                    </div>
                ) : (
                    <Link to="/login" className="btn-login">Entrar</Link>
                )}
            </nav>
        </header>

        <div className={`mobile-menu ${menuAberto ? "ativo" : ""}`}>

            <div className="close" onClick={() => setMenuAberto(false)}>
                X
            </div>

            <Link className="link-a" to="/" href="#">Home</Link>
            <a href="#imoveis">Imóveis</a>
            <Link to="/favoritos" className="nav-link favorito-link">
                Favoritos
                {favoritos.length > 0 && (
                <span className="badge-count">{favoritos.length}</span>
                )}
            </Link>
            {usuario ? (
                <div className="usuario-area">
                <span className="usuario-nome">
                    👤  {usuario.nome}
                </span>

                <button className="btn-login" onClick={logout}>
                    Sair
                </button>
                </div>
            ) : (
                 <Link to="/login" className="btn-login">Entrar</Link>
            )}

        </div>

        {menuAberto && (
            <div
            className="overlay"
            onClick={() => setMenuAberto(false)}></div>
        )}
        </>
    )
}

export default Header;

/*href="#imoveis"*/