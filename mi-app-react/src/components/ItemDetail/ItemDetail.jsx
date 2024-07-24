import React, { useContext } from 'react'
import './ItemDetail.css'
import { CartContext } from '../../context/CartContext'
import { useCount } from '../../hooks/useCount'

const ItemDetail = ({ id, nombre, precio, imagen, descripcion1 }) => {
  const { agregarProductosCarrito } = useContext(CartContext)
  const { count, incrementar, decrementar } = useCount(1,1,10)

  return (
    <div className="container-item-detail">
      <div className="card card-item-detail mb-3">
        <div className="row row-item-detail g-0">
          <div className="col-md-5">
            <img src={imagen} className="img-fluid rounded-start" alt={nombre} />
          </div>
          <div className="col-md-7">
            <div className="card-body card-body-item-detail">
              <h5 className="card-title card-title-item-detail mb-3">{nombre}</h5>
              <p className="card-text card-text-item-detail mb-3">${precio}</p>
              <div className="container-boton-grup d-flex mb-3">
                <i className="fa-solid fa-minus " onClick={decrementar}></i>
                <p className="mb-0 mx-2">{count}</p>
                <i className="fa-solid fa-plus" onClick={incrementar}></i>
              </div>
              <div className="alert alert-dark d-flex align-items-center mb-4" role="alert">
                <i className="fa-solid fa-info-circle me-2"></i>
                <div>
                  Scheduled Delivery Date is subject to product and logistics issues and may face delays. If the schedule is changed, customers will be notified individually.
                </div>
              </div>
              <button type="button" className="btn btn-item-detail btn-lg" onClick={() => agregarProductosCarrito(id, count)}>Agregar al carrito</button>
            </div>
          </div>
        </div>
        <div className="row row-item-detail-descripcion">
          <h2 className="text-center mb-4">Description</h2>
          <img src={descripcion1} className="imagen-item-detail-descripcion" alt={nombre} />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
