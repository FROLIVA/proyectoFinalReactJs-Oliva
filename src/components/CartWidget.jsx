import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { cartItems, removeItem } = useContext(CartContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggleCart = () => setIsOpen(!isOpen);

    return (
        <div className="cart-widget">
            <button className="btn btn-outline-dark" onClick={toggleCart}>
                <i className="bi bi-cart"></i>
                <span className="badge bg-secondary">{cartItems.length}</span>
            </button>
            {isOpen && (
                <div className="cart-dropdown">
                    {cartItems.length === 0 ? (
                        <p>No hay productos en el carrito.</p>
                    ) : (
                        <ul className="list-group">
                            {cartItems.map((item) => (
                                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                    <div>
                                        <strong>{item.name}</strong> - ${item.price} x {item.quantity}
                                    </div>
                                    <button className="btn btn-danger btn-sm" onClick={() => removeItem(item.id)}>Eliminar</button>
                                </li>
                            ))}
                        </ul>
                    )}
                    <Link to="/checkout" className="btn btn-primary mt-2">Ir a Checkout</Link>
                </div>
            )}
        </div>
    );
};

export default CartWidget;
