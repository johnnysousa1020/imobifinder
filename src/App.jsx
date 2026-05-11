import { HashRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Favorito from './components/Favorito'
import Home from './pages/Home'
import DetalheImovel from './pages/DetalheImovel'
import Login from './components/Login'
import Imoveis from './pages/Imoveis'
import './App.css'

function App() {
  const [favoritos, setFavoritos] = useState(() => {
    const dados = localStorage.getItem("favoritos")
    return dados ? JSON.parse(dados) : []
  })

  const [busca, setBusca] = useState("")



  const [usuario, setUsuario] = useState(() => {
    return localStorage.getItem("usuario") || ""
  })

  useEffect(() => {
    localStorage.setItem("usuario", usuario)
  }, [usuario])




  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos))
  }, [favoritos])

    function toggleFavorito(imovel){
        const existe = favoritos.find((item) => item.id === imovel.id)

        if(existe){
            setFavoritos(favoritos.filter((item) => item.id !== imovel.id))
        }else{
            setFavoritos([...favoritos, imovel])
        }
    }

    function logout(){
      localStorage.removeItem("usuario")
      setUsuario(null)
    }


  return (
    <HashRouter>
      <Header favoritos={favoritos} busca={busca} setBusca={setBusca} usuario={usuario} logout={logout}/>

      <Routes>
        <Route path='/' element={<Home favoritos={favoritos} toggleFavorito={toggleFavorito} busca={busca}/>}/>

      <Route path='/favoritos' element={<Favorito favoritos={favoritos} toggleFavorito={toggleFavorito}/>}/>
      <Route path='/imovel/:id' element={<DetalheImovel favoritos={favoritos} toggleFavorito={toggleFavorito}/>}/>
      <Route path='/imoveis' element={<Imoveis favoritos={favoritos} toggleFavorito={toggleFavorito}/>}/>
      <Route path='/login' element={<Login setUsuario={setUsuario}/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
