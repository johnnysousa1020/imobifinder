import "../styles/WhyChoose.css"

function WhyChoose(){
    return(
        <section className="why-section">
            <p className="why-subtitle">
                POR QUE ESCOLHER A IMOBIFINDER?
            </p>

            <h2>
                A melhor experiência para encontrar seu imóvel
            </h2>

            <div className="why-grid">

                <div className="why-card">
                    <span>🛡️</span>

                    <h3>Imóveis Verificados</h3>

                    <p>
                        Todos os imóveis passam por uma análise completa
                        para garantir segurança e confiança.
                    </p>
                </div>

                <div className="why-card">
                    <span>🎧</span>

                    <h3>Atendimento Especializado</h3>

                    <p>
                        Nossa equipe está pronta para ajudar você
                        a encontrar o imóvel ideal.
                    </p>
                </div>

                <div className="why-card">
                    <span>🔒</span>

                    <h3>Negociação Segura</h3>

                    <p>
                        Processo seguro e transparente em todas as estapas
                        da negociação.
                    </p>
                </div>

                <div className="why-card">
                    <span>🏠</span>

                    <h3>Suporte Completo</h3>

                    <p>
                        Acompanhamento do início ao fim para você
                        ter tranquilidade.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default WhyChoose;