import centro from "../assets/centro.jpg"
import casapiscina from "../assets/casa-piscina.jpg"
import aconchegante from "../assets/apartamento.jpg"
import condominio from "../assets/fechado.jpg"
import vista from "../assets/vista.jpg"
import studio from "../assets/studio.jpg"
import luxo from "../assets/luxo.jpg"
import compacto from "../assets/copacto.jpg"
import mooderno from "../assets/moderna.jpg"

// centro completo

import centroquarto from "../assets/centro-quarto.jpg"
import centrobanheiro from "../assets/centro-banheiro.jpg"

// casa com piscina completo

import casasala from "../assets/casa-piscina-sala.jpg"
import casacozinha from "../assets/casa-piscina-cozinha.jpg"
import casaquarto from "../assets/casa-piscina-quarto.jpg"
import casabanheiro from "../assets/casa-piscina-banheiro.jpg"

// apartmanto aconchegante completo

import apartamentoquarto from "../assets/apartamento-quarto.jpg"
import apartamentobanheiro from "../assets/apartamento-ban.jpg"

// condomini fechado completo

import condominiosala from "../assets/fechado-sala.jpg"
import condominiocozinha from "../assets/fechado-cozinha.jpg"
import condominioquarto from "../assets/fechado-quarto.jpg"
import condominiobanheiro from "../assets/fechado-banheiro.jpg"

// apartamento com vista completo

import vistaquarto from "../assets/vista-quarto.jpg"
import vistabanheiro from "../assets/vista-banheiro.jpg"

// studio completo

import studiobanheiro from "../assets/studio-banheiro.jpg"

// casa de luxo

import luxosala from "../assets/luxo-sala.jpg"
import luxocozinha from "../assets/luxo-cozinha.jpg"
import luxoquarto from "../assets/luxo-quarto.jpg"
import luxobanheiro from "../assets/luxo-banheiro-dois.jpg"

// casa moderna completo

import modernosala from "../assets/moderno-sala.jpg"
import modernoscozinha from "../assets/moderno-cozinha.jpg"
import modernoquarto from "../assets/moderno-quarto.jpg"
import modernobanheiro from "../assets/moderno-banheiro.jpg"

const imoveis = [
    {
        id: 1,
        titulo: "Apartamento moderno no centro",
        preco: 350000,
        cidade: "São Paulo",
        bairro: "Centro",
        quartos: 2,
        banheiros: 1,
        vagas: 1,
        area: 65,
        tipo: "Apartamento",
        imagem: [
            centro,
            centroquarto,
            centrobanheiro
        ],
        descricao: "Apartamento moderno no coração da cidade, com fácil acesso a transporte, comércio e lazer. Ideal para quem busca praticidade no dia a dia."
    },
    {
        id: 2,
        titulo: "Casa com piscina e área gourmet",
        preco: 1250000,
        cidade: "Rio de janeiro",
        bairro: "Bairro da Tijuca",
        quartos: 4,
        banheiros: 3,
        vagas: 2,
        area: 250,
        tipo: "Casa",
        imagem: [
            casapiscina,
            casasala,
            casacozinha,
            casaquarto,
            casabanheiro
        ],
        descricao: "Casa espaçosa com piscina e área gourmet completa, perfeita para momentos em família e lazer. Localizada em uma das melhores regiões do Rio."
    },
    {
        id: 3,
        titulo: "Apartamento aconchegante",
        preco: 220000,
        cidade: "Belo Horizonte",
        bairro: "savassi",
        quartos: 1,
        banheiros: 1,
        vagas: 1,
        area: 45,
        tipo: "Apartamento",
        imagem: [
            aconchegante,
            apartamentoquarto,
            apartamentobanheiro
        ],
        descricao: "Ambiente aconchegante e bem distribuído, ideal para quem busca confortoo em uma das regiões mais valorizadas da cidade"
    },
    {
        id: 4,
        titulo: "Casa em condomínio fechado",
        preco: 680000,
        cidade: "Curitiba",
        bairro: "Água Verde",
        quartos: 3,
        banheiros: 2,
        vagas: 2,
        area: 150,
        tipo: "Casa",
        imagem: [
            condominio,
            condominiosala,
            condominiocozinha,
            condominioquarto,
            condominiobanheiro
        ],
        descricao: "Casa segura em condomínio fechado, com excelente estrutura e tranquilidade para toda a família"
    },
    {
        id: 5,
        titulo: "Apartamento com vista para o mar",
        preco: 780000,
        cidade: "Salvador",
        bairro: "Ondina",
        quartos: 3,
        banheiros: 2,
        vagas: 2,
        area: 120,
        tipo: "Apartamento",
        imagem: [
            vista,
            vistaquarto,
            vistabanheiro
        ],
        descricao: "Apartamento com vista incrível para o mar, proporcionando qualidade de vida e bem-estar todos os dias."
    },
    {
        id: 6,
        titulo: "Studio moderno e planejado",
        preco: 310000,
        cidade: "São Paulo",
        bairro: "Vila Madalena",
        quartos: 1,
        banheiros: 1,
        vagas: 0,
        area: 30,
        tipo: "Apartamento",
        imagem: [
            studio,
            studiobanheiro
        ],
        descricao: "Studio compacto e moderno, totalmente planejado para otimizar espaço e funcionalidade."
    },
    {
        id: 7,
        titulo: "Casa luxuosa com jardim",
        preco: 2100000,
        cidade: "Brasília",
        bairro: "Lago Sul",
        quartos: 5,
        banheiros: 4,
        vagas: 3,
        area: 400,
        tipo: "Casa",
        imagem: [
            luxo,
            luxosala,
            luxocozinha,
            luxoquarto,
            luxobanheiro
        ],
        descricao: "Casa de alto padrão com amplo jardim e acabamento de luxo, perfeita para quem busca exclusividade"
    },
    {
        id: 8,
        titulo: "Apartamento compacto e funcional",
        preco: 260000,
        cidade: "Porto Alegre",
        bairro: "Centro",
        quartos: 1,
        banheiros: 1,
        vagas: 1,
        area: 50,
        tipo: "Apartamento",
        imagem: [
            compacto,
            apartamentoquarto,
            apartamentobanheiro
        ],
        descricao: "Apartamento funcional e bem localizado, ideal para quem busca praticidade e custo-benefício"
    },
    {
        id: 9,
        titulo: "Casa moderna com garagem ampla",
        preco: 890000,
        cidade: "Florianópolis",
        bairro: "Campeche",
        quartos: 3,
        banheiros: 2,
        vagas: 2,
        area: 180,
        tipo: "Casa",
        imagem: [
            mooderno,
            modernosala,
            modernoscozinha,
            modernoquarto,
            modernobanheiro
        ],
        descricao: "Casa moderna com garagem espaçosa e ótimo acabamento, localizada em bairro tranquilo e valorizado"
    },
]

export default imoveis