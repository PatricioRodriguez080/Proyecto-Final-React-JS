import React, { useEffect, useState } from 'react'
import NuevoProductosList from './NuevoProductosList'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const NuevoProductosContainer = ({ propGrupo }) => {
  const [arrayProductosNuevos, setArrayProductosNuevos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore()
        let itemQuery = query(collection(db, "productos"), where("nuevo", "==", true))
        const snapshot = await getDocs(itemQuery)
        if (snapshot.size === 0) {
          console.log("Sin resultados")
        } else {
          setArrayProductosNuevos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        }
        setLoading(false)
      } catch (error) {
        console.log('Error al traer productos nuevos')
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const productosFiltrados = arrayProductosNuevos.filter((producto) => producto.grupo === propGrupo)

  return <NuevoProductosList productos={productosFiltrados} propGrupo={propGrupo} loading={loading} />
}

export default NuevoProductosContainer