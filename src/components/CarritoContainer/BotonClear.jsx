import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const BotonClear = () => {
    const { clearCart } = useContext(CartContext)

    return (
        <button type="button" className="btn boton-custom-secundario" onClick={clearCart}>Eliminar productos</button>
    )
}

export default BotonClear