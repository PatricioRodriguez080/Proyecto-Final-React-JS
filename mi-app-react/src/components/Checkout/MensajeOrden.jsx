import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const MensajeOrden = () => {
    const { orderId } = useContext(CartContext)

    return (
        <div className="container-custom">
            <div className="alert alert-light" role="alert">
                <h2>Gracias por su compra!!</h2>
                <p>Su orden de compra es: <b>{orderId}</b></p>
            </div>
        </div>
    )
}

export default MensajeOrden