import React, { createContext, useEffect, useState } from "react"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])
    const [contadorItems, setContadorItems] = useState(0)
    const [totalAPagar, setTotalAPagar] = useState(0)

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
                toast.success('¡Producto agregado al carrito!')
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
            <ToastContainer position="bottom-right"  hideProgressBar autoClose={1000} />
        </CartContext.Provider>
    )
}

export default CartContextProvider
