import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const ItemDetail = ({ arrayProductos }) => {
  const { urlParam } = useParams()
  const [productoAMostrar, setproductoAMostrar] = useState([])

  useEffect(() => {
    const productoEncontrado = arrayProductos.find(prod => prod.id == urlParam)
    setproductoAMostrar(productoEncontrado)
  }, [urlParam, arrayProductos])

  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={productoAMostrar.imagen} className="img-fluid rounded-start" alt={productoAMostrar.nombre} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{productoAMostrar.nombre}</h5>
            <p className="card-text">{productoAMostrar.precio}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
