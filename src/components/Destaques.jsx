import "../styles/Destaques.css"
import CardImovel from "./CardImovel"
import { Link } from "react-router-dom"

function Destaques({ imoveis, favoritos, toggleFavorito }){
    const destaque = imoveis[0]

    return(
        <section className="destaques" id="imoveis">

            <div className="destaques-lista">
                <h2>Imóveis em destaques</h2>

                <div className="grid">
                    {imoveis.map((imovel) =>   (
                        <CardImovel 
                        key={imovel.id} 
                        imovel={imovel} 
                        favoritos={favoritos} 
                        toggleFavorito={toggleFavorito}/>
                    ))}
                </div>

                <div className="ver-mais-container">
                <button className="btn-ver-mais">
                    Ver mais imóveis ⇨
                </button>
                </div>
            </div>

            <div className="destaques-sidebar">

                <div className="destaque-infos">
                    <div className="iconee">🏠</div>

                    <h3>Encontre seu novo lar com o ImobiFinder</h3>

                    <p>
                        São milhares de imóveis selecionados para você e sua família.
                    </p>

                    <Link to="/imoveis" className="btn-outline">Ver todos os imóveis</Link>
                </div>

                <div className="destaque-beneficios">
                    <h4>Por que escolher o ImobiFinder?</h4>

                    <ul>
                        <li>✔️ Imóveis verificados</li>
                        <li>✔️ Melhores preços</li>
                        <li>✔️ Atendimento especializado</li>
                    </ul>
                </div>

                <div className="destaque-premium">
                    <h4>Imóvel em destaque</h4>

                    <img src={destaque.imagem[0]} alt={destaque.titulo} />

                    <p>{destaque.titulo}</p>

                    <span className="precoss">R$ {destaque.preco.toLocaleString()}</span>

                    <Link to={`/imovel/${destaque.id}`} className="btn-destaque">Ver imóvel</Link>
                </div>

                <div className="destaque-extra">
                    <h4>Dica do dia</h4>
                    <p>
                        Imóveis com boa iluminação natural tendem a valorizar mais com o tempo
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Destaques