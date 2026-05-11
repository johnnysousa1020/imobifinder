import "../styles/Estatisticas.css"

function Estatisticas(){
    return(
        <section className="stats-section">

            <div className="stat-box">
                <div className="stat-icon">🏠</div>
                <h2>500+</h2>
                <p>Imóveis disponíveis</p>
            </div>

            <div className="stat-box">
                <div className="stat-icon">👥</div>
                <h2>200+</h2>
                <p>Clientes satisfeitos</p>
            </div>

            <div className="stat-box">
                <div className="stat-icon">📍</div>
                <h2>15+</h2>
                <p>Cidades atendidas</p>
            </div>

            <div className="stat-box">
                <div className="stat-icon">⭐</div>
                <h2>98%</h2>
                <p>Avaliação positiva</p>
            </div>
        </section>
    )
}

export default Estatisticas;