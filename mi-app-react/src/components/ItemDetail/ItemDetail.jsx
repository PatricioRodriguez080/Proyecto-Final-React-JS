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
        <div className="row row-item-detail g-0">
          <div className="col-md-5">
            <img src={productoAMostrar.imagen} className="img-fluid rounded-start" alt={productoAMostrar.nombre} />
          </div>
          <div className="col-md-7">
            <div className="card-body card-body-item-detail">
              <h5 className="card-title card-title-item-detail mb-3">{productoAMostrar.nombre}</h5>
              <p className="card-text card-text-item-detail mb-3">${productoAMostrar.precio}</p>
              <div className="container-boton-grup d-flex mb-3">
                <i className="fa-solid fa-minus "></i>
                <p className="mb-0 mx-2">1</p>
                <i className="fa-solid fa-plus"></i>
              </div>
              <div className="alert alert-dark d-flex align-items-center mb-4" role="alert">
                <i className="fa-solid fa-info-circle me-2"></i>
                <div>
                  Scheduled Delivery Date is subject to product and logistics issues and may face delays. If the schedule is changed, customers will be notified individually.
                </div>
              </div>
              <button type="button" className="btn btn-item-detail btn-lg">Large button</button>
            </div>
          </div>
        </div>
        <div className="row row-item-detail-descripcion">
          <h2 className="text-center mb-4">Description</h2>
          <img src={productoAMostrar.descripcion1} className="imagen-item-detail-descripcion" alt={productoAMostrar.nombre} />
        </div>
      </div>
    </div>
  )
}
