import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const BotonClear = () => {
    const { clearCart, carrito } = useContext(CartContext)

    return (
        <div className="container-boton-carrito">
            <button type="button" className="btn btn-item-detail btn-lg my-4" onClick={clearCart}>Eliminar todos los productos</button>
        </div>
    )
}

export default BotonClear