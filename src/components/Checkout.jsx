import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
    const { cartItems, totalAmount, removeItem } = useContext(CartContext);

    return (
        <div className="checkout container mt-5">
            <h2>Resumen de tu compra</h2>
            {cartItems.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <>
                    <ul className="list-group mb-4">
                        {cartItems.map((item) => (
                            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <strong>{item.name}</strong> - ${item.price} x {item.quantity}
                                </div>
                                <button className="btn btn-danger btn-sm" onClick={() => removeItem(item.id)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                    <h3>Total a pagar: <span className="text-success">${totalAmount}</span></h3>
                    <button className="btn btn-primary">Finalizar compra</button>
                </>
            )}
        </div>
    );
};

export default Checkout;
