import React, { useEffect, useState } from 'react'
import "./ItemDetail.css"
import { useParams } from 'react-router-dom'

export const ItemDetail = ({ arrayProductos }) => {
  const { urlParam } = useParams()
  const [productoAMostrar, setproductoAMostrar] = useState([])

  useEffect(() => {
    const productoEncontrado = arrayProductos.find(prod => prod.id == urlParam)
    setproductoAMostrar(productoEncontrado)
  }, [urlParam, arrayProductos])

  if (!productoAMostrar) {
    return <p>Producto No Encontrado</p>
  }

  return (
    <div className="container-item-detail">
      <div className="card card-item-detail mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={productoAMostrar.imagen} className="img-fluid rounded-start" alt={productoAMostrar.nombre} />
          </div>
          <div className="col-md-8">
            <div className="card-body card-body-item-detail">
              <h5 className="card-title card-title-item-detail">{productoAMostrar.nombre}</h5>
              <p className="card-text card-text-item-detail">${productoAMostrar.precio}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <img src={productoAMostrar.descripcion1} alt={productoAMostrar.nombre} />
        </div>
      </div>
    </div>
  )
}
