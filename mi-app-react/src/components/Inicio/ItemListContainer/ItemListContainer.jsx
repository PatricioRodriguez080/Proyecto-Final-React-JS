import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

const ItemListContainer = ({ arrayProductos }) => {
  const { urlParam, grupoSeleccionado } = useParams()
  const [productosFiltrados, setProductosFiltrados] = useState([])

  useEffect(() => {
    let productosFiltrados = arrayProductos
    if (urlParam) {
      productosFiltrados = productosFiltrados.filter(producto => producto.categoria === urlParam)
    }

    if (grupoSeleccionado) {
      productosFiltrados = productosFiltrados.filter(producto => producto.grupo === grupoSeleccionado)
    }

    setProductosFiltrados(productosFiltrados)
  }, [urlParam, grupoSeleccionado, arrayProductos])

  return (
    <div className="container-item-list-container">
      <ItemList productos={productosFiltrados} />
    </div>
  )
}

export default ItemListContainer