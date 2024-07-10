import './App.css'
import React, { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Carrousel } from './components/Carrousel/Carrousel'
import { ArtistasRecomendados } from './components/ArtistasRecomendados/ArtistasRecomendados'
import { Nuevo } from './components/Nuevo/Nuevo'
import { ItemDetail } from './components/ItemDetail/ItemDetail'

function App() {
  const [arrayProductos, setArrayProductos] = useState([])
  const [productosFiltrados, setproductosFiltrados] = useState([])
  const [productoDetail, setProductoDetail] = useState(null)

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

  const filtrarPorGrupo = (grupoBuscado) => {
    const productosPorGrupo = arrayProductos.filter(producto => producto.grupo === grupoBuscado)
    setproductosFiltrados(productosPorGrupo)
  }

  const itemAMostrarDetalle = (idDelProducto, nombreDelProducto, grupoDelProducto, precioDelProducto, imagenDelProducto) => {
    setProductoDetail({
      id: idDelProducto,
      nombre: nombreDelProducto,
      grupo: grupoDelProducto,
      precio: precioDelProducto,
      imagen: imagenDelProducto
    })
    console.log(productoDetail);
  }

  const arrayGrupos = ["Seventeen", "Le Sserafim", "New Jeans", "NCT", "TWS"]

  return (
    <>
      <Navbar filtrarAlbums={filtrarAlbums} filtrarMerch={filtrarMerch}/>
      <Carrousel />
      <ArtistasRecomendados grupos={arrayGrupos} />
      <h2 className="titulo-nuevo">Nuevo</h2>
      <Nuevo filtrarPorGrupo={filtrarPorGrupo}/>
      <h2 className="titulo-nuevo">Todos Los Productos</h2>
      <ItemListContainer productosFiltrados={productosFiltrados} itemAMostrarDetalle={itemAMostrarDetalle}/>
      <ItemDetail productoAMostrarDetail={productoDetail}/>
    </>
  )
}

export default App
