import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import ItemCarrito from './ItemCarrito'
import './Carrito.css'
import BotonClear from './BotonClear'
import Total from './Total'

const CarritoContainer = () => {
    const { carrito } = useContext(CartContext)

    return (
        <div className="container-carrito">
            {carrito.length > 0 ? (<h2 className='text-center mb-4'>Sus Productos</h2>) : (<h2 className='text-center mb-4 titulo-no-encontrado'>No se encontraron productos</h2>)}

            {carrito.map(producto => (
                <ItemCarrito key={producto.id} {...producto} />
            ))}

            {carrito.length > 0 && (<BotonClear/>)}
            {carrito.length > 0 && (<Total/>)}
        </div>
    )
}

export default CarritoContainer