import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import ItemCarrito from '../CarritoContainer/ItemCarrito'
import CheckoutForm from './CheckoutForm'
import MensajeOrden from './MensajeOrden'
import './Checkout.css'

const Checkout = () => {
    const { carrito, orderId } = useContext(CartContext)

    return (
        <>
            {orderId ? (
                <MensajeOrden />
            ) : (
                <div className="container-checkout container-custom">
                    <div className="row row-checkout">
                        <div className="col-sm-12 col-md-4 col-checkout">
                            <CheckoutForm />
                        </div>
                        <div className="col-md-8 col-checkout">
                            {carrito.map(producto => (
                                <ItemCarrito key={producto.id} {...producto} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Checkout
