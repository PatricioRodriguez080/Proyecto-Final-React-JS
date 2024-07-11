import React from 'react'
import { Carrousel } from './Carrousel/Carrousel'
import { ArtistasRecomendados } from './ArtistasRecomendados/ArtistasRecomendados'
import { Nuevo } from './Nuevo/Nuevo'
import { ItemListContainer } from './ItemListContainer/ItemListContainer'

const Inicio = ({ arrayGrupos, arrayProductos }) => {
  return (
    <>
      <Carrousel />
      <ArtistasRecomendados grupos={arrayGrupos} />
      <h2 className="titulo-nuevo">Nuevo</h2>
      <Nuevo/>
      <h2 className="titulo-nuevo">Todos Los Productos</h2>
      <ItemListContainer arrayProductos={arrayProductos}/>
    </>
  )
}

export default Inicio
