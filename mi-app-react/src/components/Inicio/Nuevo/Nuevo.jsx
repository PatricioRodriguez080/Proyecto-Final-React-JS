import React from 'react'
import { NuevoProductos } from './NuevoProductos/NuevoProductos'

export const Nuevo = ({filtrarPorGrupo}) => {
  return (
    <>
      <NuevoProductos propGrupo="Seventeen" filtrarPorGrupo={filtrarPorGrupo}/>
      <NuevoProductos propGrupo="Le Sserafim" filtrarPorGrupo={filtrarPorGrupo}/>
      <NuevoProductos propGrupo="Tomorrow X Together" filtrarPorGrupo={filtrarPorGrupo}/>
    </>
  )
}
