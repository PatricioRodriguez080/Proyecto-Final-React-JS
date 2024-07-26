import React, { useEffect, useState } from 'react'
import NuevoProductosList from './NuevoProductosList'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

const NuevoProductosContainer = ({ propGrupo }) => {
  const [arrayProductosNuevos, setArrayProductosNuevos] = useState([])

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
