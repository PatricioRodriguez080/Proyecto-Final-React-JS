import React, { useEffect, useState } from 'react'
import NuevoProductosList from './NuevoProductosList'

const NuevoProductosContainer = ({ propGrupo }) => {
  const [arrayProductosNuevos, setArrayProductosNuevos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/productosNuevos.json')
        const data = await response.json()
        setArrayProductosNuevos(data)
      } catch (error) {
        console.log('Error al traer productos nuevos')
      }
    }
    fetchData()
  }, [])

  const productosFiltrados = arrayProductosNuevos.filter((producto) => producto.grupo === propGrupo)

  return <NuevoProductosList productos={productosFiltrados} propGrupo={propGrupo} />
}

export default NuevoProductosContainer
