import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemCarrito = ({ id, nombre, imagen, cantidad, precioTotal }) => {
    const { removeItem } = useContext(CartContext)

    return (
        <div className="tarjeta-producto-carrito">
            <div className="card card-compra mb-3">
                <div className="row g-0">
                    <div className="col">
                        <img src={imagen} className="img-fluid img-producto-carrito" alt={nombre}/>
                    </div>
                    <div className="col">
                        <div className="card-body card-info">
                            <h5 className="card-title">{nombre}</h5>
                            <p className="card-text">Unidades: {cantidad}</p>
                            <p className="card-text">${precioTotal.toFixed(2)}</p>
                        </div>
                        <button type="button" className="btn btn-item-detail btn-eliminar btn-lg" onClick={() => removeItem(id)}>Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCarrito