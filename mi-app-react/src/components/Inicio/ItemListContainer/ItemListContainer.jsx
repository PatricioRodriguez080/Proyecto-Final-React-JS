import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { collection, getFirestore, where, query, getDocs } from "firebase/firestore"
import SkeletonProductos from "../../Skeletons/SkeletonProductos"

const ItemListContainer = () => {
  const { urlParam, grupoSeleccionado } = useParams()
  const [productosFiltrados, setProductosFiltrados] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore()
        let itemQuery = collection(db, "productos")

        if (urlParam) {
          itemQuery = query(itemQuery, where("categoria", "==", urlParam))
        }

        if (grupoSeleccionado) {
          itemQuery = query(itemQuery, where("grupo", "==", grupoSeleccionado))
        }

        const snapshot = await getDocs(itemQuery)

        if (snapshot.size === 0) {
          console.log("Sin resultados")
        } else {
          setProductosFiltrados(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        }
        setLoading(false)

      } catch (error) {
        console.error("Error al obtener los datos: ", error)
      }
    }

    fetchData()
  }, [urlParam, grupoSeleccionado])

  return (
    <div className="container-item-list-container">
      {loading ? <SkeletonProductos /> : <ItemList productos={productosFiltrados} />}
    </div>
  )
}

export default ItemListContainer