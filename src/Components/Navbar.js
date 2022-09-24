import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <div><nav className="navbar navbar-expand-lg bg-light " id='upper'>
    <div className="container upperbar">
      <a className="navbar-brand" href="#">
        Start bootstrap
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Shop
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  All Products
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Popular items
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  New Product
                </a>
              </li>
            </ul>
          </li>

        </ul>
        <div className="navbar-text textCart"><span className='cart'><FontAwesomeIcon icon={faCartShopping}/></span>Cart <span className="badge bg-dark text-white cartbadge ">0</span></div>
        {/* <span className="navbar-text">Navbar text with an inline element</span> */}
      </div>
    </div>
  </nav></div>
  );
}
