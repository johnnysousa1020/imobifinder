import "../styles/CardImovel.css"
import { useNavigate } from "react-router-dom"

function CardImovel({ imovel, favoritos, toggleFavorito }){
    const navigate = useNavigate()

    const isFavorito = favoritos.some((item) => item.id === imovel.id)

    return(
        <div className="cards" onClick={() => navigate(`/imovel/${imovel.id}`)}>

            <div className="card-img">
                <img src={imovel.imagem[0]} alt={imovel.titulo} />

                <span className="badge">{imovel.tipo}</span>

                <span className={`favorito ${isFavorito ? "ativo" : ""}`}
                onClick={() => toggleFavorito(imovel)}>{isFavorito ? "❤️" : "🤍"}</span>
            </div>

            <div className="card-content">

                <h3>{imovel.titulo}</h3>

                <p className="local">
                    {imovel.cidade}, {imovel.bairro}
                </p>

                <div className="infos">
                    <span>🛏️ {imovel.quartos}</span>
                    <span>🛁 {imovel.banheiros}</span>
                    <span>🚗 {imovel.vagas}</span>
                    <span>📐 {imovel.area}m²</span>
                </div>

                <h2 className="preco">
                    R$ {imovel.preco.toLocaleString()}
                </h2>
            </div>
        </div>
    )
}

export default CardImovel