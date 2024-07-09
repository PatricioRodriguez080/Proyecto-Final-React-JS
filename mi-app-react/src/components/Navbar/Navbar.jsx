import React from 'react'
import { CartWidget } from './CartWidget'

export const Navbar = ({filtrarAlbums, filtrarMerch}) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid position-relative">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">Universe Factory</a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" onClick={filtrarAlbums}>Albums</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={filtrarMerch}>Merch</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Link3</a>
            </li>
          </ul>
        </div>
        <div className="position-absolute top-0 end-0">
          <CartWidget />
        </div>
      </div>
    </nav>
  )
}
