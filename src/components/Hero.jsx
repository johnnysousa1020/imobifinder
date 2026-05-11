import "../styles/Hero.css"

function Hero({ filtros, handleFiltro, aplicarFiltros }){
    return(
        <section className="hero">

            <div className="hero-text">
                <h1>Encontre o imóvel perfeito para você</h1>
                <p>Milhares de imóveis selecionados nas melhores regiões</p>
            </div>

            <div className="hero-filtros">

                <div className="filtro">
                    <label>Onde?</label>
                    <input 
                    type="text" 
                    placeholder="Cidade, bairro ou região" 
                    value={filtros.busca} onChange={(e) => handleFiltro("busca", e.target.value)}/>
                </div>

                <div className="filtro">
                    <label>Tipo</label>
                    <select value={filtros.tipo} onChange={(e) => handleFiltro("tipo", e.target.value)}>
                        <option value="">Todos os tipos</option>
                        <option value="Casa">Casa</option>
                        <option value="Apartamento">Apartamento</option>
                    </select>
                </div>

                <div className="filtro">
                    <label>Negócio</label>
                    <select>
                        <option>Comprar ou Alugar</option>
                        <option>Comprar</option>
                        <option>Alugar</option>
                    </select>
                </div>

                <div className="filtro">
                    <label>Preço até</label>
                    <select value={filtros.preco} onChange={(e) => handleFiltro("preco", e.target.value)}>
                        <option value="">R$ 4.000.000+</option>
                        <option value="1000000">R$ 1.000.000+</option>
                        <option value="500000">R$ 500.000</option>
                        <option value="300000">R$ 300.000</option>
                    </select>
                </div>

                <button className="btn-buscar" onClick={aplicarFiltros}>
                    Buscar Imóveis
                </button>
            </div>
        </section>
    )
}

export default Hero;