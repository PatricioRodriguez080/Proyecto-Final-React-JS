import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { postOrden } from '../../services/productService'
import { DateTime } from 'luxon';

const CheckoutForm = () => {
    const { carrito, clearCart, totalAPagar, setOrderId } = useContext(CartContext)
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")

    const generarOrden = async () => {
        const orden = {
            Comprador: { Nombre: nombre, Email: email },
            Fecha:  {Dia: DateTime.now().day, Mes: DateTime.now().month, Año: DateTime.now().year, Horario: DateTime.now().toFormat('HH:mm')},
            Items: carrito.map(item => ({ Id: item.id, Nombre: item.nombre, Cantidad: item.cantidad })),
            Total: totalAPagar.toFixed(2)
        }

        const resultado = await postOrden(orden)
        setOrderId(resultado)
        clearCart()
    }

    return (
        <form>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button type="button" className="btn btn-checkout boton-custom-primario" onClick={generarOrden}>Generar orden</button>
        </form>
    )
}

export default CheckoutForm
