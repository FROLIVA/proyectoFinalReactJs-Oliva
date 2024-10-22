import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand text-light" to="/">FR SHOES</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/category/nike">NIKE</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/category/adidas">ADIDAS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/category/puma">PUMA</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/category/newbalance">NEW BALANCE</Link>
                        </li>
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;
