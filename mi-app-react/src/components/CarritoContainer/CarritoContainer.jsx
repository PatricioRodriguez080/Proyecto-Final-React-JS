import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import ItemCarrito from './ItemCarrito'
import './Carrito.css'
import BotonClear from './BotonClear'

const CarritoContainer = () => {
    const { carrito } = useContext(CartContext)

    return (
        <div className="container-carrito">
            <h2 className='text-center mb-4'>Sus Productos</h2>
            {carrito.map(producto => (
                <ItemCarrito key={producto.id} {...producto} />
            ))}
            <BotonClear/>
        </div>
    )
}

export default CarritoContainer