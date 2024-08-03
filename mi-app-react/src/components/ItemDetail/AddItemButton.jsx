import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const AddItemButton = ({ id, count }) => {
    const { agregarProductosCarrito } = useContext(CartContext)

    return (
        <button type="button" className="btn boton-custom-primario btn-lg" onClick={() => agregarProductosCarrito(id, count)}>Agregar al carrito</button>
    )
}

export default AddItemButton