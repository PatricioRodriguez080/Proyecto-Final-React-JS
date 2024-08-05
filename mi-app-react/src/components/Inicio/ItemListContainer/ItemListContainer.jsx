import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import SkeletonProductos from '../../Skeletons/SkeletonProductos'
import { getFilteredProducts } from '../../../services/productService'

const ItemListContainer = () => {
  const { urlParam, grupoSeleccionado } = useParams()
  const [productosFiltrados, setProductosFiltrados] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productos = await getFilteredProducts(urlParam, grupoSeleccionado)
        setProductosFiltrados(productos)
        setLoading(false)
      } catch (error) {
        console.error("Error al obtener los datos: ", error)
        setLoading(false)
      }
    }

    fetchData()
  }, [urlParam, grupoSeleccionado])

  return (
    <div className="container-item-list-container container-custom">
      {loading ? <SkeletonProductos /> : <ItemList productos={productosFiltrados} />}
    </div>
  )
}

export default ItemListContainer