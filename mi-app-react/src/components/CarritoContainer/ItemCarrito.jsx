import React from 'react'

const ItemCarrito = ({ nombre, imagen, cantidad, precioTotal }) => {
    return (
        <div className="col-lg-6 col-md-12">
            <div className="card card-carrito mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={imagen} className="imagen-producto-carrito img-fluid" alt={nombre} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{nombre}</h5>
                            <p className="card-text">${precioTotal}</p>
                            <p className="card-text"><small className="text-body-secondary">Cantidad: {cantidad}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCarrito