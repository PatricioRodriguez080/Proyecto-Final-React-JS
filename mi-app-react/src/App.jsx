import './App.css'
import React, { useEffect, useState } from 'react'
import CartContextProvider from './context/CartContext'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from './components/Navbar/Navbar'
import ItemListContainer from './components/Inicio/ItemListContainer/ItemListContainer'
import Inicio from './components/Inicio/Inicio'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'
import CarritoContainer from './components/CarritoContainer/CarritoContainer'
import Footer from './components/Footer/Footer'

function App() {

  const arrayGrupos = ["Seventeen", "Le Sserafim", "New Jeans", "NCT", "TWS"]

  return (
    <>
      <CartContextProvider arrayProductos={arrayProductos}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Inicio arrayGrupos={arrayGrupos} />} />
            <Route path='/categoria/:urlParam' element={<ItemListContainer />} />
            <Route path='/item/:urlParam' element={<ItemDetailContainer />} />
            <Route path='/item/nuevo/:urlParam' element={<ItemDetailContainer />} />
            <Route path='/categoria/:urlParam/:grupoSeleccionado' element={<ItemListContainer />} />
            <Route path='/carrito' element={<CarritoContainer/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App