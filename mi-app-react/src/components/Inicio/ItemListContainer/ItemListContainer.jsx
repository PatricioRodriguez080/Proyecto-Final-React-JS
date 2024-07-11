import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const ItemListContainer = ({ arrayProductos }) => {
  const { urlParam, grupoSeleccionado } = useParams()
  const [productosFiltrados, setProductosFiltrados] = useState([])

  useEffect(() => {
    let productosFiltrados = arrayProductos
    if (urlParam) {
      productosFiltrados = productosFiltrados.filter(producto => producto.categoria === urlParam)
    }

    if (grupoSeleccionado) {
      productosFiltrados = productosFiltrados.filter(producto => producto.grupo === grupoSeleccionado)
    }

    setProductosFiltrados(productosFiltrados)
  }, [urlParam, arrayProductos])

  return (
    <div className="container-item-list-container">
      <div className="row row-item-list-container">
        {productosFiltrados.map(({ id, nombre, grupo, precio, imagen }) => (
          <div key={id} className="col col-item-list-container">
            <Link to={`/item/${id}`}>
              <div className="card" style={{ width: '18rem' }}>
                <img src={imagen} className="card-img-top" alt={grupo} />
                <div className="card-body card-body-nuevos-productos">
                  <p className="card-text">{nombre}</p>
                  <h4 className="mt-1">${precio}</h4>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
