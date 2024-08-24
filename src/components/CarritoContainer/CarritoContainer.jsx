import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import ItemCarrito from './ItemCarrito'
import './Carrito.css'
import BotonClear from './BotonClear'
import Total from './Total'
import BotonCheckout from './BotonCheckout'

const CarritoContainer = () => {
    const { carrito } = useContext(CartContext)

    return (
        <div className="container-carrito container-custom">
            {carrito.length > 0 ? (
                <>
                    <h2 className='text-center mb-4 pt-4'>Sus Productos</h2>
                    {carrito.map(producto => (
                        <ItemCarrito key={producto.id} {...producto} />
                    ))}
                    <div className="container-boton-carrito my-4">
                        <BotonCheckout />
                        <BotonClear />
                    </div>
                    <Total />
                </>
            ) : (<h2 className='text-center mb-4 titulo-no-encontrado'>No se encontraron productos</h2>)}
        </div>
    )
}

export default CarritoContainer