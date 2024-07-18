import React from 'react'

const ItemCarrito = ({ nombre, imagen, cantidad, precioTotal }) => {
    return (
        <div className="tarjeta-producto-carrito">
            <div className="card card-compra mb-3">
                <div className="row g-0">
                    <div className="col">
                        <img src={imagen} className="img-fluid" alt={nombre}/>
                    </div>
                    <div className="col">
                        <div className="card-body card-info">
                            <h5 className="card-title">{nombre}</h5>
                            <p className="card-text">Unidades: {cantidad}</p>
                            <p className="card-text">${precioTotal}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCarrito