import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {
  const { urlParam } = useParams()
  const [productoAMostrar, setProductoAMostrar] = useState(null)

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
      } catch (error) {
        console.log('Error al traer producto', error)
      }
    }

    fetchData()
  }, [urlParam])

  return <ItemDetail {...productoAMostrar} />
}

export default ItemDetailContainer