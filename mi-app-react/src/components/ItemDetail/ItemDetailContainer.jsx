import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import SkeletonItemDetail from '../Skeletons/SkeletonItemDetail'
import { getProductDetail } from '../../services/productService'

const ItemDetailContainer = () => {
  const { urlParam } = useParams()
  const [productoAMostrar, setProductoAMostrar] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const producto = await getProductDetail(urlParam)
        setProductoAMostrar(producto)
        setLoading(false)
      } catch (error) {
        console.log('Error al traer producto', error)
      }
    }

    fetchData()
  }, [urlParam])

  return (
    <div className="container-item-detail container-custom">
      {loading ? <SkeletonItemDetail /> : <ItemDetail {...productoAMostrar} />}
    </div>
  )
}

export default ItemDetailContainer