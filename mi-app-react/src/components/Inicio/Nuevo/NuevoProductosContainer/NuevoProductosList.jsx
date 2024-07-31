import React from 'react'
import NuevoProductoItem from './NuevoProductoItem'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonNuevosProductos from '../../../Skeletons/SkeletonNuevosProductos'

const NuevoProductosList = ({ productos, propGrupo, loading }) => {
  return (
    <div className="container-nuevo container-custom">
      <div className="container-nuevos-productos">
        <div className="container-titulo-nuevos-productos d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img src={`./images/logo${propGrupo}.png`} className="imagen-nuevos-productos" alt={propGrupo} />
            <h3 className="ms-3 mb-0">{propGrupo}</h3>
          </div>
          <Link className="titulo-ver-todo mb-0" to={`/categoria/album/${propGrupo}`}>Ver todo</Link>
        </div>
        <div className="row container-cards-nuevos-productos">
          {loading ? (
            <SkeletonNuevosProductos />
          ) : (
            productos.map((producto) => (
              <NuevoProductoItem key={producto.id} {...producto} />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default NuevoProductosList