import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = ({ arrayProductos }) => {
  const { urlParam } = useParams()
  const [productoAMostrar, setProductoAMostrar] = useState(null)

  useEffect(() => {
    const productoEncontrado = arrayProductos.find(prod => prod.id == urlParam)
    setProductoAMostrar(productoEncontrado)
  }, [urlParam, arrayProductos])

  if (!productoAMostrar) {
    return <p>Producto No Encontrado</p>
  }

  return <ItemDetail {...productoAMostrar} />
}

export default ItemDetailContainer