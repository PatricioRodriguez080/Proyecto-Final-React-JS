import { getFirestore, collection, query, where, getDocs, getDoc, addDoc, doc } from "firebase/firestore"
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyBq1RREqOoHHv_L7sgv9faxuR6zuWf349k",
  authDomain: "cusrsoreactjs.firebaseapp.com",
  projectId: "cusrsoreactjs",
  storageBucket: "cusrsoreactjs.appspot.com",
  messagingSenderId: "180993639399",
  appId: "1:180993639399:web:724082dbf9953e761cb342"
}

initializeApp(firebaseConfig)

const db = getFirestore()

export const getFilteredProducts = async (urlParam, grupoSeleccionado) => {
  try {
    let itemQuery = collection(db, "productos")

    if (urlParam) {
      itemQuery = query(itemQuery, where("categoria", "==", urlParam))
    }

    if (grupoSeleccionado) {
      itemQuery = query(itemQuery, where("grupo", "==", grupoSeleccionado))
    }

    const snapshot = await getDocs(itemQuery)

    if (snapshot.size === 0) {
      console.log("Sin resultados")
    }

    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))

  } catch (error) {
    console.error("Error al obtener los datos: ", error)
  }
}


export const getProductDetail = async (productId) => {
  try {
    const docRef = doc(db, "productos", productId)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() }
    } else {
      console.log("Sin resultados")
    }
  } catch (error) {
    console.error("Error al obtener los datos: ", error)
  }
}

export const postOrden = async (orden) => {
  const db = getFirestore()
  const ordenesCollection = collection(db, "ordenes")

  try {
    const response = await addDoc(ordenesCollection, orden)
    return response.id
  } catch (error) {
    console.error("Error al añadir el documento: ", error)
  }
}