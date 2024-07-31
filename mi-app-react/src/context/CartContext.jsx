import React, { createContext, useEffect, useState } from "react"
import { doc, getDoc, getFirestore } from "firebase/firestore"

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])
    const [contadorItems, setContadorItems] = useState(0)
    const [totalAPagar, setTotalAPagar] = useState(0)
    const [showToast, setShowToast] = useState(false)

    const isInCart = (id) => {
        return carrito.some(producto => producto.id === id)
    }

    const agregarProductosCarrito = async (idBuscado, cantidad) => {
        const db = getFirestore()

        try {
            const docRef = doc(db, "productos", idBuscado)
            const docSnap = await getDoc(docRef)

            if (!docSnap.exists()) {
                console.log("Producto no encontrado")
            } else {
                const producto = { id: docSnap.id, ...docSnap.data() }
                const nuevoProducto = {
                    ...producto,
                    cantidad,
                    precioTotal: producto.precio * cantidad
                }

                if (isInCart(idBuscado)) {
                    setCarrito(carrito.map(item =>
                        item.id === idBuscado ? {
                            ...item,
                            cantidad: item.cantidad + cantidad,
                            precioTotal: item.precioTotal + nuevoProducto.precioTotal
                        } : item
                    ))
                } else {
                    setCarrito([...carrito, nuevoProducto])
                }

                setShowToast(true)
                setTimeout(() => setShowToast(false), 3000)
            }
        } catch (error) {
            console.error("Error al agregar el producto al carrito: ", error)
        }
    }

    const removeItem = (id) => {
        setCarrito(carrito.filter((producto) => producto.id !== id))
    }

    const clearCart = () => {
        setCarrito([])
    }

    useEffect(() => {
        setContadorItems(carrito.length)
        let totalCarrito = carrito.reduce((acum, item) => acum + item.precioTotal, 0)
        setTotalAPagar(totalCarrito)
    }, [carrito])

    return (
        <CartContext.Provider value={{ carrito, isInCart, agregarProductosCarrito, removeItem, clearCart, contadorItems, totalAPagar }}>
            {children}
            {showToast && (
                <div className="toast show position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
                    <div className="toast-header">
                        <img src="/images/favicon.png" className="rounded me-2" style={{width: 40}} alt="logo" />
                        <strong className="me-auto">Universe Factory</strong>
                        <small>Ahora</small>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" onClick={() => setShowToast(false)}></button>
                    </div>
                    <div className="toast-body">
                        ¡Producto agregado al carrito!
                    </div>
                </div>
            )}
        </CartContext.Provider>
    )
}

export default CartContextProvider
