import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import ItemCarrito from './ItemCarrito'
import './Carrito.css'

const CarritoContainer = () => {
    const { carrito } = useContext(CartContext)

    return (
        <div className="container-carrito">
            {carrito.map(producto => (
                <ItemCarrito key={producto.id} {...producto} />
            ))}
        </div>
    )
}

export default CarritoContainer