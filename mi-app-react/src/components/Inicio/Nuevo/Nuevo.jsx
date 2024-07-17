import React from 'react'
import NuevoProductosContainer from './NuevoProductosContainer/NuevoProductosContainer'

export const Nuevo = () => {
  return (
    <>
      <NuevoProductosContainer propGrupo="Seventeen" />
      <NuevoProductosContainer propGrupo="Le Sserafim" />
      <NuevoProductosContainer propGrupo="Tomorrow X Together" />
    </>
  )
}

export default Nuevo