import './App.css'
import React, { useEffect, useState } from 'react'
import CartContextProvider from './context/CartContext'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from './components/Navbar/Navbar'
import ItemListContainer from './components/Inicio/ItemListContainer/ItemListContainer'
import Inicio from './components/Inicio/Inicio'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'
import CarritoContainer from './components/CarritoContainer/CarritoContainer'

function App() {
  const [arrayProductos, setArrayProductos] = useState([])
  const [arrayProductosNuevos, setArrayProductosNuevos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/productos.json")
        const data = await response.json()
        setArrayProductos(data)
      } catch (error) {
        console.log("Error al traer productos")
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/productosNuevos.json")
        const data = await response.json()
        setArrayProductosNuevos(data)
      } catch (error) {
        console.log("Error al traer productos nuevos")
      }
    }
    fetchData()
  }, [])

  const arrayGrupos = ["Seventeen", "Le Sserafim", "New Jeans", "NCT", "TWS"]

  return (
    <>
      <CartContextProvider arrayProductos={arrayProductos}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Inicio arrayGrupos={arrayGrupos} arrayProductos={arrayProductos} />} />
            <Route path='/categoria/:urlParam' element={<ItemListContainer arrayProductos={arrayProductos} />} />
            <Route path='/item/:urlParam' element={<ItemDetailContainer arrayProductos={arrayProductos} />} />
            <Route path='/item/nuevo/:urlParam' element={<ItemDetailContainer arrayProductos={arrayProductosNuevos} />} />
            <Route path='/categoria/:urlParam/:grupoSeleccionado' element={<ItemListContainer arrayProductos={arrayProductos} />} />
            <Route path='/carrito' element={<CarritoContainer/>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App