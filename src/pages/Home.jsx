import { useState } from "react";
import Hero from "../components/Hero";
import Destaques from "../components/Destaques";
import imoveis from "../data/imoveis";
import WhyChoose from "../components/WhyChoose";
import BannerCTA from "../components/BannerCTA";
import Estatisticas from "../components/Estatisticas";
import Footer from "../components/Footer";
import "../styles/Home.css"

function Home({ favoritos, toggleFavorito, busca }){

    const [filtros, setFiltros] = useState({
        busca: "",
        tipo: "",
        preco: ""
    })

    const [filtroAtivos, setFiltrosAtivos] = useState({
        busca: "",
        tipo: "",
        preco: ""
    })

    function handleFiltro(nome, valor){
        setFiltros({ ...filtros, [nome]: valor })
    }

    function aplicarFiltros(){
        setFiltrosAtivos(filtros)
    }


    const imoveisFiltrados = imoveis.filter((imovel) => {

        const termo = (busca || "").toLowerCase()

        const matchBusca = 
        imovel.cidade.toLowerCase().includes(termo) ||
        imovel.bairro.toLowerCase().includes(termo) ||
        imovel.tipo.toLowerCase().includes(termo) ||
        imovel.titulo.toLowerCase().includes(termo) 

        const matchTipo = 
        filtroAtivos.tipo === "" || imovel.tipo === filtroAtivos.tipo

        const matchPreco = 
        filtroAtivos.preco === "" || imovel.preco <= Number(filtroAtivos.preco)

        return matchBusca && matchTipo && matchPreco
    })

    console.log(imoveisFiltrados)

    return(
        <>
        <Hero filtros={filtros} handleFiltro={handleFiltro} aplicarFiltros={aplicarFiltros}/>
        {imoveisFiltrados.length === 0 ? (
            <div className="sem-resultados">
                <h2>Nenhum imóvel encontrado</h2>
                <p>Tente buscar por outra cidade, bairro ou tipo</p>
            </div>
        ) : (
        <Destaques imoveis={imoveisFiltrados} favoritos={favoritos} toggleFavorito={toggleFavorito}/>
        )}
        <WhyChoose />
        <BannerCTA />
        <Estatisticas />
        <Footer />
        </>
    )
}

export default Home

/*

imovel.cidade.toLowerCase().includes(filtroAtivos.busca.toLowerCase()) ||
imovel.bairro.toLowerCase().includes(filtroAtivos.busca.toLowerCase()) ||


imovel.cidade.toLowerCase().includes(filtroAtivos.busca.toLowerCase()) ||
        imovel.bairro.toLowerCase().includes(filtroAtivos.busca.toLowerCase())




imovel.cidade.toLowerCase().includes(termoBusca) ||
        imovel.bairro.toLowerCase().includes(termoBusca) ||
        imovel.titulo.toLowerCase().includes(termoBusca) ||
        imovel.tipo.toLowerCase().includes(termoBusca)

*/