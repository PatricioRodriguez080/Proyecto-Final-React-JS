import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection, getFirestore } from 'firebase/firestore'

const CheckoutForm = () => {
    const { carrito, totalAPagar, clearCart, orderId, setOrderId } = useContext(CartContext)
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")

    const generarOrden = async () => {
        const orden = {
            Comprador: { Nombre: nombre, Email: email },
            Items: carrito.map(item => ({ Id: item.id, Nombre: item.nombre, Cantidad: item.cantidad })),
            Total: totalAPagar.toFixed(2)
        }

        const db = getFirestore()
        const ordenesCollection = collection(db, "ordenes")

        try {
            const response = await addDoc(ordenesCollection, orden)
            setOrderId(response.id)
            clearCart()
        } catch (error) {
            console.error("Error al añadir el documento: ", error)
        }
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
            <button type="button" className="btn btn-primary" onClick={generarOrden}>Generar orden</button>
        </form>
    )
}

export default CheckoutForm
