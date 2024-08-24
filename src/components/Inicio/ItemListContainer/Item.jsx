import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, grupo, precio, imagen }) => {
  return (
    <div className="col col-item-list-container">
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
  )
}

export default Item