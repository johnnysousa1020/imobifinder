import "../styles/Imoveis.css"
import imoveis from "../data/imoveis"
import CardImovel from "../components/CardImovel"

function Imoveis({ favoritos, toggleFavorito }){
    return(
        <section className="pagina-imoveis">

            <div className="topo-imoveis">
                <h1>Todos os imóveis</h1>
                <p>
                    Explore todos os imóveis disponiveis no Imobifinder
                </p>
            </div>

            <div className="grid-imoveis">
                {imoveis.map((imovel) => (
                    <CardImovel 
                    key={imovel.id}
                    imovel={imovel}
                    favoritos={favoritos}
                    toggleFavorito={toggleFavorito}/>
                ))}
            </div>
        </section>
    )
}

export default Imoveis;