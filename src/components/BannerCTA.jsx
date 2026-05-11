import "../styles/BannerCTA.css"
import { Link } from "react-router-dom"
import banner from "../assets/banner-hero.jpg"

function BannerCTA(){
    return(
        <section className="banner-cta">

            <div className="overlay"></div>

            <img src={banner} alt="Casa moderna" />

            <div className="banner-contents">
                <h2>
                    Encontre o imóvel dos
                    <br />
                    seus sonhos hoje mesmo
                </h2>

                <p>
                    Milhares de opções em diversas regiões
                    esperando por você e sua família.
                </p>

                <Link to="/imoveis" className="btn-banner">
                    Ver imóveis
                </Link>
            </div>
        </section>
    )
}

export default BannerCTA