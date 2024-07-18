import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CarritoContainer = () => {
    const { carrito } = useContext(CartContext)
    console.log(carrito);
    return (
        <div className="container">
            {carrito.map((producto) => (
                <div key={producto.id}>
                    <h2>{producto.id}</h2>
                    <h2>{producto.cantidad}</h2>
                    <h2>{producto.precioTotal}</h2>
                </div>
            ))}
        </div>
    )
}

export default CarritoContainer