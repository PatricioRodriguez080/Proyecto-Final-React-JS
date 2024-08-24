import React from 'react'
import { Link } from 'react-router-dom'
import { CartWidget } from './CartWidget'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid position-relative">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand" to="/">Universe Factory</Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/categoria/album">Albums</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categoria/merch">Merch</Link>
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
