import './App.css'
import React, { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Carrousel } from './components/Carrousel/Carrousel'
import { ArtistasRecomendados } from './components/ArtistasRecomendados/ArtistasRecomendados'
import { Nuevo } from './components/Nuevo/Nuevo'

function App() {
  const [arrayProductos, setArrayProductos] = useState([])
  const [productosFiltrados, setproductosFiltrados] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/productos.json")
        const data = await response.json()
        setArrayProductos(data)
        setproductosFiltrados(data) // Inicialmente cargo todos los productos porque no tengo filtro //
      } catch (error) {
        console.log("Error al traer productos")
      }
    }
    fetchData()
  }, [])

  const filtrarAlbums = () => {
    const albums = arrayProductos.filter(producto => producto.categoria === "album")
    setproductosFiltrados(albums)
  }

  const filtrarMerch = () => {
    const merch = arrayProductos.filter(producto => producto.categoria === "merch")
    setproductosFiltrados(merch)
  }

  const arrayGrupos = ["Seventeen", "Le Sserafim", "New Jeans", "NCT", "TWS"]

  return (
    <>
      <Navbar filtrarAlbums={filtrarAlbums} filtrarMerch={filtrarMerch}/>
      <Carrousel />
      <ArtistasRecomendados grupos={arrayGrupos} />
      <h2 className="titulo-nuevo">Nuevo</h2>
      <Nuevo />
      <ItemListContainer productosFiltrados={productosFiltrados}/>
    </>
  )
}

export default App
