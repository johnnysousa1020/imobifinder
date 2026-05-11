import "../styles/Favorito.css"
import CardImovel from "./CardImovel"
import { Link } from "react-router-dom"

function Favorito({ favoritos, toggleFavorito }){
    return(
        <section className="favoritos-page">

            <h2>Meus Favoritos</h2>

            <Link to="/" className="btn-voltar">
              Voltar para o inicio
            </Link>

            {favoritos.length === 0 ? (
                <p className="vazio">Você ainda não adicionou favoritos.</p>
            ) : (
                <div className="grids">
                    {favoritos.map((imovel) => (
                        <CardImovel 
                        key={imovel.id}
                        imovel={imovel}
                        favoritos={favoritos}
                        toggleFavorito={toggleFavorito}/>
                    ))}
                </div>
            )}
        </section>
    )
}

export default Favorito