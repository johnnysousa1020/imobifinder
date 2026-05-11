import "../styles/Footer.css"

function Footer(){
    return(
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-col">
                    <h2 className="footer-logo">🏠 ImobiFinder</h2>
                    <p>
                        Encontre o imóvel perfeito para você e sua família.
                        Segurança, confiança e as melhores opções do mercado imobiliário.
                    </p>
        
                </div>

                <div className="footer-col">
                    <h3>Navegação</h3>

                    <a href="#">Home</a>
                    <a href="#">Imóveis</a>
                    <a href="#">Favoritos</a>
                </div>

                <div className="footer-col">
                    <h3>Institucional</h3>

                    <a href="#">Quem somos</a>
                    <a href="#">Como funciona</a>
                    <a href="#">Termos de uso</a>
                    <a href="#">Política de privacidade</a>
                </div>

                <div className="footer-col">
                    <h3>Contato</h3>

                    <p>📞 (11) 99999-9999</p>
                    <p>📧 contato@imobifinder.com.br</p>
                    <p>📍 Av.Paulista, 1000 São Paulo - SP</p>
                </div>

                <div className="footer-col">
                    <h3>Newsletter</h3>
                    <p>
                        Receba novidades e imóveis exclusivos em seu email.
                    </p>

                    <input type="email" 
                    placeholder="Seu melhor email"/>

                    <button>
                        Inscrever-se
                    </button>
                </div>
            </div>

            <div className="footer-bottom">
                2026 ImobiFinder. todos os direitos reservados
            </div>
        </footer>
    )
}

export default Footer;