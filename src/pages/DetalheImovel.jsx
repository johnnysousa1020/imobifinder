import { useParams } from "react-router-dom"
import { useState } from "react"
import imoveis from "../data/imoveis"
import CardImovel from "../components/CardImovel"
import  "../styles/DetalheImovel.css"

function DetalheImovel({ favoritos, toggleFavorito }){
    const { id } = useParams()

    const imovel = imoveis.find((item) => item.id === Number(id))

    const [index, setIndex] = useState(0)

    if(!imovel){
        return <p>imóvel não encontrado</p>
    }

    const proximaImagem = () => {
        setIndex((prev) => 
        prev === imovel.imagem.length - 1 ? 0 : prev + 1 
      )
    }

    const imagemAnterior = () => {
        setIndex((prev) => 
        prev === 0 ? imovel.imagem.length - 1 : prev - 1 
      )
    }

    const similares = imoveis.filter(
        (item) => item.tipo === imovel.tipo && item.id !== imovel.id
    )

    return(
        <section className="detalhesimovel">

            <div className="galeria">

            <div className="detalhe-img">
                <img src={imovel.imagem[index]} alt={imovel.titulo} />

                <button className="btn prev" onClick={imagemAnterior}>⇦</button>
                <button className="btn next" onClick={proximaImagem}>⇨</button>
            </div>

            <div className="miniaturas">
                {imovel.imagem.map((img, i) => (
                    <img 
                    key={i}
                    src={img}
                    onClick={() => setIndex(i)}
                    className={index === i ? "activas" : ""} />
                ))}
            </div>

            </div>

            <div className="detalhe-content">

                <div className="topo">
                    <h1>{imovel.titulo}</h1>
                    <h2>R$ {imovel.preco.toLocaleString()}</h2>
                    <p>{imovel.cidade}, {imovel.bairro}</p>
                </div>

                <div className="detalhe-infos">
                    <span>🛏️ {imovel.quartos} quartos</span>
                    <span>🛁 {imovel.banheiros} banheiros</span>
                    <span>🚗 {imovel.vagas} vagas</span>
                    <span>📐 {imovel.area}m²</span>
                </div>

                <div className="descricao">
                    <h2>Descrição</h2>
                    <p>
                        {imovel.descricao}
                    </p>
                </div>

                <button className="btn-contato">
                    Entrar em contato
                </button>
            </div>

            <div className="similares">
                <h3>Imóveis semelhantes</h3>

                <div className="grid">
                    {similares.slice(0, 3).map((item) => (
                        <CardImovel key={item.id} imovel={item} favoritos={favoritos} toggleFavorito={toggleFavorito}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default DetalheImovel;