import React from 'react'
import NuevoProductoItem from './NuevoProductoItem'
import { Link } from 'react-router-dom'

const NuevoProductosList = ({ productos, propGrupo }) => {
  return (
    <div className="container-nuevo">
      <div className="container-nuevos-productos">
        <div className="container-titulo-nuevos-productos d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img src={`./images/logo${propGrupo}.png`} className="imagen-nuevos-productos" alt={propGrupo} />
            <h3 className="ms-3 mb-0">{propGrupo}</h3>
          </div>
          <Link className="titulo-ver-todo mb-0" to={`/categoria/album/${propGrupo}`}>Ver todo</Link>
        </div>
        <div className="row container-cards-nuevos-productos">
          {productos.map((producto) => (
            <NuevoProductoItem key={producto.id} {...producto} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default NuevoProductosList