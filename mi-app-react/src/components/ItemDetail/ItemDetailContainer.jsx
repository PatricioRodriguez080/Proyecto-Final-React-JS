import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import SkeletonItemDetail from '../Skeletons/SkeletonItemDetail'

const ItemDetailContainer = () => {
  const { urlParam } = useParams()
  const [productoAMostrar, setProductoAMostrar] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore()
        const docRef = doc(db, "productos", urlParam)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setProductoAMostrar({ id: docSnap.id, ...docSnap.data() })
        } else {
          console.log("Sin resultados")
        }
        setLoading(false)

      } catch (error) {
        console.log('Error al traer producto', error)
      }
    }

    fetchData()
  }, [urlParam])

  return (
    <div className="container-item-detail">
      {loading ? <SkeletonItemDetail /> : <ItemDetail {...productoAMostrar} /> }
    </div>
  )
}

export default ItemDetailContainer