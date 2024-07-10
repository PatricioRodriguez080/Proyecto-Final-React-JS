import React from 'react'

export const ItemListContainer = ({ productosFiltrados, itemAMostrarDetalle}) => {
  return (
    <div className="container-item-list-container">
      <div className="row row-item-list-container">
        {productosFiltrados.map(({ id, nombre, grupo, precio, imagen }) => (
          <div key={id} className="col col-item-list-container">
            <div className="card" style={{ width: '18rem' }} onClick={() => itemAMostrarDetalle(id, nombre, grupo, precio, imagen)}>
              <img src={imagen} className="card-img-top" alt={grupo} />
              <div className="card-body card-body-nuevos-productos">
                <p className="card-text">{nombre}</p>
                <h4 className="mt-1">${precio}</h4>
              </div>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  )
}
