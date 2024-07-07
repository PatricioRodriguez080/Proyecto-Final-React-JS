import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Carrousel } from './components/Carrousel/Carrousel'
import { ArtistasRecomendados } from './components/ArtistasRecomendados/ArtistasRecomendados'
import { Nuevo } from './components/Nuevo/Nuevo'

function App() {

  const arrayGrupos = ["Seventeen", "Le Sserafim", "New Jeans", "NCT", "TWS"]

  return (
    <>
      <Navbar/>
      <Carrousel/>
      <ItemListContainer propTextoEjemplo={"No se encontraron productos"}/>
      <ArtistasRecomendados grupos={arrayGrupos}/>
      <h2 className="titulo-nuevo">Nuevo</h2>
      <Nuevo/>
    </>
  )
}

export default App
