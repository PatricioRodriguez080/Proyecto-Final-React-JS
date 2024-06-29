import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Carrousel } from './components/Carrousel/Carrousel'
import { ArtistasRecomendados } from './components/ArtistasRecomendados/ArtistasRecomendados'

function App() {
  return (
    <>
      <Navbar/>
      <Carrousel/>
      <ItemListContainer propTextoEjemplo={"No se encontraron productos"}/>
      <ArtistasRecomendados/>
    </>
  )
}

export default App
